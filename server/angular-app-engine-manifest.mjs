
export default {
  basePath: 'https://patrick-menezes.github.io/full-stack-portfolio',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
