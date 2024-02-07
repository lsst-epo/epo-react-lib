import{j as d}from"./jsx-runtime-94f6e698.js";import{r}from"./index-8db94870.js";import{a as _}from"./utils-4cb73340.js";import{s as c}from"./styled-components.browser.esm-3d9e3c21.js";import{C as A}from"./Controls-8472ee58.js";import{I as N}from"./index-ce0ab6c3.js";function S(e,t){const n=r.useRef();r.useEffect(()=>{n.current=e},[e]),r.useEffect(()=>{function i(){n.current&&n.current()}if(t!==null){let o=setInterval(i,t);return()=>clearInterval(o)}},[t])}const j=c.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr min-content;
  justify-items: center;
  position: relative;
  height: 100%;
`,w=c(A)`
  grid-row: 2;
  margin-block-start: var(--PADDING_SMALL, 20px);
`,E=c(N)`
  aspect-ratio: 1;
  grid-row: 1;
  width: 100%;
`,k=({images:e=[],activeIndex:t=0,autoplay:n=!0,loop:i=!0,interval:o=200,blinkCallback:l,loadedCallback:m,className:x,showControls:B=!0,children:h})=>{const[p,f]=r.useState(n),[v,I]=r.useState(!1),s=e.length>1,g=(a=0)=>{const V=e.length-1;return _(t+a,V)},y=()=>{if(s){const a=g(1);i===!1&&a===e.length-1&&u(),l&&l(a)}},u=()=>{f(!1)},b=()=>{f(a=>!a)},q=()=>{u(),y()},C=()=>{u(),l&&l(g(-1))};return S(y,s&&v&&p?o:null),d.jsxs(j,{className:x,children:[d.jsx(E,{loadCallback:()=>{I(!0),m&&m()},visible:t,images:e}),h,s&&B&&d.jsx(w,{isDisabled:!v,playing:p,handleStartStop:b,handleNext:q,handlePrevious:C})]})};k.displayName="Atomic.Blinker";const $=k;try{Atomic.Blinker.displayName="Atomic.Blinker",Atomic.Blinker.__docgenInfo={description:"",displayName:"Atomic.Blinker",props:{images:{defaultValue:{value:"[]"},description:"",name:"images",required:!1,type:{name:"ImageShape[]"}},activeIndex:{defaultValue:{value:"0"},description:"",name:"activeIndex",required:!1,type:{name:"number"}},autoplay:{defaultValue:{value:"true"},description:"",name:"autoplay",required:!1,type:{name:"boolean"}},loop:{defaultValue:{value:"true"},description:"",name:"loop",required:!1,type:{name:"boolean"}},interval:{defaultValue:{value:"200"},description:"",name:"interval",required:!1,type:{name:"number"}},blinkCallback:{defaultValue:null,description:"",name:"blinkCallback",required:!1,type:{name:"((activeIndex: number) => void)"}},loadedCallback:{defaultValue:null,description:"",name:"loadedCallback",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},showControls:{defaultValue:{value:"true"},description:"",name:"showControls",required:!1,type:{name:"boolean"}}}}}catch{}export{$ as B};
