import{j as a}from"./jsx-runtime-94f6e698.js";import{s as t,n as d}from"./styled-components.browser.esm-3d9e3c21.js";import{c as $,f as k}from"./index-d82f0c31.js";import{c as S}from"./appearance-f4837453.js";import{C as R}from"./Container-c6109f8b.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-12ae03d4.js";const j=t.div`
  max-width: 100vw;
  width: 100%;
  overflow: auto;
`,V=t.table`
  ${$}
  width: 100%;
  border-collapse: collapse;

  ${({$styleAs:e,$verticalAlignment:l="top"})=>e==="secondary"?d`
          --ComplexTable-cell-bg: var(--neutral10);
          --ComplexTable-border: 5px solid var(--white);
          --ComplexTable-vertical-align: ${l};
          border-style: hidden;
        `:d`
          --ComplexTable-border: 1px solid var(--black);
          --ComplexTable-cell-bg: none;
          --ComplexTable-vertical-align: ${l};
        `}
`,I=t.caption`
  padding-block-end: 1em;
  font-size: 1.136em;
  font-weight: bold;
  text-align: start;

  ${({$isChild:e})=>e?S:null}
`,H=t.tr`
  &:nth-child(odd) {
    background-color: var(--neutral10);
  }
`,M=t.td`
  ${({$background:e})=>d`
      background-color: ${e||"var(--ComplexTable-cell-bg)"};
      color: ${e?"var(--black)":"inherit"};
    `};
  ${({$hasFlexibleCellWidth:e})=>e&&"white-space: nowrap;"}

  min-width: ${k("180px","110px")};
  border: var(--ComplexTable-border);
  padding: 20px;
  text-align: inherit;
  vertical-align: var(--ComplexTable-vertical-align);
`,p=({complexTable:e,plainText:l,verticalAlignment:w,styleAs:A="primary",isChild:m=!1})=>{const b=()=>a.jsx(j,{children:a.jsxs(V,{as:"table",$styleAs:A,$verticalAlignment:w,children:[l&&a.jsx(I,{$isChild:m,children:l}),a.jsx("tbody",{children:e.map((_,s)=>a.jsx(H,{children:_.tableRow.map(r=>a.jsx(M,{as:s===0?"th":"td",$row:s+1,$background:r.cellBackground,$hasFlexibleCellWidth:r.hasFlexibleCellWidth,colSpan:r.cellWidth||1,dangerouslySetInnerHTML:{__html:r.cellContent}},r.id))},s))})]})});return m?b():a.jsx(R,{width:"narrow",children:b()})},O=p;try{p.displayName="ComplexTable",p.__docgenInfo={description:"",displayName:"ComplexTable",props:{complexTable:{defaultValue:null,description:"",name:"complexTable",required:!0,type:{name:"ComplexTableRow[]"}},plainText:{defaultValue:null,description:"",name:"plainText",required:!1,type:{name:"string"}},verticalAlignment:{defaultValue:null,description:"",name:"verticalAlignment",required:!1,type:{name:"string"}},styleAs:{defaultValue:{value:"primary"},description:"",name:"styleAs",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},isChild:{defaultValue:{value:"false"},description:"",name:"isChild",required:!1,type:{name:"boolean"}}}}}catch{}const c=[{tableRow:[{id:"0VvOOc",cellContent:"Header"},{id:"3MeJAm",cellContent:"<a href='https://rubinobservatory.org/' target='_blank'>Header</a>"},{id:"fD8HUc",cellContent:"Header"},{id:"C5l39F",cellContent:"<a href='https://rubinobservatory.org/' target='_blank'>Header</a>"}]},{tableRow:[{id:"KsKZtU",cellContent:"Rubin Observatory"},{id:"OVp7Dp",cellContent:"<a href='https://rubinobservatory.org/' target='_blank'>Rubin Observatory</a>"},{id:"QRm6AM",cellContent:"<ul><li>I am an unordered list</li><li>I am an unordered list</li><li>I am an unordered list</li></ul>"},{id:"0S8OAG",cellContent:"<ol><li>I am an ordered list</li><li>I am an ordered list</li><li>I am an ordered list</li></ol>"}]}],U={component:O,argTypes:{complexTable:{description:"Array of `ComplexTableRow` objects to populate the table with."},plainText:{type:"string",description:"Table caption shown above the table. Does not display if `isChild` is set.",table:{type:{summary:"string"}}},isChild:{type:"boolean",description:"If the table is a child of another component, this prop will add a narrow width container around the table.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},styleAs:{type:"string",control:{type:"select"},options:["primary","secondary"],description:"Determines if table is visually styled using primary or secondary theme.",table:{type:{summary:"primary | secondary"},defaultValue:{summary:"primary"}}},verticalAlignment:{type:"string",description:"Sets the `vertical-align` CSS property for all table cells.",table:{type:{summary:"string"},defaultValue:{summary:"top"}}}}},o={args:{complexTable:c,styleAs:"primary",plainText:"Complex Table",isChild:!1}},n={args:{complexTable:c,styleAs:"secondary",plainText:"Complex Table",isChild:!1}},i={args:{complexTable:c,plainText:"Complex Table",isChild:!0}};var u,y,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    complexTable: MockTableContent,
    styleAs: "primary",
    plainText: "Complex Table",
    isChild: false
  }
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,C,T;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    complexTable: MockTableContent,
    styleAs: "secondary",
    plainText: "Complex Table",
    isChild: false
  }
}`,...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var g,f,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    complexTable: MockTableContent,
    plainText: "Complex Table",
    isChild: true
  }
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const z=["Primary","Secondary","Child"];export{i as Child,o as Primary,n as Secondary,z as __namedExportsOrder,U as default};
