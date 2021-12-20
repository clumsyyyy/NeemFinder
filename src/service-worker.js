import { clientsClaim, setCacheNameDetails } from "workbox-core";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching"
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { registerRoute } from "workbox-routing";
import { ExpirationPlugin } from 'workbox-expiration';
import * as strategies from "workbox-strategies";

const VERSION = "1.0.0";

setCacheNameDetails({
  prefix: 'neemfinder',
  suffix: `v${VERSION}`
});

clientsClaim();
precacheAndRoute(self.__WB_MANIFEST);

const fileExtRegex = /[^/?]+\.[^/]+$/;

registerRoute(
  ({ request, url }) => {
    if (request.mode !== 'navigate') {
      return false;
    }

    if (url.pathname.startsWith("/_")) {
      return false;
    }

    if (url.pathname.match(fileExtRegex)) {
      return false;
    }

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html")
)

registerRoute(
  new RegExp('^/static/'),
  new strategies.CacheFirst()
)

registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  new strategies.StaleWhileRevalidate({
    cacheName: `google-font-v${VERSION}`
  })
)

registerRoute(
  ({ url }) => url.origin === 'https://fonts.gstatic.com',
  new strategies.CacheFirst({
    cacheName: `google-font-v${VERSION}`,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);

registerRoute(
  ({ url }) => url.origin === 'https://cdn.jsdelivr.net',
  new strategies.CacheFirst({
    cacheName: `database-v${VERSION}`,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 90,
        maxEntries: 30,
      }),
    ],
  })
);

addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});