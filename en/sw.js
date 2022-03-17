(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.0"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.0"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.0"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"4068a55b76158692329da7491d3cbaef","url":"404.html"},{"revision":"10ee16c949f5d5edff78b2da55ced76e","url":"assets/css/styles.a60a2eaf.css"},{"revision":"4a08a467edfb03158ff4d687ad3561cb","url":"assets/js/01a85c17.d02b3489.js"},{"revision":"ead5441a3f59ca67267e0a678513297a","url":"assets/js/02bbaa45.2961814c.js"},{"revision":"b87bb121c06507bd610891f13b5683b9","url":"assets/js/0b3c5dd7.11701aae.js"},{"revision":"6a959319085327322a1068a47d9845ff","url":"assets/js/0df6edc2.e6c136f0.js"},{"revision":"f83485e56e202cf1174b0284f9541d0b","url":"assets/js/100fb24b.1a6f76eb.js"},{"revision":"a5779873bb9e8d6c15b28035dc15e1a8","url":"assets/js/14300880.ed6a6153.js"},{"revision":"55983988bb2773fdbdc2af5de110a227","url":"assets/js/15c11874.30b0b6f7.js"},{"revision":"0bee63f8f1ac187fce076193eb8a34de","url":"assets/js/17896441.2d8ec58a.js"},{"revision":"fb8217dd384fb269295bc45dcd30a8b5","url":"assets/js/1a4e3797.218bbcf7.js"},{"revision":"62167b922c11894ec5aa51a089454693","url":"assets/js/1be78505.752ca34d.js"},{"revision":"889c4ee46d1b2e649963c453ec0d1e12","url":"assets/js/1f391b9e.f99f3b50.js"},{"revision":"dfb4b0ad43d9c3ecc32b04f781324911","url":"assets/js/230.4a28605a.js"},{"revision":"9ba78a4c4670097c3cfd6811c5abbed3","url":"assets/js/2e67dd18.4655c23c.js"},{"revision":"163f3bde5dc703e6c9e7a6f3d6646b7b","url":"assets/js/3720c009.18b846c9.js"},{"revision":"d2e93c6e1b922252e7b3ab5898c411fe","url":"assets/js/393be207.5f8062ed.js"},{"revision":"3c6deaba797ff3bf9593ec309cf4d312","url":"assets/js/3f3d5867.1867a3e1.js"},{"revision":"30bf9405cb27437307f1629d889a7b01","url":"assets/js/4608.ffc93644.js"},{"revision":"cb7b9a0447481b871ffdd3f7c60c4576","url":"assets/js/499a19c6.45edf66d.js"},{"revision":"22a36651169f4b34ec73116fd76dfcbb","url":"assets/js/5131.dfe83188.js"},{"revision":"fb0f095b001c824deb88ad2de985e34c","url":"assets/js/5283.96f9352e.js"},{"revision":"40f6e16146cf31fb4d3d9bfa7d0eb4dd","url":"assets/js/53d4a3b9.14071005.js"},{"revision":"31a67ca92fdc08bac327106cfc1998ff","url":"assets/js/5525.1fbb0d9d.js"},{"revision":"329c14abfe55a9ef379b54e6d70f9e72","url":"assets/js/55960ee5.66e08c9b.js"},{"revision":"ef1af00a211dfc78339b55f8dd18ecb8","url":"assets/js/5897.592db2fd.js"},{"revision":"f8b04eaa6a30033ea903f9afd4095b53","url":"assets/js/59362658.4a5058a9.js"},{"revision":"618c3b161e18e33e6518bec2ae082a81","url":"assets/js/5b44acae.133e58af.js"},{"revision":"5a08074f823a9cca61a689c95523b790","url":"assets/js/62e940f8.aa8af0bd.js"},{"revision":"94dc6ec00a27aa2a1fc5a676209944c1","url":"assets/js/6875c492.2cdd7c6a.js"},{"revision":"9c7d9241ac83864896b5792757b8e0c9","url":"assets/js/73664a40.5da37079.js"},{"revision":"ca5b93be3819ec38fe6b9215715943a4","url":"assets/js/7661071f.afedd3cb.js"},{"revision":"7a4aa0b5e3bdedfa4b8a267dd48b6765","url":"assets/js/7bfc7419.33a46588.js"},{"revision":"044750a116b8372dbc720f716a696261","url":"assets/js/814f3328.62b6bdb6.js"},{"revision":"c0b81577b1f3e3b08dbe58281c8e8585","url":"assets/js/8443.e8b0ea09.js"},{"revision":"ac8b67f638562b7aa9089e649977b9aa","url":"assets/js/8717b14a.0ba9fdf6.js"},{"revision":"a7bb998a66de5b3a929f2dbb804aeffd","url":"assets/js/87c19286.dcb717c0.js"},{"revision":"fcd6d9d1548e577423a83b51fc9e6dbc","url":"assets/js/8e3d14ef.6588b36d.js"},{"revision":"97096e882d99e8e55cd23e054388524e","url":"assets/js/925b3f96.5e3429c0.js"},{"revision":"fb70158aa15353c14337d2eeaadc2b84","url":"assets/js/935f2afb.508d2330.js"},{"revision":"4222e7980304bc9e418c93f4c3280e10","url":"assets/js/9e4087bc.f44c1dcb.js"},{"revision":"bcb27960eea9c4ab861ae80eb1da824e","url":"assets/js/a6aa9e1f.e86cb8d5.js"},{"revision":"1a037fb7fedb5e009aa4112ab12bc169","url":"assets/js/b624931d.2f358389.js"},{"revision":"e6a9b0dda0c3fd1f2ed0782e1e42a73b","url":"assets/js/c4f5d8e4.c6456bdf.js"},{"revision":"953f6142a93ef59d381a8ddc60ae8ff3","url":"assets/js/c5c0dfac.32e6673e.js"},{"revision":"2658de7953703fb1552b53b70b31422a","url":"assets/js/c9e2653a.34e1c8f3.js"},{"revision":"c95c28a7184f76deb3110ab4e3ac7ab8","url":"assets/js/ccc49370.8cf84a0d.js"},{"revision":"f771e3cb395a15a2c237fffe6f6b2d07","url":"assets/js/d4f6cae3.3ea3c47b.js"},{"revision":"d6ce0700d355506e6e117cf878efaa78","url":"assets/js/d9f32620.1e87b1b4.js"},{"revision":"82ad9d4c4ce2a3ac520a42863e5cfa28","url":"assets/js/dd6c4fa0.a03657e1.js"},{"revision":"8ad9553602a3067a797f7f2b5faab50b","url":"assets/js/df203c0f.cd470c82.js"},{"revision":"91a72b3c30bfe14c9a3552a716ecfa7b","url":"assets/js/e1e8bfef.6776c2ea.js"},{"revision":"f3fb4ce14a23c1c229f82ee364993318","url":"assets/js/e273c56f.caeb5d63.js"},{"revision":"d4c74d4821f8c38e17101fff01a893a0","url":"assets/js/e768fa03.8effb22c.js"},{"revision":"9a0839710981f1e76284e42b31022864","url":"assets/js/edaa5198.f6216413.js"},{"revision":"0209c593f065797f7e3a11992b7cb1d6","url":"assets/js/f4f34a3a.3c71e06a.js"},{"revision":"c200defcdc3b3da76bffa52e8d84889c","url":"assets/js/fabc7523.54264ee3.js"},{"revision":"244485d46d9a417e877ad4493e84cf72","url":"assets/js/main.53944642.js"},{"revision":"df4d3a10fd4705a4e48df6deceda044f","url":"assets/js/runtime~main.88d515a9.js"},{"revision":"e91844d737d46ebdcd1ecd63f0ff5978","url":"blog.html"},{"revision":"d1137c7a67c39c58e5cc77337d70caa1","url":"blog/archive.html"},{"revision":"a4f9149c4c5c561169563243ab71920a","url":"blog/first-blog-post.html"},{"revision":"8d53c52b266d889da865fd8b46d7b70b","url":"blog/long-blog-post.html"},{"revision":"8553a45cc302a8f994e2d7e0c738a90c","url":"blog/mdx-blog-post.html"},{"revision":"16b1f33c26f7d699555ef40a2414f4fd","url":"blog/tags.html"},{"revision":"80cf8a1984b29f8b4b0b3bc2773ba2bb","url":"blog/tags/docusaurus.html"},{"revision":"3393b85967733dab5957c9f28d821cb0","url":"blog/tags/facebook.html"},{"revision":"f2ebb75a9f6aae0974b35c25f6663f93","url":"blog/tags/hello.html"},{"revision":"096ee8e3d761d8b069983bba47bd2d7c","url":"blog/tags/hola.html"},{"revision":"7f8b7689f2fb233dc304b4b3574a50f6","url":"blog/welcome.html"},{"revision":"6f2a910ccf934382592c1553a23df554","url":"docs/create-new-page.html"},{"revision":"c6401b67e829b9dc43e5a8849efaf516","url":"docs/create-new-page/create-a-blog-post.html"},{"revision":"90d541994f783b346e7d66cf1716d341","url":"docs/create-new-page/create-a-document.html"},{"revision":"ff61d59c4f7645f282035b5dd2b56327","url":"docs/create-new-page/create-a-page.html"},{"revision":"eb900168d50a7e5d44f221a6a4358d22","url":"docs/create-new-page/markdown-features.html"},{"revision":"7eea49c8f1e248d3ea969bd535f2bd67","url":"docs/create-new-page/temp1/create-a-page.html"},{"revision":"2a602f10625d8317a8b21c3effdede29","url":"docs/intro.html"},{"revision":"c41ac18de04aecb8589d6a6015e8e9d6","url":"docs/node-js/NodeJS.html"},{"revision":"06000bf734d5a011e407ea5eace5b75f","url":"docs/tags.html"},{"revision":"4e3e7542f7b254446d229513df7e61e3","url":"docs/tags/markdown.html"},{"revision":"ac3b4b29a92b249b1395dcb367118df3","url":"docs/tags/node-js.html"},{"revision":"086a7823409948f76e0faf695e58fb42","url":"docs/tags/note.html"},{"revision":"7fa96d965ec0d1d6c4a35896c180e16b","url":"docs/tags/开始使用.html"},{"revision":"961666ed0fdb62afb95f4c10f0b7e677","url":"docs/tags/标签.html"},{"revision":"15dd5ad466fb3d330b5c92419e5b7f57","url":"index.html"},{"revision":"b5a5eae8c0b3bd48a6361ccf31b2f7fc","url":"manifest.json"},{"revision":"f7cc91c97e77e830667f716aa53299d3","url":"markdown-page.html"},{"revision":"3f25ad51082fd8fe7bdc1a4f209ad7d0","url":"search-index.json"},{"revision":"aff8f030871eb9af42ef72b366e977df","url":"search.html"},{"revision":"192a6a160f31b1689a4c6233bdbbb803","url":"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();