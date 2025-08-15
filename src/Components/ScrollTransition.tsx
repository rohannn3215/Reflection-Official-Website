
import React, { type ReactNode, useLayoutEffect, useRef, useCallback, useEffect } from "react";
import Lenis from "lenis";

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => (
  <div
    className={`scroll-stack-card relative w-full h-[80vh] my-8 p-0 rounded-[40px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.1)] ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
    }}
  >
    {children}
  </div>
);
ScrollStackItem.displayName = 'ScrollStackItem';

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  onStackComplete?: () => void;
  onAboutUsCardInView?: () => void;
  aboutUsCardZoomed?: boolean;
}

const ScrollTransition: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  onStackComplete,
  onAboutUsCardInView,
  aboutUsCardZoomed = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map<number, any>());
  const isUpdatingRef = useRef(false);
  // Cache card positions for performance
  const cardPositions = useRef<number[]>([]);


  // Helper to cache card positions
  const cacheCardPositions = useCallback(() => {
    if (!cardsRef.current.length) return;
    cardPositions.current = cardsRef.current.map(card => {
      const rect = card.getBoundingClientRect();
      return rect.top + window.pageYOffset;
    });
  }, []);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const updateCardTransforms = useCallback(() => {
    const container = containerRef.current;
    if (!container || !cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerRect = container.getBoundingClientRect();
    const containerTop = containerRect.top + scrollTop;
    const containerHeight = window.innerHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      // Use cached card position
      const cardTop = cardPositions.current[i] ?? (card.getBoundingClientRect().top + scrollTop);
      const triggerStart = cardTop - stackPositionPx - (itemStackDistance * i);
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - (itemStackDistance * i);
      // const pinEnd = containerTop + container.offsetHeight - containerHeight / 2;
      const pinEnd = containerTop + container.offsetHeight - containerHeight ;


      

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + (i * itemScale);
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = cardPositions.current[j] ?? (cardsRef.current[j].getBoundingClientRect().top + scrollTop);
          const jTriggerStart = jCardTop - stackPositionPx - (itemStackDistance * j);
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }
        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + (itemStackDistance * i);
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + (itemStackDistance * i);
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged = !lastTransform || 
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';
        card.style.transform = transform;
        card.style.filter = filter;
        lastTransformsRef.current.set(i, newTransform);
      }

      // About Us card logic (last card)
      if (i === cardsRef.current.length - 1) {
        // Check if About Us card is fully in view
        const cardRect = card.getBoundingClientRect();
        const inView = cardRect.top >= 0 && cardRect.bottom <= window.innerHeight;
        if (inView && onAboutUsCardInView && !aboutUsCardZoomed) {
          onAboutUsCardInView();
        }
        }

      if (i === cardsRef.current.length - 1) {
        // Only fire onStackComplete when the last card is fully out of view (scrolled past pinEnd)
        const isPastEnd = scrollTop > pinEnd;
        if (isPastEnd && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isPastEnd && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    onAboutUsCardInView,
    aboutUsCardZoomed,
    calculateProgress,
    parsePercentage,
  ]);

  // Only update transforms on Lenis scroll event
  const setupLenis = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.destroy();
    }
    const lenis = new Lenis({
      lerp: 0.08, // Increased for faster scrolling
      smoothWheel: true,
      wheelMultiplier: 1.2, // Increased for faster wheel scrolling
      infinite: false,
      gestureOrientation: 'vertical',
      touchMultiplier: 2.0, // Increased for faster touch scrolling
      easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease out
    });
    lenis.on('scroll', updateCardTransforms); // Only update on scroll
    // Keep the Lenis raf loop for smooth scrolling
    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);
    lenisRef.current = lenis;
    return lenis;
  }, [updateCardTransforms]);

  // Re-cache card positions on mount and resize
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const cards = Array.from(container.querySelectorAll(".scroll-stack-card")) as HTMLElement[];
    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;
    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.webkitTransform = 'translateZ(0)';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';
    });
    cacheCardPositions();
    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
    setupLenis();
        updateCardTransforms();
      }, 100);
    // Listen for resize to re-cache positions
    window.addEventListener('resize', cacheCardPositions);
    return () => {
      clearTimeout(timeoutId);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      window.removeEventListener('resize', cacheCardPositions);
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    onStackComplete,
    setupLenis,
    updateCardTransforms,
    cacheCardPositions,
  ]);

  // Cleanup on unmount
  useEffect(() => {
    // Add margin-bottom to ScrollStack container for spacing
    const style = document.createElement('style');
    style.innerHTML = `.scroll-stack-container { margin-bottom: 18vh; }`;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <div
        className={`scroll-stack-container relative w-full ${className}`.trim()}
        ref={containerRef}
      style={{
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
      }}
      >
      <div className="scroll-stack-inner pt-[10vh] px-20 pb-[2vh]">
          {React.Children.map(children, (child, idx) => {
            if (
              idx === React.Children.count(children) - 1 &&
              aboutUsCardZoomed &&
              React.isValidElement(child) &&
              child.type &&
              (child.type as any).displayName === 'ScrollStackItem'
            ) {
            return React.cloneElement(child as React.ReactElement<any>, { itemClassName: 'about-us-zoom' });
            }
            return child;
          })}
        </div>
      </div>
    </>
  );
};

export default ScrollTransition;
