
import React from 'react';
import ContactLinks from './ContactLinks';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-cyber-blue/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold neon-text font-mono">
              <span className="text-white">&lt;</span>
              Hamza
              <span className="text-white">/&gt;</span>
            </a>
            <p className="text-sm text-gray-400 mt-2">
              Systems & Network Engineering Student
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <ContactLinks className="mb-2" />
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Hamza. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
