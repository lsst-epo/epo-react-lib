import{j as a}from"./jsx-runtime-94f6e698.js";import{S as n}from"./index-d82f0c31.js";import{n as t,s as c}from"./styled-components.browser.esm-3d9e3c21.js";const i=t`
  width: 11px;
  height: 11px;
`,m=t`
  width: var(--PADDING_SMALL, 20px);
  height: var(--PADDING_SMALL, 20px);
`,d=t`
  width: calc(var(--PADDING_SMALL, 20px) * 1.5);
  height: calc(var(--PADDING_SMALL, 20px) * 1.5);
`,p={small:i,normal:m,large:d},u=c.span.attrs(({color:e})=>({style:{backgroundColor:e}}))`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--black, #000);
  transition: background-color var(--DURATION, 0.2s) ease-in-out;

  ${({size:e})=>e&&p[e]}
`,o=({className:e,content:l,color:r,size:s="normal"})=>a.jsxs("span",{className:e,children:[a.jsx(u,{size:s,color:r,"data-testid":"color-swatch"}),a.jsx(n,{children:l||r})]});o.displayName="Atomic.ColorSwatch";const S=o;try{Atomic.ColorSwatch.displayName="Atomic.ColorSwatch",Atomic.ColorSwatch.__docgenInfo={description:"",displayName:"Atomic.ColorSwatch",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"small"'},{value:'"large"'}]}}}}}catch{}export{S as C};
