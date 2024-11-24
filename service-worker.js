self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/',
        'https://cdn.jsdelivr.net/gh/momensakral/img@main/momen-sakral-homepage.webp',
        'https://cdn.jsdelivr.net/gh/momensakral/img@main/momen-sakral-logo.webp'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
