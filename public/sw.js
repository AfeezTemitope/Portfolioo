// Service Worker — Afeez Temitope Bello Portfolio
// Strategy: Network-first for HTML, stale-while-revalidate for assets

const CACHE_VERSION = "v1.0.0";
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `runtime-${CACHE_VERSION}`;
const IMAGE_CACHE = `images-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  "/",
  "/offline.html",
  "/fallback.webp",
  "/manifest.webmanifest",
];

// Install — precache critical assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate — clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter(
              (k) =>
                ![STATIC_CACHE, RUNTIME_CACHE, IMAGE_CACHE].includes(k)
            )
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

// Fetch — strategy depends on resource type
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET, chrome-extension, analytics
  if (request.method !== "GET") return;
  if (!url.protocol.startsWith("http")) return;
  if (
    url.hostname.includes("googletagmanager") ||
    url.hostname.includes("google-analytics") ||
    url.hostname.includes("googlesyndication") ||
    url.hostname.includes("doubleclick")
  ) {
    return;
  }

  // HTML — network-first, fallback to offline page
  if (request.mode === "navigate" || request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(RUNTIME_CACHE).then((c) => c.put(request, copy));
          return res;
        })
        .catch(() =>
          caches.match(request).then((r) => r || caches.match("/offline.html"))
        )
    );
    return;
  }

  // Images — stale-while-revalidate
  if (
    request.destination === "image" ||
    /\.(webp|png|jpg|jpeg|svg|gif|avif)$/i.test(url.pathname)
  ) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) =>
        cache.match(request).then((cached) => {
          const fetchPromise = fetch(request)
            .then((res) => {
              if (res && res.status === 200) cache.put(request, res.clone());
              return res;
            })
            .catch(() => cached || caches.match("/fallback.webp"));
          return cached || fetchPromise;
        })
      )
    );
    return;
  }

  // JS / CSS / fonts — stale-while-revalidate
  if (
    request.destination === "script" ||
    request.destination === "style" ||
    request.destination === "font" ||
    /\.(js|css|woff2?|ttf)$/i.test(url.pathname)
  ) {
    event.respondWith(
      caches.open(RUNTIME_CACHE).then((cache) =>
        cache.match(request).then((cached) => {
          const fetchPromise = fetch(request).then((res) => {
            if (res && res.status === 200) cache.put(request, res.clone());
            return res;
          });
          return cached || fetchPromise;
        })
      )
    );
    return;
  }

  // Default — network with cache fallback
  event.respondWith(
    fetch(request).catch(() => caches.match(request) as Promise<Response>)
  );
});
