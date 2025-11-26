const CACHE_NAME = 'dhoniverse-v3';
const GITHUB_BASE = 'https://raw.githubusercontent.com/man-with-scars/temp_images/main';

// All assets to cache on install
const urlsToCache = [
  '/',
  '/index.html',
  
  // Logos
  `${GITHUB_BASE}/dhoniverse-logo.png`,
  `${GITHUB_BASE}/TDF%20WHITE.png`,
  `${GITHUB_BASE}/fav.ico`,
  
  // Font
  `${GITHUB_BASE}/divale/DivaleMagicalDemo-Regular.otf`,
  
  // Hero and About
  `${GITHUB_BASE}/dhoniverse/Dhoniverse_front.webp`,
  `${GITHUB_BASE}/dhoniverse/aboutus.webp`,
  
  // Event images
  `${GITHUB_BASE}/dhoniverse/Garuda.webp`,
  `${GITHUB_BASE}/dhoniverse/gatta.webp`,
  `${GITHUB_BASE}/dhoniverse/kabbadi.webp`,
  `${GITHUB_BASE}/dhoniverse/kalaripayattu.webp`,
  `${GITHUB_BASE}/dhoniverse/kite.webp`,
  `${GITHUB_BASE}/dhoniverse/mentalism.webp`,
  `${GITHUB_BASE}/dhoniverse/mtb.webp`,
  `${GITHUB_BASE}/dhoniverse/music.webp`,
  `${GITHUB_BASE}/dhoniverse/offroad.webp`,
  `${GITHUB_BASE}/dhoniverse/theyyam.webp`,
  `${GITHUB_BASE}/dhoniverse/tug.webp`,
];

// Install event - cache all resources
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching app shell and images');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[Service Worker] All resources cached successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[Service Worker] Cache installation failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          })
      );
    }).then(() => {
      console.log('[Service Worker] Activated and ready');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('[Service Worker] Serving from cache:', event.request.url);
          return response;
        }
        
        console.log('[Service Worker] Fetching from network:', event.request.url);
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }

          const responseToCache = response.clone();

          if (event.request.url.includes('raw.githubusercontent.com')) {
            caches.open(CACHE_NAME)
              .then(cache => {
                console.log('[Service Worker] Caching new resource:', event.request.url);
                cache.put(event.request, responseToCache);
              });
          }

          return response;
        });
      })
      .catch(error => {
        console.error('[Service Worker] Fetch failed:', error);
      })
  );
});