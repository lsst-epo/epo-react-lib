import{c as s}from"./argTypes-93df8e96.js";import{C as i}from"./mocks-bfab3df5.js";import{s as p}from"./styled-components.browser.esm-3d9e3c21.js";import"./jsx-runtime-94f6e698.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Figure-87bd20e7.js";import"./index-d82f0c31.js";import"./index-12ae03d4.js";import"./appearance-f4837453.js";const t=p.div`
  ${({$width:a=300,$gap:n=25})=>`
    columns: ${a}px auto;
    column-gap ${n}px;
  `}
`;t.displayName="Layout.Columns";const C={component:t,argTypes:{children:{...s,control:"object"},$width:{description:"Width of column in px",control:{type:"number",min:0},table:{defaultValue:{summary:300},type:{summary:"number"}}},$gap:{description:"Gap between columns in px",control:{type:"number",min:0},table:{defaultValue:{summary:25},type:{summary:"number"}}}}},r={args:{children:i}};var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: MockChildren
  }
}`,...(m=(e=r.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};const $=["Primary"];export{r as Primary,$ as __namedExportsOrder,C as default};
