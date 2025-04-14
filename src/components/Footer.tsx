
import React, { useEffect, useState } from 'react';
import { Instagram, Facebook, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
  name: string;
  instagramUrl: string;
  facebookUrl: string;
  whatsappNumber: string;
  email: string;
}

const Footer: React.FC<FooterProps> = ({ 
  name, 
  instagramUrl, 
  facebookUrl, 
  whatsappNumber,
  email 
}) => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  
  // Simulate a visitor counter (client-side only)
  useEffect(() => {
    // Get count from localStorage or start from a random number if it doesn't exist
    const storedCount = localStorage.getItem('visitorCount');
    
    if (storedCount) {
      setVisitorCount(parseInt(storedCount));
      // Increment by 1 for this visit
      const newCount = parseInt(storedCount) + 1;
      localStorage.setItem('visitorCount', newCount.toString());
      setTimeout(() => setVisitorCount(newCount), 1000); // Delayed update for effect
    } else {
      // Start with a random count between 100-500 for new visitors
      const initialCount = Math.floor(Math.random() * 400) + 100;
      localStorage.setItem('visitorCount', initialCount.toString());
      setVisitorCount(initialCount);
    }
  }, []);

  const openWhatsApp = () => {
    const formattedNumber = whatsappNumber.replace(/[^\d]/g, '');
    window.open(`https://wa.me/${formattedNumber}`, '_blank');
  };

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-4">{name}</h2>
          
          <div className="flex space-x-4 mb-6">
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon text-foreground hover:text-primary"
              aria-label="Instagram Profile"
            >
              <Instagram size={24} />
            </a>
            <a 
              href={facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon text-foreground hover:text-primary"
              aria-label="Facebook Profile"
            >
              <Facebook size={24} />
            </a>
            <button
              onClick={openWhatsApp}
              className="social-icon text-foreground hover:text-primary"
              aria-label="Contact on WhatsApp"
            >
              <MessageCircle size={24} />
            </button>
            <a 
              href={`mailto:${email}`} 
              className="social-icon text-foreground hover:text-primary"
              aria-label="Contact via email"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="text-muted-foreground mb-4">
            <p>Visitors: <span className="font-medium">{visitorCount.toLocaleString()}</span></p>
          </div>
          
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
