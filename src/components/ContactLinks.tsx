
import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
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
  const isMobile = useIsMobile();
  
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
            className="group flex items-center gap-2 text-gray-300 hover:text-cyber-blue transition-all"
          >
            <Phone 
              size={iconSize} 
              className={cn(
                "transition-all duration-300",
                isMobile ? "group-hover:animate-[spin_1s_ease-in-out]" : "group-hover:scale-110"
              )} 
            />
            {vertical && <span className="text-sm">{language === 'fr' ? 'Téléphone' : 'Phone'}</span>}
          </button>
        </DialogTrigger>
        <DialogContent className={cn(
          "bg-cyber-dark border border-cyber-blue/30 text-white w-[90%] max-w-sm",
          isMobile && "animate-[bounceIn_0.5s_ease-out_forwards]"
        )}>
          <div className={cn(
            "flex flex-col items-center justify-center py-6",
            isMobile && "animate-pulse-glow"
          )}>
            <div className={cn(
              "text-4xl mb-4 text-cyber-blue",
              isMobile && "animate-[pulse_2s_infinite]"
            )}>📞</div>
            <h2 className="text-xl font-bold mb-4">{phoneLabel}</h2>
            <a 
              href="tel:0624618601"
              className={cn(
                "px-6 py-3 bg-cyber-blue text-white rounded-md hover:bg-cyber-blue/80 transition-colors font-medium flex items-center gap-2",
                isMobile && "animate-[pulse_3s_infinite] hover:animate-none"
              )}
            >
              <Phone size={18} />
              {language === 'fr' ? 'Appeler maintenant' : 'Call now'}
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactLinks;
