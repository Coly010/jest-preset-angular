!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/jest-preset-angular/",n(n.s=3)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=2},function(e,t,n){"use strict";n.r(t);n(0);n(1);const s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[s.prefix,e,s.suffix].filter((e=>e&&e.length>0)).join("-"),a=e=>e||r(s.precache),c=(e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n};class o extends Error{constructor(e,t){super(c(e,t)),this.name=e,this.details=t}}const i=new Set;const l=(e,t)=>e.filter((e=>t in e)),h=async({request:e,mode:t,plugins:n=[]})=>{const s=l(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},u=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const a=await self.caches.open(e),c=await h({plugins:r,request:t,mode:"read"});let o=await a.match(c,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:c})}return o},f=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:a})=>{const c=await h({plugins:r,request:t,mode:"write"});if(!n)throw new o("cache-put-with-no-response",{url:(f=c.url,new URL(String(f),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var f;const d=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,a=!1;for(const t of s)if("cacheWillUpdate"in t){a=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:c});if(!d)return void 0;const p=await self.caches.open(e),y=l(r,"cacheDidUpdate"),w=y.length>0?await u({cacheName:e,matchOptions:a,request:c}):null;try{await p.put(c,d)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of i)await e()}(),e}for(const t of y)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:w,newResponse:d,request:c})},d=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=l(s,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new o("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:c,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:c.clone()});throw e}};let p;async function y(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,a=function(){if(void 0===p){const e=new Response("");if("body"in e)try{new Response(e.body),p=!0}catch(e){p=!1}p=!1}return p}()?n.body:await n.blob();return new Response(a,r)}function w(e){if(!e)throw new o("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new o("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class g{constructor(e){this._cacheName=a(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=w(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new o("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new o("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),a=await r.keys(),c=new Set(a.map((e=>e.url)));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map((({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),a=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:a,event:e,integrity:r,plugins:t,url:s})}));await Promise.all(o);return{updatedURLs:n.map((e=>e.url)),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:a}){const c=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});let i,l=await d({event:s,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(i=e);if(!(i?await i.cacheWillUpdate({event:s,request:c,response:l}):l.status<400))throw new o("bad-precaching-response",{url:t,status:l.status});l.redirected&&(l=await y(l)),await f({event:s,plugins:r,response:l,request:e===t?c:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new o("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new o("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"c238790c04020153941ba031d85a682c","url":"02a1e558.1886ab32.js"},{"revision":"6283b488f5b6980c14a699fb7d008936","url":"03be7dae.df307bb1.js"},{"revision":"5e90a3d71029ec71e6b53bd5fe9484f6","url":"1.993efa4e.js"},{"revision":"99bf1eeeedba591519717d181e5da398","url":"14b133ce.e09389ba.js"},{"revision":"e9d3ab468268f9f97607b625299b7248","url":"17896441.99453864.js"},{"revision":"c1dca601c0df42538120ca5c02009ab0","url":"18b93cb3.3bbf89d6.js"},{"revision":"54d588c065676f71988e889838cd4c68","url":"1a421168.5e2d4baa.js"},{"revision":"65517241215bd7f840537982ac322cd8","url":"2.200eaeab.js"},{"revision":"6886de37bd7f876b416742f282deb5eb","url":"2ae17008.0983bb3e.js"},{"revision":"2ce3ddf224c891dadc1fcdcb449d57d9","url":"2ed5d46c.c3d92d65.js"},{"revision":"da9ffb062b87f7d927756074db4970ff","url":"34.1b5de6a5.js"},{"revision":"a580f3618143718bc9235c6ae40ac350","url":"35.763d0e8d.js"},{"revision":"1ecaf5252d59747f5a7d4fbde63e588b","url":"36.c1a0e584.js"},{"revision":"fd6b5620a04d068b68a81a9958b05fe2","url":"37.fe8bc671.js"},{"revision":"6264898d664f68229a002f209611fcdc","url":"38.de7d573d.js"},{"revision":"bdeb49e21dd12214704925e724575389","url":"404.html"},{"revision":"7cbf4c198eb7343a85664c81169369a3","url":"4351d34b.c8c7116e.js"},{"revision":"909358f88b94f8d9596dd234aeffbe7f","url":"4e0c07c5.d6eb8459.js"},{"revision":"6162f45dc74afd1819ac24ffaee56fb8","url":"4ef1ee20.7cdf3cd3.js"},{"revision":"87b1f527588c5b2933bbcae3a06a63ef","url":"54f44165.c518ed0b.js"},{"revision":"f627c90aa44d429787a8ace21ce56e06","url":"6266f1ba.b9ecc63c.js"},{"revision":"b9ebba77d022dfc26adf02e2a76b7e0e","url":"651850eb.78bc8b8f.js"},{"revision":"1ef4eea3b1864570ae0be65507db72d6","url":"72f058d3.87badcd9.js"},{"revision":"dd4fd5f10894d66aa00cf4131b5340c1","url":"7aeeadd4.0f46c5c3.js"},{"revision":"df7e6611f715a13cfb6cfed25fee3e0e","url":"935f2afb.8b7a5baa.js"},{"revision":"56b694bbb8e18ad92adf0e09f30b5711","url":"9903dc99.38509e85.js"},{"revision":"08dba8770143fe00f3cb8e343ebdc606","url":"a09c2993.711ab067.js"},{"revision":"131a73ce6add98396e4988f4d221a339","url":"adb64ee2.9a0b3c26.js"},{"revision":"c7426e07ed2ad832aa0c11a15d2a8dcc","url":"c44fa306.a1a33ada.js"},{"revision":"4fdbbb9bf49071d0d38c2832cedac9e7","url":"c4f5d8e4.8e355154.js"},{"revision":"e4a906a04a79938c51a9aeef0d96d8b4","url":"d19b9e8a.3c30b272.js"},{"revision":"30c3d6304cc5b45a7424092f81661e35","url":"d4836a8e.be080c0f.js"},{"revision":"16e49d60fd0d2e2a6272c3f719f65a60","url":"docs/getting-started/installation/index.html"},{"revision":"38701fad64322cb64dea1ad88e9e13ba","url":"docs/getting-started/options/index.html"},{"revision":"3a6b6452b0ec9d060117b174cff84ba9","url":"docs/getting-started/presets/index.html"},{"revision":"9e2c8aae130d390994bd5feb830584ff","url":"docs/getting-started/test-environment/index.html"},{"revision":"682e12e56984765ae2029d51004d978f","url":"docs/guides/absolute-imports/index.html"},{"revision":"ff19fa0419dc9368c3594dd7171bcc87","url":"docs/guides/angular-ivy/index.html"},{"revision":"04885a126aa84bbe67657f7ab6fbe145","url":"docs/guides/babel-jest/index.html"},{"revision":"cca740a1c8f4081d7f1a7eaba9fe8f1b","url":"docs/guides/esm-support/index.html"},{"revision":"0379a38946b59621925f747504b7bdb2","url":"docs/guides/jsdom-version/index.html"},{"revision":"cbd53d088c33a97b0efcb819d922d0f3","url":"docs/guides/troubleshooting/index.html"},{"revision":"779b263b06659b12144c0d1c03a6456e","url":"docs/index.html"},{"revision":"6d8fee27aeb748fafbc850ee0cee5368","url":"docs/next/getting-started/installation/index.html"},{"revision":"6f0e716e4f09618ba4001df6f34c0890","url":"docs/next/getting-started/options/index.html"},{"revision":"ee6e7d4e3a400fd1c79593bd0a56cbf3","url":"docs/next/getting-started/presets/index.html"},{"revision":"e83766efdf9660eec056784e9d50b8fc","url":"docs/next/getting-started/test-environment/index.html"},{"revision":"88a3fdf5e0876c6b80f6d7150575f653","url":"docs/next/guides/absolute-imports/index.html"},{"revision":"b0a89637a959fd34f73a01d6062d2f99","url":"docs/next/guides/angular-ivy/index.html"},{"revision":"1c351eb858e42ce9cc50e19d53aa93d4","url":"docs/next/guides/babel-jest/index.html"},{"revision":"8005c3fb5766f44a647934ea13dee3a2","url":"docs/next/guides/esm-support/index.html"},{"revision":"b5d6c7b15eabcbdf4d74a5da550084f8","url":"docs/next/guides/jsdom-version/index.html"},{"revision":"b19bcbff03c6c7dde5ad0338b8972c1f","url":"docs/next/guides/troubleshooting/index.html"},{"revision":"b01d3b8a14ef9e38dea459d1f6ca0e30","url":"docs/next/index.html"},{"revision":"ad65754107fa618667a008f84137916d","url":"docs/next/processing/index.html"},{"revision":"d0bdfc509054a3ee3d552db23431cbff","url":"docs/processing/index.html"},{"revision":"13189713d76c7b1e9da2fb31af9f3824","url":"eabdbf07.e6e2938f.js"},{"revision":"6666e55376775097b6f3b863f1579bfd","url":"f0447160.d95a70b5.js"},{"revision":"dbaf9e1cdc2291d66345bf261b81d778","url":"f97daad0.1ff65117.js"},{"revision":"dfc2638127347e6e3b24f33699dba2ce","url":"fc80686b.2a6df158.js"},{"revision":"b703d82b8669206689d23bfd74165f33","url":"ff6d22c3.4add052d.js"},{"revision":"118cc918c9de1ad2b5251be2c66b2d25","url":"index.html"},{"revision":"6721ce7b7f7d655a3fb023dbf24217a0","url":"main.925dfba0.js"},{"revision":"9e8f0f55a28f3749d7906e2dbfbee02d","url":"manifest.json"},{"revision":"985c7b3e3e8995367045bab14892809c","url":"runtime~main.44dc6ac5.js"},{"revision":"a4d4e7bfcabae6808cbd6943557f0ab1","url":"styles.1ba54064.css"},{"revision":"76d1a3274419730f36608f98dcc78b8e","url":"styles.ce71a53c.js"},{"revision":"85c6764965af20525471e240148eabc6","url":"versions/index.html"},{"revision":"f8389ca1a741a115313bede9ac02e2c0","url":"img/discord.svg"},{"revision":"5e0e02d0c0f021b2037ed926d68ea1be","url":"img/documentation.png"},{"revision":"a83841c50aa67da6144860bd5031cc53","url":"img/github.png"},{"revision":"a2552d19b3538a030407a0191c99cae1","url":"img/logo.svg"},{"revision":"ee83b65c3aed4a45b928a4bebeb97a98","url":"img/pull-request.png"},{"revision":"cce226b035fb4ab5eee43b077db1ba4a","url":"img/troubleshooting.png"}],n=new g;e.offlineMode&&n.addToCacheList(t),await async function(e){}(),self.addEventListener("install",(e=>{e.waitUntil(n.install())})),self.addEventListener("activate",(e=>{e.waitUntil(n.activate())})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const s=t.request.url,r=function(e){const t=[],n=new URL(e,self.location.href);return n.origin!==self.location.origin||(n.search="",n.hash="",t.push(n.href),n.pathname.endsWith("/")?t.push(`${n.href}index.html`):t.push(`${n.href}/index.html`)),t}(s);for(let a=0;a<r.length;a+=1){const c=r[a],o=n.getCacheKeyForURL(c);if(o){e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:s,possibleURL:c,possibleURLs:r,cacheKey:o}),t.respondWith(caches.match(o));break}}}})),self.addEventListener("message",(async e=>{"SKIP_WAITING"===(e.data&&e.data.type)&&self.skipWaiting()}))})()}]);