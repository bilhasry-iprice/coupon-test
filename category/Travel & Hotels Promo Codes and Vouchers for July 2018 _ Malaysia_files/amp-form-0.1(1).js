(self.AMP=self.AMP||[]).push({n:"amp-form",v:"1531347091169",f:(function(AMP){var l;function m(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var f=Object.getOwnPropertyDescriptor(b,d);f&&Object.defineProperty(a,d,f)}else a[d]=b[d]};var aa=Object.prototype.toString;function ba(a){if(!a)return[];for(var b=Array(a.length),c=0;c<a.length;c++)b[c]=a[c];return b};self.log=self.log||{user:null,dev:null,userForEmbed:null};var p=self.log;function q(){if(!p.user)throw Error("failed to call initLogConstructor");return p.user};var ca=Object.prototype.hasOwnProperty;function r(){var a,b=Object.create(null);a&&Object.assign(b,a);return b}
function da(a,b){var c;c=void 0===c?10:c;var d=[],f=[];f.push({t:a,s:b,d:0});for(a={};0<f.length;){b=f.shift();a.t=b.t;a.s=b.s;a.d=b.d;if(d.includes(a.s))throw Error("Source object has a circular reference.");d.push(a.s);a.t!==a.s&&(a.d>c?Object.assign(a.t,a.s):(Object.keys(a.s).forEach(function(a){return function(b){var c=a.s[b];if(ca.call(a.t,b)){var d=a.t[b];if("[object Object]"===aa.call(c)&&"[object Object]"===aa.call(d)){f.push({t:d,s:c,d:a.d+1});return}}a.t[b]=c}}(a)),a={s:a.s,t:a.t,d:a.d}))}}
;function t(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function ea(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b}function u(a){var b,c;this.S=new Promise(function(a,d){b=a;c=d});this.ba=b;this.$=c;this.K=0;if(a)for(var d=0;d<a.length;d++)this.add(a[d])}u.prototype.add=function(a){var b=this,c=++this.K;Promise.resolve(a).then(function(a){b.K===c&&b.ba(a)},function(a){b.K===c&&b.$(a)});return this.S};u.prototype.then=function(a,b){return this.S.then(a,b)};function v(a,b){if(a.nodeType){var c=(a.ownerDocument||a).defaultView;if(c=c!=(c.__AMP_TOP||c)&&fa(c,b)?w(c,b):null)return c}return x(a,b)}function y(a,b){a=a.__AMP_TOP||a;return w(a,b)}function x(a,b){a=A(a);a=B(a);return w(a,b)}function A(a){return a.nodeType?y((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function B(a){a=A(a);return a.isSingleDoc()?a.win:a}
function w(a,b){fa(a,b);var c=C(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function ga(a){var b=C(a)["amp-analytics-instrumentation"];if(b){if(b.promise)return b.promise;w(a,"amp-analytics-instrumentation");return b.promise=Promise.resolve(b.obj)}return null}function C(a){var b=a.services;b||(b=a.services={});return b}function fa(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var ha=/(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;function ia(a,b,c,d,f){return f?f:b?"\ufffd":d?a.slice(0,-1)+"\\"+a.slice(-1).charCodeAt(0).toString(16)+" ":"\\"+a};var D;function ja(a,b){for(var c=[],d=a.parentElement;d;d=d.parentElement)b(d)&&c.push(d);return c}function ka(a){var b="fieldset",b=b.toUpperCase();return ja(a,function(a){return a.tagName==b})}function E(a,b){for(var c=0,d;void 0!==(d=a[c]);c++)b(d,c)};function la(a){var b=A(a),c=ga(B(a));return c?c:b.whenBodyAvailable().then(function(){var a;a=b.win;var c=b.getHeadNode(),g;if(c){g=[];for(var c=c.querySelectorAll("script[custom-element]"),e=0;e<c.length;e++)g.push(c[e].getAttribute("custom-element"))}else g=[];a=g.includes("amp-analytics")?y(a,"extensions").waitForExtension(a,"amp-analytics"):Promise.resolve();return a}).then(function(){var c;c=b.win;if(c.ampExtendedElements&&c.ampExtendedElements["amp-analytics"]){c=B(a);var f=ga(c);if(!f){var g=
new ea,f=g.promise,g=g.resolve;C(c)["amp-analytics-instrumentation"]={obj:null,promise:f,resolve:g,context:null,ctor:null}}c=f}else c=null;return c})};var F,ma="Webkit webkit Moz moz ms O o".split(" ");function na(a,b){for(var c in b){var d=a,f=b[c],g;g=d.style;var e=c;if(t(e,"--"))g=e;else{F||(F=r());var k=F[e];if(!k){k=e;if(void 0===g[e]){var h;h=e;h=h.charAt(0).toUpperCase()+h.slice(1);b:{for(var n=0;n<ma.length;n++){var z=ma[n]+h;if(void 0!==g[z]){h=z;break b}}h=""}void 0!==g[h]&&(k=h)}F[e]=k}g=k}g&&(d.style[g]=f)}};function oa(a,b){var c='form.amp-form-submit-error [submit-error],form.amp-form-submit-success [submit-success],form.amp-form-submitting [submitting]{display:block}.i-amphtml-validation-bubble{-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%);background-color:#fff;box-shadow:0 5px 15px 0 rgba(0,0,0,0.5);max-width:200px;position:absolute;display:none;box-sizing:border-box;padding:10px;border-radius:5px}.i-amphtml-validation-bubble:after{content:" ";position:absolute;bottom:-8px;left:30px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}[visible-when-invalid]{display:none;color:red}[visible-when-invalid].visible{display:initial}\n/*# sourceURL=/extensions/amp-form/0.1/amp-form.css*/',
d=!1,f="amp-form",g=a.getHeadNode(),e=pa(g,qa(g,c),d||!1,f||null);if(b){var k=a.getRootNode();if(ra(k,e))b(e);else var h=setInterval(function(){ra(k,e)&&(clearInterval(h),b(e))},4)}}
function pa(a,b,c,d){var f=a.__AMP_CSS_SM;f||(f=a.__AMP_CSS_SM=r());var g=!c&&d&&"amp-custom"!=d&&"amp-keyframes"!=d,e=c?"amp-runtime":g?"amp-extension="+d:null;if(e){var k=sa(a,f,e);if(k)return k}var h=(a.ownerDocument||a).createElement("style");h.textContent=b;var n=null;c?h.setAttribute("amp-runtime",""):g?(h.setAttribute("amp-extension",d||""),n=sa(a,f,"amp-runtime")):(d&&h.setAttribute(d,""),n=a.lastChild);(b=n)?b.nextSibling?a.insertBefore(h,b.nextSibling):a.appendChild(h):a.insertBefore(h,
a.firstChild);e&&(f[e]=h);return h}function sa(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null}function qa(a,b){return(a=a.__AMP_CSS_TR)?a(b):b}function ra(a,b){var c=a.styleSheets;for(a=0;a<c.length;a++){var d=c[a];if(d.ownerNode==b)return!0}return!1};function G(a,b,c){la(a).then(function(d){d&&d.triggerEventForTarget(a,b,c)})};function H(a,b,c,d){var f={detail:c};Object.assign(f,d);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,f);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!f.bubbles,!!f.cancelable,c);return a};function I(a){var b={},c=a.elements,d=/^(?:input|select|textarea)$/i,f=/^(?:button|image|file|reset)$/i,g=/^(?:checkbox|radio)$/i;for(a=0;a<c.length;a++){var e=c[a],k;if(k=e.name){a:if(e.disabled)k=!0;else{k=ka(e);for(var h=0;h<k.length;h++)if(k[h].disabled){k=!0;break a}k=!1}k=!k}!k||!d.test(e.tagName)||f.test(e.type)||g.test(e.type)&&!e.checked||(void 0===b[e.name]&&(b[e.name]=[]),b[e.name].push(e.value))}return b};function J(a){this.l=new FormData(a);this.C=this.l.entries?null:a?I(a):r()}J.prototype.append=function(a,b){if(!this.l.entries){var c=String(a);this.C[c]=this.C[c]||[];this.C[a].push(String(b))}return this.l.append(a,b)};J.prototype.entries=function(){if(this.l.entries)return this.l.entries();var a=[],b=this.C;Object.keys(b).forEach(function(c){b[c].forEach(function(b){return a.push([c,b])})});var c=0;return{next:function(){return c<a.length?{value:a[c++],done:!1}:{value:void 0,done:!0}}}};
J.prototype.getFormData=function(){return this.l};function ta(a){var b=a.ownerDocument.defaultView;b.FormProxy||(b.FormProxy=ua(b));var c=b.FormProxy,d=new c(a);"action"in d||va(a,d);a.$p=d}
function ua(a){function b(a){this.c=a}var c=b.prototype,d=[a.HTMLFormElement,a.HTMLElement,a.Element,a.Node,a.EventTarget];d.forEach(function(b){var d=b&&b.prototype;b={};for(var e in d)if(b.property=a.Object.getOwnPropertyDescriptor(d,e),b.property&&e.toUpperCase()!=e&&!t(e,"on")&&!a.Object.prototype.hasOwnProperty.call(c,e)){if("function"==typeof b.property.value)b.method=b.property.value,c[e]=function(a){return function(){return a.method.apply(this.c,arguments)}}(b);else{var f={};b.property.get&&
(f.get=function(a){return function(){return a.property.get.call(this.c)}}(b));b.property.set&&(f.set=function(a){return function(b){return a.property.set.call(this.c,b)}}(b));a.Object.defineProperty(c,e,f)}b={method:b.method,property:b.property}}});return b}
function va(a,b){var c=a.ownerDocument.defaultView.HTMLFormElement.prototype.cloneNode.call(a,!1),d={},f;for(f in c)if(d.name=f,!(d.name in b||d.name.toUpperCase()==d.name||t(d.name,"on"))){d.desc=wa[d.name];var g=a[d.name];if(d.desc)if(d.desc.access==K){d.actual=void 0;if(g&&g.nodeType){var e=c=g,k=e.nextSibling,e=e.parentNode;e.removeChild(c);try{d.actual=a[d.name]}finally{e.insertBefore(c,k)}}else d.actual=g;Object.defineProperty(b,d.name,{get:function(a){return function(){return a.actual}}(d)})}else d.desc.access==
L&&(d.attr=d.desc.attr||d.name,Object.defineProperty(b,d.name,{get:function(c){return function(){var d=b.getAttribute(c.attr);return null==d&&void 0!==c.desc.def?c.desc.def:c.desc.type==xa?"true"===d:c.desc.type==M?null!=d:c.desc.type==ya?(d=d||"",v(a,"url").parse(d).href):d}}(d),set:function(a){return function(c){a.desc.type==M&&(c=c?"":null);null!=c?b.setAttribute(a.attr,c):b.removeAttribute(a.attr)}}(d)}));else Object.defineProperty(b,d.name,{get:function(b){return function(){return a[b.name]}}(d),
set:function(b){return function(c){a[b.name]=c}}(d)});d={actual:d.actual,attr:d.attr,desc:d.desc,name:d.name}}}
var L=1,K=2,ya=1,xa=2,M=3,wa={acceptCharset:{access:L,attr:"accept-charset"},accessKey:{access:L,attr:"accesskey"},action:{access:L,type:ya},attributes:{access:K},autocomplete:{access:L,def:"on"},children:{access:K},dataset:{access:K},dir:{access:L},draggable:{access:L,type:xa,def:!1},elements:{access:K},encoding:{access:K},enctype:{access:L},hidden:{access:L,type:M,def:!1},id:{access:L,def:""},lang:{access:L},localName:{access:K},method:{access:L,def:"get"},name:{access:L},noValidate:{access:L,attr:"novalidate",
type:M,def:!1},prefix:{access:K},spellcheck:{access:L},style:{access:K},target:{access:L,def:""},title:{access:L},translate:{access:L}};function za(a,b){return a.hasAttribute("verify-xhr")?new N(a,b):new Aa(a)}function O(a){this.c=a}O.prototype.onCommit=function(){Ba(this);return Ca(this)?this.W():Promise.resolve([])};O.prototype.W=function(){return Promise.resolve([])};
function Ca(a){a=a.c.elements;for(var b=0;b<a.length;b++){var c=a[b];if(!c.disabled)switch(c.type){case "select-multiple":case "select-one":for(var c=c.options,d=0;d<c.length;d++)if(c[d].selected!==c[d].defaultSelected)return!0;break;case "checkbox":case "radio":if(c.checked!==c.defaultChecked)return!0;break;default:if(c.value!==c.defaultValue)return!0}}return!1}function Ba(a){(a=a.c.elements)&&E(a,function(a){a.setCustomValidity("")})}function Aa(a){O.apply(this,arguments)}m(Aa,O);
function N(a,b){this.c=a;this.B=b;this.A=null;this.R=[]}m(N,O);N.prototype.W=function(){var a=this,b=this.B().then(function(){return[]},function(a){return Da(a)});return Ea(this,b).then(function(b){return Fa(a,b)})};function Ea(a,b){if(!a.A){a.A=new u;var c=function(){return a.A=null};a.A.then(c,c)}return a.A.add(b)}
function Fa(a,b){function c(a){return b.every(function(b){return a.name!==b.name})}var d=[],f=a.R;a.R=b;for(var g=0;g<b.length;g++){var e=b[g],k=q().assertString(e.name,"Verification errors must have a name property"),e=q().assertString(e.message,"Verification errors must have a message property"),k=q().assertElement(a.c.querySelector('[name="'+k+'"]'),"Verification error name property must match a field name");k.checkValidity()&&(k.setCustomValidity(e),d.push(k))}var h=f.filter(c).map(function(b){return a.c.querySelector('[name="'+
b.name+'"]')});return d.concat(h)}function Da(a){return(a=a.response)?a.json().then(function(a){return a.verifyErrors||[]},function(){return[]}):Promise.resolve([])};function P(a,b){this.O=b;this.ia=x(a,"viewport");this.X=y(a.win,"vsync");this.M=null;this.L="";this.G=!1;this.o=a.win.document.createElement("div");this.o.classList.add("i-amphtml-validation-bubble");this.o.__BUBBLE_OBJ=this;a.getBody().appendChild(this.o)}P.prototype.isActiveOn=function(a){return this.G&&a==this.M};P.prototype.hide=function(){this.G&&(this.G=!1,this.M=null,this.L="",this.X.run({measure:void 0,mutate:Ga},{bubbleElement:this.o}))};
P.prototype.show=function(a,b){if(!this.isActiveOn(a)||b!=this.L){this.G=!0;this.M=a;this.L=b;var c={message:b,targetElement:a,bubbleElement:this.o,viewport:this.ia,id:this.O};this.X.run({measure:Ha,mutate:Ia},c)}};function Ga(a){a.bubbleElement.removeAttribute("aria-alert");a.bubbleElement.removeAttribute("role");for(var b=a.bubbleElement;b.firstChild;)b.removeChild(b.firstChild);na(a.bubbleElement,{display:"none"})}function Ha(a){a.targetRect=a.viewport.getLayoutRect(a.targetElement)}
function Ia(a){for(var b=a.bubbleElement;b.firstChild;)b.removeChild(b.firstChild);var c=a.bubbleElement.ownerDocument.createElement("div");c.id="bubble-message-"+a.id;c.textContent=a.message;a.bubbleElement.setAttribute("aria-labeledby",c.id);a.bubbleElement.setAttribute("role","alert");a.bubbleElement.setAttribute("aria-live","assertive");a.bubbleElement.appendChild(c);na(a.bubbleElement,{display:"block",top:a.targetRect.top-10+"px",left:a.targetRect.left+a.targetRect.width/2+"px"})};var Ja,Ka,La=0;function Q(a){this.form=a;this.ampdoc=A(a);this.resources=x(a,"resources");this.root=this.ampdoc.getRootNode();this.D=null}Q.prototype.report=function(){};Q.prototype.onBlur=function(){};Q.prototype.onInput=function(){};Q.prototype.fireValidityEventIfNecessary=function(){var a=this.D;this.D=this.form.checkValidity();if(a!==this.D){var b=H(this.form.ownerDocument.defaultView,this.D?"valid":"invalid",null,{bubbles:!0});this.form.dispatchEvent(b)}};
function Ma(a){Q.apply(this,arguments)}m(Ma,Q);Ma.prototype.report=function(){this.form.reportValidity();this.fireValidityEventIfNecessary()};function R(a){Q.call(this,a);var b="i-amphtml-validation-bubble-"+La++;this.w=new P(this.ampdoc,b)}m(R,Q);R.prototype.report=function(){for(var a=this.form.querySelectorAll("input,select,textarea"),b=0;b<a.length;b++)if(!a[b].checkValidity()){a[b].focus();this.w.show(a[b],a[b].validationMessage);break}this.fireValidityEventIfNecessary()};
R.prototype.onBlur=function(){this.w.hide()};R.prototype.onInput=function(a){a=a.target;this.w.isActiveOn(a)&&(a.checkValidity()?(a.removeAttribute("aria-invalid"),this.w.hide()):(a.setAttribute("aria-invalid","true"),this.w.show(a,a.validationMessage)))};function S(a){Q.call(this,a);this.P={};this.F={}}m(S,Q);l=S.prototype;l.reportInput=function(a){var b;a:{for(b in a.validity)if(a.validity[b])break a;b=null}var c=b;c&&this.showValidationFor(a,c)};
l.hideAllValidations=function(){for(var a in this.F){var b=this.root.getElementById(a);this.hideValidationFor(b)}};l.getValidationFor=function(a,b){if(!a.id)return null;a="[visible-when-invalid="+b+"]"+("[validation-for="+a.id+"]");void 0===this.P[a]&&(this.P[a]=this.root.querySelector(a));return this.P[a]};
l.showValidationFor=function(a,b){var c=this.getValidationFor(a,b);c&&(c.textContent.trim()||(c.textContent=a.validationMessage),this.F[a.id]=c,this.resources.mutateElement(a,function(){return a.setAttribute("aria-invalid","true")}),this.resources.mutateElement(c,function(){return c.classList.add("visible")}))};
l.hideValidationFor=function(a){var b=this.getVisibleValidationFor(a);b&&(delete this.F[a.id],this.resources.mutateElement(a,function(){return a.removeAttribute("aria-invalid")}),this.resources.mutateElement(b,function(){return b.classList.remove("visible")}))};l.getVisibleValidationFor=function(a){return a.id?this.F[a.id]:null};l.shouldValidateOnInteraction=function(){throw Error("Not Implemented");};
l.onInteraction=function(a){a=a.target;var b=!!a.checkValidity&&this.shouldValidateOnInteraction(a);this.hideValidationFor(a);b&&!a.checkValidity()&&this.reportInput(a)};l.onBlur=function(a){this.onInteraction(a)};l.onInput=function(a){this.onInteraction(a)};function T(a){S.apply(this,arguments)}m(T,S);
T.prototype.report=function(){this.hideAllValidations();for(var a=this.form.querySelectorAll("input,select,textarea"),b=0;b<a.length;b++)if(!a[b].checkValidity()){this.reportInput(a[b]);a[b].focus();break}this.fireValidityEventIfNecessary()};T.prototype.shouldValidateOnInteraction=function(a){return!!this.getVisibleValidationFor(a)};function U(a){S.apply(this,arguments)}m(U,S);
U.prototype.report=function(){this.hideAllValidations();for(var a=null,b=this.form.querySelectorAll("input,select,textarea"),c=0;c<b.length;c++)b[c].checkValidity()||(a=a||b[c],this.reportInput(b[c]));a&&a.focus();this.fireValidityEventIfNecessary()};U.prototype.shouldValidateOnInteraction=function(a){return!!this.getVisibleValidationFor(a)};function V(a){S.apply(this,arguments)}m(V,S);V.prototype.shouldValidateOnInteraction=function(){return!0};
V.prototype.onInteraction=function(a){S.prototype.onInteraction.call(this,a);this.fireValidityEventIfNecessary()};function W(a){U.apply(this,arguments)}m(W,U);W.prototype.shouldValidateOnInteraction=function(){return!0};W.prototype.onInteraction=function(a){U.prototype.onInteraction.call(this,a);this.fireValidityEventIfNecessary()};
function Na(a){var b=a.getAttribute("custom-validation-reporting");switch(b){case "as-you-go":return new V(a);case "show-all-on-submit":return new U(a);case "interact-and-submit":return new W(a);case "show-first-on-submit":return new T(a)}a.ownerDocument&&void 0===Ja&&(Ja=!!document.createElement("form").reportValidity);return Ja?new Ma(a):new R(a)};var Oa=["amp-selector"];
function Pa(a,b){var c=this;try{ta(a)}catch(g){var d;if(p.dev)d=p.dev;else throw Error("failed to call initLogConstructor");d.error("amp-form","form proxy failed to install",g)}a.__AMP_FORM=this;this.O=b;this.j=a.ownerDocument.defaultView;this.fa=y(this.j,"timer");this.V=v(a,"url-replace");this.N=null;this.c=a;this.U=y(this.j,"templates");this.ma=y(this.j,"xhr");this.J=v(this.c,"action");this.ca=x(this.c,"resources");this.ha=x(this.c,"viewer");this.m=(this.c.getAttribute("method")||"GET").toUpperCase();
this.ea=this.c.getAttribute("target");this.I=Qa(this,"action-xhr");this.la=Qa(this,"verify-xhr");this.T=!this.c.hasAttribute("novalidate");this.c.setAttribute("novalidate","");this.T||this.c.setAttribute("amp-novalidate","");this.c.classList.add("i-amphtml-form");var f=this.c.querySelectorAll('[type="submit"]');this.da=ba(f);this.h="initial";a=this.c.elements;for(b=0;b<a.length;b++)d=a[b].name,q().assert("__amp_source_origin"!=d&&"__amp_form_verify"!=d,"Illegal input name, %s found: %s",d,a[b]);this.H=
Na(this.c);this.ga=za(this.c,function(){return Ra(c)});this.J.installActionHandler(this.c,this.Y.bind(this),100);Sa(this);this.aa=this.ka=null}function Qa(a,b){var c=a.c.getAttribute(b);if(c){var d=v(a.c,"url");d.assertHttpsUrl(c,a.c,b);q().assert(!d.isProxyOrigin(c),"form "+b+" should not be on AMP CDN: %s",a.c)}return c}l=Pa.prototype;
l.Y=function(a){var b=this;"submit"==a.method?Ta(this).then(function(){var c=a;"submitting"!=b.h&&Ua(b)&&(Va(b,c.trust),"GET"!=b.m||b.I||b.c.submit())}):"clear"===a.method&&Wa(this);return null};function Ta(a){if(a.N)return a.N;var b=a.c.querySelectorAll(Oa.join(",")),c=ba(b).map(function(a){return a.whenBuilt()});return a.N=Xa(a,c,2E3)}
function Sa(a){function b(){"verifying"===a.h&&X(a,"initial")}a.ha.whenNextVisible().then(function(){var b=a.c.querySelector("[autofocus]");if(b)try{b.focus()}catch(d){}});a.c.addEventListener("submit",a.Z.bind(a),!0);a.c.addEventListener("blur",function(b){Y(b.target);a.H.onBlur(b)},!0);a.c.addEventListener("change",function(c){a.ga.onCommit().then(function(b){b.forEach(Y);a.H.onBlur(c)},function(){Y(c.target)}).then(b,b)});a.c.addEventListener("input",function(b){Y(b.target);a.H.onInput(b)})}
function Ya(a){var b={},c=I(a.c),d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(b["formFields["+d+"]"]=c[d].join(","));b.formId=a.c.id;G(a.c,"amp-form-submit",b)}
function Wa(a){a.c.reset();X(a,"initial");a.c.classList.remove("user-valid");a.c.classList.remove("user-invalid");var b=a.c.querySelectorAll(".user-valid, .user-invalid");E(b,function(a){a.classList.remove("user-valid");a.classList.remove("user-invalid")});var c=a.c.querySelectorAll(".visible[validation-for]");E(c,function(a){a.classList.remove("visible")});Za(a.c)}
l.Z=function(a){"submitting"!=this.h&&Ua(this)?((this.I||"POST"==this.m)&&a.preventDefault(),Va(this,100)):(a.stopImmediatePropagation(),a.preventDefault())};function Va(a,b){var c=$a(a);if(a.I)ab(a,c,b);else if("POST"==a.m)q().assert(!1,"Only XHR based (via action-xhr attribute) submissions are supported for POST requests. %s",a.c);else if("GET"==a.m){var d=c;bb(a);for(var f=0;f<d.length;f++)a.V.expandInputValueSync(d[f]);Ya(a)}}
function $a(a){return a.c.querySelectorAll('[type="hidden"][data-amp-replace]')}function Ra(a){if("submitting"===a.h)return Promise.resolve();X(a,"verifying");return cb(a,$a(a)).then(function(){var b={};return a.B(a.la,a.m,(b.__amp_form_verify=!0,b))})}function ab(a,b,c){X(a,"submitting");cb(a,b).then(function(){Ya(a);a.J.trigger(a.c,"submit",null,c);var b=I(a.c);db(a,b)}).then(function(){return a.B(a.I,a.m)}).then(function(b){return eb(a,b)},function(b){return fb(a,b)})}
function cb(a,b){for(var c=[],d=0;d<b.length;d++)c.push(a.V.expandInputValueAsync(b[d]));return Xa(a,c,100)}
l.B=function(a,b,c){var d,f,g="GET"==b||"HEAD"==b;if(g){bb(this);var e=I(this.c);c&&da(e,c);var k=[],h;for(h in e){var n=e[h];if(null!=n)if(Array.isArray(n))for(var z=0;z<n.length;z++){var kb=n[z];k.push(encodeURIComponent(h)+"="+encodeURIComponent(kb))}else k.push(encodeURIComponent(h)+"="+encodeURIComponent(n))}(h=k.join("&"))?(a=a.split("#",2),e=a[0].split("?",2),h=e[0]+(e[1]?"?"+e[1]+"&"+h:"?"+h),d=h+=a[1]?"#"+a[1]:""):d=a}else for(e in d=a,f=new J(this.c),c)f.append(e,c[e]);return this.ma.fetch(d,
{body:f,method:b,credentials:"include",headers:{Accept:"application/json"}})};function eb(a,b){return b.json().then(function(c){gb(a,!0,c);G(a.c,"amp-form-submit-success",void 0);X(a,"submit-success");db(a,c||{});hb(a,b)},function(a){q().error("amp-form","Failed to parse response JSON: "+a)})}
function fb(a,b){return(b&&b.response?b.response.json().catch(function(){return null}):Promise.resolve(null)).then(function(c){gb(a,!1,c);G(a.c,"amp-form-submit-error",void 0);X(a,"submit-error");db(a,c||{});hb(a,b.response);q().error("amp-form","Form submission failed: "+b)})}function bb(a){var b=a.c.querySelectorAll("input[type=password],input[type=file]");q().assert(0==b.length,"input[type=password] or input[type=file] may only appear in form[method=post]")}
function Ua(a){void 0===Ka&&(Ka=!!a.j.document.createElement("input").checkValidity);if(Ka){var b=ib(a.c);if(a.T)return a.H.report(),b}return!0}
function hb(a,b){if(b&&b.headers){var c=b.headers.get("AMP-Redirect-To");if(c){q().assert("_blank"!=a.ea,"Redirecting to target=_blank using AMP-Redirect-To is currently not supported, use target=_top instead. %s",a.c);try{var d=v(a.c,"url");d.assertAbsoluteHttpOrHttpsUrl(c);d.assertHttpsUrl(c,"AMP-Redirect-To","Url")}catch(f){q().assert(!1,"The `AMP-Redirect-To` header value must be an absolute URL starting with https://. Found %s",c)}x(a.c,"navigation").navigateTo(a.j,c,"AMP-Redirect-To")}}}
function gb(a,b,c){var d=b?"submit-success":"submit-error";c=H(a.j,"amp-form."+d,{response:c});a.J.trigger(a.c,d,c,100)}function Xa(a,b,c){return Promise.race([Promise.all(b),a.fa.promise(c)])}function X(a,b){var c=a.h;a.c.classList.remove("amp-form-"+c);a.c.classList.add("amp-form-"+b);jb(a,c);a.h=b;a.da.forEach(function(a){"submitting"==b?a.setAttribute("disabled",""):a.removeAttribute("disabled")})}
function db(a,b){var c=a.c.querySelector("["+a.h+"]");if(c){var d="rendered-message-"+a.O;c.setAttribute("role","alert");c.setAttribute("aria-labeledby",d);c.setAttribute("aria-live","assertive");a.U.hasTemplate(c)?a.U.findAndRenderTemplate(c,b).then(function(b){b.id=d;b.setAttribute("i-amphtml-rendered","");c.appendChild(b);var f=H(a.j,"amp:dom-update",null,{bubbles:!0});c.dispatchEvent(f)}):(a.ca.mutateElement(c,function(){}),Promise.resolve())}}
function jb(a,b){if(a=a.c.querySelector("["+b+"]")){var c;if(null==D){b=a.ownerDocument;try{c=b.createElement("div");var d=b.createElement("div");c.appendChild(d);D=c.querySelector(":scope div")===d}catch(g){D=!1}}D?c=a.querySelector(":scope > [i-amphtml-rendered]"):(a.classList.add("i-amphtml-scoped"),c=a.querySelector(".i-amphtml-scoped > [i-amphtml-rendered]"),a.classList.remove("i-amphtml-scoped"));var f=c;f&&(c=f,c.parentElement&&c.parentElement.removeChild(c))}}l.oa=function(){return this.ka};
l.na=function(){return this.aa};function ib(a){var b=a.querySelectorAll("input,select,textarea,fieldset");E(b,function(a){return Z(a)});return Z(a)}function Za(a){var b=document.createElement("input"),c={},d;for(d in b.validity){c.validityState=d;var f=a.querySelectorAll("."+String(c.validityState).replace(ha,ia));E(f,function(a){return function(b){return b.classList.remove(a.validityState)}}(c));c={validityState:c.validityState}}}
function Z(a,b){b=void 0===b?!1:b;if(!a.checkValidity)return!0;var c=!1,d=a.classList.contains("user-valid")?"valid":a.classList.contains("user-invalid")?"invalid":"none",f=a.checkValidity();"valid"!=d&&f?(a.classList.add("user-valid"),a.classList.remove("user-invalid"),c="invalid"==d):"invalid"==d||f||(a.classList.add("user-invalid"),a.classList.remove("user-valid"),c=!0);if(a.validity)for(var g in a.validity)a.classList.toggle(g,a.validity[g]);if(b&&c){g=ka(a);for(var e=0;e<g.length;e++)Z(g[e]);
a.form&&Z(a.form)}return f}function Y(a){Z(a,!0)}function lb(a){this.ja=mb(a).then(function(){return nb(a)})}lb.prototype.whenInitialized=function(){return this.ja};function mb(a){var b=new ea;oa(a,b.resolve);return b.promise}function nb(a){return a.whenReady().then(function(){ob(a.getRootNode().querySelectorAll("form"));pb(a.getRootNode())})}function ob(a){a&&E(a,function(a,c){var b=a.__AMP_FORM||null;b||new Pa(a,"amp-form-"+c)})}
function pb(a){a.addEventListener("amp:dom-update",function(){ob(a.querySelectorAll("form"))})}(function(a){a.registerServiceForDoc("amp-form",lb)})(self.AMP);
})});
//# sourceMappingURL=amp-form-0.1.js.map

