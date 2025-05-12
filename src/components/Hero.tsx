
import React, { useEffect, useRef } from 'react';
import TypewriterText from './TypewriterText';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && !isMobile) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
        heroRef.current.style.opacity = `${1 - scrollY * 0.002}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const heroText = language === 'fr' 
    ? "Technicien Systèmes & Réseaux en formation" 
    : "Systems & Network Technician in training";

  return (
    <section className="relative h-screen flex items-center justify-center bg-cyber-grid overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-cyber-dark/90 via-cyber-dark to-cyber-dark pointer-events-none"
        aria-hidden="true"
      ></div>
      
      <div 
        className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-cyber-blue/10 filter blur-3xl -top-20 -right-20 animate-pulse-glow"
        aria-hidden="true"
      ></div>
      
      <div 
        className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-cyber-purple/10 filter blur-3xl -bottom-20 -left-20 animate-pulse-glow"
        aria-hidden="true"
      ></div>
      
      <div ref={heroRef} className="container mx-auto text-center z-10 px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 font-montserrat">
          <span className="block mb-4 animate-fade-in">{language === 'fr' ? 'Bonjour, je suis' : 'Hi, I\'m'}</span>
          <span className="neon-text animate-[pulse_2s_ease-in-out_infinite]">Hamza</span>
        </h1>
        
        <div className="text-xl md:text-2xl lg:text-3xl mb-8 font-medium font-montserrat">
          <TypewriterText 
            text={heroText}
            className="neon-purple"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-12">
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-md bg-cyber-blue text-white font-medium hover:bg-cyber-blue/90 hover:scale-105 transition-all shadow-lg shadow-cyber-blue/20 text-center animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            {language === 'fr' ? 'Voir Projets' : 'View Projects'}
          </a>
          
          <a 
            href="#about" 
            className="px-6 py-3 rounded-md bg-transparent text-cyber-blue font-medium border border-cyber-blue hover:bg-cyber-blue/10 transition-all shadow-lg shadow-cyber-blue/10 hover:shadow-cyber-blue/20 text-center animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            {language === 'fr' ? 'À Propos' : 'About Me'}
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about"
          className="flex flex-col items-center text-sm text-gray-400 hover:text-cyber-blue transition-colors"
          aria-label={language === 'fr' ? 'Défiler vers la section À Propos' : 'Scroll to About section'}
        >
          <span>{language === 'fr' ? 'Défiler' : 'Scroll Down'}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mt-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
