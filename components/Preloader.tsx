import React, { useEffect, useState } from 'react';
import { LOGO_URL, TDF_LOGO_URL } from '../constants';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(onComplete, 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[99999] bg-[#101010] flex flex-col items-center justify-center transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex items-center gap-6 mb-16">
        <img src={TDF_LOGO_URL} alt="Dhoni Foundation" className="h-12 md:h-20 w-auto" />
        <div className="h-10 w-[1px] bg-white/20"></div>
        <img src={LOGO_URL} alt="Dhoniverse" className="h-12 md:h-20 w-auto" />
      </div>
      <div className="mb-16">
        <div className="loader"></div>
      </div>
      <div className="font-sans text-dhoni-gold font-bold text-lg tracking-wider">
        Loading Experience...
      </div>
    </div>
  );
};

export default Preloader;