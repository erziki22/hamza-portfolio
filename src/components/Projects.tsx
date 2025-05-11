
import React from 'react';
import ProjectCard from './ProjectCard';
import { Network, Server, Terminal, Shield } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'IPCop Firewall Lab',
      description: 'Configured and deployed an IPCop firewall in a virtualized environment to secure network traffic and implement access control policies.',
      technologies: ['IPCop', 'Firewall', 'Network Security', 'VMware'],
      icon: <Shield className="w-10 h-10" />,
    },
    {
      title: 'Packet Tracer VLAN with DHCP Setup',
      description: 'Created a complex network topology with multiple VLANs and configured DHCP servers for automatic IP address assignment.',
      technologies: ['Cisco', 'VLANs', 'DHCP', 'Routing'],
      icon: <Network className="w-10 h-10" />,
    },
    {
      title: 'Bash Script for User Management',
      description: 'Developed a comprehensive bash script for automating user creation, modification, and removal across Linux systems.',
      technologies: ['Bash', 'Linux', 'Automation', 'User Management'],
      icon: <Terminal className="w-10 h-10" />,
    },
    {
      title: 'Kali Linux: DHCP Starvation Attack',
      description: 'Simulated a DHCP starvation attack in a controlled environment to understand vulnerabilities and implement appropriate countermeasures.',
      technologies: ['Kali Linux', 'Cybersecurity', 'Penetration Testing', 'DHCP'],
      icon: <Server className="w-10 h-10" />,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute w-72 h-72 rounded-full bg-cyber-blue/5 filter blur-3xl -left-36 top-1/3" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My <span className="neon-text">Projects</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
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
