import{c as l}from"./argTypes-93df8e96.js";import{j as o}from"./jsx-runtime-94f6e698.js";import{f as p}from"./index-d82f0c31.js";import{s as t}from"./styled-components.browser.esm-3d9e3c21.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-12ae03d4.js";import"./appearance-f4837453.js";const r="1.333em",c=`calc(${r} + 1em)`,u=t.summary`
  position: relative;
  display: flex;
  align-self: baseline;
  padding-left: ${c};
  font-size: ${p("24px","18px")};
  cursor: pointer;

  &::-webkit-details-marker {
    display: none;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus-visible {
    --Icon-background-color: var(--turquoise85);
  }
`,g=t.span`
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: ${r};
    height: ${r};
    font-size: 1.25em;
    font-weight: 800;
    line-height: ${r};
    color: var(--white);
    content: "+";
    background-color: var(--Icon-background-color, var(--turquoise85));
    transition: background-color 0.2s;
    place-content: center;

    details[open] & {
      content: "–";
      line-height: 1.15em;
    }
  }
`,y=t.div`
  padding-left: ${c};
  margin-top: 1.5em;
`,m=({summary:n,children:d})=>o.jsxs("details",{children:[o.jsxs(u,{children:[o.jsx(g,{"aria-hidden":!0}),o.jsx("span",{children:n})]}),o.jsx(y,{children:d})]});m.displayName="Atomic.Accordion";const f=m;try{Atomic.Accordion.displayName="Atomic.Accordion",Atomic.Accordion.__docgenInfo={description:"",displayName:"Atomic.Accordion",props:{summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}}}}}catch{}const k={component:f,argTypes:{summary:{description:"Top level display text, always visible.",table:{type:{summary:"string"}}},children:l}},e={args:{summary:"Accordion Summary",children:"Expandable content"}};var i,a,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    summary: "Accordion Summary",
    children: "Expandable content"
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const w=["Primary"];export{e as Primary,w as __namedExportsOrder,k as default};
