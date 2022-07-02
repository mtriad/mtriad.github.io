const id = "#3*22-06-22",
	data = [
		"/3/",
		"app.webmanifest",
		"src/font.woff2",
		"src/style.css",
		"src/script.js",
		"img/icon.svg",
		"img/icon.png"
	]
self.addEventListener("install", e => e.waitUntil(caches.open(id).then(c => c.addAll(data))))
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(k => Promise.all(k.map(key => { if (/#3/.test(key) && key !== id) return caches.delete(key) })))))
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))))
