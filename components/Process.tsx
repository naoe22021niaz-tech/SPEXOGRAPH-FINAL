
import React from 'react';

const steps = [
  { name: 'Plan', desc: 'Strategizing your digital success.' },
  { name: 'Design', desc: 'Crafting pixel-perfect aesthetics.' },
  { name: 'Develop', desc: 'Building robust, scalable code.' },
  { name: 'Launch', desc: 'Deploying to the world stage.' },
  { name: 'Support', desc: 'Ongoing care and optimization.' },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 px-6 border-y border-white/5 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">The Workflow</h2>
          <p className="text-3xl md:text-4xl font-semibold">Our Process</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative p-8 group">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="text-4xl font-bold text-zinc-800 mb-4 transition-colors group-hover:text-white/20">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.name}</h3>
                <p className="text-sm text-zinc-400 font-light">{step.desc}</p>
              </div>

              {/* Minimal Connectors */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-px h-12 w-px bg-white/5 -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
