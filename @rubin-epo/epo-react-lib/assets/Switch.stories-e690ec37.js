import{j as t}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{s as r}from"./styled-components.browser.esm-3d9e3c21.js";import{f as a,d as i,e as n,r as u,g as v}from"./index-d82f0c31.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-12ae03d4.js";import"./appearance-f4837453.js";const f=r.button`
  --switch-width: ${a("90px","64px",n,i)};
  --switch-height: ${a("49px","34px",n,i)};
  --toggle-margin: 6px;
  --toggle-size: calc(var(--switch-height) - var(--toggle-margin) * 2);
  --Inner-before-color: var(--white);
  --Inner-after-color: var(--turquoise90);

  position: relative;
  width: var(--switch-width);
  height: var(--switch-height);
  display: block;
  background-color: var(--Switch-background-color, #dce0e3);
  border: 0 solid var(--Switch-background-color, #dce0e3);
  border-radius: var(--switch-height);
  overflow: hidden;

  &[aria-checked="true"] {
    --Inner-before-color: var(--turquoise90);
    --Inner-after-color: var(--white);
    --Toggle-translateX: calc(
      var(--switch-width) - var(--toggle-size) - var(--toggle-margin) * 2
    );
  }

  &[aria-disabled="true"] {
    pointer-events: none;
    cursor: pointer;
  }
`,w=r.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &:before,
  &:after {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    padding-left: 5px;
    padding-right: 5px;
    line-height: var(--switch-height);
    transition: color 0.3s ease-in-out;
    font-size: 0.727em;

    ${u("font-size: 1em;",v)}
  }

  &:before {
    content: var(--Switch-Inner-before-content);
    left: 0;
    color: var(--Inner-before-color);
  }

  &:after {
    content: var(--Switch-Inner-after-content);
    right: 0;
    color: var(--Inner-after-color);
  }
`,b=r.span`
  position: absolute;
  top: var(--toggle-margin);
  left: var(--toggle-margin);
  width: var(--toggle-size);
  height: var(--toggle-size);
  background: var(--Switch-Toggle-color, #6a6e6e);
  border: 0 solid var(--turquoise85);
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
  transform: translateX(var(--Toggle-translateX, 0));
  pointer-events: none;
`,h=m.forwardRef(({onClick:o,checked:d=!1,...g},p)=>t.jsxs(f,{ref:p,type:"button",role:"switch","aria-checked":d,onClick:o,...g,children:[t.jsx(b,{}),t.jsx(w,{})]}));h.displayName="Form.Switch";const S=h;try{Form.Switch.displayName="Form.Switch",Form.Switch.__docgenInfo={description:"",displayName:"Form.Switch",props:{}}}catch{}const z={component:S,argTypes:{checked:{control:"boolean",defaultValue:"false",description:"Sets the checked state of the switch, including `aria-checked`.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{action:"Clicked",description:"Callback to bind to the click event. Since this button is a native `button` element, all other native browser events are available as well.",table:{type:{summary:"(event: MouseEvent) => void"}}}}},e={};var s,c,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const A=["Primary"];export{e as Primary,A as __namedExportsOrder,z as default};
