import{j as s}from"./jsx-runtime-94f6e698.js";import{r as i}from"./index-8db94870.js";import{C as N}from"./CircularLoader-98248968.js";import{m as V,O as q}from"./index-e5f7b71c.js";import{s as y}from"./styled-components.browser.esm-3d9e3c21.js";import{i as O}from"./utils-c0d11637.js";const k=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  aspect-ratio: 1 / 1;
  grid-area: image;
  background-color: rgba(0, 0, 0, var(--image-container-opacity, 0.1));
  transition: background-color ease var(--DURATION, 0.2s);
`,w=y.div`
  width: 100%;
  height: 100%;
  opacity: var(--loading-opacity, 0);
  transition: opacity ease var(--DURATION_SLOW, 0.4s);
  position: absolute;
  top: 0;
  left: 0;
`,A=y.canvas`
  width: 100%;
`,v=i.forwardRef(({layers:e=[],renderLayers:d=[],width:a,height:t},r)=>{var l;const n=(l=r==null?void 0:r.current)==null?void 0:l.getContext("2d"),m=e.filter((p,u)=>p&&d[u]);return n&&(n.clearRect(0,0,a,t),V(n,m,a,t)),e.length>0?s.jsx(A,{ref:r,role:"img",width:a,height:t}):null});v.displayName="Widgets.ColorTool.CompositeRenderer";const F=v;try{Widgets.ColorTool.CompositeRenderer.displayName="Widgets.ColorTool.CompositeRenderer",Widgets.ColorTool.CompositeRenderer.__docgenInfo={description:"",displayName:"Widgets.ColorTool.CompositeRenderer",props:{layers:{defaultValue:{value:"[]"},description:"",name:"layers",required:!1,type:{name:"HTMLCanvasElement[]"}},renderLayers:{defaultValue:{value:"[]"},description:"",name:"renderLayers",required:!1,type:{name:"boolean[]"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}}}catch{}const h=i.forwardRef(({filters:e,width:d=600,height:a=600,selectedObjectName:t,className:r,children:n},m)=>{const l=i.useRef([]),[p,u]=i.useState(t),[c,C]=i.useState(0),f=O(e),_=e.filter(o=>!o.isDisabled).length,b=c<_;t!==p&&(u(t),C(0));const I=i.useCallback(()=>C(o=>o+1),[c,e]),R=(o,g)=>{l.current[o]=g};return s.jsxs(k,{className:r,style:{"--image-container-opacity":c&&f?1:.1},children:[!c&&f&&s.jsx(N,{isVisible:b}),s.jsxs(w,{style:{"--loading-opacity":b?0:1},children:[e&&e.map((o,g)=>{const{label:x,image:T,color:L,brightness:j}=o;return s.jsx(q,{onChangeCallback:W=>R(g,W),url:T,color:L,width:d,height:a,filters:{brightness:j,contrast:1.3},onLoadCallback:I},x)}),s.jsx(F,{layers:l.current,renderLayers:e.map(({active:o})=>o),width:d,height:a,ref:m})]}),n]})});h.displayName="Widgets.ColorTool.ImageComposite";const M=h;try{Widgets.ColorTool.ImageComposite.displayName="Widgets.ColorTool.ImageComposite",Widgets.ColorTool.ImageComposite.__docgenInfo={description:"",displayName:"Widgets.ColorTool.ImageComposite",props:{filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"ImageFilter[]"}},width:{defaultValue:{value:"600"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"600"},description:"",name:"height",required:!1,type:{name:"number"}},selectedObjectName:{defaultValue:null,description:"",name:"selectedObjectName",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{M as I};
