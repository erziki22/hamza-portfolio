
import React from 'react';
import ProjectCard from './ProjectCard';
import { Network, Server, Terminal, Shield, Activity } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const { language } = useLanguage();
  
  const projects = {
    fr: [
      {
        title: 'Configuration et Test de Pare-feu',
        description: 'Mise en place et test de pare-feux utilisant F5, FortiGate, pfSense, et OPNsense pour sécuriser le trafic réseau et implémenter des politiques de contrôle d\'accès.',
        technologies: ['F5', 'FortiGate', 'pfSense', 'OPNsense'],
        icon: <Shield className="w-10 h-10" />,
      },
      {
        title: 'Simulation d\'Architecture Réseau Complexe',
        description: 'Création d\'une topologie réseau complexe avec Cisco Packet Tracer, incluant multiples VLANs, routage, et configuration de services.',
        technologies: ['Cisco', 'VLANs', 'DHCP', 'Routage'],
        icon: <Network className="w-10 h-10" />,
      },
      {
        title: 'Surveillance et Journalisation IT',
        description: 'Déploiement d\'outils de surveillance comme Grafana, Prometheus et Zabbix pour le monitoring en temps réel et l\'analyse des performances de l\'infrastructure.',
        technologies: ['Grafana', 'Prometheus', 'Zabbix', 'Monitoring'],
        icon: <Activity className="w-10 h-10" />,
      },
      {
        title: 'Conteneurisation et Automatisation',
        description: 'Mise en œuvre de services conteneurisés avec Docker pour standardiser les déploiements et automatiser la gestion des applications.',
        technologies: ['Docker', 'Conteneurisation', 'Automatisation', 'CI/CD'],
        icon: <Server className="w-10 h-10" />,
      },
    ],
    en: [
      {
        title: 'Firewall Configuration and Testing',
        description: 'Set up and tested firewalls using F5, FortiGate, pfSense, and OPNsense to secure network traffic and implement access control policies.',
        technologies: ['F5', 'FortiGate', 'pfSense', 'OPNsense'],
        icon: <Shield className="w-10 h-10" />,
      },
      {
        title: 'Complex Network Architecture Simulation',
        description: 'Created complex network topologies with Cisco Packet Tracer, including multiple VLANs, routing, and service configuration.',
        technologies: ['Cisco', 'VLANs', 'DHCP', 'Routing'],
        icon: <Network className="w-10 h-10" />,
      },
      {
        title: 'IT Infrastructure Monitoring',
        description: 'Deployed monitoring tools like Grafana, Prometheus, and Zabbix for real-time infrastructure monitoring and performance analysis.',
        technologies: ['Grafana', 'Prometheus', 'Zabbix', 'Monitoring'],
        icon: <Activity className="w-10 h-10" />,
      },
      {
        title: 'Containerization and Automation',
        description: 'Implemented containerized services with Docker to standardize deployments and automate application management.',
        technologies: ['Docker', 'Containerization', 'Automation', 'CI/CD'],
        icon: <Server className="w-10 h-10" />,
      },
    ]
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute w-72 h-72 rounded-full bg-cyber-blue/5 filter blur-3xl -left-36 top-1/3" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          {language === 'fr' ? 'Mes ' : 'My '}<span className="neon-text">{language === 'fr' ? 'Projets' : 'Projects'}</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects[language].map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              icon={project.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
