import{j as e}from"./jsx-runtime-94f6e698.js";import{d as m}from"./defaultProps-88ef9418.js";import{p as g}from"./appearance-f4837453.js";import{s as f}from"./styled-components.browser.esm-3d9e3c21.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const p=({className:t,size:a=31,fill:o,isOpen:n=!1})=>{const u=Object.assign(m,{viewBox:"0 0 31 31",width:a,height:a,fill:o,className:t});return e.jsxs("svg",{...u,children:[e.jsx("title",{children:n?"Collapse":"Expand"}),e.jsx("rect",{"data-name":"Rectangle 3703",width:31,height:31,rx:2,fill:o}),e.jsx("path",{"data-name":"Line 8913",fill:"none",stroke:"#fff",strokeWidth:2,d:"M8.5 15.5h14"}),e.jsx("path",{"data-name":"Line 8914",fill:"none",stroke:"#fff",strokeWidth:2,d:"M15.5 8.5v14",style:{visibility:n?"hidden":"visible"}})]})};p.displayName="SVG.ExpandCollapse";try{SVG.ExpandCollapse.displayName="SVG.ExpandCollapse",SVG.ExpandCollapse.__docgenInfo={description:"",displayName:"SVG.ExpandCollapse",props:{isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"31"},description:"",name:"size",required:!1,type:{name:"string | number"}},stroke:{defaultValue:null,description:"",name:"stroke",required:!1,type:{name:"string"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"string"}},svgProps:{defaultValue:null,description:"",name:"svgProps",required:!1,type:{name:"object"}}}}}catch{}const y=f.button`
  ${g()}
  display: flex;
  color: var(--turquoise85);
  transition: color 0.2s;

  &:hover {
    color: var(--turquoise85);
  }

  &[aria-hidden="true"] {
    display: none;
  }
`,c=({isOpen:t,onToggle:a,controlsId:o,isHidden:n,...l})=>e.jsx(y,{onClick:a,"aria-expanded":t,"aria-controls":o,"aria-hidden":n,...l,children:e.jsx(p,{isOpen:t})});c.displayName="Atomic.ExpandToggle";const h=c;try{Atomic.ExpandToggle.displayName="Atomic.ExpandToggle",Atomic.ExpandToggle.__docgenInfo={description:"",displayName:"Atomic.ExpandToggle",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},controlsId:{defaultValue:null,description:"",name:"controlsId",required:!0,type:{name:"string"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!0,type:{name:"boolean"}}}}}catch{}const q={component:h,argTypes:{isOpen:{control:"boolean",defaultValue:!1,description:"State reflecting whether or not the toggle is intended to be open or closed. Sets `aria-expanded`",table:{category:"Display",type:{summary:"boolean"}}},isHidden:{control:"boolean",defaultValue:!1,description:"State reflecting whether or not the toggle is visible. Sets `aria-hidden`",table:{category:"Display",type:{summary:"boolean"}}},onToggle:{action:"Toggled",description:"Callback made by the `click` event.",table:{type:{summary:"(event: MouseEvent) => void"}}},controlsId:{control:"text",description:"Identifies the element (or elements) whose contents or presence are controlled by the current element. Sets `aria-controls`",table:{type:{summary:"string"}}}}},r={};var s,i,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const T=["Primary"];export{r as Primary,T as __namedExportsOrder,q as default};
