
import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';
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
      href: 'mailto:hamzaerziki@outlook.com', 
      label: 'Email',
      ariaLabel: 'Send an email' 
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/hamza-erziki/', 
      label: 'LinkedIn',
      ariaLabel: 'View LinkedIn profile' 
    },
    { 
      icon: Phone, 
      href: 'tel:0624618601', 
      label: 'Phone',
      ariaLabel: 'Call me' 
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
          target={contact.icon === Linkedin ? "_blank" : undefined}
          rel={contact.icon === Linkedin ? "noopener noreferrer" : undefined}
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
