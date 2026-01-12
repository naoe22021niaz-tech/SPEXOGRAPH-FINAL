
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Process from './components/Process';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/10 overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Process />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
