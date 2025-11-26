import React, { useEffect, useRef, useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  critical?: boolean;
  onLoad?: () => void;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  onClick?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  critical = false,
  onLoad,
  onError,
  onClick
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(critical); // Critical images load immediately
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (critical) return; // Skip observer for critical images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '300px' // Start loading 300px before entering viewport (increased for slower connections)
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [critical]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <img
      ref={imgRef}
      src={isInView ? src : 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
      alt={alt}
      width={width}
      height={height}
      loading={critical ? 'eager' : 'lazy'}
      decoding="async"
      className={`${className} ${isLoaded ? 'lazy-loaded' : ''}`}
      onLoad={handleLoad}
      onError={onError}
      onClick={onClick}
    />
  );
};

export default LazyImage;
