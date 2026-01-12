
import React from 'react';
import { Check } from 'lucide-react';

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

const features = [
  "Custom UI/UX tailored to your brand",
  "Modern, clean, and scalable design",
  "Fast, secure, and responsive builds",
  "SEO-optimized structure",
  "24/7 customer support"
];

const WhyChoose: React.FC = () => {
  return (
    <section id="why-us" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Why visionary brands <br /> choose Spexograph.
          </h2>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-lg text-zinc-300 font-light group-hover:text-white transition-colors">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-square">
          <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-10 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute inset-20 border border-white/10 rounded-full" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-transparent flex items-center justify-center rounded-lg">
              <Logo className="w-full h-full drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
            </div>
          </div>

          {/* Glowing orbs */}
          <div className="absolute top-10 right-10 w-2 h-2 bg-white rounded-full blur-[2px]" />
          <div className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-white/40 rounded-full blur-[1px]" />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
