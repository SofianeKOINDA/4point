/* Four Points · Guest Guide — service worker (offline support) */
const VERSION = "v1";
const SHELL_CACHE = `fp-shell-${VERSION}`;
const RUNTIME_CACHE = `fp-runtime-${VERSION}`;

/* Pages précachées pour fonctionner hors-ligne dès la 1re visite. */
const SHELL_ROUTES = [
  "/",
  "/discover",
  "/transport",
  "/infos",
  "/ten",
  "/map",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(SHELL_CACHE);
      // addAll échoue en bloc si une route 404 : on tolère les absences.
      await Promise.allSettled(
        SHELL_ROUTES.map((route) => cache.add(new Request(route, { cache: "reload" })))
      );
      self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key !== SHELL_CACHE && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // On ne gère que le GET same-origin ; le reste passe au réseau.
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Navigations (pages) : réseau d'abord, puis cache, puis accueil hors-ligne.
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(request);
          const cache = await caches.open(RUNTIME_CACHE);
          cache.put(request, fresh.clone());
          return fresh;
        } catch {
          const cached = await caches.match(request);
          return cached || (await caches.match("/")) || Response.error();
        }
      })()
    );
    return;
  }

  // Assets statiques & images : cache d'abord, mise à jour en arrière-plan.
  event.respondWith(
    (async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      try {
        const fresh = await fetch(request);
        if (fresh.ok && fresh.type === "basic") {
          const cache = await caches.open(RUNTIME_CACHE);
          cache.put(request, fresh.clone());
        }
        return fresh;
      } catch {
        return cached || Response.error();
      }
    })()
  );
});
