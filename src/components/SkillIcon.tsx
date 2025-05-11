
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SkillIconProps {
  name: string;
  icon: React.ReactNode;
  level?: number; // 0-100
  className?: string;
  delay?: number;
}

const SkillIcon: React.FC<SkillIconProps> = ({
  name,
  icon,
  level = 70,
  className,
  delay = 0,
}) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            iconRef.current?.classList.add('animate-fade-in');
            iconRef.current?.classList.remove('opacity-0');
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => {
      if (iconRef.current) {
        observer.unobserve(iconRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={iconRef}
      className={cn(
        "flex flex-col items-center opacity-0",
        className
      )}
    >
      <div className="glass-card p-4 rounded-xl mb-2 animate-pulse-glow">
        {icon}
      </div>
      <span className="text-sm font-medium">{name}</span>
      <div className="w-full h-1 bg-gray-700 rounded-full mt-1">
        <div 
          className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full"
          style={{ width: `${level}%` }} 
        />
      </div>
    </div>
  );
};

export default SkillIcon;
