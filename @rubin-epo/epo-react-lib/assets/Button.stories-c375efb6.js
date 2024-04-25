import{I as f}from"./IconComposer-fd2a8d4b.js";import{c as I}from"./argTypes-93df8e96.js";import{B as A}from"./Button-3e2b426d.js";import"./jsx-runtime-94f6e698.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./defaultProps-88ef9418.js";import"./index-12ae03d4.js";import"./utils-95281a95.js";import"./styled-components.browser.esm-3d9e3c21.js";import"./index-d82f0c31.js";import"./appearance-f4837453.js";const F={component:A,argTypes:{children:I,styleAs:{control:{type:"select"},options:["primary","secondary","tertiary","educator"],description:"Visual style",table:{category:"Styling",defaultValue:{summary:"primary"},type:{summary:"primary | secondary | tertiary | educator"}}},isInactive:{control:"boolean",description:"This is a disabled style without disabling the button. Good for a11y - button is visible even if form isn't complete.",table:{category:"Function",type:{summary:"boolean"}}},onClick:{action:"Clicked",description:"Callback to bind to the click event. Since this button is a native `button` element, all other native browser events are available as well.",table:{category:"Function",type:{summary:"(event: MouseEvent) => void"}}},isBlock:{control:"boolean",description:"Determines if button is a full width block or not.",table:{category:"Styling",type:{summary:"boolean"}}},icon:{control:{type:"select"},options:Object.keys(f),description:"SVG icons.",table:{category:"Icon",type:{summary:"string"}}},iconSize:{control:"number",description:"Icon size in pixels.",table:{category:"Icon",type:{summary:"number"}}}}},r={args:{children:"Rubin Observatory"}},e={args:{...r.args,styleAs:"secondary"}},t={args:{...r.args,styleAs:"tertiary"}},o={args:{...r.args,styleAs:"educator"}},a={args:{icon:"Account",children:"With Icon"}};var s,n,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: "Rubin Observatory"
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    styleAs: "secondary"
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,y,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    styleAs: "tertiary"
  }
}`,...(d=(y=t.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};var u,g,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    styleAs: "educator"
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,v,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    icon: "Account",
    children: "With Icon"
  }
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const G=["Primary","Secondary","Tertiary","Educator","WithIcon"];export{o as Educator,r as Primary,e as Secondary,t as Tertiary,a as WithIcon,G as __namedExportsOrder,F as default};
