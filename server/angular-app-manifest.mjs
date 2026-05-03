
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://patrick-menezes.github.io/full-stack-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-TXVCRKO7.js",
      "chunk-E6ZUFFA4.js"
    ],
    "route": "/full-stack-portfolio"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A7NGJCKK.js",
      "chunk-E6ZUFFA4.js"
    ],
    "route": "/full-stack-portfolio/minishop"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WYW7C74S.js",
      "chunk-E6ZUFFA4.js"
    ],
    "route": "/full-stack-portfolio/order-service"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9963, hash: '375e67e58094e37b6214c3c2388890b71dac6ca4e3d648e8cc7d7aa1669c010a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1102, hash: 'd884ec12c389cd8ca173167ae8fd56b72c5075fcd090a46ce1a8000716759834', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'minishop/index.html': {size: 38802, hash: 'e0a56c23f0635cc3d5983fa93d12021e9212e3ee467e769539668125f80c9c50', text: () => import('./assets-chunks/minishop_index_html.mjs').then(m => m.default)},
    'order-service/index.html': {size: 38836, hash: '8d1cb8284780fc40528cf89b5a2dde00a73048202b6c6e80f703537b511911aa', text: () => import('./assets-chunks/order-service_index_html.mjs').then(m => m.default)},
    'index.html': {size: 58889, hash: 'e91eac2de0d576dcc9230448af29db7d7756160b960ade7a89e2f1858f43d700', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4KSCEETS.css': {size: 44732, hash: 'wDrzjeKYfhE', text: () => import('./assets-chunks/styles-4KSCEETS_css.mjs').then(m => m.default)}
  },
};
