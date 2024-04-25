import{s as u,j as s}from"./styled-components.browser.esm-e0114bd2.js";import{r as n}from"./index-8db94870.js";import{g as E}from"./_commonjsHelpers-042e6b4d.js";import{t as x}from"./toNumber-d7724b6f.js";import{C as N}from"./CircularLoader-50e78b89.js";var S=x,g=1/0,V=17976931348623157e292;function q(e){if(!e)return e===0?e:0;if(e=S(e),e===g||e===-g){var a=e<0?-1:1;return a*V}return e===e?e:0}var C=q,A=C;function R(e){var a=A(e),t=a%1;return a===a?t?a-t:a:0}var j=R,B=j,F="Expected a function";function L(e,a){if(typeof a!="function")throw new TypeError(F);return e=B(e),function(){if(--e<1)return a.apply(this,arguments)}}var T=L;const $=E(T),M=u.div`
  background-color: var(--image-stack-background, transparent);
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: "stack";

  justify-items: center;
  align-items: center;

  width: 100%;
  height: auto;
`,z=u.img`
  grid-area: stack;
  height: auto;
  width: 100%;

  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  -ms-user-drag: none;
  user-drag: none;

  &[hidden] {
    display: none;
  }
`,X=u(N)`
  grid-area: stack;
`,h=({images:e,visible:a,describedById:t,mixBlendMode:y,loadCallback:d,className:v,width:k,height:b,showBackdrop:I=!0,showLoader:w=!0})=>{const i=n.useRef(null),[r,c]=n.useState(!0);n.useEffect(()=>{r||d&&d()},[r]);const m=n.useCallback($(e.length,()=>{c(!1)}),[]);return!e||e.length===0?null:(r&&i.current&&Array.from(i.current.getElementsByTagName("img")).every(({complete:o})=>!!o)&&c(!1),s.jsxs(M,{ref:i,role:"img","aria-describedby":t,className:v,style:{"--image-stack-background":I&&"var(--neutral95, #1f2121)",aspectRatio:`${k||e[0].width} / ${b||e[0].height}`},children:[w&&r&&s.jsx(X,{isVisible:!0}),e.map(({url:p,width:f,height:o},l)=>{const _=Array.isArray(a)?a[l]:a===l;return s.jsx(z,{role:"presentation",src:p,width:f,height:o,onLoad:m,onError:m,style:{mixBlendMode:y},hidden:!_},l)})]}))};h.displayName="Atomic.ImageStack";const H=h;try{Atomic.ImageStack.displayName="Atomic.ImageStack",Atomic.ImageStack.__docgenInfo={description:"",displayName:"Atomic.ImageStack",props:{images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"ImageShape[]"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"number | boolean[]"}},describedById:{defaultValue:null,description:"",name:"describedById",required:!1,type:{name:"string"}},loadCallback:{defaultValue:null,description:"",name:"loadCallback",required:!1,type:{name:"(() => void)"}},mixBlendMode:{defaultValue:null,description:"",name:"mixBlendMode",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"color"'},{value:'"color-burn"'},{value:'"color-dodge"'},{value:'"darken"'},{value:'"difference"'},{value:'"exclusion"'},{value:'"hard-light"'},{value:'"hue"'},{value:'"lighten"'},{value:'"luminosity"'},{value:'"multiply"'},{value:'"normal"'},{value:'"overlay"'},{value:'"saturation"'},{value:'"screen"'},{value:'"soft-light"'},{value:'"plus-lighter"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},showBackdrop:{defaultValue:{value:"true"},description:"",name:"showBackdrop",required:!1,type:{name:"boolean"}},showLoader:{defaultValue:{value:"true"},description:"",name:"showLoader",required:!1,type:{name:"boolean"}}}}}catch{}export{H as I,j as t};
