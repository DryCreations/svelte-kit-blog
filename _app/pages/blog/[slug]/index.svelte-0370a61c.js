import{_ as t}from"../../../chunks/preload-helper-9f12a5fd.js";import{S as e,i as s,s as a,e as n,t as r,k as o,j as i,c as p,a as c,g as d,d as m,n as u,m as f,f as l,E as h,o as _,F as $,v,r as x,w as E}from"../../../chunks/vendor-952da11a.js";function g(t){let e,s,a,g,j,k,w,P,y=t[0].title+"",A=t[0].description+"";return w=new t[1]({}),{c(){e=n("h1"),s=r(y),a=o(),g=n("h2"),j=r(A),k=o(),i(w.$$.fragment)},l(t){e=p(t,"H1",{});var n=c(e);s=d(n,y),n.forEach(m),a=u(t),g=p(t,"H2",{});var r=c(g);j=d(r,A),r.forEach(m),k=u(t),f(w.$$.fragment,t)},m(t,n){l(t,e,n),h(e,s),l(t,a,n),l(t,g,n),h(g,j),l(t,k,n),_(w,t,n),P=!0},p:$,i(t){P||(v(w.$$.fragment,t),P=!0)},o(t){x(w.$$.fragment,t),P=!1},d(t){t&&m(e),t&&m(a),t&&m(g),t&&m(k),E(w,t)}}}async function j({page:e}){let{metadata:s,default:a}=await function(e){switch(e){case"./../../../posts/test/index.svelte.md":return t((()=>import("../../../chunks/index.svelte-8279de9c.js").then((function(t){return t._}))),["/svelte-kit-blog/_app/chunks/index.svelte-8279de9c.js","/svelte-kit-blog/_app/chunks/vendor-952da11a.js"]);case"./../../../posts/test2/index.svelte.md":return t((()=>import("../../../chunks/index.svelte-1f763382.js").then((function(t){return t._}))),["/svelte-kit-blog/_app/chunks/index.svelte-1f763382.js","/svelte-kit-blog/_app/chunks/vendor-952da11a.js"]);default:return Promise.reject(new Error("Unknown variable dynamic import: "+e))}}(`./../../../posts/${e.params.slug}/index.svelte.md`);return{props:{post:{metadata:s,Component:a}}}}function k(t,e,s){let{post:a}=e,{metadata:n,Component:r}=a;return t.$$set=t=>{"post"in t&&s(2,a=t.post)},[n,r,a]}export default class extends e{constructor(t){super(),s(this,t,k,g,a,{post:2})}}export{j as load};