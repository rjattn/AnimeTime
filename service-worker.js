self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("anime-cache").then((cache) => {
      return cache.addAll([
        "/index.html",
        "/css/style.css",
        "/js/main.js"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});