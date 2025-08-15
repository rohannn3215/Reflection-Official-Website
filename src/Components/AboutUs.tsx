import React, { useEffect, useRef } from 'react';
import websiteLayoutBg from '../assets/events/website layout1.png';

const AboutUs: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (paragraph1Ref.current) observer.observe(paragraph1Ref.current);
    if (paragraph2Ref.current) observer.observe(paragraph2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-start overflow-hidden bg-black">
      <div
        className="relative flex items-center justify-center w-full mx-auto"
        style={{
          width: '100vw',
          height: '100vh',
          background: 'black',
        }}
      >
         <picture>
           <source media="(max-width: 768px)" srcSet="/ResponsiveAboutUs.png" />
           <img
             src={websiteLayoutBg}
             alt="Website Layout Background"
             className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
             style={{ objectPosition: 'center center' }}
           />
         </picture>
        
        {/* Top feather overlay */}
        <div className="absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-black via-black/80 to-transparent"></div>
        
        {/* Bottom feather overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
        
        <div className="relative z-10 w-11/12 sm:w-5/6 md:w-3/4 lg:w-3/3 px-6 sm:px-10 md:px-20 lg:px-24 pt-8 sm:pt-40 md:pt-48 lg:pt-56 pb-20 mx-auto">
          <h1 
            ref={titleRef}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F7F48B] mb-8 text-center md:text-left md:pl-16 opacity-0 transform -translate-y-12 transition-all duration-1200 ease-out blur-sm mt-16 sm:mt-0" 
            style={{ fontFamily: 'serif' }}
          >
            ABOUT US
          </h1>
          
          {/* Mobile: Position content at 70% from bottom */}
          <div className="block sm:hidden h-full flex flex-col">
            <div className="flex-1 flex items-end justify-center">
              <div
                ref={contentRef}
                className="inline-block bg-black/30 backdrop-blur-md border border-white/20 p-6 rounded-3xl mx-auto max-w-4xl text-left opacity-0 transform -translate-x-12 transition-all duration-1000 ease-out flex flex-col justify-center min-h-[200px] shadow-2xl mb-20"
              >
                <div className="flex flex-col justify-center h-full space-y-4">
                  <p 
                    ref={paragraph1Ref}
                    className="text-sm text-gray-200 leading-relaxed opacity-0 transform translate-y-5 transition-all duration-800 ease-out font-bold tracking-wide"
                    style={{ textAlign: 'justify' }}
                  >
                    At the heart of RCPIT's cultural landscape, Club Reflection stands as a dynamic collective of artists, performers, and 
                    visionaries who believe in the transformative power of expression.
                  </p>
                  <p 
                    ref={paragraph2Ref}
                    className="text-sm text-gray-200 leading-relaxed mt-4 opacity-0 transform translate-y-6 transition-all duration-800 ease-out font-light tracking-wide"
                    style={{ textAlign: 'justify' }}
                  >
                     We're not just a club — we're a platform where passion
                     meets purpose, and every event becomes a celebration of creativity, unity, and student spirit.
                    Backed by collaboration and driven by dedication, we continue to shape a 
                    space where every rhythm tells a story — and every student finds a stage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Original left-aligned layout */}
          <div className="hidden sm:block">
            <div
              ref={contentRef}
              className="inline-block bg-black/20 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-2xl max-w-3xl text-left opacity-0 transform -translate-x-12 transition-all duration-800 ease-out flex flex-col justify-center min-h-[200px]"
            >
              <div className="flex flex-col justify-center h-full">
                <p 
                  ref={paragraph1Ref}
                  className="text-base md:text-xl text-gray-300 leading-7 md:leading-8 opacity-0 transform translate-y-6 transition-all duration-600 ease-out"
                  style={{ textAlign: 'justify' }}
                >
                  At the heart of RCPIT's cultural landscape, Club Reflection stands as a dynamic collective of artists, performers, and 
                  visionaries who believe in the transformative power of expression.
                </p>
                <p 
                  ref={paragraph2Ref}
                  className="hidden md:block text-base md:text-xl text-gray-300 leading-8 mt-4 opacity-0 transform translate-y-6 transition-all duration-600 ease-out"
                  style={{ textAlign: 'justify' }}
                >
                   We're not just a club — we're a platform where passion
                   meets purpose, and every event becomes a celebration of creativity, unity, and student spirit.
                  Backed by collaboration and driven by dedication, we continue to shape a 
                  space where every rhythm tells a story — and every student finds a stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .animate-in {
            opacity: 1 !important;
            transform: none !important;
            filter: blur(0px) !important;
          }
          
          h1.animate-in {
            transform: translateY(0) !important;
            filter: blur(0px) !important;
          }
          
          div.animate-in {
            transform: translateX(0) !important;
          }
          
          p.animate-in {
            transform: translateY(0) !important;
          }

          @media (max-width: 768px) {
            h1 {
              text-shadow: 0 0 20px rgba(247, 244, 139, 0.3);
            }
            
            p {
              text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
            }
          }
        `}
      </style>
    </div>
  );
};

export default AboutUs;