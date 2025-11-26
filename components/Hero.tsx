import React, { RefObject, useState, useEffect } from 'react';
import { ArrowRight, X, ZoomIn, Phone, MessageCircle } from 'lucide-react';
import { LOGO_URL, TDF_LOGO_URL, CONTACT, HERO_BACKGROUND } from '../constants';

interface HeroProps {
  anchorRef: RefObject<HTMLDivElement | null>;
  openGlobalLightbox: (src: string) => void;
}

// GitHub CDN Base URL
const GITHUB_BASE = "https://raw.githubusercontent.com/man-with-scars/temp_images/main/dhoniverse";

// Mapping image assets to event details for the Microcard - All GitHub CDN
const GALLERY_ITEMS = [
  { 
    src: `${GITHUB_BASE}/gatta.webp`, 
    alt: "Gatta Gusthi event image",
    title: "Gatta Gusthi",
    desc: "Traditional mud wrestling championship showing raw power.",
    time: "Sat, 3:00 PM"
  },
  { 
    src: `${GITHUB_BASE}/kabbadi.webp`, 
    alt: "Kabbadi event image",
    title: "Kabbadi",
    desc: "Pro-level matches featuring top local teams.",
    time: "Sat, 7:00 PM"
  },
  { 
    src: `${GITHUB_BASE}/kalaripayattu.webp`, 
    alt: "Kalaripayattu event image",
    title: "Kalaripayattu",
    desc: "The mother of all martial arts in its purest form.",
    time: "Sat, 9:00 AM"
  },
  { 
    src: `${GITHUB_BASE}/mtb.webp`, 
    alt: "MTB Race event image",
    title: "MTB Race",
    desc: "Adrenaline-fueled mountain biking through Dhoni terrain.",
    time: "Sat, 11:00 AM"
  },
  { 
    src: `${GITHUB_BASE}/music.webp`, 
    alt: "Music Fest image",
    title: "Music Fest",
    desc: "Live bands performing under the starlit sky.",
    time: "Sun, 8:00 PM"
  },
  { 
    src: `${GITHUB_BASE}/theyyam.webp`, 
    alt: "Theyyam event image",
    title: "Theyyam",
    desc: "Divine ritual art form invoking the spirits.",
    time: "Fri, 5:30 PM"
  },
];

const Hero: React.FC<HeroProps> = ({ anchorRef, openGlobalLightbox }) => {
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${CONTACT.phone.replace(/\D/g, '')}`;
  const phoneUrl = `tel:${CONTACT.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isConnectOpen) setIsConnectOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isConnectOpen]);

  return (
    <section id="hero" className="relative w-full min-h-screen pt-20 md:pt-0 bg-dhoni-dark grid grid-cols-1 md:grid-cols-[40%_60%] lg:grid-cols-[35%_65%] overflow-hidden">
      
      <div className="hero-left relative z-10 flex flex-col justify-center px-6 md:px-12 py-12 h-full order-2 md:order-1 border-r border-dhoni-green/20">
        
        <div className="mb-8">
          <img src={TDF_LOGO_URL} alt="Dhoni Foundation" className="h-12 w-auto object-contain opacity-90" />
        </div>

        <div 
          ref={anchorRef} 
          id="hero-logo-anchor" 
          className="w-[280px] h-[80px] mb-6 opacity-0 pointer-events-none" 
          aria-hidden="true"
        />

        <div className="space-y-6">
          <div className="flex items-center gap-3 text-dhoni-gold font-sans tracking-widest text-sm uppercase">
            <span className="w-8 h-[1px] bg-dhoni-gold"></span>
            <span>Madness Unveils</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-dhoni-text leading-tight">
            Dec 26-28 <br />
            <span className="text-dhoni-gold font-cinzel">2025</span>
          </h2>
          
          <p className="text-dhoni-text/70 font-sans max-w-sm">
            Experience the rhythm of the wild. Where every path leads to discovery and every sound tells a story.
          </p>

          <div 
            className="grid grid-cols-2 min-[481px]:grid-cols-3 gap-3 md:gap-4 my-6 w-full max-w-lg" 
            aria-label="Event image gallery"
          >
            {GALLERY_ITEMS.map((item, idx) => (
              <div
                key={idx}
                onClick={() => openGlobalLightbox(item.src)}
                className="relative group aspect-[4/3] overflow-hidden rounded-lg border border-dhoni-green/30 bg-dhoni-green/10 shadow-lg transition-all duration-300 hover:border-dhoni-gold/40 cursor-pointer focus-within:ring-2 focus-within:ring-dhoni-gold focus-within:ring-offset-2 focus-within:ring-offset-dhoni-dark"
                tabIndex={0}
                aria-label={`View full size image of ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openGlobalLightbox(item.src);
                  }
                }}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="text-dhoni-gold drop-shadow-md" size={24} />
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-2 w-fit">
             <div 
               className={`absolute left-0 bottom-full mb-4 flex flex-col gap-2 transition-all duration-300 origin-bottom-left ${isConnectOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'}`}
             >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 rounded-full bg-dhoni-green text-dhoni-text hover:text-dhoni-gold shadow-xl hover:scale-105 transition-transform border border-dhoni-green hover:border-dhoni-gold/30">
                  <MessageCircle size={18} fill="currentColor" />
                  <span className="text-sm font-bold font-sans">WhatsApp</span>
                </a>
                <a href={phoneUrl} className="flex items-center gap-3 px-4 py-2 rounded-full bg-dhoni-green text-dhoni-text hover:text-dhoni-gold border border-dhoni-green shadow-xl hover:scale-105 transition-transform hover:border-dhoni-gold/30">
                  <Phone size={18} />
                  <span className="text-sm font-bold font-sans">Call Now</span>
                </a>
             </div>

             <button 
               onClick={() => setIsConnectOpen(!isConnectOpen)}
               className="flex items-center gap-3 px-8 py-4 bg-dhoni-gold text-dhoni-dark font-cinzel font-bold tracking-wide hover:bg-white transition-colors duration-300 rounded-sm relative z-10"
               aria-expanded={isConnectOpen}
             >
               {isConnectOpen ? 'Close Options' : 'Connect with us'} 
               <div className={`transition-transform duration-300 ${isConnectOpen ? 'rotate-45' : ''}`}>
                 {isConnectOpen ? <X size={20} /> : <ArrowRight size={20} />}
               </div>
             </button>
          </div>
        </div>
      </div>

      <div className="hero-right relative h-[50vh] md:h-auto order-1 md:order-2 z-0">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={HERO_BACKGROUND} 
            alt="Dhoni Forest Landscape" 
            className="w-full h-full object-cover object-center md:object-[center_top]"
            loading="eager"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-premium" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block z-10 w-full max-w-3xl px-8">
           <div className="space-y-6 p-8 rounded-lg bg-gradient-to-br from-dhoni-dark/85 via-dhoni-dark/70 to-dhoni-dark/50 backdrop-blur-md border border-dhoni-gold/20">
              <div className="text-center space-y-4">
                <p className="font-playfair italic text-2xl md:text-3xl lg:text-4xl text-dhoni-text leading-relaxed drop-shadow-2xl">
                  "where every heartbeat belongs to"
                </p>
                <img src={LOGO_URL} alt="Dhoniverse" className="h-20 md:h-24 lg:h-28 w-auto object-contain opacity-95 drop-shadow-2xl mx-auto" />
              </div>
              
              <div className="pt-4 border-t border-dhoni-gold/20">
                <p className="text-dhoni-text/90 font-sans text-sm md:text-base leading-relaxed text-center">
                  Dhoni is a beautiful village in Palakkad, surrounded by green hills and gentle mist. Here, you can hear nature's sounds — bamboo leaves rustling, streams flowing over rocks, and peaceful sunsets coloring the sky. Famous for its calm waterfalls, green trails, and traditional charm, Dhoni is one of Kerala's hidden gems, now welcoming everyone to explore its art, culture, and adventure.
                </p>
              </div>
           </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;