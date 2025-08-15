import React from "react";
import { Youtube, Instagram, Globe, Phone, Mail } from "lucide-react";
import reflectionLogo from "../assets/Reflection-Logo.png";

const socialLinks = [
  { name: "YouTube", href: "https://youtube.com/", icon: <Youtube size={22} className="hover:text-[#00C8FF] transition" /> },
  { name: "Instagram", href: "https://instagram.com/", icon: <Instagram size={22} className="hover:text-[#00C8FF] transition" /> },
  { name: "Website", href: "https://reflectionclub.com/", icon: <Globe size={22} className="hover:text-[#00C8FF] transition" /> },
  { name: "WhatsApp", href: "https://wa.me/919999999999", icon: <Phone size={22} className="hover:text-[#00C8FF] transition" /> },
  { name: "Contact", href: "mailto:reflectionrcpit@gmail.com", icon: <Mail size={22} className="hover:text-[#00C8FF] transition" /> },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-black text-white py-6 border-t border-white/10">

      {/* Main Row */}
      <div className="w-full px-6 flex flex-col md:flex-row justify-between items-start gap-8">

        {/* Left Block with logo + content */}
        <div className="flex flex-col items-start gap-3 max-w-sm">
          {/* Logo top left */}
          <img src={reflectionLogo} alt="Reflection Logo" className="px-15 h-20 opacity-90" />

          {/* Social icons */}
          <div className="flex space-x-4 mt-2">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xm text-white/50 mt-2 ">
            © 2025 CLUB REFLECTION – All rights reserved.<br />
            Designed by Akatsuki Coding Club
          </p>
        </div>

        {/* Right side: events & contact */}
        <div className="flex flex-col md:flex-row py-6 gap-10 w-full justify-end">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-[#00C8FF]">Upcoming Events</h2>
            <ul className="space-y-1 text-white/80 text-base">
              <li>Freshers Party</li>
              <li>Garba Night 2025</li>
              <li>Annual Gathering 2026</li>
              <li>Flashmob 2026</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-[#00C8FF]">Contact</h2>
            <p className="text-white/80 text-base">
              Club: R C Patel Institute of Technology<br />
              Email: <a href="mailto:reflectionrcpit@gmail.com" className="underline hover:text-[#00C8FF]">reflectionrcpit@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Big reflection text at bottom */}
      <div className="flex justify-center items-center relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent z-10"></div>
        <h1 
    className="relative z-20 text-[12vw] md:text-8xl font-bold tracking-tight 
      bg-gradient-to-r from-[#00C8FF] via-[#73FF8F] to-[#FFB300] 
      bg-clip-text text-transparent animate-gradient-x select-none"
    style={{
      WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 50%, black 100%)'
    }}
  >
    REFLECTION
  </h1>
      </div>

      <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;





