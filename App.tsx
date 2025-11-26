import React, { useRef, useLayoutEffect, useCallback, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Schedule from './components/Schedule';
import Partnership from './components/Partnership';
import Footer from './components/Footer';
import FloatingNav from './components/FloatingNav';
import Preloader from './components/Preloader';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  
  // Lightbox State
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [lightboxEvent, setLightboxEvent] = useState<{title: string; category: string; description: string} | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Refs for Logo Animation
  const anchorRef = useRef<HTMLDivElement>(null);
  const navPlaceholderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  
  // Ref for the Global Top Dim/Blur Overlay
  const topDimRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading || lightboxImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading, lightboxImg]);

  // Lightbox Handlers
  const openLightbox = useCallback((src: string, eventData?: {title: string; category: string; description: string}) => {
    setLightboxImg(src);
    setLightboxEvent(eventData || null);
    setZoomLevel(1);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImg(null);
    setLightboxEvent(null);
  }, []);

  const handleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => prev > 1 ? 1 : 2);
  };

  // --- Keyboard Arrow Navigation Logic ---
  useEffect(() => {
    if (loading || lightboxImg) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Close Lightbox with Esc
      if (e.key === 'Escape' && lightboxImg) {
        closeLightbox();
        return;
      }

      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;

      // List of major sections in order
      const sections = ['hero', 'about', 'events', 'schedule', 'partnership', 'footer'];
      
      // Prevent default scrolling behavior
      e.preventDefault();

      // Simplified: Calculate current section index based on scroll position relative to elements
      let closestIndex = 0;
      let minDistance = Infinity;

      sections.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Distance from top of viewport
          const distance = Math.abs(rect.top); 
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      let targetIndex = closestIndex;
      if (e.key === 'ArrowDown') {
        targetIndex = Math.min(closestIndex + 1, sections.length - 1);
      } else if (e.key === 'ArrowUp') {
        targetIndex = Math.max(closestIndex - 1, 0);
      }

      if (targetIndex !== closestIndex) {
         const targetId = sections[targetIndex];
         const targetEl = document.getElementById(targetId);
         if (targetEl) {
            // Calculate header offset (roughly 80-100px)
            const headerOffset = 80;
            const elementPosition = targetEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - (targetId === 'hero' ? 0 : headerOffset);

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });

            // Manage Focus: Find first focusable element in target section
            setTimeout(() => {
              const focusable = targetEl.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
              if (focusable.length > 0) {
                focusable[0].focus({ preventScroll: true });
              } else {
                targetEl.setAttribute('tabindex', '-1');
                targetEl.focus({ preventScroll: true });
              }
            }, 500);
         }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [loading, lightboxImg, closeLightbox]);


  const calculatePosition = useCallback(() => {
    const scrollY = window.scrollY;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Part 1: Smart Logo Animation ---
    if (anchorRef.current && navPlaceholderRef.current && logoRef.current) {
      const navRect = navPlaceholderRef.current.getBoundingClientRect();
      const anchorRect = anchorRef.current.getBoundingClientRect();
      const ANIMATION_DISTANCE = 300; 
      
      const progress = Math.min(Math.max(scrollY / ANIMATION_DISTANCE, 0), 1);

      if (progress === 1) {
        logoRef.current.style.transform = 'translate3d(0,0,0) scale(1)';
        logoRef.current.style.opacity = '1';
      } else {
        const deltaX = anchorRect.left - navRect.left;
        const deltaY = anchorRect.top - navRect.top;
        const scaleX = anchorRect.width / navRect.width;
        const easedProgress = 1 - Math.pow(1 - progress, 3); 
        const currentX = deltaX * (1 - easedProgress);
        const currentY = deltaY * (1 - easedProgress);
        const currentScale = scaleX - ((scaleX - 1) * easedProgress);

        logoRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${currentScale})`;
        logoRef.current.style.opacity = '1';
      }
    }

    // --- Part 2: Global Top 30% Scroll-Driven Quantized Blur & Dim ---
    if (topDimRef.current) {
      // Effect applies over top 30% of viewport height
      const maxScrollRange = window.innerHeight * 0.3; 
      const progress = Math.min(scrollY / maxScrollRange, 1);

      if (isReducedMotion) {
        // Fallback: just simple dimming
        topDimRef.current.style.backgroundColor = `rgba(0, 0, 0, ${progress * 0.8})`;
        topDimRef.current.style.backdropFilter = 'none';
        topDimRef.current.style.webkitBackdropFilter = 'none';
      } else {
        // 1. Calculate Quantized Blur (0, 20, 40, 60, 80, 100)
        const maxBlur = 100; // px
        const step = 20;
        const rawBlur = progress * maxBlur;
        // Quantize to nearest step
        const quantizedBlur = Math.floor(rawBlur / step) * step;
        
        // 2. Calculate Opacity (0 -> 0.8)
        const maxOpacity = 0.8;
        const opacity = progress * maxOpacity;

        topDimRef.current.style.backdropFilter = `blur(${quantizedBlur}px)`;
        topDimRef.current.style.webkitBackdropFilter = `blur(${quantizedBlur}px)`;
        topDimRef.current.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
      }
    }

  }, []);

  useLayoutEffect(() => {
    calculatePosition();
    const handleScroll = () => requestAnimationFrame(calculatePosition);
    const handleResize = () => requestAnimationFrame(calculatePosition);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [calculatePosition]);

  return (
    <div className="relative w-full bg-dhoni-dark text-dhoni-text selection:bg-dhoni-gold selection:text-dhoni-dark">
      
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Lightbox Overlay */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md lightbox-overlay"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/50 hover:text-dhoni-gold transition-colors z-20 p-2"
          >
            <X size={32} />
          </button>
          
          <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center p-4 md:p-8 gap-6 overflow-y-auto">
            {/* Image Container */}
            <div 
              className="relative flex-shrink-0 w-full lg:w-3/5 h-[50vh] lg:h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={lightboxImg} 
                alt="Fullscreen view"
                className="max-w-full max-h-full object-contain transition-transform duration-300 lightbox-img"
                style={{ transform: `scale(${zoomLevel})`, touchAction: 'none' }}
                onClick={handleZoom}
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 rounded-full text-xs text-white/70 pointer-events-none backdrop-blur-sm">
                {zoomLevel > 1 ? "Tap to fit" : "Tap to zoom"}
              </div>
            </div>

            {/* Event Description Panel */}
            {lightboxEvent && (
              <div 
                className="w-full lg:w-2/5 max-w-xl bg-dhoni-green/80 backdrop-blur-md rounded-lg p-6 md:p-8 max-h-[40vh] lg:max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-dhoni-gold/20 text-dhoni-gold text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                    {lightboxEvent.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-cinzel text-dhoni-text mb-4">
                    {lightboxEvent.title}
                  </h3>
                  <div className="w-16 h-1 bg-dhoni-gold/50 mb-6"></div>
                </div>
                <p className="font-sans text-dhoni-text/90 leading-relaxed text-base md:text-lg">
                  {lightboxEvent.description}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Global Top-Edge Blur & Dim Overlay */}
      <div 
        ref={topDimRef}
        className="fixed top-0 left-0 w-full h-[30vh] z-40 pointer-events-none transition-colors duration-100 ease-out will-change-[backdrop-filter,background-color]"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          backdropFilter: 'blur(0px)',
          WebkitBackdropFilter: 'blur(0px)'
        }}
      />

      <Navbar logoRef={logoRef} placeholderRef={navPlaceholderRef} />
      
      <main className="relative z-0">
        <Hero anchorRef={anchorRef} openGlobalLightbox={openLightbox} />
        <About openGlobalLightbox={openLightbox} />
        <Events openGlobalLightbox={openLightbox} />
        <Schedule />
        <Partnership />
        <Footer />
      </main>

      <FloatingNav />
    </div>
  );
};

export default App;

// App.tsx (or index.tsx)
import './styles/gallery-overrides.css';
