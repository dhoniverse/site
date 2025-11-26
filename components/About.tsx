import React from 'react';
import { ABOUT_IMAGE_URL, CONTACT } from '../constants';
import { Phone, Mail } from 'lucide-react';

// WhatsApp Icon (custom SVG since Lucide doesn't have brand icons)
const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382C17.112 14.201 15.344 13.333 15.013 13.216C14.682 13.1 14.441 13.041 14.2 13.402C13.96 13.762 13.268 14.573 13.058 14.813C12.847 15.054 12.637 15.084 12.276 14.903C11.916 14.723 10.755 14.343 9.378 13.116C8.278 12.136 7.535 10.925 7.325 10.565C7.114 10.204 7.302 10.01 7.483 9.83C7.644 9.67 7.842 9.413 8.022 9.203C8.203 8.993 8.263 8.843 8.383 8.602C8.504 8.362 8.443 8.151 8.353 7.971C8.263 7.791 7.542 6.018 7.241 5.327C6.949 4.659 6.656 4.75 6.438 4.75H5.837C5.596 4.75 5.206 4.84 4.875 5.201C4.545 5.561 3.613 6.433 3.613 8.206C3.613 9.979 4.905 11.692 5.085 11.932C5.266 12.173 7.748 16.106 11.636 17.691C14.414 18.824 14.99 18.598 15.591 18.538C16.191 18.478 17.543 17.757 17.823 16.966C18.104 16.175 18.104 15.494 18.024 15.353C17.944 15.213 17.723 15.123 17.472 14.382ZM12.042 21.928C10.267 21.928 8.539 21.468 7.017 20.565L6.656 20.351L2.882 21.342L3.896 17.663L3.662 17.29C2.676 15.724 2.158 13.904 2.158 12.04C2.158 6.587 6.591 2.153 12.045 2.153C14.686 2.153 17.169 3.181 19.035 5.049C20.901 6.916 21.931 9.401 21.931 12.044C21.931 17.495 17.497 21.928 12.042 21.928Z" />
  </svg>
);

interface AboutProps {
  openGlobalLightbox?: (src: string) => void;
}

const About: React.FC<AboutProps> = ({ openGlobalLightbox }) => {
  const whatsappUrl = `https://wa.me/${(CONTACT.phone || '').replace(/\D/g, '')}`;
  const phoneUrl = `tel:${(CONTACT.phone || '').replace(/\s/g, '')}`;
  const emailUrl = `mailto:${CONTACT.email || 'mridul3331@gmail.com'}`;

  return (
    <section id="about" className="py-24 bg-dhoni-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel text-dhoni-text mb-4">
                <span className="text-dhoni-gold">About</span> us
              </h2>
              <div className="w-16 h-1 bg-dhoni-gold/50 mb-8" />
            </div>

            <p className="text-dhoni-text/80 font-sans text-base md:text-lg leading-relaxed">
              Dhoniverse is a three-day cultural and sports extravaganza celebrating the spirit of Palakkad. 
              Nestled in the lush greenery of Dhoni, this festival brings together tradition, adrenaline, and art. 
              From the rhythmic beats of Theyyam to the rugged trails of the MTB race, Dhoniverse is where heritage 
              meets modern passion.
            </p>

            {/* Programme Coordinator Section */}
            <div className="pt-6 border-t border-dhoni-text/10">
              <h3 className="text-dhoni-gold font-sans text-sm uppercase tracking-widest mb-4">
                Programme Coordinator
              </h3>
              
              {/* Coordinator Name */}
              <p className="text-dhoni-text font-sans text-xl md:text-2xl font-semibold mb-4">
                {CONTACT.name}
              </p>

              {/* Contact Icons */}
              <div className="flex items-center gap-4">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-dhoni-green border border-dhoni-text/20 hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 hover:scale-110"
                  title="Chat on WhatsApp"
                >
                  <WhatsAppIcon size={22} className="text-dhoni-text group-hover:text-white transition-colors" />
                </a>

                {/* Phone */}
                <a
                  href={phoneUrl}
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-dhoni-green border border-dhoni-text/20 hover:bg-dhoni-gold hover:border-dhoni-gold transition-all duration-300 hover:scale-110"
                  title="Call now"
                >
                  <Phone size={20} className="text-dhoni-text group-hover:text-dhoni-dark transition-colors" />
                </a>

                {/* Email */}
                <a
                  href={emailUrl}
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-dhoni-green border border-dhoni-text/20 hover:bg-dhoni-gold hover:border-dhoni-gold transition-all duration-300 hover:scale-110"
                  title="Send email"
                >
                  <Mail size={20} className="text-dhoni-text group-hover:text-dhoni-dark transition-colors" />
                </a>
              </div>

              {/* Contact Details (visible text) */}
              <div className="mt-4 space-y-1 text-dhoni-text/60 text-sm font-sans">
                <p>{CONTACT.phone}</p>
                <p>{CONTACT.email || 'mridul3331@gmail.com'}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div 
            className="relative group cursor-pointer"
            onClick={() => openGlobalLightbox?.(ABOUT_IMAGE_URL)}
          >
            <div className="relative overflow-hidden rounded-lg border border-dhoni-green/30 shadow-2xl">
              <img 
                src={ABOUT_IMAGE_URL} 
                alt="About Dhoniverse Festival" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dhoni-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
