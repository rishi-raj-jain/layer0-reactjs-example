export const API_CACHE_HANDLER = ({ removeUpstreamResponseHeader, cache, proxy }) => {
  removeUpstreamResponseHeader('cache-control')
  removeUpstreamResponseHeader('set-cookie')
  cache({
    edge: {
      maxAgeSeconds: 60 * 60,
      // Cache responses even if they contain cache-control: private header
      // https://docs.layer0.co/guides/caching#private
      // https://docs.layer0.co/docs/api/core/interfaces/_router_cacheoptions_.edgecacheoptions.html#forceprivatecaching
      forcePrivateCaching: true,
    },
    browser: {
      // Don't save the response in the browser
      maxAgeSeconds: 0,
      // Save the response in the browser via Layer0 service worker
      serviceWorkerSeconds: 60 * 60 * 24,
    },
  })
  proxy('api', { path: ':path*' })
}

export const IMAGE_CACHE_HANDLER = ({ removeUpstreamResponseHeader, cache, proxy }) => {
  removeUpstreamResponseHeader('cache-control')
  removeUpstreamResponseHeader('set-cookie')
  cache({
    edge: {
      maxAgeSeconds: 60 * 60,
      // Cache responses even if they contain cache-control: private header
      // https://docs.layer0.co/guides/caching#private
      // https://docs.layer0.co/docs/api/core/interfaces/_router_cacheoptions_.edgecacheoptions.html#forceprivatecaching
      forcePrivateCaching: true,
    },
    browser: {
      // Don't save the response in the browser
      maxAgeSeconds: 0,
      // Save the response in the browser via Layer0 service worker
      serviceWorkerSeconds: 60 * 60 * 24,
    },
  })
  proxy('image', { path: '/' })
}
