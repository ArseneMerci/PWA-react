let cacheData = "appV1";
this.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheData).then(cache => {
            cache.addAll([
                "/",
                "/index.html",
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
                "/static/js/bundle.js",
                "/users",
                "/favicon.ico",
                ])
        })
    )
});

this.addEventListener("fetch", event => {
    if(!navigator.onLine) {
    event.respondWith(
        caches.match(event.request).then(resp => {
            if(resp) return resp
            const requestUrl = event.request.clone();
            console.log(requestUrl)
            fetch(requestUrl)
            // return response || fetch(event.request);
        })
    )
    }
});

