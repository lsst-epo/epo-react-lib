import{j as r}from"./jsx-runtime-94f6e698.js";import{o as g}from"./argTypes-93df8e96.js";import{g as b}from"./helpers-9f040751.js";import{s as _}from"./styled-components.browser.esm-3d9e3c21.js";import{l as x,h as G,e as w}from"./index-d82f0c31.js";import{I as t}from"./Image-7070a7b2.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-12ae03d4.js";import"./appearance-f4837453.js";const j=_.ul`
  ${({columns:e,tablet:i})=>`${x(e)}
    @media (min-width: ${G}) and (max-width: ${w}) {
      grid-template-columns: repeat(${i}, 1fr);
      > * {grid-column: span 1;}
    }    
  `}

  ${({showFeature:e})=>e?`    > :first-child {
      grid-column: 1 / -1;
      }`:""}
`,p=({children:e,showFeature:i=!1,columns:h=3,tablet:f=1})=>r.jsx(j,{columns:h,showFeature:i,tablet:f,children:e});p.displayName="Layout.Grid";const $=p;try{Layout.Grid.displayName="Layout.Grid",Layout.Grid.__docgenInfo={description:"",displayName:"Layout.Grid",props:{columns:{defaultValue:{value:"3"},description:"",name:"columns",required:!1,type:{name:"number"}},tablet:{defaultValue:{value:"1"},description:"",name:"tablet",required:!1,type:{name:"number"}},showFeature:{defaultValue:{value:"false"},description:"",name:"showFeature",required:!1,type:{name:"boolean"}}}}}catch{}const a={altText:"A placeholder image",url:b(200,200),width:200,height:200},y=[r.jsx(t,{image:a},"first"),r.jsx(t,{image:a},"second"),r.jsx(t,{image:a},"third"),r.jsx(t,{image:a},"fourth")],q={component:$,argTypes:{children:g,showFeature:{type:"boolean",control:"boolean",description:"Highlights the first item in the grid by displaying it across the top row.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},columns:{type:"number",control:{type:"number",min:1},description:"Number of columns in grid.",table:{type:{summary:"number"},defaultValue:{summary:3}}},tablet:{type:"number",control:{type:"number",min:1},description:"Number of columns in grid to display at tablet sizing.",table:{type:{summary:"number"},defaultValue:{summary:1}}}}},o={args:{children:y}},s={args:{children:y,showFeature:!0}};var n,m,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: Children
  }
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,d,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: Children,
    showFeature: true
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const v=["Primary","WithFeature"];export{o as Primary,s as WithFeature,v as __namedExportsOrder,q as default};
