function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function i(t,n,e,o){if(t){const r=f(t,n,e,o);return t[0](r)}}function f(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function a(t,n,e,o,r,s,c){const u=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(u){const r=f(n,e,o,c);t.p(r,u)}}function l(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function p(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function y(){return m(" ")}function b(){return m("")}function x(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function _(t){return Array.from(t.childNodes)}function k(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const s=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return o?$(n):g(n)}function w(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return m(n)}function v(t){return w(t," ")}function E(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function A(t,n,e){t.classList[e?"add":"remove"](n)}function S(t,n=document.body){return Array.from(n.querySelectorAll(t))}let j;function M(t){j=t}function N(){if(!j)throw new Error("Function called outside component initialization");return j}function O(t){N().$$.on_mount.push(t)}function q(t){N().$$.after_update.push(t)}function C(t,n){N().$$.context.set(t,n)}function T(t){return N().$$.context.get(t)}const z=[],B=[],F=[],L=[],P=Promise.resolve();let D=!1;function G(t){F.push(t)}let H=!1;const I=new Set;function J(){if(!H){H=!0;do{for(let t=0;t<z.length;t+=1){const n=z[t];M(n),K(n.$$)}for(M(null),z.length=0;B.length;)B.pop()();for(let t=0;t<F.length;t+=1){const n=F[t];I.has(n)||(I.add(n),n())}F.length=0}while(z.length);for(;L.length;)L.pop()();D=!1,H=!1,I.clear()}}function K(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(G)}}const Q=new Set;let R;function U(){R={r:0,c:[],p:R}}function V(){R.r||r(R.c),R=R.p}function W(t,n){t&&t.i&&(Q.delete(t),t.i(n))}function X(t,n,e,o){if(t&&t.o){if(Q.has(t))return;Q.add(t),R.c.push((()=>{Q.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function Y(t,n){t.d(1),n.delete(t.key)}function Z(t,n){X(t,1,1,(()=>{n.delete(t.key)}))}function tt(t,n,e,o,r,s,c,u,i,f,a,l){let d=t.length,h=s.length,p=d;const g={};for(;p--;)g[t[p].key]=p;const $=[],m=new Map,y=new Map;for(p=h;p--;){const t=l(r,s,p),u=e(t);let i=c.get(u);i?o&&i.p(t,n):(i=f(u,t),i.c()),m.set(u,$[p]=i),u in g&&y.set(u,Math.abs(p-g[u]))}const b=new Set,x=new Set;function _(t){W(t,1),t.m(u,a),c.set(t.key,t),a=t.first,h--}for(;d&&h;){const n=$[h-1],e=t[d-1],o=n.key,r=e.key;n===e?(a=n.first,d--,h--):m.has(r)?!c.has(o)||b.has(o)?_(n):x.has(r)?d--:y.get(o)>y.get(r)?(x.add(o),_(n)):(b.add(r),d--):(i(e,c),d--)}for(;d--;){const n=t[d];m.has(n.key)||i(n,c)}for(;h;)_($[h-1]);return $}function nt(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],u=n[s];if(u){for(const t in c)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[s]=u}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function et(t){return"object"==typeof t&&null!==t?t:{}}function ot(t){t&&t.c()}function rt(t,n){t&&t.l(n)}function st(t,n,o,c){const{fragment:u,on_mount:i,on_destroy:f,after_update:a}=t.$$;u&&u.m(n,o),c||G((()=>{const n=i.map(e).filter(s);f?f.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(G)}function ct(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){-1===t.$$.dirty[0]&&(z.push(t),D||(D=!0,P.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function it(n,e,s,c,u,i,f=[-1]){const a=j;M(n);const l=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:o(),dirty:f,skip_bound:!1};let d=!1;if(l.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&u(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),d&&ut(n,t)),e})):[],l.update(),d=!0,r(l.before_update),l.fragment=!!c&&c(l.ctx),e.target){if(e.hydrate){const t=_(e.target);l.fragment&&l.fragment.l(t),t.forEach(h)}else l.fragment&&l.fragment.c();e.intro&&W(n.$$.fragment),st(n,e.target,e.anchor,e.customElement),J()}M(a)}class ft{$destroy(){ct(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const at=[];function lt(n,e=t){let o;const r=[];function s(t){if(c(n,t)&&(n=t,o)){const t=!at.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),at.push(t,n)}if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,u=t){const i=[c,u];return r.push(i),1===r.length&&(o=e(s)||t),c(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{n as A,U as B,lt as C,$ as D,l as E,t as F,p as G,A as H,i as I,S as J,a as K,T as L,tt as M,u as N,Z as O,Y as P,ft as S,_ as a,x as b,k as c,h as d,g as e,d as f,w as g,E as h,it as i,ot as j,y as k,b as l,rt as m,v as n,st as o,nt as p,et as q,X as r,c as s,m as t,V as u,W as v,ct as w,C as x,q as y,O as z};