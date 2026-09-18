const CACHE='seneca-flight-planner-v140';
const ASSETS=[
 './','./index.html','./manifest.webmanifest','./sw.js','./icons/icon-192.png','./icons/icon-512.png',
 './assets/baron/b58/takeoff-weight.webp','./assets/baron/b58/wind-components.webp','./assets/baron/b58/takeoff-distance.webp','./assets/baron/b58/accelerate-stop.webp','./assets/baron/b58/accelerate-go.webp','./assets/baron/b58/takeoff-climb-gradient.webp','./assets/baron/b58/climb-two-engine.webp','./assets/baron/b58/climb-one-engine.webp','./assets/baron/b58/service-ceiling.webp','./assets/baron/b58/time-fuel-distance-climb.webp','./assets/baron/b58/balked-landing.webp','./assets/baron/b58/landing-distance.webp',
 './assets/baron/g58/takeoff-weight.webp','./assets/baron/g58/wind-components.webp','./assets/baron/g58/takeoff-distance.webp','./assets/baron/g58/accelerate-stop.webp','./assets/baron/g58/accelerate-go.webp','./assets/baron/g58/takeoff-climb-gradient.webp','./assets/baron/g58/climb-two-engine.webp','./assets/baron/g58/climb-one-engine.webp','./assets/baron/g58/service-ceiling.webp','./assets/baron/g58/time-fuel-distance-climb.webp','./assets/baron/g58/balked-landing.webp','./assets/baron/g58/landing-distance.webp'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
