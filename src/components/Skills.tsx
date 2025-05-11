
import React from 'react';
import { 
  Terminal, 
  Database, 
  Network, 
  Server, 
  Monitor,
  Shield,
  Laptop,
  MonitorPlay,
  Activity
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { language } = useLanguage();
  
  const skillCategories = {
    fr: [
      {
        title: "Administration Système",
        icon: <Terminal className="w-8 h-8 text-cyber-blue" />,
        skills: ["Linux (RedHat, Debian, Ubuntu, Kali)", "Windows Server (2016/2019)"]
      },
      {
        title: "Virtualisation & Conteneurisation",
        icon: <Server className="w-8 h-8 text-cyber-blue" />,
        skills: ["Docker, VMware, vSphere, Proxmox, Hyper-V"]
      },
      {
        title: "Sécurité & Pare-feux",
        icon: <Shield className="w-8 h-8 text-cyber-blue" />,
        skills: ["F5, FortiGate, pfSense, OPNsense"]
      },
      {
        title: "Surveillance & Infrastructure",
        icon: <Activity className="w-8 h-8 text-cyber-blue" />,
        skills: ["Grafana, Zabbix, Prometheus"]
      },
      {
        title: "Réseaux & Outils de Simulation",
        icon: <Network className="w-8 h-8 text-cyber-blue" />,
        skills: ["Cisco Packet Tracer, GNS3, Wireshark"]
      }
    ],
    en: [
      {
        title: "System Administration",
        icon: <Terminal className="w-8 h-8 text-cyber-blue" />,
        skills: ["Linux (RedHat, Debian, Ubuntu, Kali)", "Windows Server (2016/2019)"]
      },
      {
        title: "Virtualization & Containerization",
        icon: <Server className="w-8 h-8 text-cyber-blue" />,
        skills: ["Docker, VMware, vSphere, Proxmox, Hyper-V"]
      },
      {
        title: "Security & Firewalls",
        icon: <Shield className="w-8 h-8 text-cyber-blue" />,
        skills: ["F5, FortiGate, pfSense, OPNsense"]
      },
      {
        title: "Monitoring & Infrastructure",
        icon: <Activity className="w-8 h-8 text-cyber-blue" />,
        skills: ["Grafana, Zabbix, Prometheus"]
      },
      {
        title: "Networking & Simulation Tools",
        icon: <Network className="w-8 h-8 text-cyber-blue" />,
        skills: ["Cisco Packet Tracer, GNS3, Wireshark"]
      }
    ]
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute w-80 h-80 rounded-full bg-cyber-purple/5 filter blur-3xl -right-40 top-20" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          {language === 'fr' ? 'Compétences ' : 'Technical '}
          <span className="neon-text">{language === 'fr' ? 'Techniques' : 'Skills'}</span>
        </h2>
        
        <div className="glass-card p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories[language].map((category, index) => (
              <div 
                key={index} 
                className="bg-cyber-dark/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4 gap-3">
                  <div className="p-2 rounded-md bg-cyber-blue/10">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-cyber-blue font-montserrat">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2 font-roboto">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
