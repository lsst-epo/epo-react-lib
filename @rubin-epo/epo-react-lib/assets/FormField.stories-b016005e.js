import{j as e}from"./jsx-runtime-94f6e698.js";import{s as r}from"./styled-components.browser.esm-3d9e3c21.js";import{I as b}from"./Input-838e9963.js";import{P as _}from"./Password-0b790c55.js";import{f as g,b as E}from"./index-d82f0c31.js";import{E as T}from"./Error-13232543.js";import{u as k}from"./useTranslation-7385a6f5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./styles-e1e813f4.js";import"./appearance-f4837453.js";import"./IconComposer-fd2a8d4b.js";import"./defaultProps-88ef9418.js";import"./index-12ae03d4.js";import"./utils-95281a95.js";import"./i18nInstance-764935cb.js";import"./toPropertyKey-148bb9ef.js";import"./context-3d6b95f0.js";import"./utils-39e8b540.js";const D=r.label`
  display: block;
  font-weight: var(--FormField-Label-font-weight, 600);
  font-size: var(--FormField-Label-font-size, ${g("20px","16px")});
  line-height: 1.5;
`,N=r(T)`
  margin-block-start: ${g("1px","5px")};
`,V=r.p`
  font-size: 14px;
  line-height: 1.5;
`,W=r.div`
  padding-block-start: var(--FormField-InputWrapper-padding-block-start, 9px);
`,y=({htmlFor:t,label:j,required:w,children:v,error:d,description:a,...P})=>{const{t:S}=k();return e.jsxs("div",{...P,children:[e.jsxs("div",{children:[e.jsx(D,{htmlFor:t,children:S(j,{context:w?"required":""})}),a&&e.jsx(V,{children:a})]}),e.jsxs("div",{children:[e.jsx(W,{children:v}),d&&e.jsx(N,{children:d})]})]})};y.displayName="Form.FormField";const $=y;try{Form.FormField.displayName="Form.FormField",Form.FormField.__docgenInfo={description:"",displayName:"Form.FormField",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}}}}}catch{}const z=r.div`
  ${E()}
`,oe={component:$,argTypes:{children:{type:{name:"other",value:"ReactNode",required:!0},description:"Input to populate form field",table:{type:{summary:"ReactNode"}}},htmlFor:{type:{name:"string",required:!0},description:"ID of the child input to be put in the label `for` field",table:{type:{summary:"string"}}},label:{type:{name:"string",required:!0},description:"Display label to be associated with input",table:{type:{summary:"string"}}},description:{description:"Additional text describing the form field.",table:{type:{summary:"string"}}},error:{control:"text",description:"Error message to be shown beneath form field",table:{type:{summary:"string"}}},required:{description:"Determines if the input field is marked as `required` for form submission",table:{type:{summary:"boolean"}}}},decorators:[t=>e.jsx(z,{children:e.jsx(t,{})})]},n="textField",q={id:n,placeholder:"<Input /> component child"},I="password",L={id:I,placeholder:"<Password /> component child"},i={args:{children:e.jsx(b,{...q}),htmlFor:n,label:"Form text field",description:"Some instructions for this field",required:!0}},o={args:{children:e.jsx(_,{...L}),htmlFor:I,label:"Form text field",description:"Some instructions for this field",required:!0}},s={args:{children:e.jsx(b,{...q}),htmlFor:n,label:"Form text field",description:"Some instructions for this field",error:"This field is invalid!",required:!0}};var l,p,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: <Input {...textFieldProps} />,
    htmlFor: textFieldId,
    label: "Form text field",
    description: "Some instructions for this field",
    required: true
  }
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,u,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <Password {...passwordProps} />,
    htmlFor: passwordId,
    label: "Form text field",
    description: "Some instructions for this field",
    required: true
  }
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,F,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <Input {...textFieldProps} />,
    htmlFor: textFieldId,
    label: "Form text field",
    description: "Some instructions for this field",
    error: "This field is invalid!",
    required: true
  }
}`,...(x=(F=s.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};const se=["TextField","PasswordField","WithError"];export{o as PasswordField,i as TextField,s as WithError,se as __namedExportsOrder,oe as default};
