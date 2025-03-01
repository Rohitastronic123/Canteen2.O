// const CACHE_NAME = "rso-canteen-cache-v1";
// const urlsToCache = [
//   "/",
//   "/index.html",
//   "/small.jpeg",
//   "/big.jpeg",
//   "/icon-512.png",
//   "/manifest.json",
//   "/static/js/bundle.js",
//   "/static/js/main.chunk.js",
//   "/static/js/vendors~main.chunk.js",
//   "/static/css/main.css"
// ];

// // Install Service Worker
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// // Fetch and serve cached content
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response || fetch(event.request);
//     })
//   );
// });

// // Activate and remove old caches
// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cache) => {
//           if (cache !== CACHE_NAME) {
//             return caches.delete(cache);
//           }
//         })
//       );
//     })
//   );
// });
