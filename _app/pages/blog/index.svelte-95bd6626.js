import{_ as t}from"../../chunks/index-cd21019c.js";import{_ as s}from"../../chunks/index-1f1693de.js";import{S as e,i as n,s as r,e as a,t as o,k as i,c as l,a as c,g as h,d as f,n as p,b as d,f as u,F as m,h as g,l as k,G as x,H as v}from"../../chunks/vendor-f8496567.js";import"../../chunks/Test-a841430b.js";function j(t,s,e){const n=t.slice();return n[1]=s[e].metadata,n[2]=s[e].link,n}function b(t){let s,e,n,r,k,x,v,j,b=t[1].title+"",E=t[1].description+"";return{c(){s=a("a"),e=a("h1"),n=o(b),r=i(),k=a("h2"),x=o(E),v=i(),this.h()},l(t){s=l(t,"A",{"sveltekit:prefetch":!0,href:!0});var a=c(s);e=l(a,"H1",{});var o=c(e);n=h(o,b),o.forEach(f),r=p(a),k=l(a,"H2",{});var i=c(k);x=h(i,E),i.forEach(f),v=p(a),a.forEach(f),this.h()},h(){d(s,"sveltekit:prefetch",""),d(s,"href",j=t[2])},m(t,a){u(t,s,a),m(s,e),m(e,n),m(s,r),m(s,k),m(k,x),m(s,v)},p(t,e){1&e&&b!==(b=t[1].title+"")&&g(n,b),1&e&&E!==(E=t[1].description+"")&&g(x,E),1&e&&j!==(j=t[2])&&d(s,"href",j)},d(t){t&&f(s)}}}function E(t){let s,e=t[0],n=[];for(let r=0;r<e.length;r+=1)n[r]=b(j(t,e,r));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();s=k()},l(t){for(let s=0;s<n.length;s+=1)n[s].l(t);s=k()},m(t,e){for(let s=0;s<n.length;s+=1)n[s].m(t,e);u(t,s,e)},p(t,[r]){if(1&r){let a;for(e=t[0],a=0;a<e.length;a+=1){const o=j(t,e,a);n[a]?n[a].p(o,r):(n[a]=b(o),n[a].c(),n[a].m(s.parentNode,s))}for(;a<n.length;a+=1)n[a].d(1);n.length=e.length}},i:x,o:x,d(t){v(n,t),t&&f(s)}}}async function H(){let e={"./../../posts/test/index.svx":t,"./../../posts/test2/index.svx":s};return{props:{posts:Object.entries(e).map((([t,{metadata:s}])=>({metadata:s,link:`/blog/${t.split("/").slice(-2)[0]}`})))}}}function $(t,s,e){let{posts:n}=s;return t.$$set=t=>{"posts"in t&&e(0,n=t.posts)},[n]}export default class extends e{constructor(t){super(),n(this,t,$,E,r,{posts:0})}}export{H as load};