
import React from 'react';
import SkillIcon from './SkillIcon';
import { 
  Terminal, 
  Database, 
  Network, 
  Server, 
  Code, 
  Laptop,
  MonitorPlay,
  Activity
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { language } = useLanguage();
  
  const skills = {
    fr: [
      { name: 'Linux', icon: <Terminal className="w-8 h-8 text-cyber-blue" />, level: 85, delay: 0 },
      { name: 'Windows Server', icon: <MonitorPlay className="w-8 h-8 text-cyber-blue" />, level: 80, delay: 100 },
      { name: 'VMware', icon: <Server className="w-8 h-8 text-cyber-blue" />, level: 75, delay: 200 },
      { name: 'Réseaux', icon: <Network className="w-8 h-8 text-cyber-blue" />, level: 90, delay: 300 },
      { name: 'Scripts Bash', icon: <Terminal className="w-8 h-8 text-cyber-blue" />, level: 70, delay: 400 },
      { name: 'Docker', icon: <Server className="w-8 h-8 text-cyber-blue" />, level: 65, delay: 500 },
      { name: 'SQL', icon: <Database className="w-8 h-8 text-cyber-blue" />, level: 60, delay: 600 },
      { name: 'Monitoring', icon: <Activity className="w-8 h-8 text-cyber-blue" />, level: 55, delay: 700 },
    ],
    en: [
      { name: 'Linux', icon: <Terminal className="w-8 h-8 text-cyber-blue" />, level: 85, delay: 0 },
      { name: 'Windows Server', icon: <MonitorPlay className="w-8 h-8 text-cyber-blue" />, level: 80, delay: 100 },
      { name: 'VMware', icon: <Server className="w-8 h-8 text-cyber-blue" />, level: 75, delay: 200 },
      { name: 'Networking', icon: <Network className="w-8 h-8 text-cyber-blue" />, level: 90, delay: 300 },
      { name: 'Bash Scripting', icon: <Terminal className="w-8 h-8 text-cyber-blue" />, level: 70, delay: 400 },
      { name: 'Docker', icon: <Server className="w-8 h-8 text-cyber-blue" />, level: 65, delay: 500 },
      { name: 'SQL', icon: <Database className="w-8 h-8 text-cyber-blue" />, level: 60, delay: 600 },
      { name: 'Monitoring', icon: <Activity className="w-8 h-8 text-cyber-blue" />, level: 55, delay: 700 },
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills[language].map((skill, index) => (
              <SkillIcon
                key={index}
                name={skill.name}
                icon={skill.icon}
                level={skill.level}
                delay={skill.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
