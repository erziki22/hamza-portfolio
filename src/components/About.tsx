
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current?.classList.add('animate-fade-in');
          aboutRef.current?.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const aboutText = {
    fr: "Je suis un étudiant passionné en Systèmes et Réseaux à l'OFPPT au Maroc. Mon parcours est marqué par des projets pratiques en sécurité réseau, pare-feux (F5, FortiGate, pfSense, OPNsense), simulation d'architectures complexes, surveillance IT (Zabbix, Grafana), et conteneurisation avec Docker. Je me spécialise dans la virtualisation, l'automatisation et la gestion d'infrastructure, et je cherche à bâtir une carrière solide dans l'ingénierie des réseaux.",
    en: "I'm a passionate Systems & Networks student at OFPPT Morocco. My background includes hands-on projects in firewall deployment (F5, FortiGate, pfSense, OPNsense), complex network architecture design, IT monitoring (Zabbix, Grafana), and Docker-based containerization. I focus on virtualization, automation, and infrastructure management, and I'm working toward a strong career in network engineering."
  };

  const aboutHeading = language === 'fr' ? "À propos de <span class='neon-text'>Moi</span>" : "About <span class='neon-text'>Me</span>";
  
  // Tags for skills
  const tags = {
    fr: ["Sécurité Réseau", "Administration Système", "Automatisation", "Infrastructure IT"],
    en: ["Network Security", "System Administration", "Automation", "IT Infrastructure"]
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute w-64 h-64 rounded-full bg-cyber-purple/5 filter blur-3xl top-1/4 -right-32" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="section-heading font-montserrat" dangerouslySetInnerHTML={{ __html: aboutHeading }}></h2>
        
        <div 
          ref={aboutRef}
          className="glass-card p-6 md:p-8 max-w-4xl mx-auto opacity-0"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex flex-col items-center justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-cyber-blue/30 shadow-lg shadow-cyber-blue/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/30 to-cyber-purple/30"></div>
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">H</div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <p className="mb-4 text-gray-300 font-roboto">
                {aboutText[language]}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                {tags[language].map((tag, index) => (
                  <span 
                    key={index} 
                    className={`px-3 py-1 ${index % 2 === 0 ? 'bg-cyber-blue/20 text-cyber-blue' : 'bg-cyber-purple/20 text-cyber-purple'} rounded-md text-sm font-roboto`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
