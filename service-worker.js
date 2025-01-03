const CACHE_NAME = "simulador-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/style.css", // Se houver um arquivo de estilo
  "/script.js", // Se houver um arquivo de script
  "/icon-192x192.png",
  "/icon-512x512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
