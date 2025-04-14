
import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  name: string;
  headline: string;
  profileImage: string;
  whatsappNumber: string;
  instagramUrl: string;
  facebookUrl: string;
}

const Header: React.FC<HeaderProps> = ({
  name,
  headline,
  profileImage,
  whatsappNumber,
  instagramUrl,
  facebookUrl
}) => {
  const openWhatsApp = () => {
    // Format the phone number and open WhatsApp
    const formattedNumber = whatsappNumber.replace(/[^\d]/g, '');
    window.open(`https://wa.me/${formattedNumber}`, '_blank');
  };

  return (
    <header className="bg-gradient-to-b from-secondary to-background py-12 md:py-20">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-6 relative">
          <img
            src={profileImage}
            alt={`${name}'s profile`}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg animate-fade-in"
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 animate-slide-up">{name}</h1>
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-6 max-w-lg animate-slide-up">{headline}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
          <Button onClick={openWhatsApp} className="flex items-center gap-2">
            <MessageCircle size={20} />
            Chat on WhatsApp
          </Button>
          
          <div className="flex gap-4 justify-center">
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon p-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground"
              aria-label="Instagram Profile"
            >
              <Instagram size={24} />
            </a>
            <a 
              href={facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon p-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground"
              aria-label="Facebook Profile"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
