import{s as p,j as i}from"./styled-components.browser.esm-e0114bd2.js";import{s as l,g as d,c as g}from"./utils-a2998f7e.js";import{r as u}from"./index-8db94870.js";import{F as s}from"./FilterControls-183a79fd.js";import"./ColorSwatch-15c201f0.js";import"./index-223833fa.js";import"./index-12ae03d4.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseFlatten-b3bd6ce9.js";import"./_stringToPath-4591b2bb.js";import"./isSymbol-f1e92ba4.js";import"./_baseToString-b5a9b60d.js";import"./SelectListbox-e052c5db.js";import"./IconComposer-0a5b6514.js";import"./HorizontalSlider-a5320790.js";import"./Button-accaf53d.js";import"./useTranslation-fdd24caa.js";import"./i18nInstance-764935cb.js";import"./toPropertyKey-148bb9ef.js";import"./context-3d6b95f0.js";import"./utils-7aca7d2f.js";const V={argTypes:{filter:{type:{name:"other",value:"ImageFilter",required:!0},control:"object",description:"Color filter configuration",table:{type:{summary:"ImageFilter"},category:"Model"}},isDisabled:{type:{name:"boolean",required:!0},control:"boolean",description:"Disables controls for the widget.",table:{type:{summary:"boolean"},category:"Function"}},onChangeFilterCallback:{control:!1,type:{name:"function",required:!0},description:"Callback containing the selected dataset",table:{type:{summary:"(filter: ImageFilter) => void"},category:"Function"},action:"Updated filter"},buttonLabelledById:{control:"text",type:{name:"string",required:!0},description:"Label ID for the filter toggle button",table:{type:{summary:"string"},category:"Accessibility"}},selectLabelledById:{control:"text",type:{name:"string",required:!0},description:"Label ID for the filter select dropdown",table:{type:{summary:"string"},category:"Accessibility"}},sliderLabelledById:{control:"text",type:{name:"string",required:!0},description:"Label ID for intensity slider",table:{type:{summary:"string"},category:"Accessibility"}}},component:s},y=p.div`
  display: grid;
  grid-template-columns: max-content minmax(100px, 1fr) minmax(100px, 2fr);
  grid-auto-rows: max-content;
  gap: 10px;
  align-items: center;
`,b=e=>{const[m,c]=u.useState(e.filter);return i.jsx(y,{children:i.jsx(s,{...e,filter:m,onChangeFilterCallback:r=>(e.onChangeFilterCallback(r),c(r))})})},{value:f,min:C,max:x}=l[0].objects[0].filters[0],t=b.bind({});t.args={filter:{...l[0].objects[0].filters[0],color:"#EC1C24",brightness:d(C,x,f)},colorOptions:g};var o,a,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [filter, setFilter] = useState(args.filter);
  return <Container>
      <FilterControls {...args} filter={filter} onChangeFilterCallback={(filter: ImageFilter) => {
      args.onChangeFilterCallback(filter);
      return setFilter(filter);
    }} />
    </Container>;
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const z=["Primary"];export{t as Primary,z as __namedExportsOrder,V as default};
