import{j as n}from"./jsx-runtime-94f6e698.js";import{r as w}from"./index-8db94870.js";import{g as _}from"./_commonjsHelpers-042e6b4d.js";import{t as x}from"./toNumber-d7724b6f.js";import{s as i}from"./styled-components.browser.esm-3d9e3c21.js";import{C as S}from"./CircularLoader-98248968.js";var V=x,u=1/0,N=17976931348623157e292;function q(e){if(!e)return e===0?e:0;if(e=V(e),e===u||e===-u){var a=e<0?-1:1;return a*N}return e===e?e:0}var E=q,A=E;function j(e){var a=A(e),r=a%1;return a===a?r?a-r:a:0}var C=j,B=C,F="Expected a function";function L(e,a){if(typeof a!="function")throw new TypeError(F);return e=B(e),function(){if(--e<1)return a.apply(this,arguments)}}var R=L;const $=_(R),T=i.div`
  background-color: var(--image-stack-background, transparent);
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: "stack";

  justify-items: center;
  align-items: center;

  width: 100%;
  height: auto;
`,M=i.img`
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
`,z=i(S)`
  grid-area: stack;
`,s=({images:e,visible:a,describedById:r,mixBlendMode:d,loadCallback:o,className:c,width:m,height:p,showBackdrop:g=!0,showLoader:f=!0})=>{const[h,v]=w.useState(!0),l=$(e.length,()=>{v(!1),o&&o()});return!e||e.length===0?null:n.jsxs(T,{role:"img","aria-describedby":r,className:c,style:{"--image-stack-background":g&&"var(--neutral95, #1f2121)",aspectRatio:`${m||e[0].width} / ${p||e[0].height}`},children:[f&&h&&n.jsx(z,{isVisible:!0}),e.map(({url:y,width:k,height:b},t)=>{const I=Array.isArray(a)?a[t]:a===t;return n.jsx(M,{role:"presentation",src:y,width:k,height:b,onLoad:l,onError:l,style:{mixBlendMode:d},hidden:!I},t)})]})};s.displayName="Atomic.ImageStack";const H=s;try{Atomic.ImageStack.displayName="Atomic.ImageStack",Atomic.ImageStack.__docgenInfo={description:"",displayName:"Atomic.ImageStack",props:{images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"ImageShape[]"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"number | boolean[]"}},describedById:{defaultValue:null,description:"",name:"describedById",required:!1,type:{name:"string"}},loadCallback:{defaultValue:null,description:"",name:"loadCallback",required:!1,type:{name:"(() => void)"}},mixBlendMode:{defaultValue:null,description:"",name:"mixBlendMode",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"color"'},{value:'"color-burn"'},{value:'"color-dodge"'},{value:'"darken"'},{value:'"difference"'},{value:'"exclusion"'},{value:'"hard-light"'},{value:'"hue"'},{value:'"lighten"'},{value:'"luminosity"'},{value:'"multiply"'},{value:'"normal"'},{value:'"overlay"'},{value:'"saturation"'},{value:'"screen"'},{value:'"soft-light"'},{value:'"plus-lighter"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},showBackdrop:{defaultValue:{value:"true"},description:"",name:"showBackdrop",required:!1,type:{name:"boolean"}},showLoader:{defaultValue:{value:"true"},description:"",name:"showLoader",required:!1,type:{name:"boolean"}}}}}catch{}export{H as I,C as t};
