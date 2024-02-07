import{j as a}from"./jsx-runtime-94f6e698.js";import{s as o}from"./styled-components.browser.esm-3d9e3c21.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const v=o.svg`
  aspect-ratio: 1 / 1;
`,x=o.circle`
  fill: none;
  stroke: var(--black, #000);
  shape-rendering: geometricPrecision;
`,k=o.circle`
  fill: none;
  stroke: #30e0e3;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: var(--DURATION, 0.2s) stroke-dashoffset;
  shape-rendering: geometricPrecision;
`,R=o.text`
  fill: ${({$darkMode:e})=>e?"var(--white,#fff)":"inherit"};
  text-anchor: middle;
  dominant-baseline: central;
  font-variant: tabular-nums;
`,c=({min:e=0,max:l=100,value:i,labelledById:p,className:b,markerFormatter:t,darkMode:y=!1,role:f="meter"})=>{const n=Math.PI*86,g=i===void 0||isNaN(i),r=Math.min(Math.max(i||0,e),l),h=(r-e)/(l-e)*n;return a.jsxs(v,{role:f,className:b,viewBox:"0 0 100 100","aria-valuemin":e,"aria-valuemax":l,"aria-valuenow":g?void 0:r,"aria-valuetext":t&&t(r),"aria-labelledby":p,children:[a.jsx(x,{cx:"50",cy:"50",r:43,strokeWidth:14}),a.jsx(k,{cx:"50",cy:"50",r:43,strokeWidth:14/2,strokeLinecap:"round",strokeDasharray:n,strokeDashoffset:n-h}),a.jsx(R,{x:"50%",y:"50%",$darkMode:y,children:t?t(r):r})]})};c.displayName="Atomic.ProgressRadial";const I=c;try{Atomic.ProgressRadial.displayName="Atomic.ProgressRadial",Atomic.ProgressRadial.__docgenInfo={description:"",displayName:"Atomic.ProgressRadial",props:{darkMode:{defaultValue:{value:"false"},description:"",name:"darkMode",required:!1,type:{name:"boolean"}},role:{defaultValue:{value:"meter"},description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"progressbar"'},{value:'"meter"'}]}},min:{defaultValue:{value:"0"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"",name:"max",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},labelledById:{defaultValue:null,description:"",name:"labelledById",required:!1,type:{name:"string"}},describedById:{defaultValue:null,description:"",name:"describedById",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},markerFormatter:{defaultValue:null,description:"",name:"markerFormatter",required:!1,type:{name:"((value: number) => string)"}}}}}catch{}const q={component:I,decorators:[e=>a.jsx("div",{style:{width:"10rem",margin:"10rem auto"},children:a.jsx(e,{})})],argTypes:{role:{control:"select",options:["meter","progressbar"],description:"Can choose between `meter` and `progressbar` ARIA roles.",table:{type:{summary:"meter | progressbar"},defaultValue:{summary:"meter"},category:"Accessibility"}},value:{control:"number",description:"The current value of the progress bar, will be bound to `aria-valuenow`. Must be a number or will be displayed as 'indeterminate' and must be between the `min` and `max` values or else it will be bounded to them automatically.",table:{type:{summary:"number"},category:"Model"}},min:{control:"number",description:"The minimum value of the progress bar, will be bound to `aria-valuemin`.",table:{type:{summary:"number"},defaultValue:{summary:0},category:"Model"}},max:{control:"number",description:"The maximum value of the progress bar, will be bound to `aria-valuemax`.",table:{type:{summary:"number"},defaultValue:{summary:100},category:"Model"}},markerFormatter:{control:"none",description:"Formatting method for the value that will be shown in the marker.",table:{type:{summary:"(value: number) => string"},category:"Display"}},labelledById:{control:"text",description:"The ID of an element that labels the progress radial.",table:{type:{summary:"string"},category:"Accessibility"}},describedById:{control:"text",description:"The ID of an element that describes the progress radial.",table:{type:{summary:"string"},category:"Accessibility"}},darkMode:{control:"boolean",description:"Sets display of radial progress bar for dark mode themes",table:{type:{summary:"boolean"},defaultValue:{summary:!1},category:"Styling"}}}},s={args:{value:40,markerFormatter:e=>Intl.NumberFormat("en-US",{style:"percent"}).format(e/100)}};var d,m,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: 40,
    markerFormatter: value => Intl.NumberFormat("en-US", {
      style: "percent"
    }).format(value / 100)
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const j=["Primary"];export{s as Primary,j as __namedExportsOrder,q as default};
