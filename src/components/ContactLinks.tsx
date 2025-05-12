
import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

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
      
      <Dialog>
        <DialogTrigger asChild>
          <button
            aria-label={language === 'fr' ? 'Voir le numéro de téléphone' : 'View phone number'}
            className="group flex items-center gap-2 text-gray-300 hover:text-cyber-blue transition-colors"
          >
            <Phone 
              size={iconSize} 
              className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:animate-pulse-glow" 
            />
            {vertical && <span className="text-sm">{language === 'fr' ? 'Téléphone' : 'Phone'}</span>}
          </button>
        </DialogTrigger>
        <DialogContent className="bg-cyber-dark border border-cyber-blue/30 text-white w-[90%] max-w-sm animate-enter motion-reduce:animate-none">
          <div className="flex flex-col items-center justify-center py-6">
            <div className="text-4xl mb-4 text-cyber-blue animate-bounce">📞</div>
            <h2 className="text-xl font-bold mb-4 animate-fade-in neon-text">{phoneLabel}</h2>
            <a 
              href="tel:0624618601"
              className="px-6 py-3 bg-cyber-blue text-white rounded-md hover:bg-cyber-blue/80 transition-all duration-300 transform hover:scale-105 font-medium flex items-center gap-2 animate-pulse-glow shadow-lg shadow-cyber-blue/30"
            >
              <Phone 
                size={18}
                className="animate-[spin_2s_ease-in-out_infinite_alternate]" 
              />
              {language === 'fr' ? 'Appeler maintenant' : 'Call now'}
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactLinks;
