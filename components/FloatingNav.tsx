import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT } from '../constants';

const FloatingNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${CONTACT.phone.replace(/\D/g, '')}`;
  const phoneUrl = `tel:${CONTACT.phone.replace(/\s/g, '')}`;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className={`flex flex-col gap-3 mb-3 transition-all duration-300 ease-out ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'}`}>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-blur flex items-center gap-3 px-5 py-3 bg-[#25D366] text-white font-sans font-semibold rounded-full shadow-xl hover:scale-105 transition-all">
          <MessageCircle size={20} fill="currentColor" />
          <span className="text-sm">WhatsApp</span>
        </a>
        <a href={phoneUrl} className="btn-blur flex items-center gap-3 px-5 py-3 bg-dhoni-green text-dhoni-text hover:text-dhoni-gold font-sans font-semibold rounded-full shadow-xl hover:scale-105 transition-all border border-dhoni-green">
          <Phone size={20} />
          <span className="text-sm">Call Now</span>
        </a>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="btn-blur flex items-center gap-3 px-6 py-3 bg-dhoni-gold text-dhoni-dark font-divale font-bold tracking-wide hover:bg-white transition-all duration-300 rounded-full shadow-2xl hover:scale-105 border border-dhoni-gold w-full justify-center">
        <span>CONTACT NOW</span>
        <Phone size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-12' : 'rotate-0'}`} />
      </button>
    </div>
  );
};

export default FloatingNav;