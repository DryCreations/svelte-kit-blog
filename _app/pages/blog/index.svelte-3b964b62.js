import{_ as t}from"../../chunks/index.svelte-8279de9c.js";import{_ as s}from"../../chunks/index.svelte-1f763382.js";import{S as e,i as a,s as r,e as n,t as o,k as l,c as i,a as c,g as d,d as h,n as f,b as p,f as m,E as u,h as k,l as v,K as g,F as x,L as b}from"../../chunks/vendor-952da11a.js";import{b as j}from"../../chunks/paths-45dac81d.js";function E(t,s,e){const a=t.slice();return a[1]=s[e].metadata,a[2]=s[e].link,a}function $(t,s){let e,a,r,v,g,x,b,j,E=s[1].title+"",$=s[1].description+"";return{key:t,first:null,c(){e=n("a"),a=n("h1"),r=o(E),v=l(),g=n("h2"),x=o($),b=l(),this.h()},l(t){e=i(t,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var s=c(e);a=i(s,"H1",{});var n=c(a);r=d(n,E),n.forEach(h),v=f(s),g=i(s,"H2",{});var o=c(g);x=d(o,$),o.forEach(h),b=f(s),s.forEach(h),this.h()},h(){p(e,"class","bg-red-50 my-8"),p(e,"sveltekit:prefetch",""),p(e,"href",j=s[2]),this.first=e},m(t,s){m(t,e,s),u(e,a),u(a,r),u(e,v),u(e,g),u(g,x),u(e,b)},p(t,a){s=t,1&a&&E!==(E=s[1].title+"")&&k(r,E),1&a&&$!==($=s[1].description+"")&&k(x,$),1&a&&j!==(j=s[2])&&p(e,"href",j)},d(t){t&&h(e)}}}function w(t){let s,e=[],a=new Map,r=t[0];const n=t=>t[2];for(let o=0;o<r.length;o+=1){let s=E(t,r,o),l=n(s);a.set(l,e[o]=$(l,s))}return{c(){for(let t=0;t<e.length;t+=1)e[t].c();s=v()},l(t){for(let s=0;s<e.length;s+=1)e[s].l(t);s=v()},m(t,a){for(let s=0;s<e.length;s+=1)e[s].m(t,a);m(t,s,a)},p(t,[o]){1&o&&(r=t[0],e=g(e,o,n,1,t,r,a,s.parentNode,b,$,s,E))},i:x,o:x,d(t){for(let s=0;s<e.length;s+=1)e[s].d(t);t&&h(s)}}}async function y(){let e={"./../../posts/test/index.svelte.md":t,"./../../posts/test2/index.svelte.md":s};return{props:{posts:Object.entries(e).map((([t,{metadata:s}])=>({metadata:s,link:`${j}/blog/${t.split("/").slice(-2)[0]}`}))).sort(((t,s)=>new Date(s.metadata.date)-new Date(t.metadata.date)))}}}function D(t,s,e){let{posts:a}=s;return t.$$set=t=>{"posts"in t&&e(0,a=t.posts)},[a]}export default class extends e{constructor(t){super(),a(this,t,D,w,r,{posts:0})}}export{y as load};