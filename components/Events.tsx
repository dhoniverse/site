import React from 'react';
import { EVENTS } from '../constants';
import { ZoomIn } from 'lucide-react';

interface EventsProps {
  openGlobalLightbox?: (src: string, eventData?: {title: string; category: string; description: string}) => void;
}

const Events: React.FC<EventsProps> = ({ openGlobalLightbox }) => {
  return (
    <section id="events" className="py-24 bg-dhoni-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-cinzel text-dhoni-text mb-4">
            The <span className="text-dhoni-gold">Events</span>
          </h2>
          <p className="font-sans text-dhoni-text/60 max-w-2xl mx-auto">
            A curated selection of cultural heritage, high-octane sports, and mesmerizing art forms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {EVENTS.map((event) => {
            // Special handling for "And there'll be more" event
            const isSurpriseEvent = event.image === '.nomedia' || event.category === 'Surprises';
            
            if (isSurpriseEvent) {
              return (
                <div 
                  key={event.id} 
                  className="relative h-64 md:h-80 bg-dhoni-green border border-dhoni-text/5 flex flex-col items-center justify-center p-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-dhoni-green via-dhoni-green/80 to-dhoni-dark/50" />
                  
                  <div className="relative z-10 text-center space-y-4">
                    <span className="text-xs font-bold text-dhoni-gold uppercase tracking-widest block">
                      {event.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-playfair text-dhoni-text">
                      {event.title}
                    </h3>
                    <p className="text-sm text-dhoni-text/80 font-sans leading-relaxed">
                      {event.detailedDescription}
                    </p>
                  </div>

                  {/* Decorative Border */}
                  <div className="absolute inset-4 border border-dhoni-gold/30 pointer-events-none"></div>
                </div>
              );
            }

            // Regular event cards with images
            return (
              <div 
                key={event.id} 
                className="group relative h-64 md:h-80 overflow-hidden bg-dhoni-green cursor-pointer border border-dhoni-text/5"
                tabIndex={0}
                onClick={() => openGlobalLightbox?.(event.image, {
                  title: event.title,
                  category: event.category,
                  description: event.detailedDescription
                })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openGlobalLightbox?.(event.image, {
                      title: event.title,
                      category: event.category,
                      description: event.detailedDescription
                    });
                  }
                }}
              >
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40 opacity-80"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-dhoni-dark via-transparent to-transparent opacity-90" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="text-dhoni-gold drop-shadow-lg transform scale-110" size={32} />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-500 pointer-events-none">
                  <span className="text-xs font-bold text-dhoni-gold uppercase tracking-widest mb-2 block">
                    {event.category}
                  </span>
                  <h3 className="text-2xl font-playfair text-dhoni-text mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-dhoni-text/70 font-sans opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                    {event.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-4 border border-dhoni-gold/0 group-hover:border-dhoni-gold/50 transition-all duration-500 scale-95 group-hover:scale-100 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;