import React from 'react';
import { Handshake, ArrowRight } from 'lucide-react';
import { CONTACT } from '../constants';

const Partnership: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hi, I am interested in partnering with Dhoniverse 2025')}`;
  const emailUrl = `mailto:mridul3331@gmail.com?subject=${encodeURIComponent('Partnership Inquiry - Dhoniverse 2025')}`;

  return (
    <section id="partnership" className="py-24 bg-dhoni-green relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Handshake className="text-dhoni-gold" size={48} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel text-dhoni-text mb-6">
            Partner <span className="text-dhoni-gold">with Us</span>
          </h2>
          <div className="w-24 h-1 bg-dhoni-gold/50 mx-auto mb-8"></div>
        </div>

        <div className="bg-dhoni-dark/30 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-dhoni-text/10 shadow-2xl">
          <p className="font-sans text-lg md:text-xl text-dhoni-text/90 leading-relaxed text-center mb-8">
            Dhoniverse invites brands, organizations, and well-wishers to join hands in celebrating Dhoni's spirit. By partnering with us, you become part of a movement that blends culture, community, and creativity. Together, let's create experiences that inspire, empower, and leave lasting impressions on everyone who steps into Dhoniverse.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-dhoni-gold text-dhoni-dark font-cinzel font-bold tracking-wide hover:bg-white transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Connect on WhatsApp</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href={emailUrl}
              className="group flex items-center gap-3 px-8 py-4 bg-transparent text-dhoni-gold font-cinzel font-bold tracking-wide border-2 border-dhoni-gold hover:bg-dhoni-gold hover:text-dhoni-dark transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Email Us</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-dhoni-text/10">
            <p className="text-sm text-dhoni-text/50 font-sans">
              For partnership inquiries, reach out to <span className="text-dhoni-gold font-bold">{CONTACT.name}</span> at <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-dhoni-gold hover:text-white transition-colors">{CONTACT.phone}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
