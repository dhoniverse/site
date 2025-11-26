// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('✅ Service Worker registered successfully:', registration.scope);
        
        setInterval(() => {
          registration.update();
        }, 1000 * 60 * 60 * 24);
        
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          console.log('🔄 Service Worker update found');
          
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('✨ New Service Worker available - refresh to update');
              
              if (confirm('A new version of the site is available. Reload to update?')) {
                window.location.reload();
              }
            }
          });
        });
      })
      .catch(error => {
        console.error('❌ Service Worker registration failed:', error);
      });
  });
  
  navigator.serviceWorker.addEventListener('message', event => {
    console.log('📬 Message from Service Worker:', event.data);
  });
  
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    console.log('🔄 Service Worker controller changed');
  });
}