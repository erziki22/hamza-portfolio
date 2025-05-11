
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactLinksProps {
  className?: string;
  iconSize?: number;
  vertical?: boolean;
}

const ContactLinks: React.FC<ContactLinksProps> = ({ 
  className,
  iconSize = 20, 
  vertical = false 
}) => {
  const contacts = [
    { 
      icon: Mail, 
      href: 'mailto:contact@example.com', 
      label: 'Email',
      ariaLabel: 'Send an email' 
    },
    { 
      icon: Github, 
      href: 'https://github.com/yourusername', 
      label: 'GitHub',
      ariaLabel: 'View GitHub profile' 
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/yourusername', 
      label: 'LinkedIn',
      ariaLabel: 'View LinkedIn profile' 
    }
  ];

  return (
    <div className={cn(
      vertical ? 'flex flex-col gap-4' : 'flex gap-4 items-center',
      className
    )}>
      {contacts.map((contact, index) => (
        <a 
          key={index}
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={contact.ariaLabel}
          className="group flex items-center gap-2 text-gray-300 hover:text-cyber-blue transition-colors"
        >
          <contact.icon size={iconSize} className="transition-transform group-hover:scale-110" />
          {vertical && <span className="text-sm">{contact.label}</span>}
        </a>
      ))}
    </div>
  );
};

export default ContactLinks;
