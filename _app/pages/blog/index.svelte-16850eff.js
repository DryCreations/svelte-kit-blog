import{_ as t}from"../../chunks/index.svelte-5368f400.js";import{_ as s}from"../../chunks/index.svelte-45704358.js";import{S as e,i as a,s as r,e as n,t as o,k as l,c as i,a as c,g as h,d as f,n as p,b as d,f as m,F as u,h as k,l as v,I as g,H as x,J as b}from"../../chunks/vendor-6e3930c7.js";import{b as j}from"../../chunks/paths-45dac81d.js";function $(t,s,e){const a=t.slice();return a[1]=s[e].metadata,a[2]=s[e].link,a}function w(t,s){let e,a,r,v,g,x,b,j,$=s[1].title+"",w=s[1].description+"";return{key:t,first:null,c(){e=n("a"),a=n("h1"),r=o($),v=l(),g=n("h2"),x=o(w),b=l(),this.h()},l(t){e=i(t,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var s=c(e);a=i(s,"H1",{});var n=c(a);r=h(n,$),n.forEach(f),v=p(s),g=i(s,"H2",{});var o=c(g);x=h(o,w),o.forEach(f),b=p(s),s.forEach(f),this.h()},h(){d(e,"class","bg-red-50 my-8"),d(e,"sveltekit:prefetch",""),d(e,"href",j=s[2]),this.first=e},m(t,s){m(t,e,s),u(e,a),u(a,r),u(e,v),u(e,g),u(g,x),u(e,b)},p(t,a){s=t,1&a&&$!==($=s[1].title+"")&&k(r,$),1&a&&w!==(w=s[1].description+"")&&k(x,w),1&a&&j!==(j=s[2])&&d(e,"href",j)},d(t){t&&f(e)}}}function y(t){let s,e=[],a=new Map,r=t[0];const n=t=>t[2];for(let o=0;o<r.length;o+=1){let s=$(t,r,o),l=n(s);a.set(l,e[o]=w(l,s))}return{c(){for(let t=0;t<e.length;t+=1)e[t].c();s=v()},l(t){for(let s=0;s<e.length;s+=1)e[s].l(t);s=v()},m(t,a){for(let s=0;s<e.length;s+=1)e[s].m(t,a);m(t,s,a)},p(t,[o]){1&o&&(r=t[0],e=g(e,o,n,1,t,r,a,s.parentNode,b,w,s,$))},i:x,o:x,d(t){for(let s=0;s<e.length;s+=1)e[s].d(t);t&&f(s)}}}async function E(){let e={"./../../posts/test/index.svelte.md":t,"./../../posts/test2/index.svelte.md":s};return{props:{posts:Object.entries(e).map((([t,{metadata:s}])=>({metadata:s,link:`${j}/blog/${t.split("/").slice(-2)[0]}`}))).sort(((t,s)=>new Date(s.metadata.date)-new Date(t.metadata.date)))}}}function H(t,s,e){let{posts:a}=s;return t.$$set=t=>{"posts"in t&&e(0,a=t.posts)},[a]}export default class extends e{constructor(t){super(),a(this,t,H,y,r,{posts:0})}}export{E as load};
