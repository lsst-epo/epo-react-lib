var p={},a={};Object.defineProperty(a,"__esModule",{value:!0});a.aPxToRem=a.aHover=a.aHidden=a.aFocus=void 0;const $=()=>`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  `;a.aHidden=$;const v=t=>`
    &:focus {
      outline: 0;
    }

    &:focus-visible {
      ${t}
    }
  `;a.aFocus=v;const w=t=>`
    @media (hover: hover) {
      &:hover {
        ${t}
      }
    }
  `;a.aHover=w;const _=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:16;const o=parseInt(t,10),n=parseInt(e,10);return`
    ${o/n}rem
  `};a.aPxToRem=_;var d={};Object.defineProperty(d,"__esModule",{value:!0});d.initVariables=d.fluidScaleCalc=d.fluidScaleBase=void 0;d.pxToRem=j;d.reducedMotion=void 0;d.respondBase=O;d.stripUnit=void 0;const g={130:"1280px",50:"516px"};function O(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:g[50],o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"max",n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"width";return`
    @media all and (${o}-${n}: ${e}) {
      ${t}
    }
  `}const P=t=>`
    @media (prefers-reduced-motion: reduce) {
      ${t}
    }
  `;d.reducedMotion=P;const y=(t,e,o,n)=>{const i=s(t);return s(e)>i?`clamp(${t}, ${m(t,e,o,n)}, ${e})`:`clamp(${e}, ${m(t,e,o,n)}, ${t})`};d.fluidScaleBase=y;const m=function(t,e){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:g[130],n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:g[50];return`calc(${e} + ${s(t)-s(e)} * (100vw - ${n}) / ${s(o)-s(n)})`};d.fluidScaleCalc=m;const s=t=>parseInt(t.toString().replace(/[^\d\.]/g,""));d.stripUnit=s;function j(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:16;return s(t)/e+"rem"}const M=t=>{const e=t;return function(o){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(!o)return;const i=o.split(".");let l=0,r;const h=u=>{if(i[l]in u)if(l===i.length-1)if(typeof u[i[l]]=="object")r=n?u[i[l]].value:`${u[i[l]].value}${u[i[l]].unit||""}`;else return u[i[l]];else l++,h(u[i[l-1]]);else throw new Error(`Key \`${i[l]}\` not found on \`${i[l-1]}\`.`)};return h(e),r}};d.initVariables=M;var c={};Object.defineProperty(c,"__esModule",{value:!0});c.hasScrollLock=void 0;const S=()=>`
  &.has-scroll-lock {
    position: absolute;
    width: 100%;
    overflow: hidden;
  }
`;c.hasScrollLock=S;var b={};Object.defineProperty(b,"__esModule",{value:!0});b.embedFonts=void 0;const k=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e="";return t.forEach(o=>{let{name:n,fileName:i,weight:l,style:r}=o;e+=`
      @font-face {
        font-family: ${n};
        font-style: ${r};
        font-weight: ${l};
        src: url("/fonts/${i}.woff2") format("woff2"),
          url("/fonts/${i}.woff") format("woff");
        font-display: optional;
      }
    `}),`
    ${e}
  `};b.embedFonts=k;var f={};Object.defineProperty(f,"__esModule",{value:!0});f.lSetAspectRatio=F;f.logicalWithFallback=E;function F(t,e){return`
    &::before {
      float: left;
      content: "";
      padding-top: ${e/t*100}%;
    }

    &::after {
      display: block;
      content: "";
      clear: both;
    }

    @supports (aspect-ratio: 1 / 1) {
      aspect-ratio: ${t} / ${e};

      &::before,
      &::after {
        content: none;
      }
    }
  `}const A={"block-size":"height","max-block-size":"max-height","min-block-size":"min-height","inline-size":"width","max-inline-size":"max-width","min-inline-size":"min-width","margin-inline":["margin-left","margin-right"],"margin-inline-end":{ltr:"margin-right",rtl:"margin-left"},"margin-inline-start":{ltr:"margin-left",rtl:"margin-right"},"margin-block":["margin-top","margin-bottom"],"margin-block-end":"margin-bottom","margin-block-start":"margin-top",inset:["top","right","bottom","left"],"inset-inline":["left","right"],"inset-inline-end":{ltr:"right",rtl:"left"},"inset-inline-start":{ltr:"left",rtl:"right"},"inset-block":["top","bottom"],"inset-block-end":"bottom","inset-block-start":"top","padding-inline":["padding-left","padding-right"],"padding-inline-end":{ltr:"padding-right",rtl:"padding-left"},"padding-inline-start":{ltr:"padding-left",rtl:"padding-right"},"padding-block":["padding-top","padding-bottom"],"padding-block-end":"padding-bottom","padding-block-start":"padding-top","border-block":["border-top","border-bottom"],"border-block-color":["border-top-color","border-bottom-color"],"border-block-style":["border-top-style","border-bottom-style"],"border-block-width":["border-top-width","border-bottom-width"],"border-block-end":"border-bottom","border-block-end-color":"border-bottom-color","border-block-end-style":"border-bottom-style","border-block-end-width":"border-bottom-width","border-block-start":"border-top","border-block-start-color":"border-top-color","border-block-start-style":"border-top-style","border-block-start-width":"border-top-width","border-inline":["border-left","border-right"],"border-inline-color":["border-left-color","border-right-color"],"border-inline-style":["border-left-style","border-right-style"],"border-inline-width":["border-left-width","border-right-width"],"border-inline-end":{ltr:"border-right",rtl:"border-left"},"border-inline-end-color":{ltr:"border-right-color",rtl:"border-left-color"},"border-inline-end-style":{ltr:"border-right-style",rtl:"border-left-style"},"border-inline-end-width":{ltr:"border-right-width",rtl:"border-left-width"},"border-inline-start":{ltr:"border-left",rtl:"border-right"},"border-inline-start-color":{ltr:"border-left-color",rtl:"border-right-color"},"border-inline-start-style":{ltr:"border-left-style",rtl:"border-right-style"},"border-inline-start-width":{ltr:"border-left-width",rtl:"border-right-width"},"border-end-end-radius":{ltr:"border-bottom-right-radius",rtl:"border-bottom-left-radius"},"border-end-start-radius":{ltr:"border-bottom-left-radius",rtl:"border-bottom-right-radius"},"border-start-end-radius":{ltr:"border-top-right-radius",rtl:"border-top-left-radius"},"border-start-start-radius":{ltr:"border-top-left-radius",rtl:"border-top-right-radius"}};function L(t,e){const o=A[t];return o?Array.isArray(o)?o.map(n=>`${n}: ${e};`).join(""):typeof o=="object"&&"rtl"in o?`
      [dir='ltr'] & { ${o.ltr}: ${e}; }
      [dir='rtl'] & { ${o.rtl}: ${e}; }
  `:`${o}: ${e};`:`${t}: ${e};`}function z(t,e){const o=`${t}: ${e};`,n=L(t,e);return n?`
    ${o}

    @supports not ((${o.replace(";","")})) {
      ${n}
    }
  `:o}function E(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(t).map(n=>z(n,t[n])).join("")}(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=a;Object.keys(e).forEach(function(r){r==="default"||r==="__esModule"||r in t&&t[r]===e[r]||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})});var o=d;Object.keys(o).forEach(function(r){r==="default"||r==="__esModule"||r in t&&t[r]===o[r]||Object.defineProperty(t,r,{enumerable:!0,get:function(){return o[r]}})});var n=c;Object.keys(n).forEach(function(r){r==="default"||r==="__esModule"||r in t&&t[r]===n[r]||Object.defineProperty(t,r,{enumerable:!0,get:function(){return n[r]}})});var i=b;Object.keys(i).forEach(function(r){r==="default"||r==="__esModule"||r in t&&t[r]===i[r]||Object.defineProperty(t,r,{enumerable:!0,get:function(){return i[r]}})});var l=f;Object.keys(l).forEach(function(r){r==="default"||r==="__esModule"||r in t&&t[r]===l[r]||Object.defineProperty(t,r,{enumerable:!0,get:function(){return l[r]}})})})(p);export{p as d};
