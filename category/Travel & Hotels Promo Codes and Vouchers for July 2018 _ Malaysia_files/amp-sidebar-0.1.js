(self.AMP=self.AMP||[]).push({n:"amp-sidebar",v:"1530320824316",f:(function(AMP){var h;function k(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]};function l(a){if(!a)return[];for(var b=Array(a.length),c=0;c<a.length;c++)b[c]=a[c];return b};self.log=self.log||{user:null,dev:null,userForEmbed:null};var m=self.log;function q(){var a="\u200b\u200b\u200b";throw Error("failed to call initLogConstructor");};function r(a){var b=a.indexOf("#");return-1==b?a:a.substring(0,b)};function t(a,b){if(a.nodeType){var c=(a.ownerDocument||a).defaultView;if(c=c!=(c.__AMP_TOP||c)&&u(c,b)?v(c,b):null)return c}return w(a,b)}function x(a,b){a=a.__AMP_TOP||a;return v(a,b)}function w(a,b){a=y(a);a=y(a);a=a.isSingleDoc()?a.win:a;return v(a,b)}function y(a){return a.nodeType?x((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}
function v(a,b){u(a,b);var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function u(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function z(a,b){for(var c,d=a;d&&d!==c;d=d.parentElement)if(b(d))return d;return null}function A(a){var b="A";if(a.closest)return a.closest(b);b=b.toUpperCase();return z(a,function(a){return a.tagName==b})}function B(a){var b=a.body.getAttribute("dir")||a.documentElement.getAttribute("dir")||"ltr";return"rtl"==b};var C,D="Webkit webkit Moz moz ms O o".split(" ");function E(a,b){var c=void 0;if(2>b.length?0:0==b.lastIndexOf("--",0))return b;C||(C=Object.create(null));var d=C[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<D.length;f++){var g=D[f]+e;if(void 0!==a[g]){e=g;break a}}e=""}var n=e;void 0!==a[n]&&(d=n)}c||(C[b]=d)}return d}function F(a,b,c){var d;(b=E(a.style,b))&&(a.style[b]=d?c+d:c)}
function G(a,b){if(void 0===b){var c;c=(c=E(a.style,"display"))?a.style[c]:void 0;b="none"==c}F(a,"display",b?"":"none")};function H(a,b){function c(){d=0;var g=350-(a.Date.now()-e);if(0<g)d=a.setTimeout(c,g);else{var n=f;f=null;b.apply(null,n)}}var d=0,e=0,f=null;return function(b){for(var g=[],p=0;p<arguments.length;++p)g[p-0]=arguments[p];e=a.Date.now();f=g;d||(d=a.setTimeout(c,350))}};function I(a,b){this.K=b;this.c=a;this.F=b.getAmpDoc();this.T=this.c.getAttribute("toolbar");this.C=null;this.h=void 0;this.D=!1;this.c.classList.add("amp-sidebar-toolbar-target-hidden");J(this)}I.prototype.onLayoutChange=function(){var a=this.F.win.matchMedia(this.T).matches;a?K(this):L(this)};
function J(a){a.C=a.c.cloneNode(!0);m.user||(m.user=q());var b=m.user.assert(a.c.getAttribute("toolbar-target"),'"toolbar-target" is required',a.c);a.F.whenReady().then(function(){var c=a.F.getElementById(b);if(c)a.h=c,a.C.classList.add("i-amphtml-toolbar"),G(a.h,!1);else throw Error("Could not find the toolbar-target element with an id: "+b);})}
function K(a){a.D?Promise.resolve():a.K.mutateElement(function(){a.h&&(G(a.h,!0),a.h.contains(a.C)||a.h.appendChild(a.C),a.c.classList.add("amp-sidebar-toolbar-target-shown"),a.c.classList.remove("amp-sidebar-toolbar-target-hidden"),a.D=!0)})}function L(a){a.D&&a.K.mutateElement(function(){a.h&&(G(a.h,!1),a.c.classList.add("amp-sidebar-toolbar-target-hidden"),a.c.classList.remove("amp-sidebar-toolbar-target-shown"),a.D=!1)})};function M(a){a=AMP.BaseElement.call(this,a)||this;a.m=null;a.H=null;a.o=null;a.l=a.win.document;a.O=a.l.documentElement;a.w=null;a.N=[];var b=x(a.win,"platform");a.M=b.isIos();a.P=b.isSafari();a.A=-1;a.I=!1;a.J=H(a.win,a.R.bind(a));a.G=null;a.L=0;return a}k(M,AMP.BaseElement);h=M.prototype;
h.buildCallback=function(){var a=this,b=this.element;b.classList.add("i-amphtml-overlay");this.w=b.getAttribute("side");this.m=this.getViewport();this.H=t(b,"action");"left"!=this.w&&"right"!=this.w&&(this.w=B(this.l)?"right":"left",b.setAttribute("side",this.w));var c=l(b.querySelectorAll("nav[toolbar]"));c.forEach(function(b){try{a.N.push(new I(b,a))}catch(g){a.user().error("amp-sidebar toolbar","Failed to instantiate toolbar",g)}});this.M&&N(this);O(this)?this.B():b.setAttribute("aria-hidden",
"true");b.hasAttribute("role")||b.setAttribute("role","menu");b.tabIndex=-1;this.O.addEventListener("keydown",function(b){27==b.keyCode&&a.j()});var d=b.getAttribute("data-close-button-aria-label")||"Close the sidebar",e=this.l.createElement("button");e.textContent=d;e.classList.add("i-amphtml-screen-reader");e.tabIndex=-1;e.addEventListener("click",function(){a.j()});b.appendChild(e);this.registerAction("toggle",this.S.bind(this));this.registerAction("open",this.B.bind(this));this.registerAction("close",
this.j.bind(this));b.addEventListener("click",function(c){if((c=A(c.target))&&c.href){var d=t(b,"url").parse(c.href),e=a.getAmpDoc().win.location.href;r(c.href)==r(e)&&d.hash&&a.j()}},!0)};h.activate=function(a){this.B(a)};h.onLayoutMeasure=function(){var a=this;this.getAmpDoc().whenReady().then(function(){a.N.forEach(function(a){a.onLayoutChange()})})};function O(a){return a.element.hasAttribute("open")}h.S=function(a){O(this)?this.j():this.B(a)};
h.B=function(a){var b=this;O(this)||(this.m.enterOverlayMode(),this.mutateElement(function(){G(b.element,!0);b.m.addToFixedLayer(b.element,!0);b.M&&b.P&&P(b);b.element.scrollTop=1;b.mutateElement(function(){Q(b);b.element.setAttribute("open","");b.J();b.element.setAttribute("aria-hidden","false")})}),w(this.getAmpDoc(),"history").push(this.j.bind(this)).then(function(a){b.A=a}),a&&(this.G=a.caller,this.L=this.m.getScrollTop()))};
h.j=function(){var a=this;if(O(this)){this.m.leaveOverlayMode();var b=this.L==this.m.getScrollTop(),c=this.element.contains(this.l.activeElement);this.mutateElement(function(){a.o&&G(a.o,!1);a.element.removeAttribute("open");a.J();a.element.setAttribute("aria-hidden","true")});-1!=this.A&&(w(this.getAmpDoc(),"history").pop(this.A),this.A=-1);if(this.G&&c&&b)try{this.G.focus()}catch(d){}}};
function Q(a){if(!a.o){var b=a.l.createElement("div");b.classList.add("i-amphtml-sidebar-mask");b.addEventListener("click",function(){a.j()});a.element.ownerDocument.body.appendChild(b);b.addEventListener("touchmove",function(a){a.preventDefault()});a.o=b}G(a.o,!0)}
function N(a){a.element.addEventListener("scroll",function(b){O(a)&&(1>a.element.scrollTop?(a.element.scrollTop=1,b.preventDefault()):a.element.scrollHeight==a.element.scrollTop+a.element.offsetHeight&&(--a.element.scrollTop,b.preventDefault()))})}function P(a){if(!a.I){var b=a.l.createElement("div"),c={height:"10vh",width:"100%","background-color":"transparent"},d;for(d in c)F(b,d,c[d]);a.element.appendChild(b);a.I=!0}}
h.R=function(){var a=this;if(O(this)){var b=this.getRealChildren();this.scheduleLayout(b);this.scheduleResume(b);try{this.element.focus()}catch(c){}R(this,"sidebarOpen")}else this.mutateElement(function(){G(a.element,!1);a.schedulePause(a.getRealChildren());R(a,"sidebarClose")})};
function R(a,b){var c;var d=a.win;c="amp-sidebar toolbar."+b;var e={},f={detail:e};Object.assign(f,void 0);"function"==typeof d.CustomEvent?c=new d.CustomEvent(c,f):(d=d.document.createEvent("CustomEvent"),d.initCustomEvent(c,!!f.bubbles,!!f.cancelable,e),c=d);a.H.trigger(a.element,b,c,100)}(function(a){a.registerElement("amp-sidebar",M,"amp-sidebar{position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw!important;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;-webkit-transform:translateX(-100%)!important;transform:translateX(-100%)!important}amp-sidebar[side=right]{right:0!important;-webkit-transform:translateX(100%)!important;transform:translateX(100%)!important}amp-sidebar[side][open]{-webkit-transform:translateX(0)!important;transform:translateX(0)!important}amp-sidebar[side]{-webkit-transition:-webkit-transform 233ms cubic-bezier(0,0,.21,1);transition:-webkit-transform 233ms cubic-bezier(0,0,.21,1);transition:transform 233ms cubic-bezier(0,0,.21,1);transition:transform 233ms cubic-bezier(0,0,.21,1),-webkit-transform 233ms cubic-bezier(0,0,.21,1)}.i-amphtml-toolbar>ul{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;opacity:0.2;background-image:none!important;background-color:#000;z-index:2147483646}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-sidebar-0.1.js.map

