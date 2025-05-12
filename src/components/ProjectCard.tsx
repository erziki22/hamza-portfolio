
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  icon,
  className,
  delay = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            cardRef.current?.classList.add('animate-fade-in');
            cardRef.current?.classList.remove('opacity-0');
            
            // Add mobile-specific animation class
            if (isMobile) {
              cardRef.current?.classList.add('mobile-scroll-animation');
            }
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay, isMobile]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass-card p-5 sm:p-6 opacity-0 transform transition-all duration-300 hover:-translate-y-2 h-full",
        isMobile && "hover:shadow-lg hover:shadow-cyber-blue/30",
        className
      )}
    >
      <div className="mb-4 text-cyber-blue">{icon}</div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 font-montserrat">{title}</h3>
      <p className="text-gray-400 mb-4 text-sm font-roboto">{description}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="text-xs px-2 py-1 bg-cyber-blue/10 text-cyber-blue rounded-md font-roboto"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
