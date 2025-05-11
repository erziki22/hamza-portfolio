
import React, { useState, useEffect } from 'react';
import ContactLinks from './ContactLinks';
import { useLanguage } from '../contexts/LanguageContext';
import { Server } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cyber-dark/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold neon-text font-mono flex items-center gap-2">
          <Server className="w-6 h-6" />
          <span>
            <span className="text-white">&lt;</span>
            Hamza
            <span className="text-white">/&gt;</span>
          </span>
        </a>

        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="nav-link text-gray-300 hover:text-cyber-blue transition-colors">
            {language === 'fr' ? 'À propos' : 'About'}
          </a>
          <a href="#projects" className="nav-link text-gray-300 hover:text-cyber-blue transition-colors">
            {language === 'fr' ? 'Projets' : 'Projects'}
          </a>
          <a href="#skills" className="nav-link text-gray-300 hover:text-cyber-blue transition-colors">
            {language === 'fr' ? 'Compétences' : 'Skills'}
          </a>
          <button 
            onClick={toggleLanguage} 
            className="text-gray-300 hover:text-cyber-blue px-3 py-1 border border-gray-700 rounded-md hover:border-cyber-blue transition-colors"
          >
            {language === 'fr' ? '🇫🇷 FR' : '🇬🇧 EN'}
          </button>
          <ContactLinks />
        </nav>
        
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={toggleLanguage} 
            className="text-gray-300 hover:text-cyber-blue px-2 py-1 border border-gray-700 rounded-md hover:border-cyber-blue transition-colors mr-2"
          >
            {language === 'fr' ? '🇫🇷' : '🇬🇧'}
          </button>
          <ContactLinks />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
