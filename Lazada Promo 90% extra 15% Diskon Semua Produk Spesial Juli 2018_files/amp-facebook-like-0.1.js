(self.AMP=self.AMP||[]).push({n:"amp-facebook-like",v:"1530320824316",f:(function(AMP){function aa(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var e in b)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,e);d&&Object.defineProperty(a,e,d)}else a[e]=b[e]}function r(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ba=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function t(a){var b=Object.create(null);if(!a)return b;for(var c;c=ba.exec(a);){var e=r(c[1],c[1]),d=c[2]?r(c[2],c[2]):"";b[e]=d}return b};var v="";function w(){var a=void 0,b=a||self,c;if(b.AMP_MODE)c=b.AMP_MODE;else{c=b;var e=t(c.location.originalHash||c.location.hash),d=t(c.location.search);v||(v=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011530320824316");c=b.AMP_MODE={localDev:!1,development:!("1"!=e.development&&!c.AMP_DEV_MODE),examiner:"2"==e.development,filter:e.filter,geoOverride:e["amp-geo"],minified:!0,lite:void 0!=d.amp_lite,test:!1,log:e.log,version:"1530320824316",rtvVersion:v}}return c};var ca=Object.prototype.toString;self.log=self.log||{user:null,dev:null,userForEmbed:null};var z=self.log;function A(){if(!z.user)throw Error("failed to call initLogConstructor");return z.user}function B(){if(z.dev)return z.dev;throw Error("failed to call initLogConstructor");};function C(a){return a||{}};function D(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};var E=self.AMP_CONFIG||{},F=E.thirdPartyUrl||"https://3p.ampproject.net",da=E.thirdPartyFrameHost||"ampproject.net";function I(a){this.w=a;this.l=this.m=0;this.j=Object.create(null)}I.prototype.has=function(a){return!!this.j[a]};I.prototype.get=function(a){var b=this.j[a];if(b)return b.access=++this.l,b.payload};I.prototype.put=function(a,b){this.has(a)||this.m++;this.j[a]={payload:b,access:this.l};if(!(this.m<=this.w)){B().warn("lru-cache","Trimming LRU cache");a=this.j;var c=this.l+1,e,d;for(d in a){var f=a[d].access;f<c&&(c=f,e=d)}void 0!==e&&(delete a[e],this.m--)}};C({c:!0,v:!0,a:!0,ad:!0});var J,K;
function L(a){var b;J||(J=self.document.createElement("a"),K=self.UrlCache||(self.UrlCache=new I(100)));var c=b?null:K,e=J;if(c&&c.has(a))a=c.get(a);else{e.href=a;e.protocol||(e.href=e.href);var d={href:e.href,protocol:e.protocol,host:e.host,hostname:e.hostname,port:"0"==e.port?"":e.port,pathname:e.pathname,search:e.search,hash:e.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
e.origin&&"null"!=e.origin?e.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;c&&c.put(a,d);a=d}return a}function ea(a){"string"==typeof a&&(a=L(a));var b;(b="https:"==a.protocol||"localhost"==a.hostname)||(a=a.hostname,b=a.length-10,b=0<=b&&a.indexOf(".localhost",b)==b);return b};function fa(a){var b="no-sync-xhr-in-ads",c=M(a);return!!c[b]}
function M(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var e=a.AMP_CONFIG[c];"number"===typeof e&&0<=e&&1>=e&&(b[c]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var d=a.AMP_CONFIG["allow-doc-opt-in"],f=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(f){var g=
f.getAttribute("content").split(",");for(c=0;c<g.length;c++)-1!=d.indexOf(g[c])&&(b[g[c]]=!0)}}Object.assign(b,ga(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];a=t(a.location.originalHash||a.location.hash);for(var h=0;h<c.length;h++){var k=a["e-"+c[h]];"1"==k&&(b[c[h]]=!0);"0"==k&&(b[c[h]]=!1)}}return b}
function ga(a){a:{var b;try{b=a.document.cookie}catch(h){b=""}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),e=c.indexOf("="),d;if(d=-1!=e)d=c.substring(0,e).trim(),d="AMP_EXP"==r(d,void 0);if(d){a=c.substring(e+1).trim();a=r(a,a);break a}}a=null}var f=a,g=f?f.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<g.length;b++)0!=g[b].length&&("-"==g[b][0]?a[g[b].substr(1)]=!1:a[g[b]]=!0);return a};function N(a,b){a=O(a);a=O(a);a=a.isSingleDoc()?a.win:a;return P(a,b)}function O(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView,b=b.__AMP_TOP||b;a=P(b,"ampdoc").getAmpDoc(a)}return a}function P(a,b){var c=a.services;c||(c=a.services={});var e=c;a=e[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ha(a){for(var b=a.nodeName,c=0,e=0,d=a.previousElementSibling;d&&25>e&&100>c;)d.nodeName==b&&e++,c++,d=d.previousElementSibling;return 25>e&&100>c?"."+e:""};var Q;function ia(a,b){var c=void 0,e=a,d=b,f;f=function(a){try{return d(a)}catch(m){throw self.reportError(m),m;}};var g=ja(),h=!1;c&&(h=c.capture);e.addEventListener("message",f,g?c:h);return function(){e&&e.removeEventListener("message",f,g?c:h);f=e=d=null}}function ja(){if(void 0!==Q)return Q;Q=!1;try{var a={get capture(){Q=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return Q};function ka(a,b){return ia(a,b)};function R(a,b){try{return JSON.parse(a)}catch(c){b&&b(c)}};var S,T="Webkit webkit Moz moz ms O o".split(" ");function la(a){var b,c;c=a.style;if(D("border","--"))c="border";else{S||(S=Object.create(null));var e=S.border;if(!e){e="border";if(void 0===c.border){var d;b:{for(d=0;d<T.length;d++){var f=T[d]+"Border";if(void 0!==c[f]){d=f;break b}}d=""}void 0!==c[d]&&(e=d)}S.border=e}c=e}c&&(a.style[c]=b?"none"+b:"none")};function ma(a){if(!U(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(c){return B().error("MESSAGING","Failed to parse message: "+a,c),null}}function U(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function V(a,b,c){var e=a.listeningFors;!e&&c&&(e=a.listeningFors=Object.create(null));a=e||null;if(!a)return a;var d=a[b];!d&&c&&(d=a[b]=[]);return d||null}function na(a,b){var c=!0,e=L(b.src).origin,d=c?b.getAttribute("data-amp-3p-sentinel"):"amp";a=V(a,d,!0);for(var f,d=0;d<a.length;d++){var g=a[d];if(g.frame===b){f=g;break}}f||(f={frame:b,origin:e,events:Object.create(null)},a.push(f));return f.events}
function oa(a){for(var b=C({sentinel:"unlisten"}),c=a.length-1;0<=c;c--){var e=a[c];if(!e.frame.contentWindow){a.splice(c,1);var d=e.events,f;for(f in d)d[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function pa(a){if(!a.listeningFors){var b=function(b){if(b.data){var c=qa(b.data);if(c&&c.sentinel){var d;d=c.sentinel;var f=b.origin,g=b.source,h=V(a,d);if(h){for(var k,m=0;m<h.length;m++){var q=h[m],n=q.frame.contentWindow;if(n)if("amp"===d){if(q.origin===f&&n==g){k=q;break}}else{var l;if(!(l=g==n))b:{for(l=g;l&&l!=l.parent;l=l.parent)if(l==n){l=!0;break b}l=!1}if(l){k=q;break}}else setTimeout(oa,0,h)}d=k?k.events:null}else d=h;var G=d;if(G){var u=G[c.type];if(u)for(u=u.slice(),d=0;d<u.length;d++)(0,u[d])(c,
b.source,b.origin)}}}};a.addEventListener("message",b)}}function ra(a,b){function c(c,d,f){if(e||d==a.contentWindow)"unlisten"==c.sentinel?h():b(c,d,f)}var e,d="embed-size",f=a.ownerDocument.defaultView;pa(f);var f=na(f,a),g=f[d]||(f[d]=[]),h;g.push(c);h=function(){if(c){var a=g.indexOf(c);-1<a&&g.splice(a,1);b=g=c=null}}}
function qa(a){"string"==typeof a&&(a="{"==a.charAt(0)?R(a,function(a){B().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:U(a)?ma(a):null);return a};function W(a){a=parseFloat(a);return"number"===typeof a&&isFinite(a)?a:void 0};var X={};
function sa(a,b){A().assert("facebook","Attribute type required for <amp-ad>: %s",b);for(var c=0,e=a;e&&e!=e.parent;e=e.parent)c++;var c=String(c)+"-"+Y(a),d=e={},f=b.dataset,g;for(g in f)D(g,"vars")||(d[g]=f[g]);if(g=b.getAttribute("json")){g=R(g);if(void 0===g)throw A().createError("Error parsing JSON in json attribute in element %s",b);for(var h in g)d[h]=g[h]}h=e;e=Date.now();d=b.getAttribute("width");g=b.getAttribute("height");h=h?h:{};h.width=W(d);h.height=W(g);b.getAttribute("title")&&(h.title=
b.getAttribute("title"));var k=a.location.href;"about:srcdoc"==k&&(k=a.parent.location.href);var m=N(b,"documentInfo").get(),q=N(b,"viewer"),d=q.getUnconfirmedReferrerUrl(),n=b.getPageLayoutBox();g=h;for(var f=m.sourceUrl,l=m.canonicalUrl,m=m.pageViewId,k={href:k},G=b.tagName,u={localDev:!1,development:w().development,filter:w().filter,minified:!0,lite:w().lite,test:!1,log:w().log,version:w().version,rtvVersion:w().rtvVersion},ua=!(!a.AMP_CONFIG||!a.AMP_CONFIG.canary),q=!q.isVisible(),n=n?{left:n.left,
top:n.top,width:n.width,height:n.height}:null,va=b.getIntersectionChangeEntry(),p=b,H=[],x=0;p&&1==p.nodeType&&25>x;){var y="";p.id&&(y="/"+p.id);var wa=p.nodeName.toLowerCase();H.push(""+wa+y+ha(p));x++;p=p.parentElement}p=H.join();H=p.length;x=5381;for(y=0;y<H;y++)x=33*x^p.charCodeAt(y);g._context=C({ampcontextVersion:"1530320824316",ampcontextFilepath:F+"/1530320824316/ampcontext-v0.js",sourceUrl:f,referrer:d,canonicalUrl:l,pageViewId:m,location:k,startTime:e,tagName:G,mode:u,
canary:ua,hidden:q,initialLayoutRect:n,initialIntersection:va,domFingerprint:String(x>>>0),experimentToggles:M(a),sentinel:c});(a=b.getAttribute("src"))&&(h.src=a);e=h;e.type="facebook";Object.assign(e._context,void 0);return e}
function ta(a,b){var c={},e=c.disallowCustom,d=c.allowFullscreen,c=sa(a,b),f=a.document.createElement("iframe");X[c.type]||(X[c.type]=0);X[c.type]+=1;var g=xa(a,"facebook",e),h=L(g).hostname,k=JSON.stringify(C({host:h,type:c.type,count:X[c.type],attributes:c}));f.src=g;f.ampLocation=L(g);f.name=k;c.width&&(f.width=c.width);c.height&&(f.height=c.height);c.title&&(f.title=c.title);d&&f.setAttribute("allowfullscreen","true");f.setAttribute("scrolling","no");la(f);f.onload=function(){this.readyState=
"complete"};fa(a)&&f.setAttribute("allow","sync-xhr 'none';");f.setAttribute("data-amp-3p-sentinel",c._context.sentinel);return f}
function xa(a,b,c){var e=void 0,d=a.bootstrapBaseUrl;if(d)a=d;else{var f;f=e;var g=a.document.querySelector('meta[name="amp-3p-iframe-src"]');if(g)if(c)A().error("3p-frame","3p iframe url disabled for "+(b||"unknown")),f=null;else{b=g.getAttribute("content");var h;h=void 0===h?"source":h;A().assert(null!=b,"%s %s must be available",g,h);A().assert(ea(b)||/^(\/\/)/.test(b),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',g,
h,b);A().assert(-1==b.indexOf("?"),"3p iframe url must not include query string %s in element %s.",b,g);h=L(b);A().assert("localhost"==h.hostname&&!f||h.origin!=L(a.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",b,h.origin,g);f=b+"?1530320824316"}else f=null;f||(a.defaultBootstrapSubDomain=a.defaultBootstrapSubDomain||"d-"+
Y(a),f="https://"+a.defaultBootstrapSubDomain+("."+da+"/1530320824316/")+"frame.html");a=a.bootstrapBaseUrl=f}return a}function Y(a){var b;if(a.crypto&&a.crypto.getRandomValues){var c=new Uint32Array(2);a.crypto.getRandomValues(c);b=String(c[0])+c[1]}else b=String(a.Math.random()).substr(2)+"0";return b};function Z(a){var b;b=AMP.BaseElement.call(this,a)||this;b.h=null;a=a.hasAttribute("data-locale")?a.getAttribute("data-locale"):window.navigator.language.replace("-","_");b.A=a;b.o=null;return b}aa(Z,AMP.BaseElement);Z.prototype.renderOutsideViewport=function(){return.75};
Z.prototype.preconnectCallback=function(a){this.preconnect.url("https://facebook.com",a);this.preconnect.preload("https://connect.facebook.net/"+this.A+"/sdk.js","script");var b=this.preconnect,c=xa(this.win,void 0,void 0);b.preload(c,"document");b.preload(F+"/1530320824316/f.js","script")};Z.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
Z.prototype.layoutCallback=function(){var a=this,b=ta(this.win,this.element);this.applyFillContent(b);ra(b,function(b){a.attemptChangeHeight(b.height).catch(function(){})});this.o=ka(this.win,this.B.bind(this));this.toggleLoading(!0);this.element.appendChild(b);this.h=b;return this.loadPromise(b)};Z.prototype.B=function(a){if(!this.h||a.source==this.h.contentWindow){var b=a.data;if(b){var c="[object Object]"===ca.call(b)?b:R(b);c&&"ready"==b.action&&this.toggleLoading(!1)}}};
Z.prototype.unlayoutCallback=function(){if(this.h){var a=this.h;a.parentElement&&a.parentElement.removeChild(a);this.h=null}this.o&&this.o();return!0};(function(a){a.registerElement("amp-facebook-like",Z)})(self.AMP);
})});
//# sourceMappingURL=amp-facebook-like-0.1.js.map

