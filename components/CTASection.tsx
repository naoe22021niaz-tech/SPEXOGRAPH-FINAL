
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-7xl font-bold mb-10 tracking-tight">
          Build Your Digital Presence <br /> With Spexograph
        </h2>
        
        <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto font-light">
          Let's collaborate to create something exceptional. Our team is ready to transform your ideas into a high-performance reality.
        </p>

        <button className="px-12 py-5 bg-white text-black text-lg font-bold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all">
          Start Your Project
        </button>
      </div>
    </section>
  );
};

export default CTASection;
