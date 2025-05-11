
import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { language } = useLanguage();
  
  const phoneLabel = language === 'fr' ? "Appelez-moi: 0624618601" : "Call Me: 0624618601";
  
  const contacts = [
    { 
      icon: Mail, 
      href: 'mailto:hamzaerziki@outlook.com', 
      label: language === 'fr' ? 'Email' : 'Email',
      ariaLabel: language === 'fr' ? 'Envoyer un email' : 'Send an email' 
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/hamza-erziki/', 
      label: 'LinkedIn',
      ariaLabel: language === 'fr' ? 'Voir le profil LinkedIn' : 'View LinkedIn profile' 
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
      
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a 
              href="tel:0624618601"
              aria-label={language === 'fr' ? 'Appeler' : 'Call me'}
              className="group flex items-center gap-2 text-gray-300 hover:text-cyber-blue transition-colors"
            >
              <Phone size={iconSize} className="transition-transform group-hover:scale-110" />
              {vertical && <span className="text-sm">{language === 'fr' ? 'Téléphone' : 'Phone'}</span>}
            </a>
          </TooltipTrigger>
          <TooltipContent side="top" className="bg-cyber-dark border border-cyber-blue/30 text-white">
            <div className="flex items-center gap-2">
              <span>📞 {phoneLabel}</span>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ContactLinks;
