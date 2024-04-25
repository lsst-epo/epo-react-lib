import{j as t}from"./jsx-runtime-94f6e698.js";import{s as u}from"./styled-components.browser.esm-3d9e3c21.js";import{C as X}from"./mocks-bfab3df5.js";import{r as N,n as S,S as h,b as J}from"./index-d82f0c31.js";import{r as n}from"./index-8db94870.js";import{f as Y,p as j,c as G}from"./appearance-f4837453.js";import{u as y}from"./useTranslation-7385a6f5.js";import{a as k}from"./IconComposer-fd2a8d4b.js";import{_ as Q}from"./iframe-a59e70cc.js";import"./Figure-87bd20e7.js";import"./index-12ae03d4.js";import"./_commonjsHelpers-042e6b4d.js";import"./i18nInstance-764935cb.js";import"./toPropertyKey-148bb9ef.js";import"./context-3d6b95f0.js";import"./utils-39e8b540.js";import"./defaultProps-88ef9418.js";import"./utils-95281a95.js";import"../sb-preview/runtime.js";const w=n.createContext(null),Z=w;function p(){const e=n.useContext(w);if(!e)throw new Error("Carousel components cannot be rendered outside the Carousel.Provider component.");return e}const ee=u.div`
  ${Y()}

  &.flickity-enabled {
    position: relative;
  }

  .flickity-viewport {
    overflow: hidden;
    position: relative;
    height: 100%;
  }

  .flickity-slider {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  /* draggable */
  &.flickity-enabled.is-draggable {
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    user-select: none;

    .flickity-viewport {
      cursor: move;
      cursor: grab;

      &.is-pointer-down {
        cursor: grabbing;
      }
    }
  }
`,x=({children:e})=>{const{carouselProps:r}=p();return t.jsx(ee,{...r,children:e})};x.displayName="Carousel.Carousel";const re=x;try{x.Carousel.displayName="Carousel.Carousel",x.Carousel.__docgenInfo={description:"",displayName:"Carousel.Carousel",props:{}}}catch{}const $=u.button`
  ${j()}
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  background-color: var(--neutral60);
  border-radius: 50%;
  z-index: 1;
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    background-color: var(--neutral40);
  }

  &.focus-visible {
    outline-color: var(--Carousel-Button-outline-color);
  }

  &[aria-disabled="true"] {
    pointer-events: none;
    color: var(--neutral40);
    background-color: var(--neutral80);
  }

  ${N("display: none;",S)}
`;$.displayName="Carousel.Button";const B=$,te=u(B)`
  left: var(--NextButton-left, calc(100% + 10px));

  svg {
    transform: rotate(180deg) translateX(-5%);
  }
`,oe=h;function L(){const{t:e}=y(),{nextButtonProps:r}=p();return t.jsxs(te,{...r,"data-testid":"carousel-next",children:[t.jsx(oe,{children:e("pagination.next")}),t.jsx(k,{icon:"chevron"})]})}L.displayName="Carousel.NextButton";const ae=u.ul`
  display: none;
  justify-content: center;
  list-style: none;
  gap: 20px;

  ${N("display: flex;",S)}
`,ne=u.button`
  ${j()}
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--turquoise85);
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: background-color 0.2s, outline-color 0.2s;

  // override global outline style
  .js-focus-visible &:focus:not(.focus-visible) {
    outline-width: 2px;
  }

  &:hover {
    background-color: var(--turquoise50);
  }

  &:focus-visible {
    background-color: var(--turquoise50);
    outline: 2px solid var(--turquoise50);
  }

  &[aria-current="step"] {
    background-color: var(--turquoise50);
    outline-color: var(--turquoise50);

    &:hover,
    &:focus-visible {
      background-color: var(--turquoise20);
      outline: 2px solid var(--turquoise20);
    }
  }
`,se=h;function I(){const{t:e}=y(),{active:r,setActive:o,length:a,pageDotProps:l}=p(),c=[...Array(a).keys()];return t.jsx(ae,{children:c.map(s=>t.jsx("li",{children:t.jsx(ne,{...l,"aria-current":r===s?"step":null,onClick:()=>o(s),children:t.jsx(se,{children:e("pagination.current-slide",{current:s+1})})})},s))})}I.displayName="Carousel.Pager";const ie=u(B)`
  right: var(--PrevButton-right, calc(100% + 10px));

  svg {
    transform: translateX(-5%);
  }
`,le=h;function A(){const{t:e}=y(),{prevButtonProps:r}=p();return t.jsxs(ie,{...r,children:[t.jsx(le,{children:e("pagination.previous")}),t.jsx(k,{icon:"chevron"})]})}A.displayName="Carousel.PrevButton";var ue=function(){var e=1,r=new WeakMap,o=function(a,l){return typeof a=="number"||typeof a=="string"?l?"idx-".concat(l):"val-".concat(a):r.has(a)?"uid"+r.get(a):(r.set(a,e++),o(a))};return o},D=function(e){return e===void 0&&(e=""),{value:1,prefix:e,uid:ue()}},ce=D(),de=n.createContext(D()),pe=function(e){return e.value++},fe=function(e){return e?e.prefix:""},ve=function(e){var r=e||ce,o=fe(r),a=pe(r),l=o+a,c=function(s){return l+r.uid(s)};return{uid:l,gen:c}},ge=function(){var e=n.useContext(de),r=n.useState(function(){return ve(e)})[0];return r},me=function(){var e=ge().uid;return e};const xe={selectedAttraction:.075,friction:.48,pageDots:!1,prevNextButtons:!1,lazyLoad:!0,adaptiveHeight:!1,initialIndex:0,ariaLabel:"Slideshow",wrapAround:!0,percentPosition:!1};function ye(e){const r=n.useRef(),[o,a]=n.useState(),l=n.useCallback(i=>{i!==null&&a(i)},[]),c=me(),s=Object.assign({},xe,e),[f,v]=n.useState(s.initialIndex),[g,R]=n.useState(0);n.useEffect(()=>{async function i(){if(o){const M=(await Q(()=>import("./index-294c0d85.js").then(C=>C.i),["assets/index-294c0d85.js","assets/_commonjsHelpers-042e6b4d.js"])).default;r.current=new M(o,s);const K=r.current&&r.current.cells?r.current.cells.length:0;R(K),r.current.on("change",C=>v(C))}}return i(),()=>{r.current&&r.current.destroy()}},[o,JSON.stringify(s)]),n.useEffect(()=>{r.current&&r.current.select(f)},[f]);const V=n.useCallback(i=>v(i),[]),z={ref:l,id:c,"aria-roledescription":"carousel","aria-label":s.ariaLabel},U={role:"group","aria-roledescription":"slide"},H={"aria-controls":c,"aria-disabled":!s.wrapAround&&f===0,get onClick(){if(!this["aria-disabled"])return()=>v(i=>i===0?g-1:i-1)}},F={"aria-controls":c,"aria-disabled":!s.wrapAround&&f===g-1,get onClick(){if(!this["aria-disabled"])return()=>v(i=>i===g-1?0:i+1)}};return{active:f,setActive:V,length:g,carouselProps:z,slideProps:U,prevButtonProps:H,nextButtonProps:F,pageDotProps:{"aria-controls":c}}}const q=({options:e,children:r})=>{const o=ye(e);return t.jsx(Z.Provider,{value:o,children:r})};q.displayName="Carousel.Provider";const Ce=q;try{Carousel.Provider.displayName="Carousel.Provider",Carousel.Provider.__docgenInfo={description:"",displayName:"Carousel.Provider",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"CarouselOptions"}}}}}catch{}const he=u.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  &[aria-hidden="true"] {
    visibility: hidden;
  }
`,E=({children:e})=>{const{slideProps:r}=p();return t.jsx(he,{...r,children:e})};E.displayName="Carousel.Slide";const _e=E;try{Carousel.Slide.displayName="Carousel.Slide",Carousel.Slide.__docgenInfo={description:"",displayName:"Carousel.Slide",props:{}}}catch{}const be=u.div`
  ${G}
`;function W(){const{t:e}=y(),{active:r,length:o}=p();return t.jsx(be,{"aria-live":"polite",role:"region",children:e("pagination.showing-current-slide",{current:r+1,length:o})})}W.displayName="Carousel.Status";const Pe=u.div`
  position: relative;
`,O=({children:e,className:r})=>t.jsx(Pe,{className:r,children:e});O.displayName="Carousel.Wrapper";const Ne=O;try{Carousel.Wrapper.displayName="Carousel.Wrapper",Carousel.Wrapper.__docgenInfo={description:"",displayName:"Carousel.Wrapper",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const d={Carousel:re,NextButton:L,Pager:I,PrevButton:A,Provider:Ce,Slide:_e,Status:W,Wrapper:Ne},T=({children:e,options:r={},className:o})=>e?t.jsx(d.Provider,{options:r,children:t.jsxs(d.Wrapper,{className:o,children:[t.jsx(d.Status,{}),t.jsx(d.PrevButton,{}),t.jsx(d.Carousel,{children:n.Children.map(e,(a,l)=>n.isValidElement(a)?t.jsx(d.Slide,{children:n.cloneElement(a)},l):null)}),t.jsx(d.NextButton,{}),t.jsx(d.Pager,{})]})}):null;T.displayName="Layout.Carousel";const Se=T;try{Layout.Carousel.displayName="Layout.Carousel",Layout.Carousel.__docgenInfo={description:"",displayName:"Layout.Carousel",props:{options:{defaultValue:{value:"{}"},description:"",name:"options",required:!1,type:{name:"CarouselOptions"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const je=u.div`
  ${J()}
`,Ke={component:Se,argTypes:{className:{description:"Additional CSS classes.",control:"text",table:{type:{summary:"string"}}},children:{description:"React components to populate carousel",table:{type:{summary:"ReactNode"}}},options:{description:"Carousel configuration options.",table:{type:{summary:"CarouselOptions"}}}},decorators:[e=>t.jsx(je,{children:t.jsx(e,{})})]},m={args:{children:X,options:{selectedAttraction:.075,friction:.48,pageDots:!1,prevNextButtons:!1,lazyLoad:!0,adaptiveHeight:!1,initialIndex:0,ariaLabel:"Slideshow",wrapAround:!0,percentPosition:!1}}};var _,b,P;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: MockChildren,
    options: {
      selectedAttraction: 0.075,
      friction: 0.48,
      pageDots: false,
      prevNextButtons: false,
      lazyLoad: true,
      adaptiveHeight: false,
      initialIndex: 0,
      ariaLabel: "Slideshow",
      wrapAround: true,
      percentPosition: false
    }
  }
}`,...(P=(b=m.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};const Xe=["Primary"];export{m as Primary,Xe as __namedExportsOrder,Ke as default};
