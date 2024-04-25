import{c as f,s as y,n as s}from"./styled-components.browser.esm-3d9e3c21.js";import{z as b,S as h}from"./index-d82f0c31.js";import{j as o}from"./jsx-runtime-94f6e698.js";import{a as v}from"./IconComposer-fd2a8d4b.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-12ae03d4.js";import"./appearance-f4837453.js";import"./defaultProps-88ef9418.js";import"./utils-95281a95.js";const r={slow:"50s",normal:"20s",fast:"2s"},g=f`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,V=y.div.attrs(({$isVisible:e})=>({style:{opacity:e?1:0}}))`
  color: var(--turquoise50, #00bebf);
  pointer-events: none;
  opacity: 0;
  transition: opacity var(--DURATION_SLOW, 0.4s) ease-in-out;

  svg {
    animation-name: ${g};
    animation-duration: ${({$speed:e})=>r[e]};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  ${({$withOverlay:e=!1})=>e?s`
          z-index: ${b.loader};

          position: fixed;
          top: 0;
          left: 0;

          width: 100%;
          height: 100%;

          background-color: rgba(0, 0, 0, 1);

          display: flex;
          justify-content: center;
          align-items: center;
        `:s``}
`,c=({withOverlay:e=!1,isVisible:d=!1,speed:p="normal",description:t,className:u})=>o.jsxs(V,{$withOverlay:e,$isVisible:d,$speed:p,className:u,role:"status","aria-live":"assertive","aria-atomic":"true","aria-describedby":t&&"loaderDescription",children:[t&&o.jsx(h,{id:"loaderDescription",children:t}),o.jsx(v,{icon:"CircularLoader",size:100})]});c.displayName="Atomic.CircularLoader";const x=c;try{Atomic.CircularLoader.displayName="Atomic.CircularLoader",Atomic.CircularLoader.__docgenInfo={description:"",displayName:"Atomic.CircularLoader",props:{withOverlay:{defaultValue:{value:"false"},description:"",name:"withOverlay",required:!1,type:{name:"boolean"}},isVisible:{defaultValue:{value:"false"},description:"",name:"isVisible",required:!1,type:{name:"boolean"}},speed:{defaultValue:{value:"normal"},description:"",name:"speed",required:!1,type:{name:"enum",value:[{value:'"slow"'},{value:'"normal"'},{value:'"fast"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const w=Object.keys(r),m={};w.forEach(e=>{m[e]=`${e} - (${r[e]})`});const N={component:x,argTypes:{withOverlay:{control:"boolean",description:"Displays the loader as a full screen with black background over top other content.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},isVisible:{control:"boolean",description:"Determines whether the loader is visible.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},speed:{options:Object.keys(r),control:{type:"select",labels:m},description:"Speed that the loader spins.",table:{type:{summary:"slow | normal | fast"},defaultValue:{summary:"normal"}}},description:{control:{type:"text"},description:"Status text shown to screenreaders when the loader becomes active. Used to indicate a loading message.",table:{type:{summary:"string"}}}}},a={args:{isVisible:!0}};var i,n,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isVisible: true
  }
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const D=["Primary"];export{a as Primary,D as __namedExportsOrder,N as default};
