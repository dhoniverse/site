import React from 'react';
import { CONTACT, LOGO_URL, TDF_LOGO_URL } from '../constants';
import { Phone, MapPin, Mail } from 'lucide-react';

// Custom WhatsApp Icon SVG since Lucide doesn't carry brand icons
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382C17.112 14.201 15.344 13.333 15.013 13.216C14.682 13.1 14.441 13.041 14.2 13.402C13.96 13.762 13.268 14.573 13.058 14.813C12.847 15.054 12.637 15.084 12.276 14.903C11.916 14.723 10.755 14.343 9.378 13.116C8.278 12.136 7.535 10.925 7.325 10.565C7.114 10.204 7.302 10.01 7.483 9.83C7.644 9.67 7.842 9.413 8.022 9.203C8.203 8.993 8.263 8.843 8.383 8.602C8.504 8.362 8.443 8.151 8.353 7.971C8.263 7.791 7.542 6.018 7.241 5.327C6.949 4.659 6.656 4.75 6.438 4.75H5.837C5.596 4.75 5.206 4.84 4.875 5.201C4.545 5.561 3.613 6.433 3.613 8.206C3.613 9.979 4.905 11.692 5.085 11.932C5.266 12.173 7.748 16.106 11.636 17.691C14.414 18.824 14.99 18.598 15.591 18.538C16.191 18.478 17.543 17.757 17.823 16.966C18.104 16.175 18.104 15.494 18.024 15.353C17.944 15.213 17.723 15.123 17.472 14.382ZM12.042 21.928C10.267 21.928 8.539 21.468 7.017 20.565L6.656 20.351L2.882 21.342L3.896 17.663L3.662 17.29C2.676 15.724 2.158 13.904 2.158 12.04C2.158 6.587 6.591 2.153 12.045 2.153C14.686 2.153 17.169 3.181 19.035 5.049C20.901 6.916 21.931 9.401 21.931 12.044C21.931 17.495 17.497 21.928 12.042 21.928Z" />
  </svg>
);

const Footer: React.FC = () => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`;
  const phoneUrl = `tel:${CONTACT.phone.replace(/\s/g, '')}`;
  const whatsappUrl = `https://wa.me/${CONTACT.phone.replace(/\D/g, '')}`;

  return (
    <footer id="footer" className="bg-dhoni-dark pt-24 pb-12 border-t border-dhoni-green/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <img src={LOGO_URL} alt="Dhoniverse" className="h-12 w-auto object-contain opacity-90" />
            <p className="text-dhoni-text/60 font-sans text-sm leading-relaxed">
              A celebration of culture, sports, and art in the heart of Palakkad. Join us as madness unveils.
            </p>
            <div className="flex gap-4">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dhoni-text/60 hover:text-[#25D366] transition-colors flex items-center gap-2"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-6 h-6" />
              </a>
              <a href="mailto:mridul3331@gmail.com" className="text-dhoni-text/60 hover:text-dhoni-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-dhoni-gold font-cinzel text-lg mb-6">Explore</h4>
            <ul className="space-y-3 font-sans text-sm text-dhoni-text/70">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Cultural Events</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Schedule</a></li>
              <li><a href="#partnership" className="hover:text-white transition-colors">Partnership</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-dhoni-gold font-cinzel text-lg mb-6">Contact</h4>
            <ul className="space-y-4 font-sans text-sm text-dhoni-text/70">
              <li>
                <a 
                  href={mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-3 group hover:text-white transition-colors"
                >
                  <MapPin size={18} className="mt-1 flex-shrink-0 text-dhoni-gold group-hover:text-dhoni-gold" />
                  <span className="border-b border-transparent group-hover:border-dhoni-gold/30">
                    {CONTACT.address}
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href={phoneUrl} 
                  className="flex items-center gap-3 group hover:text-white transition-colors"
                >
                  <Phone size={18} className="flex-shrink-0 text-dhoni-gold group-hover:text-dhoni-gold" />
                  <span className="border-b border-transparent group-hover:border-dhoni-gold/30">
                    {CONTACT.phone}
                  </span>
                </a>
              </li>
              <li className="mt-2 pt-2 border-t border-dhoni-text/10">
                <span className="block text-xs text-dhoni-text/40 uppercase mb-1">Coordinator</span>
                <span className="text-white">{CONTACT.name}</span>
              </li>
            </ul>
          </div>

          {/* Powered By / TDF */}
          <div className="flex flex-col justify-start md:items-end">
             <h4 className="text-dhoni-gold font-cinzel text-lg mb-6 text-left md:text-right">Powered By</h4>
             <img src={TDF_LOGO_URL} alt="The Dhoni Foundation" className="h-16 md:h-20 w-auto object-contain opacity-90" />
          </div>
        </div>

        <div className="border-t border-dhoni-text/10 pt-8 text-center font-sans text-xs text-dhoni-text/30">
          <p>&copy; 2025 Dhoniverse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;