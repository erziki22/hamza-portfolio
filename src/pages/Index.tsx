
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  useEffect(() => {
    document.title = 'Hamza - Systems & Network Engineer';
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cyber-dark text-white relative">
        <div 
          className="absolute inset-0 overflow-hidden pointer-events-none z-0"
          aria-hidden="true"
        >
          <div className="absolute top-0 w-full h-full bg-cyber-grid opacity-5"></div>
        </div>

        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
