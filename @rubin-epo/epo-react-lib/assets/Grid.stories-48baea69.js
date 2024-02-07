import{j as r}from"./jsx-runtime-94f6e698.js";import{o as f}from"./argTypes-00d6a2ce.js";import{g as b}from"./helpers-9f040751.js";import{s as _}from"./styled-components.browser.esm-3d9e3c21.js";import{l as x,h as G,e as w}from"./index-d82f0c31.js";import{I as a}from"./Image-7070a7b2.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-12ae03d4.js";import"./appearance-f4837453.js";const j=_.ul`
  ${({columns:e,tablet:i})=>`${x(e)}
    @media (min-width: ${G}) and (max-width: ${w}) {
      grid-template-columns: repeat(${i}, 1fr);
      > * {grid-column: span 1;}
    }    
  `}

  ${({showFeature:e})=>e?`    > :first-child {
      grid-column: 1 / -1;
      }`:""}
`,c=({children:e,showFeature:i=!1,columns:h=3,tablet:g=1})=>r.jsx(j,{columns:h,showFeature:i,tablet:g,children:e});c.displayName="Layout.Grid";const $=c;try{Layout.Grid.displayName="Layout.Grid",Layout.Grid.__docgenInfo={description:"",displayName:"Layout.Grid",props:{columns:{defaultValue:{value:"3"},description:"",name:"columns",required:!1,type:{name:"number"}},tablet:{defaultValue:{value:"1"},description:"",name:"tablet",required:!1,type:{name:"number"}},showFeature:{defaultValue:{value:"false"},description:"",name:"showFeature",required:!1,type:{name:"boolean"}}}}}catch{}const t={altText:"A placeholder image",url:b(200,200),width:200,height:200},y=[r.jsx(a,{image:t}),r.jsx(a,{image:t}),r.jsx(a,{image:t}),r.jsx(a,{image:t})],q={component:$,argTypes:{children:f,showFeature:{type:"boolean",control:"boolean",description:"Highlights the first item in the grid by displaying it across the top row.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},columns:{type:"number",control:{type:"number",min:1},description:"Number of columns in grid.",table:{type:{summary:"number"},defaultValue:{summary:3}}},tablet:{type:"number",control:{type:"number",min:1},description:"Number of columns in grid to display at tablet sizing.",table:{type:{summary:"number"},defaultValue:{summary:1}}}}},o={args:{children:y}},s={args:{children:y,showFeature:!0}};var n,m,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: Children
  }
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,d,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: Children,
    showFeature: true
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const v=["Primary","WithFeature"];export{o as Primary,s as WithFeature,v as __namedExportsOrder,q as default};
