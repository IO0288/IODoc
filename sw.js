(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.0"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.0"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.0"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"e1cb3366a2f5ccec272fdf7080edf6a3","url":"404.html"},{"revision":"10ee16c949f5d5edff78b2da55ced76e","url":"assets/css/styles.a60a2eaf.css"},{"revision":"4a08a467edfb03158ff4d687ad3561cb","url":"assets/js/01a85c17.d02b3489.js"},{"revision":"5accdcf4eae37ea78e65b7d36b08a642","url":"assets/js/07c6a50d.70a31d7a.js"},{"revision":"fa8c801fc76bb8b6ce84802cce868de1","url":"assets/js/0e384e19.ca268f56.js"},{"revision":"c45afce1415206f39125d55c30f3fc46","url":"assets/js/100fb24b.a122e3c3.js"},{"revision":"0bee63f8f1ac187fce076193eb8a34de","url":"assets/js/17896441.2d8ec58a.js"},{"revision":"fb8217dd384fb269295bc45dcd30a8b5","url":"assets/js/1a4e3797.218bbcf7.js"},{"revision":"62167b922c11894ec5aa51a089454693","url":"assets/js/1be78505.752ca34d.js"},{"revision":"889c4ee46d1b2e649963c453ec0d1e12","url":"assets/js/1f391b9e.f99f3b50.js"},{"revision":"dfb4b0ad43d9c3ecc32b04f781324911","url":"assets/js/230.4a28605a.js"},{"revision":"3619ffde750b63a80f2c59efdc39278d","url":"assets/js/2ae76d86.ff08c18a.js"},{"revision":"163f3bde5dc703e6c9e7a6f3d6646b7b","url":"assets/js/3720c009.18b846c9.js"},{"revision":"4bd48ed6fc2a9f7691b9acb67e9766db","url":"assets/js/393be207.a00f242c.js"},{"revision":"e337c6d8036e3d2a9147b075f8f84234","url":"assets/js/393c980b.35c2f397.js"},{"revision":"a08b2749bd2a4fe49cce5bf4f5ed928b","url":"assets/js/398e9369.4d3637d3.js"},{"revision":"8f480bfc6b274ad63b3a8200a0a019f3","url":"assets/js/39a4cb35.ba5544aa.js"},{"revision":"dd75f1c7d67ae7f5581262d706b9994c","url":"assets/js/3e5f1c1d.75b9eb49.js"},{"revision":"30bf9405cb27437307f1629d889a7b01","url":"assets/js/4608.ffc93644.js"},{"revision":"338269044d79c4209302e6672d2679bd","url":"assets/js/4a34ac59.5d9e84c7.js"},{"revision":"22a36651169f4b34ec73116fd76dfcbb","url":"assets/js/5131.dfe83188.js"},{"revision":"fb0f095b001c824deb88ad2de985e34c","url":"assets/js/5283.96f9352e.js"},{"revision":"31a67ca92fdc08bac327106cfc1998ff","url":"assets/js/5525.1fbb0d9d.js"},{"revision":"b5a747195402944966891cef6afd0d2d","url":"assets/js/55960ee5.262409cd.js"},{"revision":"ef1af00a211dfc78339b55f8dd18ecb8","url":"assets/js/5897.592db2fd.js"},{"revision":"b718dcb847fd75bfab42f1700e8f75d6","url":"assets/js/59362658.1fc98df2.js"},{"revision":"88dbaa0feb6328086866e65ec0707517","url":"assets/js/678b3ec3.227af83d.js"},{"revision":"94dc6ec00a27aa2a1fc5a676209944c1","url":"assets/js/6875c492.2cdd7c6a.js"},{"revision":"05986ada03fdf4aeca4e657948af6d8f","url":"assets/js/6bdc135b.77096e56.js"},{"revision":"f34cad5fcfc753baef42211044f3f44e","url":"assets/js/73664a40.f9cad99f.js"},{"revision":"e9c195c2a890ed48681139af774af901","url":"assets/js/7661071f.30734d4c.js"},{"revision":"6cf4876b07f25f953d737bf6ea78292f","url":"assets/js/77914c85.0572fd4e.js"},{"revision":"17c632391e0c9449eed59b17e881201a","url":"assets/js/7bed68bb.29a24e5b.js"},{"revision":"537d403bbb718c0941dcc9ab7944ae3f","url":"assets/js/7cdb8f2b.92b71ac3.js"},{"revision":"d168857212dfe6fb0490d24b786f8c41","url":"assets/js/814f3328.4927a462.js"},{"revision":"8207348232b3a7f04dbba94333fb25e7","url":"assets/js/81e9c77e.00b25d70.js"},{"revision":"c0b81577b1f3e3b08dbe58281c8e8585","url":"assets/js/8443.e8b0ea09.js"},{"revision":"68a52c224571167366198fda19a7eb8e","url":"assets/js/8717b14a.eb9a76af.js"},{"revision":"65a71f800094f384a7aad4df4881ddbc","url":"assets/js/8b5c1511.ead0e85a.js"},{"revision":"2ac6254aa8e67c05f27caa91b7110a09","url":"assets/js/8c597e0f.71f8905a.js"},{"revision":"aad2b0ff77fb41f181c8b2b03189ba8c","url":"assets/js/925b3f96.5480a9f1.js"},{"revision":"7c2b92e56d0b8731380c2a483de10502","url":"assets/js/935f2afb.8da40cb1.js"},{"revision":"ecf2bb514d54d2de23731af6202da5f1","url":"assets/js/93989b31.f3228f49.js"},{"revision":"a7ec4e1bf306a139266ab1458c8a1364","url":"assets/js/956658e1.a262f7b6.js"},{"revision":"4222e7980304bc9e418c93f4c3280e10","url":"assets/js/9e4087bc.f44c1dcb.js"},{"revision":"f91ec3db2760474f1c48c610ad6f271f","url":"assets/js/9ec770cb.5bde88e0.js"},{"revision":"529c01d68ef1629bec0b21ece605e127","url":"assets/js/a1daf4eb.5c5b3e49.js"},{"revision":"bcb27960eea9c4ab861ae80eb1da824e","url":"assets/js/a6aa9e1f.e86cb8d5.js"},{"revision":"3d2e93a1dba3fa20ca0605ab04be46c0","url":"assets/js/a76ef80d.e9ff6c4e.js"},{"revision":"6dc69818cc68d46e0c2f1b14528a4bb4","url":"assets/js/ab2a1445.94c0ca73.js"},{"revision":"689186fa43691d7db6747219cf7c364c","url":"assets/js/ad22c282.09b258d4.js"},{"revision":"478a41895991d181e3341cba91b4f710","url":"assets/js/ae220780.f575fb87.js"},{"revision":"74c458d56cf2c1934fb1df6c6a64977e","url":"assets/js/b94fa5a2.a4a72edf.js"},{"revision":"512852409cf5f681b5fcdbd4a5c5a69b","url":"assets/js/bb293123.1b13d1f8.js"},{"revision":"d84140fe4957ba8a76df37cdc626093c","url":"assets/js/c484fe4f.d9ce6bd1.js"},{"revision":"e6a9b0dda0c3fd1f2ed0782e1e42a73b","url":"assets/js/c4f5d8e4.c6456bdf.js"},{"revision":"c95c28a7184f76deb3110ab4e3ac7ab8","url":"assets/js/ccc49370.8cf84a0d.js"},{"revision":"64b75c16f83fd634f9ad6e2e48dd5ff8","url":"assets/js/d9f32620.eafa52fc.js"},{"revision":"67d78a7eab3801e8d4403b388a87da04","url":"assets/js/dd6c4fa0.6eaceb9d.js"},{"revision":"8ad9553602a3067a797f7f2b5faab50b","url":"assets/js/df203c0f.cd470c82.js"},{"revision":"0767341c2142b39e0442c35fc3b4ca1b","url":"assets/js/e273c56f.ec522a35.js"},{"revision":"10691794da109802cbf1303cefacf3d8","url":"assets/js/e657d966.6e5987de.js"},{"revision":"310aefdaef12efe1d656f5cef65fd796","url":"assets/js/f4f34a3a.da931ad8.js"},{"revision":"3fe2f9c87edba6558e2f7c17e00fcd90","url":"assets/js/fc81b9cd.c00dc6de.js"},{"revision":"ad71d27566a4e3848d13ece59f3efc37","url":"assets/js/main.d37ff82a.js"},{"revision":"b12407b3f520af342b33062564f9a34c","url":"assets/js/runtime~main.c1825a1b.js"},{"revision":"042042acc19e482fe0fa8dd6291727af","url":"blog.html"},{"revision":"28019830a1f063e5ab676f18c976efb2","url":"blog/archive.html"},{"revision":"89c96ab3702eeb64aba3c73f8793ca6a","url":"blog/first-blog-post.html"},{"revision":"d29c3c3edd64e1328a3cc5b590758741","url":"blog/long-blog-post.html"},{"revision":"5d3b28f976f5d41405b1dce349b19704","url":"blog/mdx-blog-post.html"},{"revision":"bb290ad42a5eaab79ed5d5714da33616","url":"blog/tags.html"},{"revision":"6c79ada41746a74b7f0062e85f9b5b10","url":"blog/tags/docusaurus.html"},{"revision":"39e6b5a100c34b5d0807305cd7f5cf02","url":"blog/tags/facebook.html"},{"revision":"0321bb5fdc4d35d23416893abfc8fbcd","url":"blog/tags/hello.html"},{"revision":"ae1926bb25f063837896de5703e9b378","url":"blog/tags/hola.html"},{"revision":"bde6f85634dc982c00df40e0069b3808","url":"blog/welcome.html"},{"revision":"ab57e1a2b711abc61b5f7704809067a4","url":"docs/create-new-page.html"},{"revision":"dd1c8372ac0d0b0b95c3e594ceae699a","url":"docs/create-new-page/create-a-blog-post.html"},{"revision":"c74c0da8e0c85a395b8cdf58cf7a3e59","url":"docs/create-new-page/create-a-document.html"},{"revision":"ff3669c5cfdd56041173d7f230bbb196","url":"docs/create-new-page/create-a-page.html"},{"revision":"396ae5937c338bfa8eab9af53ff21ae5","url":"docs/create-new-page/markdown-features.html"},{"revision":"b9860de09569ad617c3d61fa59942f9e","url":"docs/create-new-page/temp1/create-a-page.html"},{"revision":"8f979cf0cfd9c48da0babc9cd054af4d","url":"docs/intro.html"},{"revision":"d632097ff81c82f62b9acd9b32d5fa7b","url":"docs/markdown.html"},{"revision":"953b41b5d19197999eedee88f28d9bf8","url":"docs/markdown/LaTeX.html"},{"revision":"c56616699940c8862f2e0d3eae266327","url":"docs/node-js/NodeJS.html"},{"revision":"65d8db95779f259283abfe8ae6773732","url":"docs/Q-A/Q&A-Windows.html"},{"revision":"2c32eefac5442ad60c8d2ee308fac6d0","url":"docs/Q-A/Q&A.html"},{"revision":"a2b09f2ca22f7f142cf88c29b25b226c","url":"docs/tags.html"},{"revision":"abe71d0fdf3858bbe54a6f449a256b55","url":"docs/tags/la-te-x.html"},{"revision":"32b7254a6f6369fc63f537084ee4ad82","url":"docs/tags/markdown.html"},{"revision":"f67416f9d9f90c5256d964e490292fb5","url":"docs/tags/node-js.html"},{"revision":"5f9ef3999281865b2283a96dd57a8a2c","url":"docs/tags/note.html"},{"revision":"96228e7b983c541f5af28c22db88b0b9","url":"docs/tags/q-a.html"},{"revision":"1d32a83872ed8bc6866b2944d7160688","url":"docs/tags/windows.html"},{"revision":"649b2129517c987cd012d953f67ca553","url":"docs/tags/开始使用.html"},{"revision":"06495eff897b21297ed1129ebb88062a","url":"docs/tags/标签.html"},{"revision":"f0b59291a1cc1730038d6cd50f6afe00","url":"index.html"},{"revision":"b5a5eae8c0b3bd48a6361ccf31b2f7fc","url":"manifest.json"},{"revision":"a92d97c2e515a73fe50abf11df670a82","url":"markdown-page.html"},{"revision":"8e8aab7125facac007482f4f4bd28200","url":"search-index.json"},{"revision":"3fa77f48210de59f2f7e0febebecbb9d","url":"search.html"},{"revision":"192a6a160f31b1689a4c6233bdbbb803","url":"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();