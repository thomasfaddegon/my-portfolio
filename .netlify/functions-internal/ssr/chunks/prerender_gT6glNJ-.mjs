/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, i as renderComponent, j as renderHead, k as renderSlot, A as AstroError, l as UnknownContentCollectionError, n as renderUniqueStylesheet, o as renderScriptElement, p as createHeadAndContent, u as unescapeHTML, F as Fragment } from './astro_MMSI-tku.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
/* empty css                         */
/* empty css                         */
import { $ as $$Image, g as getImage } from './pages/generic_eB8l1SnL.mjs';
/* empty css                         */
/* empty css                         */
/* empty css                           */
import rss from '@astrojs/rss';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
/* empty css                                                                  */

const $$Astro$p = createAstro("https://example.com");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/BaseHead.astro", void 0);

const $$Astro$o = createAstro("https://example.com");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, text, classNames } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<div class="rounded-xl flex items-center justify-center h-8" data-astro-cid-eimmu3lg> <a${addAttribute(href, "href")}${addAttribute(["rounded-full flex items-center justify-center py-1 px-3 ${classNames}", [{ active: isActive }]], "class:list")} data-astro-cid-eimmu3lg> ${text} </a> </div> `;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/HeaderLink.astro", void 0);

const $$Astro$n = createAstro("https://example.com");
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead()}<div class="w-12 h-12"> <!--?xml version="1.0" encoding="UTF-8"?--> <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.14 54.14"><defs><style>
        .cls-1 {
          fill: none;
          stroke: #fff;
          stroke-miterlimit: 10;
        }
        .cls-2 {
          fill: #fff;
          stroke-width: 0px;
        }
      </style></defs><g id="Layer_1-2"><rect class="cls-1" x=".5" y=".5" width="53.14" height="53.14" rx="26.57" ry="26.57"></rect><path class="cls-2" d="m38.68,20.37v-2.84c0-.11-.09-.21-.21-.21h-4.39v-.02h-17.45v.02h-4.39c-.11,0-.21.09-.21.21v2.84c0,.11.09.21.21.21h10.75c.11,0,.21.09.21.21v19.57c0,.11.09.21.21.21h3.9c.11,0,.21-.09.21-.21v-9.02c0-.11.09-.21.21-.21h10.75c.11,0,.21-.09.21-.21v-2.84c0-.11-.09-.21-.21-.21h-10.75c-.11,0-.21-.09-.21-.21v-6.87c0-.11.09-.21.21-.21h10.75c.11,0,.21-.09.21-.21Z"></path></g></svg> </div>`;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/Logo.astro", void 0);

const $$Astro$m = createAstro("https://example.com");
const $$Icons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Icons;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row gap-4"> <div> <a href="https://www.linkedin.com/in/thomasfaddegon/" target="_blank"> <svg fill="none" height="33" viewBox="0 0 32 32" width="33" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m0 16c0-8.83656 7.16344-16 16-16 8.8366 0 16 7.16344 16 16 0 8.8366-7.1634 16-16 16-8.83656 0-16-7.1634-16-16zm8.2-2.7v10.7h3.4v-10.7zm-.2-3.4c0 1.1.8 1.9 1.9 1.9s1.9-.8 1.9-1.9-.8-1.9-1.9-1.9c-1 0-1.9.8-1.9 1.9zm12.6 14.1h3.2v-6.6c0-3.3-2-4.4-3.9-4.4-1.7 0-2.9 1.1-3.2 1.8v-1.5h-3.2v10.7h3.4v-5.7c0-1.5 1-2.3 2-2.3s1.7.5 1.7 2.2z" fill="#fff" fill-rule="evenodd"></path></svg> </a> </div> <div> <a href="https://github.com/thomasfaddegon" target="_blank"> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg> </a> </div> </div>`;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/Icons.astro", void 0);

const $$Astro$l = createAstro("https://example.com");
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 w-full nav z-50" data-astro-cid-dmqpwcec> <nav data-astro-cid-dmqpwcec> <!-- Desktop & Tablet --> <div class="hidden md:flex pt-[0.8rem] pb-[0.85rem]" data-astro-cid-dmqpwcec> <div class="container container-large" data-astro-cid-dmqpwcec> <div class="padding-global" data-astro-cid-dmqpwcec> <div class="nav-content w-full flex justify-between items-center" data-astro-cid-dmqpwcec> <div data-astro-cid-dmqpwcec><a href="/" data-astro-cid-dmqpwcec>${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-dmqpwcec": true })}</a></div> <div class="bg-slate-900 px-8 rounded-full flex items-center gap-4 h-14 drop-shadow-[0px_0px_5px_rgba(255,255,255,0.75)]" data-astro-cid-dmqpwcec> <div class="flex items-center gap-6" data-astro-cid-dmqpwcec> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "text": "Home", "data-astro-cid-dmqpwcec": true })} <!-- <HeaderLink href="/#portfolio" text="Portfolio" /> --> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/Thomas Faddegon - Resume 2024.pdf", "text": "Resume", "data-astro-cid-dmqpwcec": true })} <!-- <HeaderLink href="/blog">Blog</HeaderLink> --> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/contact", "text": "Contact", "data-astro-cid-dmqpwcec": true })} </div> </div> ${renderComponent($$result, "Icons", $$Icons, { "data-astro-cid-dmqpwcec": true })} </div> </div> </div> </div> <!-- Mobile --> <div class="bg-black md:hidden border-b border-gray-200 py-2 z-50" data-astro-cid-dmqpwcec> <div class="px-4 flex justify-between items-center" data-astro-cid-dmqpwcec> <a href="/" data-astro-cid-dmqpwcec>${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-dmqpwcec": true })}</a> <!-- Mobile Hamburger Menu Button --> <button id="hamburger-btn" class="text-white focus:outline-none" data-astro-cid-dmqpwcec> <!-- Icon from Heroicons (https://heroicons.com/) --> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-dmqpwcec> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" data-astro-cid-dmqpwcec></path> </svg> </button> </div> </div> <!-- Mobile Menu Overlay --> <div id="mobile-menu" class="inset-0 bg-black bg-opacity-90 hidden z-1 h-screen" data-astro-cid-dmqpwcec> <!-- Mobile Menu Content --> <div class="text-white flex items-center justify-center h-full flex-col gap-4" data-astro-cid-dmqpwcec> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "classNames": "block text-xl px-4 py-2", "text": "Home", "data-astro-cid-dmqpwcec": true })} <!-- <HeaderLink
          href="/#portfolio"
          classNames="block text-xl px-4 py-2 bg-blue-700"
          text="Portfolio"
        /> --> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/contact", "classNames": "block text-xl px-4 py-2", "text": "Contact", "data-astro-cid-dmqpwcec": true })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/Thomas Faddegon - Resume 2024.pdf", "text": "Resume", "data-astro-cid-dmqpwcec": true })} ${renderComponent($$result, "Icons", $$Icons, { "data-astro-cid-dmqpwcec": true })} </div> </div> </nav> </header> <div class="h-20 md:h-40" data-astro-cid-dmqpwcec></div>  `;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/Nav.astro", void 0);

const $$Astro$k = createAstro("https://example.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-purple text-center" data-astro-cid-sz7xmlte> <div class="container container-large" data-astro-cid-sz7xmlte> <div class="padding-global" data-astro-cid-sz7xmlte> <div class="w-full h-full py-24 items-center flex flex-col" data-astro-cid-sz7xmlte> <div class="flex flex-col md:flex-row gap-4 md:gap-20 mb-8 font-bold text-lg" data-astro-cid-sz7xmlte> <a href="/contact" data-astro-cid-sz7xmlte>Portfolio</a> <a href="/contact" data-astro-cid-sz7xmlte>Blog</a> <a href="/contact" data-astro-cid-sz7xmlte>Contact</a> </div> <div class="mb-4 p-2" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>
&copy; ${today.getFullYear()} Thomas Faddegon. All rights reserved.
</p> </div> <div data-astro-cid-sz7xmlte> ${renderComponent($$result, "Icons", $$Icons, { "data-astro-cid-sz7xmlte": true })} </div> </div> </div> </div> </footer> `;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/Footer.astro", void 0);

const $$Astro$j = createAstro("https://example.com");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/FormattedDate.astro", void 0);

const $$Astro$i = createAstro("https://example.com");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> ${renderComponent($$result, "Header", $$Nav, { "data-astro-cid-bvzihdzo": true })} <main data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ${heroImage && renderTemplate`<img${addAttribute(1020, "width")}${addAttribute(510, "height")}${addAttribute(heroImage, "src")} alt="" data-astro-cid-bvzihdzo>`} </div> <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} </div> <h1 data-astro-cid-bvzihdzo>${title}</h1> <hr data-astro-cid-bvzihdzo> </div> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true })} </body></html>`;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/layouts/BlogPost.astro", void 0);

const $$Astro$h = createAstro("https://example.com");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "About Me", "description": "Lorem ipsum dolor sit amet", "pubDate": /* @__PURE__ */ new Date("August 08 2021"), "heroImage": "/blog-placeholder-about.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo
		viverra. Adipiscing enim eu turpis egestas pretium. Euismod elementum nisi quis eleifend quam
		adipiscing. In hac habitasse platea dictumst vestibulum. Sagittis purus sit amet volutpat. Netus
		et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus
		vestibulum lorem. Varius sit amet mattis vulputate enim. Habitasse platea dictumst quisque
		sagittis. Integer quis auctor elit sed vulputate mi. Dictumst quisque sagittis purus sit amet.
</p> <p>
Morbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum quisque non
		tellus. Habitasse platea dictumst quisque sagittis purus sit amet. Tellus molestie nunc non
		blandit massa. Cursus vitae congue mauris rhoncus. Accumsan tortor posuere ac ut. Fringilla urna
		porttitor rhoncus dolor. Elit ullamcorper dignissim cras tincidunt lobortis. In cursus turpis
		massa tincidunt dui ut ornare lectus. Integer feugiat scelerisque varius morbi enim nunc.
		Bibendum neque egestas congue quisque egestas diam. Cras ornare arcu dui vivamus arcu felis
		bibendum. Dignissim suspendisse in est ante in nibh mauris. Sed tempus urna et pharetra pharetra
		massa massa ultricies mi.
</p> <p>
Mollis nunc sed id semper risus in. Convallis a cras semper auctor neque. Diam sit amet nisl
		suscipit. Lacus viverra vitae congue eu consequat ac felis donec. Egestas integer eget aliquet
		nibh praesent tristique magna sit amet. Eget magna fermentum iaculis eu non diam. In vitae
		turpis massa sed elementum. Tristique et egestas quis ipsum suspendisse ultrices. Eget lorem
		dolor sed viverra ipsum. Vel turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat
		semper viverra nam. Laoreet suspendisse interdum consectetur libero id faucibus. Diam phasellus
		vestibulum lorem sed risus ultricies tristique. Rhoncus dolor purus non enim praesent elementum
		facilisis. Ultrices tincidunt arcu non sodales neque. Tempus egestas sed sed risus pretium quam
		vulputate. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Fringilla
		urna porttitor rhoncus dolor purus non. Amet dictum sit amet justo donec enim.
</p> <p>
Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Tortor posuere ac ut consequat semper
		viverra. Tellus mauris a diam maecenas sed enim ut sem viverra. Venenatis urna cursus eget nunc
		scelerisque viverra mauris in. Arcu ac tortor dignissim convallis aenean et tortor at. Curabitur
		gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas tellus rutrum tellus
		pellentesque eu. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Ut enim
		blandit volutpat maecenas volutpat blandit aliquam etiam. Id donec ultrices tincidunt arcu. Id
		cursus metus aliquam eleifend mi.
</p> <p>
Tempus quam pellentesque nec nam aliquam sem. Risus at ultrices mi tempus imperdiet. Id porta
		nibh venenatis cras sed felis eget velit. Ipsum a arcu cursus vitae. Facilisis magna etiam
		tempor orci eu lobortis elementum. Tincidunt dui ut ornare lectus sit. Quisque non tellus orci
		ac. Blandit libero volutpat sed cras. Nec tincidunt praesent semper feugiat nibh sed pulvinar
		proin gravida. Egestas integer eget aliquet nibh praesent tristique magna.
</p> ` })}`;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/about.astro", void 0);

const $$file$5 = "/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/about.astro";
const $$url$5 = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file$5,
	url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const SITE_TITLE = "Thomas Faddegon";
const SITE_DESCRIPTION = "Welcome to my portfolio! I am UX Engineer and product strategist with a passion for creating high-performing websites and digital applications.";

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://example.com", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/first-post.md": () => import('./first-post_sR8Mm45u.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('./markdown-style-guide_Yn4K0K7y.mjs'),"/src/content/blog/second-post.md": () => import('./second-post_7__189bx.mjs'),"/src/content/blog/third-post.md": () => import('./third-post_AI1qIoyR.mjs'),"/src/content/blog/using-mdx.mdx": () => import('./using-mdx_9K2lDf_Q.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"first-post":"/src/content/blog/first-post.md","third-post":"/src/content/blog/third-post.md","markdown-style-guide":"/src/content/blog/markdown-style-guide.md","using-mdx":"/src/content/blog/using-mdx.mdx","second-post":"/src/content/blog/second-post.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/first-post.md": () => import('./first-post_Dp2-7AZp.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('./markdown-style-guide_WSq0oQCq.mjs'),"/src/content/blog/second-post.md": () => import('./second-post_XKhq4EIX.mjs'),"/src/content/blog/third-post.md": () => import('./third-post_g3s9VX0y.mjs'),"/src/content/blog/using-mdx.mdx": () => import('./using-mdx_T3tZcIug.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$g = createAstro("https://example.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body class="h-full" data-astro-cid-5tznm7mj> <main class="flex flex-col min-h-screen" data-astro-cid-5tznm7mj> <!-- Hero Section --> <!-- Nav --> ${renderComponent($$result, "Nav", $$Nav, { "title": SITE_TITLE, "data-astro-cid-5tznm7mj": true })} <div class="h-12" data-astro-cid-5tznm7mj></div> <section class="flex-grow" data-astro-cid-5tznm7mj> <div class="container container-large" data-astro-cid-5tznm7mj> <div class="padding-global" data-astro-cid-5tznm7mj> <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-16 pb-12" id="header-content" data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<li class="col-span-1" data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="block" data-astro-cid-5tznm7mj> <img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.heroImage, "src")} alt="" class="rounded-xl" data-astro-cid-5tznm7mj> <h4 class="title" data-astro-cid-5tznm7mj>${post.data.title}</h4> <p class="date" data-astro-cid-5tznm7mj> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5tznm7mj": true })} </p> </a> </li>`)} </ul> </div> </div> <div class="h-36" data-astro-cid-5tznm7mj></div> </section> <!-- Footer --> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} </main> </body></html>`;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/blog/index.astro", void 0);

const $$file$4 = "/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/blog/index.astro";
const $$url$4 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$4,
	url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$f = createAstro("https://example.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/blog/[...slug].astro", void 0);

const $$file$3 = "/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/blog/[...slug].astro";
const $$url$3 = "/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file$3,
	getStaticPaths,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const gradientBackground$1 = new Proxy({"src":"/_astro/gradient-1600.A0iJVTff.png","width":1600,"height":1276,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tomfaddegon/Desktop/toms-portfolio/src/images/backgrounds/gradient-1600.png";
							}
							
							return target[name];
						}
					});

const $$Astro$e = createAstro("https://example.com");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    text,
    type = "primary",
    link
  } = Astro2.props;
  const globalClasses = "button btn inline-flex items-center justify-center px-12 md:px-20  rounded-full text-lg ";
  const typeClasses = {
    primary: "button-primary border border-white transparent-text transparent-text",
    secondary: "button-secondary border border-white",
    tertiary: "button-tertiary bg-purple",
    link: "bg-transparent border-transparent"
  };
  const buttonClasses = `button ${globalClasses} ${typeClasses[type]}`;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(buttonClasses, "class")}${addAttribute(text, "data-text")} data-astro-cid-vnzlvqnm> <a${addAttribute(link, "href")} data-astro-cid-vnzlvqnm> <span class="button-text" data-astro-cid-vnzlvqnm>${text}</span></a> </button> `;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/Button.astro", void 0);

const me = new Proxy({"src":"/_astro/me-3.Y6fWMzhE.png","width":400,"height":450,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tomfaddegon/Desktop/toms-portfolio/src/images/people/me-3.png";
							}
							
							return target[name];
						}
					});

const $$Astro$d = createAstro("https://example.com");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section> <div class="container container-large"> <div class="padding-global"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full pt-8 pb-28" id="header-content"> <div class="col-span-1 lg:col-span-7 md:pr-12 flex flex-col gap-5 justify-center" id="header-text"> <h1>
Hi! I'm Thomas. <br> I make websites & digital applications <em>better</em>.
</h1> <p>
As a User-Experience (UX) Engineer with over a decade of experience
            in digital product design and development, I create seamless
            experiences that empower users to achieve their goals without
            friction, leading to higher customer satisfaction and increased
            sales.
</p> <div class="flex flex-wrap gap-4"> ${renderComponent($$result, "Button", $$Button, { "text": "Get in Touch", "type": "primary", "link": "/contact" })} ${renderComponent($$result, "Button", $$Button, { "text": "See My Work", "type": "secondary", "link": "#portfolio" })} </div> <div class="text-sm uppercase flex flex-wrap gap-x-4 gap-y-2 mt-1"> <h6>Front-End Development</h6> <span>|</span> <h6>UX/UI</h6> <span>|</span> <h6>Product Strategy</h6> <span>|</span> <h6>Data Analysis</h6> </div> </div> <div class="col-span-1 lg:col-span-5 order-first md:order-last" id="header-image"> ${renderComponent($$result, "Image", $$Image, { "src": me, "alt": "Thomas", "width": "400", "height": "400", "class": "rounded-xl w-full", "loading": "eager", "decoding": "sync" })} </div> </div> </div> </div> </section>`;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/Hero.astro", void 0);

const $$Astro$c = createAstro("https://example.com");
const $$H3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$H3;
  const { centered, header, maxWidth, classes, hideBracketOnMobile } = Astro2.props;
  const center = centered ? "text-center" : "";
  const hideBracket = hideBracketOnMobile ? "hidden xl:flex" : "";
  return renderTemplate`<!-- <div class="flex flex-row">
  <div class="text-purple text-2xl mt-[-2px] flex flex-col justify-center">
    <div>&lt;</div>
  </div>
  <div class={\`max-w-[\${maxWidth}rem] px-2 \`}>
    <h3 class={\`\${center} \${classes} text-lg \`}>{header}</h3>
  </div>
  <div class="text-purple text-2xl mt-[-2px] flex flex-col justify-center">
    <div>&gt;</div>
  </div>
</div> -->${maybeRenderHead()}<div class="flex items-center justify-center gap-2" data-astro-cid-p2zex4iq> <span${addAttribute(`text-purple text-2xl mb-[2px] ${hideBracket}`, "class")} data-astro-cid-p2zex4iq>&lt;</span> <h3${addAttribute(`text-lg xl:whitespace-nowrap overflow-hidden ${center}`, "class")} data-astro-cid-p2zex4iq> ${header} </h3> <span${addAttribute(`text-purple text-2xl mb-[2px] ${hideBracket}`, "class")} data-astro-cid-p2zex4iq>&gt;</span> </div> `;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/H3.astro", void 0);

const $$Astro$b = createAstro("https://example.com");
const $$Position = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Position;
  const { title, location, years, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full lg:w-1/2"> <div class="flex flex-col gap-1"> <div class="flex flex-start"> ${renderComponent($$result, "H3", $$H3, { "header": title, "classes": "text-lg font-bold", "hideBracketOnMobile": true })} </div> <div><span class="font-bold">${location}</span></div> <div><span class="text-purple">${years}</span></div> <div><span>${description}</span></div> </div> </div>`;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/Position.astro", void 0);

const $$Astro$a = createAstro("https://example.com");
const $$Certification = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Certification;
  const { title, text, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mb-12`, "class")}> <div${addAttribute(`flex flex-col gap-4 items-center`, "class")}> <div> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": "certification icon", "height": "150", "width": "150", "class": "border rounded-full" })} </div> <div class="flex flex-col gap-3 items-center"> ${renderComponent($$result, "H3", $$H3, { "header": title, "centered": "True" })} <p class="text-center">${text}</p> </div> </div> </div>`;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/Certification.astro", void 0);

const hackReactorIcon = new Proxy({"src":"/_astro/hack-reactor-icon.um9syCQm.png","width":300,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tomfaddegon/Desktop/toms-portfolio/src/images/icons/hack-reactor-icon.png";
							}
							
							return target[name];
						}
					});

const hackerRankIcon = new Proxy({"src":"/_astro/hacker-rank-icon.6Ie9cQUz.png","width":300,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tomfaddegon/Desktop/toms-portfolio/src/images/icons/hacker-rank-icon.png";
							}
							
							return target[name];
						}
					});

const dataCampIcon = new Proxy({"src":"/_astro/datacamp-icon.G7SiZu6t.png","width":300,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tomfaddegon/Desktop/toms-portfolio/src/images/icons/datacamp-icon.png";
							}
							
							return target[name];
						}
					});

const newPaltzIcon = new Proxy({"src":"/_astro/new-paltz-icon.luk5ytRz.png","width":300,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tomfaddegon/Desktop/toms-portfolio/src/images/icons/new-paltz-icon.png";
							}
							
							return target[name];
						}
					});

const $$Astro$9 = createAstro("https://example.com");
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Experience;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-xpq65ryk> <div class="container container-large" data-astro-cid-xpq65ryk> <div class="padding-global py-32" data-astro-cid-xpq65ryk> <!-- Work Experience --> <div data-astro-cid-xpq65ryk> <h2 class="mb-12 padding-extra" data-astro-cid-xpq65ryk>Work Experience</h2> <div class="flex flex-col lg:flex-row gap-24 mb-16 padding-extra" data-astro-cid-xpq65ryk> ${renderComponent($$result, "Position", $$Position, { "title": "Front-End Developer & UX/UI Specialist", "location": "The Luminary Agency", "years": "2021 - Present (Part Time)", "description": "Developed responsive web interfaces using WordPress, Webflow, Squarespace, and HTML/CSS/JavaScript. Created UI wireframe designs with Figma, Relume, and Balsamiq, improving user experience and navigability. Collaborated on brand aesthetics with the design team, ensuring cohesive visual strategies across platforms. Achievements include 1,000% traffic increase, 150% higher conversion rates, and 15% lower bounce rates.", "data-astro-cid-xpq65ryk": true })} ${renderComponent($$result, "Position", $$Position, { "title": "Front-End Developer & Product Strategist", "location": "Higher Self Yoga", "years": "2020 - Present (Part Time)", "description": "Designed and implemented a product and marketing strategy that grew user traffic from 1,000 to 25,000 monthly and expanded our email list from 2,000 to 16,000. Led a team in migrating from WordPress to Webflow to enhance design and functionality, which increased site speed by 50%, reduced bounce rates by 5%, and increased conversions by 25%. Developed a new community platform with optimized user flow and onboarding, integrating features like personalized dashboards, a tagged forum, and real-time messaging.", "data-astro-cid-xpq65ryk": true })} </div> <div class="track py-16" data-astro-cid-xpq65ryk> <div class="flex flex-col lg:flex-row gap-24 padding-extra" data-astro-cid-xpq65ryk> ${renderComponent($$result, "Position", $$Position, { "title": "Director of Digital Marketing", "location": "Cruiseline.com", "years": "2018 - 2020", "description": "Led a team in a comprehensive marketing and sales campaign, leveraging display, PPC, email, and SEO, increasing conversions by 30%. Proposed UX/UI enhancements using A/B testing, user recordings, and heatmaps to boost conversions. Guided engineering in aligning product prototypes with optimal UX design principles and business objectives. Conducted in-depth market and sales trend analysis over six years, positioning the company as an industry leader.", "data-astro-cid-xpq65ryk": true })} ${renderComponent($$result, "Position", $$Position, { "title": "Inbound Marketing & Content Strategy", "location": "Cruiseline.com", "years": "2015 - 2018", "description": "Crafted a robust content and email strategy, enhancing site and email presence through rebranding, SEO, and compelling editorial pieces which lead to a 900% increase in site traffic. Managed weekly analytics, leveraging insights to optimize content and marketing strategies. Collaborated with engineers to create a display ad network, generating upwards of $200k annually. Performed usability testing on new products, writing detailed feedback and bug reports for the dev team to optimize new features before launch.", "data-astro-cid-xpq65ryk": true })} </div> </div> </div> <!-- Education & Certifications --> <div class="padding-extra" data-astro-cid-xpq65ryk> <h2 class="mt-24 mb-16" data-astro-cid-xpq65ryk>Certifications & Education</h2> <div data-astro-cid-xpq65ryk> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10" data-astro-cid-xpq65ryk> ${renderComponent($$result, "Certification", $$Certification, { "title": "Software Engineer", "text": "1,000+ hours of coding experience in new and legacy full-stack technologies, computer science foundations, and agile methodologies.", "image": hackReactorIcon, "data-astro-cid-xpq65ryk": true })} ${renderComponent($$result, "Certification", $$Certification, { "title": "Javascript Developer", "text": "Passed certifications for Javascript, React, and Node.js, demonstrating proficiency in core concepts and frameworks.", "image": hackerRankIcon, "data-astro-cid-xpq65ryk": true })} ${renderComponent($$result, "Certification", $$Certification, { "title": "Python Data Analyst", "text": "Achieved profieciency in Python and libraries like NumPy, Pandas, and Matplotlib, as well as foundations in statistics and exploratory data analysis.", "image": dataCampIcon, "data-astro-cid-xpq65ryk": true })} ${renderComponent($$result, "Certification", $$Certification, { "title": "BA & MA in English", "text": "Received a Master's Degree in English Literature and a BA in English with minors in Philosophy, Political Science, and Religious Studies.", "image": newPaltzIcon, "data-astro-cid-xpq65ryk": true })} </div> </div> </div> <div class="flex items-center justify-center mt-8 mb-8 gap-4 flex-col md:flex-row" data-astro-cid-xpq65ryk> ${renderComponent($$result, "Button", $$Button, { "text": "LinkedIn", "type": "tertiary", "link": "https://www.linkedin.com/in/thomasfaddegon/", "data-astro-cid-xpq65ryk": true })} ${renderComponent($$result, "Button", $$Button, { "text": "My Resume", "type": "secondary", "link": "/Thomas Faddegon - Resume 2024.pdf", "data-astro-cid-xpq65ryk": true })} </div> </div> </div> </section> `;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/Experience.astro", void 0);

const gradientBackground = new Proxy({"src":"/_astro/gradient-2000.Vo_AUJNT.png","width":2000,"height":1595,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tomfaddegon/Desktop/toms-portfolio/src/images/backgrounds/gradient-2000.png";
							}
							
							return target[name];
						}
					});

const $$Astro$8 = createAstro("https://example.com");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Card;
  const { header, title, text, icon, link, classes, rounded } = Astro2.props;
  await getImage({
    src: gradientBackground
  });
  const imageRounded = rounded ? "rounded-full" : "rounded-xl";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex h-full  ${classes ?? ""}`, "class")} data-astro-cid-dohjnao5> <a${addAttribute(link, "href")} data-astro-cid-dohjnao5> <div class="py-6" data-astro-cid-dohjnao5> <div class="card px-4 py-5 pb-8 flex flex-col items-center w-full border-2 bg-slate-900 drop-shadow-[0px_0px_5px_rgba(255,255,255,0.75)]" data-astro-cid-dohjnao5> <div${addAttribute(`max-w-36 flex items-center w-full mb-4 ${imageRounded} overflow-hidden`, "class")} data-astro-cid-dohjnao5> ${renderComponent($$result, "Image", $$Image, { "src": icon, "alt": "icon", "width": "300", "height": "250", "data-astro-cid-dohjnao5": true })} </div> <div data-astro-cid-dohjnao5> ${renderComponent($$result, "H3", $$H3, { "centered": "True", "header": header, "data-astro-cid-dohjnao5": true })} </div> <div class="mb-2" data-astro-cid-dohjnao5> <span class="text-base" data-astro-cid-dohjnao5>${title}</span> </div> <span class="text-center leading-[1.6rem]" data-astro-cid-dohjnao5>${text}</span> </div> </div></a> </div> `;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/Card.astro", void 0);

const codeIcon = new Proxy({"src":"/_astro/code-icon.1NNaSzBu.png","width":300,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tomfaddegon/Desktop/toms-portfolio/src/images/icons/code-icon.png";
							}
							
							return target[name];
						}
					});

const dataIcon = new Proxy({"src":"/_astro/data-icon.m8U_ixb3.png","width":300,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tomfaddegon/Desktop/toms-portfolio/src/images/icons/data-icon.png";
							}
							
							return target[name];
						}
					});

const designIcon = new Proxy({"src":"/_astro/design-icon.gEl_5vFM.png","width":300,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tomfaddegon/Desktop/toms-portfolio/src/images/icons/design-icon.png";
							}
							
							return target[name];
						}
					});

const $$Astro$7 = createAstro("https://example.com");
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead()}<section> <div class="container container-large"> <div class="padding-global py-20 md:py-36"> <div> <div class="flex justify-center"> <h2 class="text-center mb-8 max-w-2xl lg:max-w-5xl">
I use a holistic skillset of engineering, user behavior, and product
            strategy to polish ideas to perfection.
</h2> </div> <div class="mt-4"></div> <!-- 3 Boxes --> <div class="flex items-center justify-center"> <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"> --> <div class="flex flex-col justify-center md:flex-row md:flex-wrap padding-extra max-w-2xl lg:max-w-none w-full items-center"> ${renderComponent($$result, "Card", $$Card, { "header": "Front-End Development", "text": "I specialize in cutting-edge web development technologies including Javascript, Typescript, React, Next, and Astro to build responsive, accessible, and performant digital experiences.", "icon": codeIcon, "classes": "lg:pr-6 lg:w-1/2 xl:w-1/3 h-full" })} ${renderComponent($$result, "Card", $$Card, { "header": "User-Experience Design", "text": "Using my extensive background in  copywriting, UI design, and user research, I create highly-intuitive interfaces and seamless customer journeys that foster lasting user engagement and loyalty.", "icon": designIcon, "classes": "lg:px-3 lg:w-1/2 xl:w-1/3 h-full" })} ${renderComponent($$result, "Card", $$Card, { "header": "Data-Driven Optimization", "text": "I make analytics-based improvements that boost KPIs and increase conversions by effectively utilizing tools like Google Analytics, Optimizely, and a variety of Python data and visualization libraries.", "icon": dataIcon, "classes": "lg:pl-6 lg:w-1/2 xl:w-1/3 h-full" })} </div> </div> <!--
        V-SHAPED LAYOUT
        <div>
        <div class="flex flex-wrap items-center justify-center gap-12">
          <Card
            header="Front-End Development"
            text="I specialize in cutting-edge web development technologies including Javascript, Typescript, React, Next, and Astro to build responsive, accessible, and performant web experiences."
            className="w-full md:w-2/5"
          />
          <Card
            header="User-Experience Design"
            text="With an extensive background in UX copywriting, design, and research, I create seamless customer journeys and highly-intuitive interfaces that foster lasting user engagement and loyalty."
            className="w-full md:w-2/5"
          />
          <Card
            header="Data-Driven Optimization"
            text="I utilize data and optimization tools like Google Analytics, Optimizely, and Python/Pandas to make analytics-based improvements to improve KPI's and drive conversions."
            className="w-full md:w-2/5"
          />
        </div>
      </div> --> </div> </div> </div> </section>`;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/Skills.astro", void 0);

const graphic = new Proxy({"src":"/_astro/graphic-1.NVJumd-A.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tomfaddegon/Desktop/toms-portfolio/src/images/graphics/graphic-1.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$6 = createAstro("https://example.com");
const $$Philosophy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Philosophy;
  return renderTemplate`${maybeRenderHead()}<section class=""> <div class="bg-purple pt-6"> <div class="container container-large"> <div class="padding-global relative overflow-visible"> <div class="grid grid-cols-5 gap-8 py-16"> <div class="col-span-5 lg:col-span-2 bg-purple flex items-center md:px-8 lg:px-0"> ${renderComponent($$result, "Image", $$Image, { "src": graphic, "class": "rounded-xl", "height": "500", "width": "500", "alt": "ux dev engineering graphic" })} </div> <div class="col-span-5 lg:col-span-3 bg-purple py-6 md:px-8"> <!-- content --> <div class="flex flex-col gap-4"> <h5>My Philosophy & Process</h5> <h2>
Code makes things work, <br> empathy makes them feel right
</h2> <div class="mb-4"> <p>
As a UX Engineer, my work spans the realms of design,
                  development, and product strategy. I specialize in steering
                  new creations from the initial concept stage through to
                  completion, as well as refining existing products with best
                  practices and data-driven insights.
</p> <p>
My process begins by using my UX design intuition to spot
                  areas of friction, confusion, and overlooked opportunities.
                  Next, I delve deeply into the data, analyzing user engagement
                  metrics and conversion rates to validate my initial
                  observations and form new hypotheses. Armed with these
                  insights, I propose and then personally implement the
                  necessary changes to the front end, making sure that all KPIs
                  are tracked properly for use in performance retrospectives and
                  future optimizations.
</p> <p>
This comprehensive strategy not only elevates user experience
                  but also yields concrete business outcomes, guaranteeing that
                  every product surpasses both customer expectations and
                  organizational objectives.
</p> <div class="mt-8"> ${renderComponent($$result, "Button", $$Button, { "link": "/contact", "type": "primary", "text": "Get in Touch" })} </div> </div> </div> </div> </div> </div> </div> </div> </section>`;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/Philosophy.astro", void 0);

const $$Astro$5 = createAstro("https://example.com");
const $$Project = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Project;
  const { header, image, tags, text, link, links } = Astro2.props;
  const projectImage = import(`../images/projects/${image}`);
  return renderTemplate`${maybeRenderHead()}<div class="bg-black rounded-xl p-10" data-astro-cid-tkm2rszc> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12" data-astro-cid-tkm2rszc> <div class="lg:col-span-5 drop-shadow-[0px_0px_5px_rgba(255,255,255,0.75)]" data-astro-cid-tkm2rszc> <a${addAttribute(link, "href")} data-astro-cid-tkm2rszc> ${renderComponent($$result, "Image", $$Image, { "src": projectImage, "alt": "", "class": "rounded-lg", "width": "600", "height": "450", "data-astro-cid-tkm2rszc": true })}</a> </div> <div class="lg:col-span-7 flex flex-col gap-4" data-astro-cid-tkm2rszc> <h3 class="font-bold" data-astro-cid-tkm2rszc>${header}</h3> <div class="flex flex-row flex-wrap gap-x-4 gap-y-1" data-astro-cid-tkm2rszc> ${tags.map((tag, index) => {
    return index !== 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-tkm2rszc": true }, { "default": ($$result2) => renderTemplate` <span class="translate-y-[-2px]" data-astro-cid-tkm2rszc>|</span> <h6 data-astro-cid-tkm2rszc>${tag}</h6> ` })}` : renderTemplate`<h6 data-astro-cid-tkm2rszc>${tag}</h6>`;
  })} </div> <p class="" data-astro-cid-tkm2rszc>${text}</p> <div class="flex flex-col sm:flex-row gap-4" data-astro-cid-tkm2rszc> <div data-astro-cid-tkm2rszc> ${renderComponent($$result, "Button", $$Button, { "text": "See Project", "type": "tertiary", "data-astro-cid-tkm2rszc": true })} </div> ${links && renderTemplate`<div${addAttribute(`grid sm:grid-cols-1 text-sm gap-y-2 sm:gap-y-1  ${Object.keys(links).length === 1 ? "flex items-center justify-center h-full pt-0" : ""}`, "class")} data-astro-cid-tkm2rszc> ${Object.entries(links).map(([text2, link2]) => {
    return renderTemplate`<div class="" data-astro-cid-tkm2rszc> <a class="secondary-link"${addAttribute(`${link2}`, "href")} data-astro-cid-tkm2rszc> ${text2} &nbsp; &rarr;
</a> </div>`;
  })} </div>`} </div> </div> </div> </div> `;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/Project.astro", void 0);

const $$Astro$4 = createAstro("https://example.com");
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Portfolio;
  await getImage({
    src: gradientBackground
  });
  return renderTemplate`<!-- <div
  style={\`background-image: url('\${optimizedBackground.src}'); background-size: cover; background-repeat: no-repeat;\`}
  class="gradient-background min-h-96"
> -->${maybeRenderHead()}<div id="portfolio" class="relative top-[-60px] invisible"></div> <div class="gradient-background min-h-96"> <div class="container container-large"> <div class="padding-global py-32"> <h2 class="text-center mb-20">Recent Work</h2> <div class="flex flex-col gap-12"> ${renderComponent($$result, "Project", $$Project, { "image": "../images/projects/beat-trends-compressed.png", "tags": [
    "Front-End Development",
    "D3",
    "React",
    "Python",
    "Web Scraping",
    "Data Visualization",
    "Data Analysis"
  ], "header": "Beat Trends", "text": "Beat Trends is an interactive graphing app that visualizes the popularity of different genres of dance music over time. I created this graph app by first crafting a custom web scraper with Python and Selenium which I used to capture all the tracks from the Beatport Top 100 on the first of each month for a decade in a CSV format. After collecting the data, I used Pandas to clean it up and organize it into JSONs organized by year. For the final touch, I combined React and the powerful graph library D3.js to design the UI and visualize the data, making the app both informative and interactive.", "link": "/", "links": {
    "View Code": "https://beat-trends.netlify.app/",
    "View Code1": "https://beat-trends.netlify.app/"
  } })} ${renderComponent($$result, "Project", $$Project, { "image": "../images/projects/planet-facts.png", "tags": ["Design", "Development"], "header": "Project Title", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, augue nisl ultricies augue, nec ultricies nisl elit nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, augue nisl ultricies augue, nec ultricies nisl elit nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, augue nisl ultricies augue, nec ultricies nisl elit nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "link": "/", "links": {
    "View Code": "https://beat-trends.netlify.app/"
  } })} ${renderComponent($$result, "Project", $$Project, { "image": "../images/projects/planet-facts.png", "tags": ["Design", "Development"], "header": "Project Title", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, augue nisl ultricies augue, nec ultricies nisl elit nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, augue nisl ultricies augue, nec ultricies nisl elit nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, augue nisl ultricies augue, nec ultricies nisl elit nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "link": "/" })} ${renderComponent($$result, "Project", $$Project, { "image": "../images/projects/planet-facts.png", "tags": ["Design", "Development"], "header": "Project Title", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, augue nisl ultricies augue, nec ultricies nisl elit nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, augue nisl ultricies augue, nec ultricies nisl elit nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, augue nisl ultricies augue, nec ultricies nisl elit nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "link": "/" })} </div> </div> </div> </div>`;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/Portfolio.astro", void 0);

const caroline = new Proxy({"src":"/_astro/caroline.p0w_LjfO.jpeg","width":400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tomfaddegon/Desktop/toms-portfolio/src/images/people/caroline.jpeg";
							}
							
							return target[name];
						}
					});

const georgia = new Proxy({"src":"/_astro/georgia-pettit.nuvFJdKs.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tomfaddegon/Desktop/toms-portfolio/src/images/people/georgia-pettit.png";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro("https://example.com");
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Testimonials;
  return renderTemplate`${maybeRenderHead()}<section> <div class="container container-large"> <div class="padding-global py-24 lg:py-36"> <div class="padding-extra"> <div> <h2 class="text-center mb-3">Don't just take it from me.</h2> <h4 class="text-center text-lg mb-10 font-bold">
Here's what my clients have had to say.
</h4> <div class="flex flex-col lg:flex-row justify-center gap-0 lg:gap-12 mb-8"> <!-- <Carousel client:load /> --> ${renderComponent($$result, "Card", $$Card, { "header": "Georgia Pettit", "title": "Co-Founder @ The Luminary Agency", "text": "Tom's data-driven approach to website optimization was a game-changer for our online business. His ability to translate analytics into actionable insights led to a remarkable increase in our conversion rates. His expertise in user engagement strategies has been invaluable to our team.", "icon": georgia, "link": "https://www.linkedin.com/in/georgiapettit/", "classes": "w-full lg:w-1/2", "rounded": true })} ${renderComponent($$result, "Card", $$Card, { "header": "Caroline Adams Vulcano", "title": "Founder @ Caroline Parker Creative", "text": "Tom is a person you want on your team. Dependable, efficient, and extremely talented, Tom is a rare breed that can dig in deep into a project and then present it beautifully. He has an eye for beautiful interfaces, the knowledge to back up his choices, and the skill to craft high-end products.", "icon": caroline, "link": "https://www.linkedin.com/in/carolinepadams/", "classes": "w-full lg:w-1/2", "rounded": true })} </div> <div class="flex justify-center"> ${renderComponent($$result, "Button", $$Button, { "text": "Get In Touch", "type": "tertiary", "link": "/contact" })} </div> </div> </div> </div> </div> </section>`;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/components/Testimonials.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  await getImage({
    src: gradientBackground$1
  });
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', '<script defer data-domain="thomasfaddegon.dev" src="https://plausible.io/js/script.js"><\/script>', '</head> <body> <main class="min-h-screen"> <!-- Hero Section --> <div class="gradient-background"> ', " ", " </div> ", " ", " ", " ", " ", " ", " </main> </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION }), renderHead(), renderComponent($$result, "Nav", $$Nav, { "title": SITE_TITLE }), renderComponent($$result, "Hero", $$Hero, {}), renderComponent($$result, "Skills", $$Skills, {}), renderComponent($$result, "Philosophy", $$Philosophy, {}), renderComponent($$result, "Experience", $$Experience, {}), renderComponent($$result, "Portfolio", $$Portfolio, {}), renderComponent($$result, "Testimonials", $$Testimonials, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/index.astro", void 0);

const $$file$2 = "/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/index.astro";
const $$url$2 = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://example.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`<html lang="en" data-astro-cid-uw5kdbxl> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-uw5kdbxl": true })}${renderHead()}</head> <body class="h-full" data-astro-cid-uw5kdbxl> <main class="flex flex-col min-h-screen" data-astro-cid-uw5kdbxl> <!-- Hero Section --> ${renderComponent($$result, "Nav", $$Nav, { "title": SITE_TITLE, "data-astro-cid-uw5kdbxl": true })} <section class="flex-grow" data-astro-cid-uw5kdbxl> <div class="container container-large" data-astro-cid-uw5kdbxl> <div class="padding-global" data-astro-cid-uw5kdbxl> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-16 pb-12" id="header-content" data-astro-cid-uw5kdbxl> <div class="col-span-1 lg:col-span-2 md:pr-12 flex flex-col gap-7" id="header-text" data-astro-cid-uw5kdbxl> <h1 data-astro-cid-uw5kdbxl>
Hi! I'm Thomas. <br data-astro-cid-uw5kdbxl> I bring websites & digital applications
                  to life.
</h1> <h4 data-astro-cid-uw5kdbxl>Let's stay in touch.</h4> <div class="max-w-lg" data-astro-cid-uw5kdbxl> <p data-astro-cid-uw5kdbxl>
Whether you're looking for a front-end developer, a UX/UI
                    specialist, a product strategist, or all of the above, I'd
                    love to hear from you.
</p> </div> </div> <div class="col-span-1 order-first md:order-last" id="header-image" data-astro-cid-uw5kdbxl> <!-- <img
                  src="https://placehold.co/400x450"
                  alt="Thomas"
                  class="rounded-xl"
                /> --> </div> </div> <div class="mb-40" data-astro-cid-uw5kdbxl> <form name="contact-form" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="space-y-4" action="/thank-you" data-astro-cid-uw5kdbxl> <div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-astro-cid-uw5kdbxl> <div data-astro-cid-uw5kdbxl> <div class="flex flex-start" data-astro-cid-uw5kdbxl> <label for="first_name" class="block text-sm font-medium text-gray-300" data-astro-cid-uw5kdbxl>${renderComponent($$result, "H3", $$H3, { "header": "Name", "data-astro-cid-uw5kdbxl": true })}</label> </div> <input type="text" name="name" id="name" required class="w-full p-2 bg-gray-700 border border-gray-600 text-white" data-astro-cid-uw5kdbxl> </div> <div data-astro-cid-uw5kdbxl> <div class="flex flex-start" data-astro-cid-uw5kdbxl> <label for="email" class="block text-sm font-medium text-gray-300" data-astro-cid-uw5kdbxl>${renderComponent($$result, "H3", $$H3, { "header": "email", "data-astro-cid-uw5kdbxl": true })}</label> </div> <input type="email" name="email" id="email" required class="w-full p-2 bg-gray-700 border border-gray-600 text-white" data-astro-cid-uw5kdbxl> </div> </div> <div data-astro-cid-uw5kdbxl> <div class="flex flex-start" data-astro-cid-uw5kdbxl> <label for="message" class="block text-sm font-medium text-gray-300" data-astro-cid-uw5kdbxl>${renderComponent($$result, "H3", $$H3, { "header": "Message", "data-astro-cid-uw5kdbxl": true })}</label> </div> <textarea name="message" id="message" required rows="8" class="w-full p-2 bg-gray-700 border border-gray-600 text-white" data-astro-cid-uw5kdbxl></textarea> <!-- {
                    formErrors.message && (
                      <p class="text-red-500">{formErrors.message}</p>
                    )
                  } --> </div> <div data-astro-cid-uw5kdbxl> <label for="bot-field" class="hidden" data-astro-cid-uw5kdbxl>Don’t fill this out if you're human:</label> <input name="bot-field" class="hidden" data-astro-cid-uw5kdbxl> </div> <div data-astro-cid-uw5kdbxl> ${renderComponent($$result, "Button", $$Button, { "text": "Send Message", "type": "primary", "data-astro-cid-uw5kdbxl": true })} </div> </form> </div> </div> </div> </section> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-uw5kdbxl": true })} </main>  </body> </html>`;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/contact.astro", void 0);

const $$file$1 = "/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/contact.astro";
const $$url$1 = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}

const rss_xml = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://example.com");
const $$ThankYou = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThankYou;
  return renderTemplate`<html lang="en" class="h-full"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body class="h-full"> <main class="flex flex-col min-h-screen"> ${renderComponent($$result, "Nav", $$Nav, {})} <!-- Content section should flex and grow --> <section class="flex-grow flex items-center justify-center"> <div class="container container-large"> <div class="padding-global"> <div class="flex flex-col items-center justify-center text-center gap-6 mb-[15%] min-h-[50vh]"> <h1>Thanks for your message!</h1> <h4>I'll get back to you ASAP.</h4> </div> </div> </div> </section> <!-- Footer will be pushed to the bottom --> ${renderComponent($$result, "Footer", $$Footer, {})} </main> </body></html>`;
}, "/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/thank-you.astro", void 0);

const $$file = "/Users/tomfaddegon/Desktop/toms-portfolio/src/pages/thank-you.astro";
const $$url = "/thank-you";

const thankYou = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ThankYou,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$HeaderLink as $, ____slug_ as _, about as a, index as b, contact as c, index$1 as i, rss_xml as r, thankYou as t };
