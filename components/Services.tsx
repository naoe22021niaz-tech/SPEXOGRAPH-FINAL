
import React from 'react';
import { ShoppingBag, User, GraduationCap, Building2 } from 'lucide-react';

const services = [
  {
    title: "E-commerce Websites",
    description: "Tailored online stores focused on conversion and seamless user experience.",
    icon: ShoppingBag,
  },
  {
    title: "Personal Portfolio Websites",
    description: "Minimalist showcases for creatives and professionals to highlight their best work.",
    icon: User,
  },
  {
    title: "Educational Institution Websites",
    description: "Complex platforms for schools and universities with intuitive information architecture.",
    icon: GraduationCap,
  },
  {
    title: "Brand & Company Websites",
    description: "High-end corporate sites that communicate authority and visionary goals.",
    icon: Building2,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">Our Expertise</h2>
          <p className="text-3xl md:text-4xl font-semibold">Specialized Digital Solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-white/[0.03] hover:border-white/20 transition-all duration-500 flex flex-col items-start text-left"
            >
              <div className="mb-6 p-3 rounded-xl border border-white/5 bg-black group-hover:scale-110 transition-transform duration-500">
                <service.icon className="w-6 h-6 text-white stroke-[1.5px]" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
