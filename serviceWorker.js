const staticDevDino = "UPMH"
const assets = [
  "index.html",
  "img/cactus1.png",
  "img/cactus2.png",
  "img/dino.png",
  "img/nube.jpg",
  "img/suelo.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevDino).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })