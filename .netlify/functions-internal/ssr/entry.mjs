import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Zrhj7Z8L.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_P6CH66Kv.mjs');
const _page1 = () => import('./chunks/about_NziKyPZi.mjs');
const _page2 = () => import('./chunks/index_-5Vd3lrv.mjs');
const _page3 = () => import('./chunks/_.._JhXkIYz9.mjs');
const _page4 = () => import('./chunks/index_EB_ILpwB.mjs');
const _page5 = () => import('./chunks/contact_5ew4yOFD.mjs');
const _page6 = () => import('./chunks/rss_RZRj-brP.mjs');
const _page7 = () => import('./chunks/thank-you_utzskPQN.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/blog/[...slug].astro", _page3],
    ["src/pages/index.astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/rss.xml.js", _page6],
    ["src/pages/thank-you.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = undefined;
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
serverEntrypointModule.start?.(_manifest, _args);

export { __astrojsSsrVirtualEntry as default, pageMap };
