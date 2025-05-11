
import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current?.classList.add('animate-fade-in');
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

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute w-64 h-64 rounded-full bg-cyber-purple/5 filter blur-3xl top-1/4 -right-32" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About <span className="neon-text">Me</span></h2>
        
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
              <p className="mb-4 text-gray-300">
                I'm a student at <span className="neon-text font-medium">OFPPT Morocco</span>, passionate about IT security, 
                networks, and automation. Currently in training to become a Systems & Network Technician, I'm developing 
                skills in network architecture, system administration, and cybersecurity.
              </p>
              <p className="mb-4 text-gray-300">
                My technical journey is driven by curiosity and the desire to understand how complex systems communicate 
                and function securely. I enjoy working on practical projects that enhance network security and efficiency.
              </p>
              <p className="text-gray-300">
                When I'm not configuring networks or optimizing systems, I'm experimenting with new technologies or 
                collaborating with peers on interesting technical challenges.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-md text-sm">Network Security</span>
                <span className="px-3 py-1 bg-cyber-purple/20 text-cyber-purple rounded-md text-sm">System Administration</span>
                <span className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-md text-sm">Automation</span>
                <span className="px-3 py-1 bg-cyber-purple/20 text-cyber-purple rounded-md text-sm">IT Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
