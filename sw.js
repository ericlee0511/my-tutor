const CACHE = "jp-tutor-v54";
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
  "./data/scenes_jap012.json",
  "./data/scenes_jap013.json",
  "./data/scenes_jap014.json",
  "./data/scenes_jap015.json",
  "./data/scenes_jap016.json",
  "./data/scenes_jap017.json",
  "./data/scenes_jap018.json",
  "./data/scenes_jap019.json",
  "./data/scenes_jap020.json",
  "./data/scenes_jap021.json",
  "./data/scenes_jap022.json",
  "./data/scenes_jap023.json",
  "./data/scenes_jap024.json",
  "./data/scenes_jap025.json",
  "./data/scenes_jap026.json",
  "./data/scenes_jap027.json",
  "./data/scenes_jap028.json",
  "./data/scenes_jap029.json",
  "./data/scenes_jap030.json",
  "./data/scenes_jap031.json",
  "./data/scenes_jap032.json",
  "./data/scenes_jap033.json",
  "./data/scenes_jap034.json",
  "./data/scenes_jap035.json",
  "./data/scenes_jap036.json",
  "./data/scenes_jap037.json",
  "./data/scenes_jap038.json",
  "./data/scenes_jap039.json",
  "./data/scenes_jap040.json",
  "./data/scenes_jap041.json",
  "./data/scenes_jap042.json",
  "./data/scenes_jap043.json",
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
