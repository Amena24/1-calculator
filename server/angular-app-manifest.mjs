
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular-practice/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Angular-practice"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2798, hash: '6a8075a46c480a26f4a44303f536034abb65308eae217ae376e678506549c39b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1130, hash: 'f440717bf61e2073e95805607f03b0ae7371caf23a4d88fd3803a0b14c3d11a9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7924, hash: '8b7e782a5227c3831371f29c106d3ced8449ccbdc4189e1a8cba7909c170791b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KPVVXXZ5.css': {size: 6376, hash: 'fZOsUhrO4VI', text: () => import('./assets-chunks/styles-KPVVXXZ5_css.mjs').then(m => m.default)}
  },
};
