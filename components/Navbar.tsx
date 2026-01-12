
import React from 'react';

const Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="48" fill="white" />
    <circle cx="43" cy="38" r="8" fill="black" />
    <circle cx="57" cy="38" r="8" fill="black" />
    <path d="M47 48C48 47 49 47 50 48C51 49 52 49 53 48" stroke="black" strokeWidth="1" strokeLinecap="round" />
    <path d="M12 58C25 88 75 88 88 58" stroke="black" strokeWidth="4" fill="none" />
    <path d="M50 54C50 70 50 90 50 98" stroke="black" strokeWidth="4" fill="none" />
    <path d="M35 56C40 70 45 90 50 98" stroke="black" strokeWidth="4" fill="none" />
    <path d="M65 56C60 70 55 90 50 98" stroke="black" strokeWidth="4" fill="none" />
    <path d="M16 68C30 75 70 75 84 68" stroke="black" strokeWidth="4" fill="none" />
  </svg>
);

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tighter uppercase">Spexograph</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#why-us" className="hover:text-white transition-colors">Why Spexograph</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div>
          <button className="px-5 py-2 text-sm font-medium border border-white/10 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
