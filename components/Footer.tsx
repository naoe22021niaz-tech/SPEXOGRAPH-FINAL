
import React from 'react';
import { Twitter, Instagram, Linkedin, Mail, Github } from 'lucide-react';

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

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tighter uppercase">Spexograph</span>
            </div>
            <p className="text-zinc-500 max-w-sm font-light text-sm leading-relaxed">
              Spexograph is a premium design and development agency crafting next-generation digital experiences for ambitious brands and companies worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-light">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Contact</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-light">
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-4 h-4" /> hello@spexograph.com
              </li>
              <li className="flex items-center gap-2">
                123 Digital Ave, Suite 404 <br /> New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-10">
          <p className="text-xs text-zinc-600 font-light mb-6 md:mb-0">
            &copy; {new Date().getFullYear()} Spexograph Agency. All rights reserved. Built with precision.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
