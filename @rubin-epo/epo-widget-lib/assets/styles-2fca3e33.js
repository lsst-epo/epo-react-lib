import{s as c}from"./styled-components.browser.esm-e0114bd2.js";const k=Math.sqrt(50),m=Math.sqrt(10),M=Math.sqrt(2);function h(i,r,n){const l=(r-i)/Math.max(0,n),o=Math.floor(Math.log10(l)),s=l/Math.pow(10,o),f=s>=k?10:s>=m?5:s>=M?2:1;let t,a,e;return o<0?(e=Math.pow(10,-o)/f,t=Math.round(i*e),a=Math.round(r*e),t/e<i&&++t,a/e>r&&--a,e=-e):(e=Math.pow(10,o)*f,t=Math.round(i/e),a=Math.round(r/e),t*e<i&&++t,a*e>r&&--a),a<t&&.5<=n&&n<2?h(i,r,n*2):[t,a,e]}function u(i,r,n){if(r=+r,i=+i,n=+n,!(n>0))return[];if(i===r)return[i];const l=r<i,[o,s,f]=l?h(r,i,n):h(i,r,n);if(!(s>=o))return[];const t=s-o+1,a=new Array(t);if(l)if(f<0)for(let e=0;e<t;++e)a[e]=(s-e)/-f;else for(let e=0;e<t;++e)a[e]=(s-e)*f;else if(f<0)for(let e=0;e<t;++e)a[e]=(o+e)/-f;else for(let e=0;e<t;++e)a[e]=(o+e)*f;return a}function x(i,r,n){return r=+r,i=+i,n=+n,h(i,r,n)[2]}const b=c.line`
  stroke: var(--axis-stroke, #707070);
`,w=c.polyline`
  stroke: var(--guide-stroke, #808080);
`,g=c.line`
  stroke: var(--axis-tick-stroke, #000);
  stroke-width: 2;
`,v=c.rect`
  cursor: pointer;
  transform-origin: center bottom;
`,q=c.text`
  font-size: 0.5em;
  text-anchor: middle;
  dominant-baseline: hanging;
`,B=c.text`
  font-size: 0.5em;
  text-anchor: end;
  dominant-baseline: mathematical;
`;export{b as B,w as G,g as T,q as X,B as Y,v as a,x as b,u as t};
