const CACHE='szila-v1';
const ASSETS=['index.html','listing.html','admin.html','manifest.json',
  'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600;700&family=Noto+Serif+Bengali:wght@700&display=swap'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS).catch(()=>{}))));
self.addEventListener('fetch',e=>e.respondWith(
  caches.match(e.request).then(cached=>cached||fetch(e.request).then(res=>{
    if(res.ok){const clone=res.clone();caches.open(CACHE).then(c=>c.put(e.request,clone));}
    return res;
  }).catch(()=>cached||new Response('অফলাইন মোড',{status:503})))
));
