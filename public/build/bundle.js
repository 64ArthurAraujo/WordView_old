var app=function(t){"use strict";function e(){}const n=t=>t;function r(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(r)}function c(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function u(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}function a(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function f(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}function d(t,e,n,r,o,s){if(o){const c=a(e,n,r,s);t.p(c,o)}}function $(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}const p="undefined"!=typeof window;let h=p?()=>window.performance.now():()=>Date.now(),m=p?t=>requestAnimationFrame(t):e;const g=new Set;function x(t){g.forEach((e=>{e.c(t)||(g.delete(e),e.f())})),0!==g.size&&m(x)}function w(t,e){t.appendChild(e)}function b(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function y(t){const e=_("style");return function(t,e){w(t.head||t,e)}(b(t),e),e.sheet}function v(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function E(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function j(){return z(" ")}function S(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function W(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const C=new Map;let M,I=0;function O(t,e,n,r,o,s,c,l=0){const i=16.666/r;let u="{\n";for(let t=0;t<=1;t+=i){const r=e+(n-e)*s(t);u+=100*t+`%{${c(r,1-r)}}\n`}const a=u+`100% {${c(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${l}`,d=b(t),{stylesheet:$,rules:p}=C.get(d)||function(t,e){const n={stylesheet:y(e),rules:{}};return C.set(t,n),n}(d,t);p[f]||(p[f]=!0,$.insertRule(`@keyframes ${f} ${a}`,$.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${f} ${r}ms linear ${o}ms 1 both`,I+=1,f}function B(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),I-=o,I||m((()=>{I||(C.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),C.clear())})))}function N(t){M=t}function P(t){(function(){if(!M)throw new Error("Function called outside component initialization");return M})().$$.on_mount.push(t)}const T=[],L=[],D=[],F=[],R=Promise.resolve();let H=!1;function q(t){D.push(t)}const J=new Set;let U,V=0;function Y(){const t=M;do{for(;V<T.length;){const t=T[V];V++,N(t),G(t.$$)}for(N(null),T.length=0,V=0;L.length;)L.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];J.has(e)||(J.add(e),e())}D.length=0}while(T.length);for(;F.length;)F.pop()();H=!1,J.clear(),N(t)}function G(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}function K(t,e,n){t.dispatchEvent(function(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,r,e),o}(`${e?"intro":"outro"}${n}`))}const Q=new Set;let X;function Z(){X={r:0,c:[],p:X}}function tt(){X.r||s(X.c),X=X.p}function et(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function nt(t,e,n,r){if(t&&t.o){if(Q.has(t))return;Q.add(t),X.c.push((()=>{Q.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}const rt={duration:0};function ot(t,r,o,l){let i=r(t,o),u=l?0:1,a=null,f=null,d=null;function $(){d&&B(t,d)}function p(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function w(r){const{delay:o=0,duration:c=300,easing:l=n,tick:w=e,css:b}=i||rt,y={start:h()+o,b:r};r||(y.group=X,X.r+=1),a||f?f=y:(b&&($(),d=O(t,u,r,c,o,l,b)),r&&w(0,1),a=p(y,c),q((()=>K(t,r,"start"))),function(t){let e;0===g.size&&m(x),new Promise((n=>{g.add(e={c:t,f:n})}))}((e=>{if(f&&e>f.start&&(a=p(f,c),f=null,K(t,a.b,"start"),b&&($(),d=O(t,u,a.b,a.duration,0,l,i.css))),a)if(e>=a.end)w(u=a.b,1-u),K(t,a.b,"end"),f||(a.b?$():--a.group.r||s(a.group.c)),a=null;else if(e>=a.start){const t=e-a.start;u=a.a+a.d*l(t/a.duration),w(u,1-u)}return!(!a&&!f)})))}return{run(t){c(i)?(U||(U=Promise.resolve(),U.then((()=>{U=null}))),U).then((()=>{i=i(),w(t)})):w(t)},end(){$(),a=f=null}}}function st(t){t&&t.c()}function ct(t,e,n,o){const{fragment:l,on_mount:i,on_destroy:u,after_update:a}=t.$$;l&&l.m(e,n),o||q((()=>{const e=i.map(r).filter(c);u?u.push(...e):s(e),t.$$.on_mount=[]})),a.forEach(q)}function lt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function it(t,e){-1===t.$$.dirty[0]&&(T.push(t),H||(H=!0,R.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ut(t,n,r,c,l,i,u,a=[-1]){const f=M;N(t);const d=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:n.target||f.$$.root};u&&u(d.root);let $=!1;if(d.ctx=r?r(t,n.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&l(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),$&&it(t,e)),n})):[],d.update(),$=!0,s(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(k)}else d.fragment&&d.fragment.c();n.intro&&et(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),Y()}N(f)}class at{$destroy(){lt(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ft(t){let e,n,r;const o=t[2].default,s=u(o,t,t[1],null);return{c(){e=_("div"),s&&s.c(),W(e,"class",n=`bg-black-lighter h-full w-1/5 fixed ${t[0]}-0`)},m(t,n){v(t,e,n),s&&s.m(e,null),r=!0},p(t,[c]){s&&s.p&&(!r||2&c)&&d(s,o,t,t[1],r?f(o,t[1],c,null):$(t[1]),null),(!r||1&c&&n!==(n=`bg-black-lighter h-full w-1/5 fixed ${t[0]}-0`))&&W(e,"class",n)},i(t){r||(et(s,t),r=!0)},o(t){nt(s,t),r=!1},d(t){t&&k(e),s&&s.d(t)}}}function dt(t,e,n){let{$$slots:r={},$$scope:o}=e,{direction:s="left"}=e;return t.$$set=t=>{"direction"in t&&n(0,s=t.direction),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class $t extends at{constructor(t){super(),ut(this,t,dt,ft,l,{direction:0})}}function pt(t){let e,n;const r=t[1].default,o=u(r,t,t[0],null);return{c(){e=_("div"),o&&o.c(),W(e,"class","bg-black-focus h-1/6 w-full fixed bottom-0")},m(t,r){v(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&(!n||1&e)&&d(o,r,t,t[0],n?f(r,t[0],e,null):$(t[0]),null)},i(t){n||(et(o,t),n=!0)},o(t){nt(o,t),n=!1},d(t){t&&k(e),o&&o.d(t)}}}function ht(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class mt extends at{constructor(t){super(),ut(this,t,ht,pt,l,{})}}function gt(t,{delay:e=0,duration:r=400,easing:o=n}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:r,easing:o,css:t=>"opacity: "+t*s}}function xt(t){let e,n,r;const o=t[1].default,s=u(o,t,t[0],null);return{c(){e=_("div"),s&&s.c(),W(e,"class","z-10 h-screen w-screen fixed top-0 left-0 flex justify-center items-center bg-black-lighter bg-opacity-50")},m(t,n){v(t,e,n),s&&s.m(e,null),r=!0},p(t,[e]){s&&s.p&&(!r||1&e)&&d(s,o,t,t[0],r?f(o,t[0],e,null):$(t[0]),null)},i(t){r||(et(s,t),q((()=>{n||(n=ot(e,gt,{duration:250},!0)),n.run(1)})),r=!0)},o(t){nt(s,t),n||(n=ot(e,gt,{duration:250},!1)),n.run(0),r=!1},d(t){t&&k(e),s&&s.d(t),t&&n&&n.end()}}}function wt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class bt extends at{constructor(t){super(),ut(this,t,wt,xt,l,{})}}const yt=[];function vt(t,n=e){let r;const o=new Set;function s(e){if(l(t,e)&&(t=e,r)){const e=!yt.length;for(const e of o)e[1](),yt.push(e,t);if(e){for(let t=0;t<yt.length;t+=2)yt[t][0](yt[t+1]);yt.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(c,l=e){const i=[c,l];return o.add(i),1===o.size&&(r=n(s)||e),c(t),()=>{o.delete(i),0===o.size&&(r(),r=null)}}}}const kt=vt([]),_t=vt({});const Et=vt(!1),zt=vt(!1),jt=vt("null");function St(t,e){jt.set(e),zt.set(!0),setTimeout((()=>{zt.set(!1)}),t)}const Wt=vt(!1);function At(t){let n,r,o,s;return{c(){n=E("svg"),r=E("line"),o=E("polyline"),W(r,"x1","19"),W(r,"y1","12"),W(r,"x2","5"),W(r,"y2","12"),W(o,"points","12 19 5 12 12 5"),W(n,"xmlns","http://www.w3.org/2000/svg"),W(n,"width",t[0]),W(n,"height",t[0]),W(n,"fill","none"),W(n,"viewBox","0 0 24 24"),W(n,"stroke","currentColor"),W(n,"stroke-width",t[1]),W(n,"stroke-linecap","round"),W(n,"stroke-linejoin","round"),W(n,"class",s="feather feather-arrow-left "+t[2])},m(t,e){v(t,n,e),w(n,r),w(n,o)},p(t,[e]){1&e&&W(n,"width",t[0]),1&e&&W(n,"height",t[0]),2&e&&W(n,"stroke-width",t[1]),4&e&&s!==(s="feather feather-arrow-left "+t[2])&&W(n,"class",s)},i:e,o:e,d(t){t&&k(n)}}}function Ct(t,e,n){let{size:r="24"}=e,{strokeWidth:o=2}=e,{class:s=""}=e;return"100%"!==r&&(r="x"===r.slice(-1)?r.slice(0,r.length-1)+"em":parseInt(r)+"px"),t.$$set=t=>{"size"in t&&n(0,r=t.size),"strokeWidth"in t&&n(1,o=t.strokeWidth),"class"in t&&n(2,s=t.class)},[r,o,s]}class Mt extends at{constructor(t){super(),ut(this,t,Ct,At,l,{size:0,strokeWidth:1,class:2})}}function It(t){let n,r,o,s,c,l;return{c(){n=E("svg"),r=E("circle"),o=E("path"),s=E("line"),c=E("line"),W(r,"cx","12"),W(r,"cy","12"),W(r,"r","10"),W(o,"d","M16 16s-1.5-2-4-2-4 2-4 2"),W(s,"x1","9"),W(s,"y1","9"),W(s,"x2","9.01"),W(s,"y2","9"),W(c,"x1","15"),W(c,"y1","9"),W(c,"x2","15.01"),W(c,"y2","9"),W(n,"xmlns","http://www.w3.org/2000/svg"),W(n,"width",t[0]),W(n,"height",t[0]),W(n,"fill","none"),W(n,"viewBox","0 0 24 24"),W(n,"stroke","currentColor"),W(n,"stroke-width",t[1]),W(n,"stroke-linecap","round"),W(n,"stroke-linejoin","round"),W(n,"class",l="feather feather-frown "+t[2])},m(t,e){v(t,n,e),w(n,r),w(n,o),w(n,s),w(n,c)},p(t,[e]){1&e&&W(n,"width",t[0]),1&e&&W(n,"height",t[0]),2&e&&W(n,"stroke-width",t[1]),4&e&&l!==(l="feather feather-frown "+t[2])&&W(n,"class",l)},i:e,o:e,d(t){t&&k(n)}}}function Ot(t,e,n){let{size:r="24"}=e,{strokeWidth:o=2}=e,{class:s=""}=e;return"100%"!==r&&(r="x"===r.slice(-1)?r.slice(0,r.length-1)+"em":parseInt(r)+"px"),t.$$set=t=>{"size"in t&&n(0,r=t.size),"strokeWidth"in t&&n(1,o=t.strokeWidth),"class"in t&&n(2,s=t.class)},[r,o,s]}class Bt extends at{constructor(t){super(),ut(this,t,Ot,It,l,{size:0,strokeWidth:1,class:2})}}function Nt(t){let n,r,o,s;return{c(){n=E("svg"),r=E("line"),o=E("line"),W(r,"x1","12"),W(r,"y1","5"),W(r,"x2","12"),W(r,"y2","19"),W(o,"x1","5"),W(o,"y1","12"),W(o,"x2","19"),W(o,"y2","12"),W(n,"xmlns","http://www.w3.org/2000/svg"),W(n,"width",t[0]),W(n,"height",t[0]),W(n,"fill","none"),W(n,"viewBox","0 0 24 24"),W(n,"stroke","currentColor"),W(n,"stroke-width",t[1]),W(n,"stroke-linecap","round"),W(n,"stroke-linejoin","round"),W(n,"class",s="feather feather-plus "+t[2])},m(t,e){v(t,n,e),w(n,r),w(n,o)},p(t,[e]){1&e&&W(n,"width",t[0]),1&e&&W(n,"height",t[0]),2&e&&W(n,"stroke-width",t[1]),4&e&&s!==(s="feather feather-plus "+t[2])&&W(n,"class",s)},i:e,o:e,d(t){t&&k(n)}}}function Pt(t,e,n){let{size:r="24"}=e,{strokeWidth:o=2}=e,{class:s=""}=e;return"100%"!==r&&(r="x"===r.slice(-1)?r.slice(0,r.length-1)+"em":parseInt(r)+"px"),t.$$set=t=>{"size"in t&&n(0,r=t.size),"strokeWidth"in t&&n(1,o=t.strokeWidth),"class"in t&&n(2,s=t.class)},[r,o,s]}class Tt extends at{constructor(t){super(),ut(this,t,Pt,Nt,l,{size:0,strokeWidth:1,class:2})}}function Lt(t){let n,r,o,s,c;return r=new Mt({props:{size:"14",class:"invert"}}),{c(){n=_("div"),st(r.$$.fragment),W(n,"class","bg-black-lightest hover:bg-accent-darker transition-colors hover:cursor-pointer mt-2 ml-2 px-2 py-2 border-none fixed rounded-full")},m(e,l){v(e,n,l),ct(r,n,null),o=!0,s||(c=S(n,"click",t[1]),s=!0)},p:e,i(t){o||(et(r.$$.fragment,t),o=!0)},o(t){nt(r.$$.fragment,t),o=!1},d(t){t&&k(n),lt(r),s=!1,c()}}}function Dt(t){let e,n,r,o,s,c,l,i,u,a,f,d,$=t[0].title+"",p=t[0].description+"";return{c(){e=_("div"),n=j(),r=_("div"),o=_("div"),s=j(),c=_("div"),l=_("h3"),i=_("b"),u=z($),a=j(),f=_("p"),d=z(p),W(e,"class","bg-black-lightest fixed h-1 w-full hover:h-2 hover:cursor-pointer transition-all"),W(o,"class","h-20 w-20 bg-black-lightest mx-3 rounded"),W(l,"class","text-white-regular select-none"),W(f,"class","text-white-darker select-none"),W(c,"class","h-20 items-center content-center justify-start flex-col"),W(r,"class","bottom-0 h-full w-full flex items-center content-center justify-start flex-row")},m(t,$){v(t,e,$),v(t,n,$),v(t,r,$),w(r,o),w(r,s),w(r,c),w(c,l),w(l,i),w(i,u),w(c,a),w(c,f),w(f,d)},p(t,e){1&e&&$!==($=t[0].title+"")&&A(u,$),1&e&&p!==(p=t[0].description+"")&&A(d,p)},d(t){t&&k(e),t&&k(n),t&&k(r)}}}function Ft(t){let e,n,r,o,s,c,l,i;return r=new $t({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),s=new $t({props:{direction:"right"}}),l=new mt({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){e=_("div"),n=j(),st(r.$$.fragment),o=j(),st(s.$$.fragment),c=j(),st(l.$$.fragment),W(e,"class","h-screen w-screen bg-black-light")},m(t,u){v(t,e,u),v(t,n,u),ct(r,t,u),v(t,o,u),ct(s,t,u),v(t,c,u),ct(l,t,u),i=!0},p(t,e){const n={};4&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n);const o={};5&e&&(o.$$scope={dirty:e,ctx:t}),l.$set(o)},i(t){i||(et(r.$$.fragment,t),et(s.$$.fragment,t),et(l.$$.fragment,t),i=!0)},o(t){nt(r.$$.fragment,t),nt(s.$$.fragment,t),nt(l.$$.fragment,t),i=!1},d(t){t&&k(e),t&&k(n),lt(r,t),t&&k(o),lt(s,t),t&&k(c),lt(l,t)}}}function Rt(t){let e,n;return e=new bt({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){st(e.$$.fragment)},m(t,r){ct(e,t,r),n=!0},p(t,[n]){const r={};5&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(et(e.$$.fragment,t),n=!0)},o(t){nt(e.$$.fragment,t),n=!1},d(t){lt(e,t)}}}function Ht(t,e,n){let r;i(t,_t,(t=>n(0,r=t)));return[r,()=>Wt.set(!1)]}class qt extends at{constructor(t){super(),ut(this,t,Ht,Rt,l,{})}}function Jt(t){let n,r;return{c(){n=_("input"),n.required=!0,W(n,"id",t[2]),W(n,"type",t[0]),W(n,"placeholder",t[1]),W(n,"class",r=`border-none rounded-md text-white-regular outline-none px-4 h-12 w-1/3 select-none bg-black-lightest hover:bg-black-select transition-colors ${t[3]||""}`)},m(t,e){v(t,n,e)},p(t,[e]){4&e&&W(n,"id",t[2]),1&e&&W(n,"type",t[0]),2&e&&W(n,"placeholder",t[1]),8&e&&r!==(r=`border-none rounded-md text-white-regular outline-none px-4 h-12 w-1/3 select-none bg-black-lightest hover:bg-black-select transition-colors ${t[3]||""}`)&&W(n,"class",r)},i:e,o:e,d(t){t&&k(n)}}}function Ut(t,e,n){let{type:r="text"}=e,{placeholder:o}=e,{id:s=""}=e,{class:c=""}=e;return t.$$set=t=>{"type"in t&&n(0,r=t.type),"placeholder"in t&&n(1,o=t.placeholder),"id"in t&&n(2,s=t.id),"class"in t&&n(3,c=t.class)},[r,o,s,c]}class Vt extends at{constructor(t){super(),ut(this,t,Ut,Jt,l,{type:0,placeholder:1,id:2,class:3})}}const Yt=(process.env.APPDATA||("darwin"==process.platform?process.env.HOME+"/Library/Preferences":process.env.HOME+"/.local/share"))+"/wordview/wordmaps/",Gt=require("fs");function Kt(){Gt.existsSync(Yt)||Gt.mkdirSync(Yt,{recursive:!0});const t=Gt.readdirSync(Yt);if(0===t.length)return new Array;const e=function(t){const e=function(t){const e=[];return t.forEach((t=>{t.endsWith(".wordmap.json")&&e.push(t)})),e}(t);return 0===e.length?new Array:function(t){let e=[];return t.forEach((t=>{let n=Gt.readFileSync(Yt+t,"utf8");e.push(JSON.parse(n))})),e}(e)}(t);kt.set(e)}function Qt(){return new Promise(((t,e)=>{let n=document.createElement("input");n.type="file",n.setAttribute("visibility","hidden"),n.click(),n.addEventListener("change",(()=>{const e=n.files;e.length||document.body.removeChild(n),t(e[0])}))}))}function Xt(t){let n,r,o;return{c(){n=_("div"),n.innerHTML='<h4 class="text-white-darker">Open Audio File...</h4>',W(n,"class","border-none text-center justify-center items-center flex rounded-md outline-none px-4 h-12 w-1/2 select-none bg-black-lightest hover:bg-accent-darker hover:cursor-pointer transition-colors")},m(e,s){v(e,n,s),r||(o=S(n,"click",t[1]),r=!0)},p:e,i:e,o:e,d(t){t&&k(n),r=!1,o()}}}function Zt(e){async function n(){if(!function(){const t=document.getElementById("wordmap-title"),e=document.getElementById("wordmap-description");return!(""==t.value||""==e.value||!t.value||!e.value)||(St(1250,"Please fill all the inputs!"),!1)}())return;const{title:e,description:n}=function(){const t=document.getElementById("wordmap-title"),e=document.getElementById("wordmap-description");return{title:t.value,description:e.value}}(),r=await Qt();"audio/mpeg"===r.type?function(e,n,r){let o=t.randomUUID();Gt.existsSync(Yt+"/audio")||Gt.mkdirSync(Yt+"/audio",{recursive:!0}),Gt.copyFileSync(e,Yt+`audio/${o}`);const s={id:o,title:n,description:r,durationInMiliseconds:0,thumb:"",audioPath:`${Yt}audio/${o}`,points:[]};Gt.writeFileSync(Yt+`${o}.wordmap.json`,JSON.stringify(s)),Et.set(!1),Kt()}(r.path,e,n):St(1e3,"Invalid audio type!")}return[n,()=>n()]}class te extends at{constructor(t){super(),ut(this,t,Zt,Xt,l,{})}}function ee(t){let n,r,o,s,c,l,i,u,a,f,d,$,p,h,m,g,x,b;return s=new Mt({props:{size:"14",class:"invert"}}),f=new Vt({props:{id:"wordmap-title",placeholder:"Title"}}),$=new Vt({props:{id:"wordmap-description",placeholder:"Description",class:"mt-4"}}),m=new te({}),{c(){n=_("div"),r=_("div"),o=_("div"),st(s.$$.fragment),c=j(),l=_("h2"),l.textContent="New Wordmap",i=j(),u=_("form"),a=_("div"),st(f.$$.fragment),d=j(),st($.$$.fragment),p=j(),h=_("div"),st(m.$$.fragment),W(o,"class","absolute top-4 left-4 bg-black-lightest hover:bg-accent-regular transition-colors rounded-full px-2 py-2 hover:cursor-pointer"),W(l,"class","flex text-white-regular mt-4"),W(r,"class","flex w-full h-fit top-4 items-center justify-center"),W(a,"class","flex mt-8 flex-col items-center"),W(h,"class","flex mt-8 flex-col items-center"),W(n,"class","z-30 h-3/4 w-3/4 bg-black-lighter rounded-md relative")},m(e,y){v(e,n,y),w(n,r),w(r,o),ct(s,o,null),w(r,c),w(r,l),w(n,i),w(n,u),w(u,a),ct(f,a,null),w(a,d),ct($,a,null),w(n,p),w(n,h),ct(m,h,null),g=!0,x||(b=S(o,"click",t[0]),x=!0)},p:e,i(t){g||(et(s.$$.fragment,t),et(f.$$.fragment,t),et($.$$.fragment,t),et(m.$$.fragment,t),g=!0)},o(t){nt(s.$$.fragment,t),nt(f.$$.fragment,t),nt($.$$.fragment,t),nt(m.$$.fragment,t),g=!1},d(t){t&&k(n),lt(s),lt(f),lt($),lt(m),x=!1,b()}}}function ne(t){let e,n;return e=new bt({props:{$$slots:{default:[ee]},$$scope:{ctx:t}}}),{c(){st(e.$$.fragment)},m(t,r){ct(e,t,r),n=!0},p(t,[n]){const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(et(e.$$.fragment,t),n=!0)},o(t){nt(e.$$.fragment,t),n=!1},d(t){lt(e,t)}}}function re(t){return[()=>Et.set(!1)]}class oe extends at{constructor(t){super(),ut(this,t,re,ne,l,{})}}function se(t){let e,n;const r=t[1].default,o=u(r,t,t[0],null);return{c(){e=_("div"),o&&o.c(),W(e,"class","bg-black-lighter w-full h-12 fixed")},m(t,r){v(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&(!n||1&e)&&d(o,r,t,t[0],n?f(r,t[0],e,null):$(t[0]),null)},i(t){n||(et(o,t),n=!0)},o(t){nt(o,t),n=!1},d(t){t&&k(e),o&&o.d(t)}}}function ce(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class le extends at{constructor(t){super(),ut(this,t,ce,se,l,{})}}function ie(t){!function(t){kt.subscribe((e=>{for(const n of e)n.id===t&&_t.set(n)}))}(t),Wt.set(!0)}function ue(t){let n,r,o,s,c,l,i,u,a,f,d=t[0].title+"",$=t[0].description+"";return{c(){n=_("div"),r=_("div"),o=_("h2"),s=_("b"),c=z(d),l=j(),i=_("h4"),u=z($),W(o,"class","text-white-regular select-none"),W(i,"class","text-white-darker select-none"),W(r,"class","mt-2 ml-4"),W(n,"class","h-20 rounded-md w-10/12 mt-4 bg-black-lightest hover:bg-black-select hover:cursor-pointer transition-colors")},m(e,d){v(e,n,d),w(n,r),w(r,o),w(o,s),w(s,c),w(r,l),w(r,i),w(i,u),a||(f=S(n,"click",t[1]),a=!0)},p(t,[e]){1&e&&d!==(d=t[0].title+"")&&A(c,d),1&e&&$!==($=t[0].description+"")&&A(u,$)},i:e,o:e,d(t){t&&k(n),a=!1,f()}}}function ae(t,e,n){let{mapdata:r}=e;return t.$$set=t=>{"mapdata"in t&&n(0,r=t.mapdata)},[r,()=>ie(r.id)]}class fe extends at{constructor(t){super(),ut(this,t,ae,ue,l,{mapdata:0})}}function de(t,e,n){const r=t.slice();return r[1]=e[n],r}function $e(t){let e,n,r=t[0],o=[];for(let e=0;e<r.length;e+=1)o[e]=he(de(t,r,e));const s=t=>nt(o[t],1,1,(()=>{o[t]=null}));return{c(){e=_("div");for(let t=0;t<o.length;t+=1)o[t].c();W(e,"class","w-full justify-center items-center flex flex-col")},m(t,r){v(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,n){if(1&n){let c;for(r=t[0],c=0;c<r.length;c+=1){const s=de(t,r,c);o[c]?(o[c].p(s,n),et(o[c],1)):(o[c]=he(s),o[c].c(),et(o[c],1),o[c].m(e,null))}for(Z(),c=r.length;c<o.length;c+=1)s(c);tt()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)et(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)nt(o[t]);n=!1},d(t){t&&k(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t)}}}function pe(t){let n,r,o,s,c;return r=new Bt({props:{size:"48",class:"invert mb-2"}}),{c(){n=_("div"),st(r.$$.fragment),o=j(),s=_("h4"),s.innerHTML="<b>You dont have any wordmaps yet...</b>",W(s,"class","text-white-regular align-middle select-none"),W(n,"class","justify-center text-center content-center items-center flex flex-col pt-72")},m(t,e){v(t,n,e),ct(r,n,null),w(n,o),w(n,s),c=!0},p:e,i(t){c||(et(r.$$.fragment,t),c=!0)},o(t){nt(r.$$.fragment,t),c=!1},d(t){t&&k(n),lt(r)}}}function he(t){let e,n;return e=new fe({props:{mapdata:t[1]}}),{c(){st(e.$$.fragment)},m(t,r){ct(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.mapdata=t[1]),e.$set(r)},i(t){n||(et(e.$$.fragment,t),n=!0)},o(t){nt(e.$$.fragment,t),n=!1},d(t){lt(e,t)}}}function me(t){let e,n,r,o;const s=[pe,$e],c=[];function l(t,e){return 0==t[0].length?0:1}return n=l(t),r=c[n]=s[n](t),{c(){e=_("div"),r.c(),W(e,"class","w-full h-full flex static justify-center content-center pt-12 pb-12")},m(t,r){v(t,e,r),c[n].m(e,null),o=!0},p(t,[o]){let i=n;n=l(t),n===i?c[n].p(t,o):(Z(),nt(c[i],1,1,(()=>{c[i]=null})),tt(),r=c[n],r?r.p(t,o):(r=c[n]=s[n](t),r.c()),et(r,1),r.m(e,null))},i(t){o||(et(r),o=!0)},o(t){nt(r),o=!1},d(t){t&&k(e),c[n].d()}}}function ge(t,e,n){let r;return i(t,kt,(t=>n(0,r=t))),P((()=>{Kt()})),[r]}class xe extends at{constructor(t){super(),ut(this,t,ge,me,l,{})}}function we(t){let n,r,o,s,c;return r=new Tt({props:{size:"24",class:"invert"}}),{c(){n=_("div"),st(r.$$.fragment),W(n,"class","bg-accent-regular hover:bg-accent-darker transition-colors hover:cursor-pointer mb-4 mr-4 px-5 py-5 border-none fixed rounded-full bottom-0 right-0")},m(e,l){v(e,n,l),ct(r,n,null),o=!0,s||(c=S(n,"click",t[0]),s=!0)},p:e,i(t){o||(et(r.$$.fragment,t),o=!0)},o(t){nt(r.$$.fragment,t),o=!1},d(t){t&&k(n),lt(r),s=!1,c()}}}function be(t){return[()=>Et.set(!0)]}class ye extends at{constructor(t){super(),ut(this,t,be,we,l,{})}}function ve(t){let e,n,r,o,s,c;const l=t[1].default,i=u(l,t,t[0],null);return{c(){e=_("div"),n=_("div"),r=_("p"),o=_("b"),i&&i.c(),W(r,"class","text-white-regular"),W(n,"class","h-12 w-1/4 bg-accent-darker rounded-xl flex mt-4 text-center justify-center items-center"),W(e,"class","z-20 h-full w-full fixed top-0 left-0 justify-center flex select-none")},m(t,s){v(t,e,s),w(e,n),w(n,r),w(r,o),i&&i.m(o,null),c=!0},p(t,[e]){i&&i.p&&(!c||1&e)&&d(i,l,t,t[0],c?f(l,t[0],e,null):$(t[0]),null)},i(t){c||(et(i,t),q((()=>{s||(s=ot(e,gt,{duration:250},!0)),s.run(1)})),c=!0)},o(t){nt(i,t),s||(s=ot(e,gt,{duration:250},!1)),s.run(0),c=!1},d(t){t&&k(e),i&&i.d(t),t&&s&&s.end()}}}function ke(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class _e extends at{constructor(t){super(),ut(this,t,ke,ve,l,{})}}function Ee(t){let n;return{c(){n=_("div"),n.innerHTML='<h2 class="text-white-regular text-xl select-none"><b>WordView</b></h2>',W(n,"class","h-full flex items-center justify-centers pl-4")},m(t,e){v(t,n,e)},p:e,d(t){t&&k(n)}}}function ze(t){let e,n;return e=new oe({}),{c(){st(e.$$.fragment)},m(t,r){ct(e,t,r),n=!0},i(t){n||(et(e.$$.fragment,t),n=!0)},o(t){nt(e.$$.fragment,t),n=!1},d(t){lt(e,t)}}}function je(t){let e,n;return e=new qt({}),{c(){st(e.$$.fragment)},m(t,r){ct(e,t,r),n=!0},i(t){n||(et(e.$$.fragment,t),n=!0)},o(t){nt(e.$$.fragment,t),n=!1},d(t){lt(e,t)}}}function Se(t){let e,n;return e=new _e({props:{$$slots:{default:[We]},$$scope:{ctx:t}}}),{c(){st(e.$$.fragment)},m(t,r){ct(e,t,r),n=!0},p(t,n){const r={};24&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(et(e.$$.fragment,t),n=!0)},o(t){nt(e.$$.fragment,t),n=!1},d(t){lt(e,t)}}}function We(t){let e;return{c(){e=z(t[3])},m(t,n){v(t,e,n)},p(t,n){8&n&&A(e,t[3])},d(t){t&&k(e)}}}function Ae(t){let e,n,r,o,s,c,l,i,u,a;n=new le({props:{$$slots:{default:[Ee]},$$scope:{ctx:t}}}),o=new xe({}),c=new ye({});let f=t[0]&&ze(),d=t[1]&&je(),$=t[2]&&Se(t);return{c(){e=_("main"),st(n.$$.fragment),r=j(),st(o.$$.fragment),s=j(),st(c.$$.fragment),l=j(),f&&f.c(),i=j(),d&&d.c(),u=j(),$&&$.c()},m(t,p){v(t,e,p),ct(n,e,null),w(e,r),ct(o,e,null),w(e,s),ct(c,e,null),w(e,l),f&&f.m(e,null),w(e,i),d&&d.m(e,null),w(e,u),$&&$.m(e,null),a=!0},p(t,[r]){const o={};16&r&&(o.$$scope={dirty:r,ctx:t}),n.$set(o),t[0]?f?1&r&&et(f,1):(f=ze(),f.c(),et(f,1),f.m(e,i)):f&&(Z(),nt(f,1,1,(()=>{f=null})),tt()),t[1]?d?2&r&&et(d,1):(d=je(),d.c(),et(d,1),d.m(e,u)):d&&(Z(),nt(d,1,1,(()=>{d=null})),tt()),t[2]?$?($.p(t,r),4&r&&et($,1)):($=Se(t),$.c(),et($,1),$.m(e,null)):$&&(Z(),nt($,1,1,(()=>{$=null})),tt())},i(t){a||(et(n.$$.fragment,t),et(o.$$.fragment,t),et(c.$$.fragment,t),et(f),et(d),et($),a=!0)},o(t){nt(n.$$.fragment,t),nt(o.$$.fragment,t),nt(c.$$.fragment,t),nt(f),nt(d),nt($),a=!1},d(t){t&&k(e),lt(n),lt(o),lt(c),f&&f.d(),d&&d.d(),$&&$.d()}}}function Ce(t,e,n){let r,o,s,c;return i(t,Et,(t=>n(0,r=t))),i(t,Wt,(t=>n(1,o=t))),i(t,zt,(t=>n(2,s=t))),i(t,jt,(t=>n(3,c=t))),[r,o,s,c]}return new class extends at{constructor(t){super(),ut(this,t,Ce,Ae,l,{})}}({target:document.body,props:{}})}(crypto);
//# sourceMappingURL=bundle.js.map
