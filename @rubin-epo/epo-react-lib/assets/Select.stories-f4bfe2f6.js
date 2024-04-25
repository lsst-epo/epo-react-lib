import{j as r}from"./jsx-runtime-94f6e698.js";import{r as k}from"./index-8db94870.js";import{s as c}from"./styled-components.browser.esm-3d9e3c21.js";import{a as E}from"./IconComposer-fd2a8d4b.js";import"./_commonjsHelpers-042e6b4d.js";import"./defaultProps-88ef9418.js";import"./index-12ae03d4.js";import"./utils-95281a95.js";const I=c.div`
  position: relative;
`,w=c.select`
  width: 100%;
  padding-inline-start: 20px;
  padding-inline-end: 20px;
  padding-block-start: calc(var(--Input-padding-block, 18px) - 1px);
  padding-block-end: var(--Input-padding-block, 18px);
  appearance: none;
  border: 1px solid var(--turquoise70);
  border-radius: 6px;
  font: inherit;
  font-size: 20px;
`,F=c(E)`
  position: absolute;
  inset-block-start: 50%;
  inset-inline-end: 20px;
  transform: translateY(-50%);
  pointer-events: none;
`,f=k.forwardRef(({options:o=[],emptyOption:n,...j},S)=>{const l=o.reduce((e,t)=>{const{optionGroup:a}=t;if(a){const{[a]:_=[]}=e;return{...e,[a]:[..._,t]}}return e},{});return r.jsxs(I,{children:[r.jsxs(w,{ref:S,...j,children:[n&&r.jsx("option",{value:n.value,children:n.label}),Object.keys(l).length>0?Object.keys(l).map(e=>r.jsx("optgroup",{label:e,children:l[e].map(({value:t,label:a})=>r.jsx("option",{value:t,children:a},t))},e)):o.map(({value:e,label:t})=>r.jsx("option",{value:e,children:t},e))]}),r.jsx(F,{icon:"caretDown"})]})});f.displayName="Form.Select";const W=f;try{Form.Select.displayName="Form.Select",Form.Select.__docgenInfo={description:"",displayName:"Form.Select",props:{options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"Option[]"}},emptyOption:{defaultValue:null,description:"",name:"emptyOption",required:!1,type:{name:"Option"}}}}}catch{}const u=[{value:"mercury",label:"Mercury"},{value:"venus",label:"Venus"},{value:"earth",label:"Earth"},{value:"mars",label:"Mars"},{value:"jupiter",label:"Jupiter"},{value:"saturn",label:"Saturn"},{value:"uranus",label:"Uranus"},{value:"neptune",label:"Neptune"}],q={value:"",label:""},C={component:W,argTypes:{options:{control:"object",description:"Options to populate select with",type:{name:"other",value:"Option[]",required:!0},table:{type:{summary:"Option[]"}}},emptyOption:{control:"object",description:"Empty option to populate the first dropdown spot",table:{type:{summary:"Option"}}}}},s={args:{options:u}},p={args:{options:u.map((o,n)=>({...o,optionGroup:n<4?"Inner planets":"Outer planets"}))}},i={args:{options:u,emptyOption:q}};var d,m,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    options
  }
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var y,g,x;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    options: options.map((o, i) => ({
      ...o,
      optionGroup: i < 4 ? "Inner planets" : "Outer planets"
    }))
  }
}`,...(x=(g=p.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var O,h,v;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    options,
    emptyOption
  }
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const D=["Primary","WithOptionGroups","WithEmptyOption"];export{s as Primary,i as WithEmptyOption,p as WithOptionGroups,D as __namedExportsOrder,C as default};
