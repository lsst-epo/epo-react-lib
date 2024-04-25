import{s as p,j as a}from"./styled-components.browser.esm-e0114bd2.js";import{a as ae,g as oe,b as re,s as V,c as le,m as _,d as G,r as I,p as se}from"./utils-a2998f7e.js";import{r as x}from"./index-8db94870.js";import{S as ne}from"./SelectListbox-e052c5db.js";import{R as ie}from"./index-83633d92.js";import{B as ce}from"./Button-accaf53d.js";import{u as H}from"./useTranslation-fdd24caa.js";import{I as N}from"./ImageComposite-c701b55e.js";import{F as de}from"./FilterControls-183a79fd.js";import"./ColorSwatch-15c201f0.js";import"./index-223833fa.js";import"./index-12ae03d4.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseFlatten-b3bd6ce9.js";import"./_stringToPath-4591b2bb.js";import"./isSymbol-f1e92ba4.js";import"./_baseToString-b5a9b60d.js";import"./IconComposer-0a5b6514.js";import"./i18nInstance-764935cb.js";import"./toPropertyKey-148bb9ef.js";import"./context-3d6b95f0.js";import"./utils-7aca7d2f.js";import"./_baseIsEqual-8f245713.js";import"./CircularLoader-50e78b89.js";import"./HorizontalSlider-a5320790.js";const pe=p.section`
  color: var(--neutral80, #404040);
  container: colorTool / inline-size;
`,ue="900px",me=p.div`
  --widget-areas: "image" "title" "controls" "actions";
  display: grid;
  gap: var(--color-tool-padding, var(--PADDING_SMALL, 20px));
  grid-template-areas: var(--widget-areas);
  grid-template-columns: 1fr;

  @container colorTool (min-width: ${ue}) {
    --widget-areas: "controls image" "actions actions" "title title";
    grid-template-columns: 1fr var(--image-width, 1fr);
  }
`,ge=p.dl`
  grid-area: title;
  margin: 0;
  font-size: 18px;
  font-weight: var(--FONT_WEIGHT_NORMAL, 400);

  > dt,
  dd {
    margin: 0;
    white-space: nowrap;
  }

  > dt {
    display: inline-block;
  }

  > dd {
    display: inline;
    margin-left: 1ch;

    &::after {
      content: "\\A";
      white-space: pre;
    }
  }
`,fe=p.div`
  display: grid;
  grid-template-columns: max-content minmax(100px, 1fr) minmax(100px, 2fr);
  grid-auto-rows: max-content;
  grid-area: controls;
  gap: var(--color-tool-padding, var(--PADDING_SMALL, 20px));
  align-items: center;
`,ye=p.div`
  position: absolute;
  top: var(--color-tool-padding, var(--PADDING_SMALL, 20px));
  left: var(--color-tool-padding, var(--PADDING_SMALL, 20px));
  width: calc(100% - var(--color-tool-padding, var(--PADDING_SMALL, 20px)) * 2);
`,T=p.div`
  font-weight: var(--FONT_WEIGHT_BOLD, 600);
`;function be(t,r){const l=function(){return t.indexOf("data:image/png")===0},n=function(e,o){const s=document.createElement("a");s.href=e,s.download=o,document.body.appendChild(s),s.click()};return{toBase64:function(){return t},toImg:function(){const e=document.createElement("img");return e.src=t,e},toCanvas:function(e){const o=document.createElement("canvas"),s=r==null?void 0:r.getBoundingClientRect();o.width=(s==null?void 0:s.width)||0,o.height=(s==null?void 0:s.height)||0;const i=o.getContext("2d"),d=this.toImg();d.onload=function(){i==null||i.drawImage(d,0,0),e(o)}},toPng:function(){if(l()){const e=document.createElement("img");return e.src=t,e}this.toCanvas(function(e){const o=document.createElement("img");return o.src=e.toDataURL(),o})},toJpeg:function(e){e=e||1,(o=>{this.toCanvas(function(s){const i=document.createElement("img");return i.src=s.toDataURL("image/jpeg",o),i})})(e)},downloadPng:function(e){if(e=e||"image.png",l()){n(t,e);return}this.toCanvas(function(o){n(o.toDataURL(),e)})}}}function he(t){const r=t.toDataURL();return be(r)}const U=({canvas:t,filename:r,isDisabled:l,children:n})=>{const e=x.useCallback(()=>{t&&he(t).downloadPng(r)},[t]);return a.jsx(ce,{disabled:l,style:{"--button-text-align":"left"},icon:"ArrowUpFromBracket",onClick:e,isBlock:!0,children:n})};U.displayName="Widgets.ColorTool.Reset";const De=U;try{Widgets.ColorTool.Reset.displayName="Widgets.ColorTool.Reset",Widgets.ColorTool.Reset.__docgenInfo={description:"",displayName:"Widgets.ColorTool.Reset",props:{canvas:{defaultValue:null,description:"",name:"canvas",required:!0,type:{name:"HTMLCanvasElement | null"}},filename:{defaultValue:null,description:"",name:"filename",required:!0,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!0,type:{name:"boolean"}}}}}catch{}const Ce=p.div`
  display: flex;
  gap: var(--color-tool-padding, var(--PADDING_SMALL, 20px));
  grid-area: actions;
`,xe=t=>t.map(r=>{const{defaultValue:l,min:n,max:e}=r,o=l||1;return{...r,active:!1,color:"",brightness:oe(n,e,o),value:o}}),z=({actions:t,isDisabled:r,selectedData:l,selectionCallback:n,canvas:e})=>{const{t:o}=H(),{name:s,filters:i}=l,d=r||!ae(l);return a.jsx(Ce,{children:t.map(f=>{switch(f){case"reset":return a.jsx(ie,{isDisabled:d,onResetCallback:()=>n&&n({...l,filters:xe(i)})},f);case"export":return a.jsx(De,{isDisabled:d,canvas:e,filename:s,children:o("colorTool.actions.export")},f);case"save":return null;default:return null}})})};z.displayName="Widgets.ColorTool.Actions";const je=z;try{Widgets.ColorTool.Actions.displayName="Widgets.ColorTool.Actions",Widgets.ColorTool.Actions.__docgenInfo={description:"",displayName:"Widgets.ColorTool.Actions",props:{actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"ColorToolAction[]"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!0,type:{name:"boolean"}},selectedData:{defaultValue:null,description:"",name:"selectedData",required:!0,type:{name:"AstroObject"}},canvas:{defaultValue:null,description:"",name:"canvas",required:!0,type:{name:"HTMLCanvasElement | null"}},selectionCallback:{defaultValue:null,description:"",name:"selectionCallback",required:!0,type:{name:"(data: AstroObject) => void"}}}}}catch{}const J=({data:t,objectOptions:r=[],selectedData:l,colorOptions:n=[],selectionCallback:e,isDisabled:o=!1,isDisplayOnly:s=!1,className:i,config:d={actions:["reset"],width:600,height:600,hideSubtitle:!1}})=>{const f={actions:["reset"],width:600,height:600,hideSubtitle:!1},j=x.useRef(null),{t:y}=H(),{filters:u,name:b}=l,{actions:Q,width:m,height:g,hideSubtitle:X}={...f,...d},L=u.map(({image:c})=>({url:c,width:m,height:g}));if(s)return a.jsx(N,{ref:j,isDisplayOnly:!0,filters:u,width:m,height:g,selectedObjectName:b,className:i,images:L});const Y=c=>{const{label:v}=c,{filters:O}=l,te=O.map(k=>k.label===v?c:k);return e&&e({...l,filters:te})},Z=c=>{if(c)return e&&e({name:c,filters:re(t,c)})},S=t.length>1,ee=y("colorTool.actions.select_an_object");return a.jsx(pe,{className:i,children:a.jsxs(me,{style:{"--image-width":typeof m=="number"?`${m}px`:m,"--image-height":typeof g=="number"?`${g}px`:g},children:[b&&S&&a.jsx(ge,{children:!X&&a.jsxs(a.Fragment,{children:[a.jsx("dt",{children:y("colorTool.labels.object")}),a.jsx("dd",{children:b})]})}),a.jsxs(fe,{children:[u&&a.jsxs(a.Fragment,{children:[a.jsx(T,{id:"filterLabel",children:y("colorTool.labels.filter")}),a.jsx(T,{id:"colorLabel",children:y("colorTool.labels.color")}),a.jsx(T,{id:"intensityLabel",children:y("colorTool.labels.color_intensity")})]}),u&&u.map(c=>{const{label:v,isDisabled:O}=c;return x.createElement(de,{filter:c,colorOptions:n,key:`filter-${v}`,isDisabled:o||O,onChangeFilterCallback:Y,buttonLabelledById:"filterLabel",selectLabelledById:"colorLabel",sliderLabelledById:"intensityLabel"})})]}),a.jsx(N,{ref:j,filters:u,width:m,height:g,selectedObjectName:b,images:L,children:S&&a.jsx(ye,{children:a.jsx(ne,{id:"astroObjectSelector",placeholder:ee,options:r,onChangeCallback:Z,value:b,isDisabled:o,width:"100%",maxWidth:"100%"})})}),a.jsx(je,{actions:Q,canvas:j.current,selectedData:l,isDisabled:o,selectionCallback:e})]})})};J.displayName="Widgets.ColorTool";const K=J;try{Widgets.ColorTool.displayName="Widgets.ColorTool",Widgets.ColorTool.__docgenInfo={description:"",displayName:"Widgets.ColorTool",props:{selectionCallback:{defaultValue:null,description:"",name:"selectionCallback",required:!0,type:{name:"(selectedData: AstroObject) => void"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"AstroCategory[]"}},selectedData:{defaultValue:null,description:"",name:"selectedData",required:!0,type:{name:"AstroObject"}},objectOptions:{defaultValue:{value:"[]"},description:"",name:"objectOptions",required:!1,type:{name:"ListboxOption[]"}},colorOptions:{defaultValue:{value:"[]"},description:"",name:"colorOptions",required:!1,type:{name:"ListboxOption[]"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isDisplayOnly:{defaultValue:{value:"false"},description:"",name:"isDisplayOnly",required:!1,type:{name:"boolean"}},config:{defaultValue:{value:`{
    actions: ["reset"],
    width: 600,
    height: 600,
    hideSubtitle: false,
  }`},description:"",name:"config",required:!1,type:{name:"ColorToolConfig"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Je={argTypes:{isDisplayOnly:{control:"boolean",description:"Hides the controls and puts the widget into a display-only mode.",table:{type:{summary:"boolean"},category:"Display",defaultValue:{summary:!1}}},isDisabled:{control:"boolean",description:"Disables controls for the widget.",table:{type:{summary:"boolean"},category:"Function",defaultValue:{summary:!1}}},data:{type:{name:"other",value:"AstroCategory[]",required:!0},control:"object",description:"Available datasets that can be selected to filter. An array of one item will not show any selection controls, an array with multiple items will display a selection grouped by `type` property.",table:{type:{summary:"AstroCategory[]"},category:"Model"}},objectOptions:{control:"object",description:"Options to be displayed if there are multiple datasets to select from.",table:{type:{summary:"Option[]"},category:"Model",defaultValue:{summary:"[]"}}},colorOptions:{control:"object",description:"Filter color options.",table:{type:{summary:"ListboxOption[]"},category:"Model",defaultValue:{summary:"[]"}}},selectedData:{type:{name:"other",value:"AstroObject",required:!0},control:"object",description:"Selected dataset to be displayed and filtered.",table:{type:{summary:"AstroObject"},category:"Model"}},selectionCallback:{control:!1,type:{name:"function",required:!0},description:"Callback containing the selected dataset",table:{type:{summary:"(selectedData: AstroObject) => void"},category:"Function"},action:"Selected data:"}},component:K},A=t=>{const[r,l]=x.useState(se(t.selectedData));return a.jsx(K,{...t,selectedData:r,selectionCallback:n=>{l(n),t.selectionCallback&&t.selectionCallback(n)}})},h=A.bind({});h.args={data:V,selectedData:V[0].objects[0],colorOptions:le,config:{actions:["export","reset"],width:600,height:600}};const w=[];_.forEach(t=>{t.objects.forEach(r=>{w.push({label:`${t.type}: ${r.name}`,value:r.name,optionGroup:t.type})})});const D=A.bind({});D.args={data:_,objectOptions:w,selectedData:_[0].objects[0],colorOptions:G,config:{actions:["export","reset"],width:600,height:600}};const C=A.bind({});C.args={data:I,objectOptions:w,selectedData:I[0].objects[0],colorOptions:G,isDisplayOnly:!0};var W,q,E;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const [selectedData, setSelectedData] = useState(prepareData(args.selectedData));
  return <ColorTool {...args} selectedData={selectedData} selectionCallback={selected => {
    setSelectedData(selected);
    args.selectionCallback && args.selectionCallback(selected);
  }} />;
}`,...(E=(q=h.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var M,F,P;D.parameters={...D.parameters,docs:{...(M=D.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [selectedData, setSelectedData] = useState(prepareData(args.selectedData));
  return <ColorTool {...args} selectedData={selectedData} selectionCallback={selected => {
    setSelectedData(selected);
    args.selectionCallback && args.selectionCallback(selected);
  }} />;
}`,...(P=(F=D.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var R,B,$;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const [selectedData, setSelectedData] = useState(prepareData(args.selectedData));
  return <ColorTool {...args} selectedData={selectedData} selectionCallback={selected => {
    setSelectedData(selected);
    args.selectionCallback && args.selectionCallback(selected);
  }} />;
}`,...($=(B=C.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const Ke=["Primary","MultipleImages","DisplayOnly"];export{C as DisplayOnly,D as MultipleImages,h as Primary,Ke as __namedExportsOrder,Je as default};
