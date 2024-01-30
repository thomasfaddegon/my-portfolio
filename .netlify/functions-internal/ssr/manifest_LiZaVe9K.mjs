import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_ERHejuka.mjs';
import 'clsx';
import 'cssesc';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"thank-you/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/thank-you","isIndex":false,"type":"page","pattern":"^\\/thank-you\\/?$","segments":[[{"content":"thank-you","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thank-you.astro","pathname":"/thank-you","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/thank-you.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-manifest":"manifest_LiZaVe9K.mjs","/Users/tomfaddegon/Desktop/toms-portfolio/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_P6CH66Kv.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_3DMpL_2l.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_eyT6ZKcs.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._W7kgd1i6.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_3d19R57c.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_9vRPklRu.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_iIiiQgXs.mjs","\u0000@astro-page:src/pages/thank-you@_@astro":"chunks/thank-you_MYohYQxh.mjs","/Users/tomfaddegon/Desktop/toms-portfolio/src/content/blog/first-post.md?astroContentCollectionEntry=true":"chunks/first-post_sR8Mm45u.mjs","/Users/tomfaddegon/Desktop/toms-portfolio/src/content/blog/markdown-style-guide.md?astroContentCollectionEntry=true":"chunks/markdown-style-guide_Yn4K0K7y.mjs","/Users/tomfaddegon/Desktop/toms-portfolio/src/content/blog/second-post.md?astroContentCollectionEntry=true":"chunks/second-post_7__189bx.mjs","/Users/tomfaddegon/Desktop/toms-portfolio/src/content/blog/third-post.md?astroContentCollectionEntry=true":"chunks/third-post_AI1qIoyR.mjs","/Users/tomfaddegon/Desktop/toms-portfolio/src/content/blog/using-mdx.mdx?astroContentCollectionEntry=true":"chunks/using-mdx_9K2lDf_Q.mjs","/Users/tomfaddegon/Desktop/toms-portfolio/src/content/blog/first-post.md?astroPropagatedAssets":"chunks/first-post_7yT9-qO9.mjs","/Users/tomfaddegon/Desktop/toms-portfolio/src/content/blog/markdown-style-guide.md?astroPropagatedAssets":"chunks/markdown-style-guide_h_23g6bO.mjs","/Users/tomfaddegon/Desktop/toms-portfolio/src/content/blog/second-post.md?astroPropagatedAssets":"chunks/second-post_XxlPuK3_.mjs","/Users/tomfaddegon/Desktop/toms-portfolio/src/content/blog/third-post.md?astroPropagatedAssets":"chunks/third-post_ns7LojL9.mjs","/Users/tomfaddegon/Desktop/toms-portfolio/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_X41ZHdRo.mjs","/Users/tomfaddegon/Desktop/toms-portfolio/src/content/blog/first-post.md":"chunks/first-post_hoYvU_14.mjs","/Users/tomfaddegon/Desktop/toms-portfolio/src/content/blog/markdown-style-guide.md":"chunks/markdown-style-guide_vinrDH9X.mjs","/Users/tomfaddegon/Desktop/toms-portfolio/src/content/blog/second-post.md":"chunks/second-post_IqV-6jSN.mjs","/Users/tomfaddegon/Desktop/toms-portfolio/src/content/blog/third-post.md":"chunks/third-post_3e5G2hX5.mjs","/Users/tomfaddegon/Desktop/toms-portfolio/src/content/blog/using-mdx.mdx":"chunks/using-mdx_lT6Y_DBY.mjs","@astrojs/react/client.js":"_astro/client.gSoe9Upx.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/gradient-2.Azym42l0.png","/_astro/code-icon.1NNaSzBu.png","/_astro/data-icon.m8U_ixb3.png","/_astro/design-icon.gEl_5vFM.png","/_astro/gradient-2000.Vo_AUJNT.png","/_astro/new-paltz-icon.luk5ytRz.png","/_astro/datacamp-icon.G7SiZu6t.png","/_astro/hacker-rank-icon.6Ie9cQUz.png","/_astro/hack-reactor-icon.um9syCQm.png","/_astro/georgia-pettit.nuvFJdKs.png","/_astro/about.rzlpf_Cc.css","/_astro/index.Es-m7nKK.css","/blog-placeholder-1.jpg","/blog-placeholder-2.jpg","/blog-placeholder-3.jpg","/blog-placeholder-4.jpg","/blog-placeholder-5.jpg","/blog-placeholder-about.jpg","/favicon.svg","/_astro/client.gSoe9Upx.js","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/about/index.html","/blog/index.html","/index.html","/contact/index.html","/rss.xml","/thank-you/index.html"],"buildFormat":"directory"});

export { manifest };
