import React, { useEffect, useState } from 'react';

interface LoaderProps {
  logoSrc: string; // Path to your HD Reflection logo
  totalDurationMs?: number; // Total time from start to unmount
  onComplete?: () => void; // Callback when loader finishes
}

const Loader: React.FC<LoaderProps> = ({
  logoSrc,
  totalDurationMs = 1500,
  onComplete
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete && onComplete();
    }, totalDurationMs);

    return () => clearTimeout(timer);
  }, [totalDurationMs, onComplete]);

  if (!isVisible) return null;

  const containerStyle: React.CSSProperties = {
    // Responsive logo size: min 140px, scale with viewport, cap at 260px
    ['--logo-size' as any]: 'clamp(140px, 26vmin, 260px)'
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black" style={containerStyle}>
      {/* Logo */}
      <img
        src={logoSrc}
        alt="Reflection Logo"
        className="select-none"
        style={{
          width: 'var(--logo-size)',
          height: 'auto',
          animation: 'logo-cinematic var(--loader-total, 1200ms) cubic-bezier(0.22, 1, 0.36, 1) forwards',
          willChange: 'transform, opacity, filter',
          backfaceVisibility: 'hidden',
          transform: 'translate3d(0,0,0)',
          contain: 'paint'
        }}
        draggable={false}
        loading="eager"
        decoding="async"
      />

      {/* Soft glow behind logo (scaled relative to logo size) */}
      <div
        aria-hidden
        className="absolute rounded-full blur-3xl opacity-30"
        style={{
          width: 'calc(var(--logo-size) * 1.8)',
          height: 'calc(var(--logo-size) * 1.8)',
          background: 'radial-gradient(closest-side, rgba(115,255,143,0.35), rgba(0,0,0,0))'
        }}
      />

      {/* Local keyframes to keep everything self-contained */}
      <style>{`
        :root { --loader-total: ${totalDurationMs}ms; }

        /* Cinematic smooth: focus on transform+opacity, light blur to avoid flutter */
        @keyframes logo-cinematic {
          0% {
            opacity: 0;
            transform: translate3d(0,0,0) scale(0.995);
            filter: blur(6px);
          }
          60% {
            opacity: 1;
            transform: translate3d(0,0,0) scale(1.02);
            filter: blur(0px);
          }
          100% {
            opacity: 0;
            transform: translate3d(0,0,0) scale(1.035);
            filter: blur(2px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes logo-cinematic {
            0% { opacity: 0; transform: scale(1); filter: none; }
            60% { opacity: 1; transform: scale(1); filter: none; }
            100% { opacity: 0; transform: scale(1); filter: none; }
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;