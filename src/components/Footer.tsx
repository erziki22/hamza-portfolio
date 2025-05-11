
import React from 'react';
import ContactLinks from './ContactLinks';
import { useLanguage } from '../contexts/LanguageContext';
import { Server } from 'lucide-react';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <footer className="py-8 border-t border-cyber-blue/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold neon-text font-mono flex items-center gap-2 justify-center md:justify-start">
              <Server className="w-6 h-6" />
              <span>
                <span className="text-white">&lt;</span>
                Hamza
                <span className="text-white">/&gt;</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 mt-2">
              {language === 'fr' 
                ? 'Étudiant en Systèmes & Réseaux' 
                : 'Systems & Network Engineering Student'}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <ContactLinks className="mb-2" />
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Hamza Erziki. 
              {language === 'fr' 
                ? ' Tous droits réservés.' 
                : ' All rights reserved.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
