importScripts("/scram/scramjet.config.js");
importScripts("/scram/scramjet.all.js");

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

async function handleRequest(event) {
  try {
    await scramjet.loadConfig();
    const requestUrl = new URL(event.request.url);
    if (!requestUrl.pathname.startsWith(scramjet.config.prefix)) {
      return fetch(event.request);
    }

    // Check if this is a Scramjet route
    if (scramjet.route(event)) {
      try {
        let response = await scramjet.fetch(event);
        
        // Clone and modify headers to remove blocking directives
        const clonedResponse = response.clone();
        const newHeaders = new Headers(clonedResponse.headers);
        
        // Remove headers that block framing
        newHeaders.delete('x-frame-options');
        newHeaders.delete('X-Frame-Options');
        newHeaders.delete('content-security-policy');
        newHeaders.delete('Content-Security-Policy');
        
        // Remove CORS restricting headers
        newHeaders.delete('cross-origin-opener-policy');
        newHeaders.delete('Cross-Origin-Opener-Policy');
        newHeaders.delete('cross-origin-resource-policy');
        newHeaders.delete('Cross-Origin-Resource-Policy');
        newHeaders.delete('cross-origin-embedder-policy');
        newHeaders.delete('Cross-Origin-Embedder-Policy');
        
        const newResponse = new Response(clonedResponse.body, {
          status: clonedResponse.status,
          statusText: clonedResponse.statusText,
          headers: newHeaders
        });
        
        return newResponse;
      } catch (error) {
        console.error('Scramjet fetch error:', error);
        return new Response('Proxy Error: ' + error.message, {
          status: 500,
          headers: { 'Content-Type': 'text/plain' }
        });
      }
    }
    
    return fetch(event.request);
  } catch (error) {
    console.error('Service worker error:', error);
    return fetch(event.request);
  }
}

self.addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event));
});

self.addEventListener("install", (event) => {
  console.log("Service worker installing...");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activating...");
  event.waitUntil(clients.claim());
});
