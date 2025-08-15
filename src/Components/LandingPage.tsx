import React, { useRef , useState, useEffect } from 'react';
import { ChevronDown, X, Instagram, Youtube, Linkedin } from 'lucide-react';
import Video from '../assets/videos/Website bg.mp4';
import Logo from '../assets/Reflection-Logo.png';
// import ParticleBackground from './ParticleBackground';

const navItems = ['Home', 'About', 'Gallery', 'Contact'];

const LandingPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  useEffect(() => {
    document.body.style.backgroundColor = '#000';
    setShowContent(true);
    return () => {};
  }, []);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  // Smooth scroll function to navigate to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Close mobile menu if open
    setMenuOpen(false);
  };

  // Handle navigation item click
  const handleNavClick = (item: string) => {
    setActiveNav(item);
    const sectionId = item === 'Home' ? 'home' : item.toLowerCase();
    scrollToSection(sectionId);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden font-poppins text-white" style={{ backgroundColor: showContent ? 'transparent' : '#000' }}>
      {/* Social Media Icons - Top Right */}
      <div className="absolute top-4 right-4 z-50 gap-4 hidden md:flex">
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="h-6 w-6 text-white hover:text-[#FFB300] transition-colors duration-200 drop-shadow-lg" />
        </a>
        <a href="https://www.youtube.com/@ClubReflection/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <Youtube className="h-6 w-6 text-white hover:text-[#00C8FF] transition-colors duration-200 drop-shadow-lg" />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-7 w-7 text-white hover:text-[#73FF8F] transition-colors duration-200 drop-shadow-lg" />
        </a>
      </div>

      {/* Video Background with dark overlay */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-500 ${
          isVideoLoaded ? 'bg-black/30' : 'bg-black'
        }`}
      ></div>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        onCanPlayThrough={handleVideoLoaded}
        onLoadedData={handleVideoLoaded}
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent via-black/70 to-black z-10 pointer-events-none"></div>
      
      {showContent && (
      <div className="relative z-20 flex flex-col justify-between h-full">
        {/* Header */}
        <header className="relative flex items-center justify-center px-4 md:px-8 py-6">
          {/* Logo - absolute left, vertically centered for desktop */}
          <div className="absolute left-2 top-1/2 mt-2 -translate-y-1/2 flex-shrink-0 md:block hidden">
            <img
              src={Logo}
              alt="Club Reflection Logo"
              loading="lazy"
              decoding="async"
              className="w-28 md:w-36 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Mobile Logo (left, larger, top-left for mobile) */}
          <div className={`md:hidden absolute left-1 flex items-start flex-shrink-0 transition-all duration-300 ${
            menuOpen ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}>
            <img
              src={Logo}
              alt="Club Reflection Logo"
              loading="lazy"
              decoding="async"
              className="w-35 h-auto"
            />
          </div>

          {/* Desktop Nav - centered */}
          <nav className="hidden md:block mx-auto relative">
            <ul className="flex gap-10 text-sm tracking-widest font-julius uppercase text-white/90 relative">
              {navItems.map((item, index) => (
                <li
                  key={item}
                  className={`cursor-pointer transition-all duration-300 relative flex flex-col items-center hover:scale-110 ${
                    activeNav === item 
                      ? 'text-transparent bg-gradient-to-r from-[#00C8FF] via-[#73FF8F] to-[#FFB300] bg-clip-text font-extrabold' 
                      : 'hover:text-transparent hover:bg-gradient-to-r hover:from-[#00C8FF] hover:via-[#73FF8F] hover:to-[#FFB300] hover:bg-clip-text'
                  }`}
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger for Mobile (right) */}
          <div className="md:hidden ml-auto z-30">
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
              className="p-2 bg-transparent border-none focus:outline-none transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <div className="relative w-7 h-6 flex flex-col justify-center items-center">
                {/* Top line */}
                <span className={`absolute w-7 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen 
                    ? 'rotate-45 translate-y-0' 
                    : '-translate-y-2'
                }`}></span>
                
                {/* Middle line */}
                <span className={`absolute w-7 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen 
                    ? 'opacity-0 scale-0' 
                    : 'opacity-100 scale-100'
                }`}></span>
                
                {/* Bottom line */}
                <span className={`absolute w-7 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen 
                    ? '-rotate-45 translate-y-0' 
                    : 'translate-y-2'
                }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
            {/* Backdrop */}
            <div 
              className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
                menuOpen ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => setMenuOpen(false)}
            ></div>
            
            {/* Menu Panel */}
            <nav
              className={`absolute top-0 right-0 w-full max-w-xs h-full bg-gradient-to-br from-black via-neutral-900 to-neutral-950 shadow-2xl flex flex-col px-6 pt-8 pb-0 border-l border-[#00C8FF]/30 overflow-hidden transition-transform duration-500 ease-in-out ${
                menuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              {/* Neon theme texture overlays */}
              <span className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#00C8FF]/30 blur-2xl z-0" />
              <span className="pointer-events-none absolute top-1/2 left-1/2 w-60 h-40 rounded-full bg-[#73FF8F]/20 blur-2xl z-0" style={{transform: 'translate(-50%, -50%)'}} />
              <span className="pointer-events-none absolute bottom-0 right-0 w-40 h-32 rounded-full bg-[#FFB300]/20 blur-2xl z-0" />
              
              {/* Menu content above textures */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Logo at top left inside menu */}
                <div className="flex items-center justify-between mb-2">
                  <img src={Logo} alt="Club Reflection Logo" className="w-28 h-auto" />
                  {/* Close button at top right */}
                  <button
                    aria-label="Close menu"
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-[#FFB300]/10 transition-all duration-300 hover:scale-110"
                  >
                    <X className="h-7 w-7 text-[#FFB300]" />
                  </button>
                </div>
                
                {/* Divider under logo */}
                <hr className="border-t border-gray-500/40 mb-2" />
                
                {/* Navigation items with staggered animation */}
                <ul className="flex flex-col gap-6 mt-4 text-lg font-julius uppercase tracking-widest">
                  {navItems.map((item, idx) => (
                    <li
                      key={item}
                      className="cursor-pointer px-2 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:text-[#FFB300] hover:bg-[#00C8FF]/10"
                      onClick={() => handleNavClick(item)}
                      style={{ 
                        opacity: menuOpen ? 1 : 0,
                        transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
                        transitionDelay: menuOpen ? `${idx * 100}ms` : '0ms'
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                
                {/* Social Media Icons at bottom center */}
                <div className="mt-auto flex flex-col items-center gap-4 pb-4">
                  <div className="flex justify-center gap-6">
                    <a href="https://www.instagram.com/reflection_rcpit/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <Instagram className="h-7 w-7 text-white hover:text-[#FFB300] transition-colors duration-300 hover:scale-110 drop-shadow-lg" />
                    </a>
                    <a href="https://www.youtube.com/@ClubReflection/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                      <Youtube className="h-7 w-7 text-white hover:text-[#00C8FF] transition-colors duration-300 hover:scale-110 drop-shadow-lg" />
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-7 w-7 text-white hover:text-[#73FF8F] transition-colors duration-300 hover:scale-110 drop-shadow-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className={`flex flex-col items-center justify-center text-center px-4 flex-1 transition-all duration-700 ease-in-out ${
          menuOpen ? 'blur-sm scale-95 opacity-60' : 'blur-none scale-100 opacity-100'
        }`}>
          <h1 
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00C8FF] via-[#73FF8F] to-[#FFB300] text-transparent bg-clip-text drop-shadow-2xl hover:scale-102 transition-transform duration-300"
          >
            CLUB REFLECTION
          </h1>
          <p 
            className="mt-4 text-base xs:text-lg md:text-xl lg:text-2xl tracking-wide text-blue-200/90 max-w-xs xs:max-w-md md:max-w-2xl drop-shadow-lg transition-opacity duration-800"
          >
            "A Stage for Every Story, A Beat for Every Soul"
          </p>

          {/* Button */}
          <button
            className="mt-6 px-6 py-2.5 border border-[#00C8FF] rounded-full font-medium text-white relative overflow-hidden group bg-transparent hover:bg-[#00C8FF]/10 transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={() => scrollToSection('gallery')}
          >
            <span className="relative z-10 text-sm tracking-wide">
              Explore Reflection's Unfolded
            </span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className={`text-center pb-6 md:pb-10 animate-bounce transition-all duration-700 ease-in-out ${
          menuOpen ? 'blur-sm scale-95 opacity-60' : 'blur-none scale-100 opacity-100'
        }`}>
          <ChevronDown className="h-8 w-8 mx-auto text-white/80 hover:text-[#FFB300] cursor-pointer" />
        </div>
      </div>
      )}
    </section>
  );
};

export default LandingPage;