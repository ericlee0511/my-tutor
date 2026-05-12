const CACHE = "jp-tutor-v19";
const ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./style.css",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./data/vocab.json",
  "./data/grammar.json",
  "./data/quiz.json",
  "./data/scenes_jap001.json",
  "./data/scenes_jap002.json",
  "./data/scenes_jap003.json",
  "./data/scenes_jap004.json",
  "./data/scenes_jap005.json",
  "./data/scenes_jap006.json",
  "./data/scenes_jap007.json",
  "./data/scenes_jap008.json",
  "./data/scenes_jap009.json",
  "./data/scenes_jap010.json",
  "./data/scenes_jap011.json",
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return resp;
      }).catch(() => cached);
    })
  );
});
