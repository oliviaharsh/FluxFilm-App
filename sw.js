const CACHE = 'fluxfilm-shell-v1';
const FILES = [
  'fluxfilmpwa_pwa_ready.html',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', evt => {
  evt.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(r => r || fetch(evt.request))
  );
});
