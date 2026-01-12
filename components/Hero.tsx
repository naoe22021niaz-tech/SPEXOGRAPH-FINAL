
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20">
      {/* Background Glows inspired by Better Stack */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-video opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-400 mb-8 hover:border-white/20 transition-colors cursor-default">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Crafting Digital Excellence
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          We Design & Build <br /> Modern Websites
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Custom websites for e-commerce, portfolios, education, brands, and companies. 
          Precision engineered for the future.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          <button className="flex items-center gap-2 px-8 py-4 text-white font-medium border border-white/10 hover:border-white/40 hover:bg-white/5 rounded-full transition-all">
            View Our Work
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Visual abstract elements */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-t from-white/20 to-transparent" />
    </section>
  );
};

export default Hero;
