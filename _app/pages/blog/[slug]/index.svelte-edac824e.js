import{_ as t}from"../../../chunks/preload-helper-9f12a5fd.js";import{S as s,i as a,s as e,e as n,t as r,k as o,j as i,c,a as p,g as u,d as f,n as d,m,f as h,F as l,o as _,G as x,v as $,r as v,w as g}from"../../../chunks/vendor-f8496567.js";function E(t){let s,a,e,E,j,k,w,P,y=t[0].title+"",A=t[0].description+"";return w=new t[1]({}),{c(){s=n("h1"),a=r(y),e=o(),E=n("h2"),j=r(A),k=o(),i(w.$$.fragment)},l(t){s=c(t,"H1",{});var n=p(s);a=u(n,y),n.forEach(f),e=d(t),E=c(t,"H2",{});var r=p(E);j=u(r,A),r.forEach(f),k=d(t),m(w.$$.fragment,t)},m(t,n){h(t,s,n),l(s,a),h(t,e,n),h(t,E,n),l(E,j),h(t,k,n),_(w,t,n),P=!0},p:x,i(t){P||($(w.$$.fragment,t),P=!0)},o(t){v(w.$$.fragment,t),P=!1},d(t){t&&f(s),t&&f(e),t&&f(E),t&&f(k),g(w,t)}}}async function j({page:s}){let{metadata:a,default:e}=await function(s){switch(s){case"./../../../posts/test/index.svx":return t((()=>import("../../../chunks/index-cd21019c.js").then((function(t){return t._}))),["/svelte-kit-blog/_app/chunks/index-cd21019c.js","/svelte-kit-blog/_app/chunks/vendor-f8496567.js","/svelte-kit-blog/_app/chunks/Test-a841430b.js"]);case"./../../../posts/test2/index.svx":return t((()=>import("../../../chunks/index-1f1693de.js").then((function(t){return t._}))),["/svelte-kit-blog/_app/chunks/index-1f1693de.js","/svelte-kit-blog/_app/chunks/vendor-f8496567.js","/svelte-kit-blog/_app/chunks/Test-a841430b.js"]);default:return Promise.reject(new Error("Unknown variable dynamic import: "+s))}}(`./../../../posts/${s.params.slug}/index.svx`);return{props:{post:{metadata:a,Component:e}}}}function k(t,s,a){let{post:e}=s,{metadata:n,Component:r}=e;return t.$$set=t=>{"post"in t&&a(2,e=t.post)},[n,r,e]}export default class extends s{constructor(t){super(),a(this,t,k,E,e,{post:2})}}export{j as load};
