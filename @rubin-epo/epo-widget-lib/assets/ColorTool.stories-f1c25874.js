import{j as a}from"./jsx-runtime-94f6e698.js";import{s as k,c as te,m as _,a as $,r as V}from"./index-8dad716f.js";import{b as ae,g as oe,c as re,p as le}from"./utils-c0d11637.js";import{r as x}from"./index-8db94870.js";import{s as p}from"./styled-components.browser.esm-3d9e3c21.js";import{S as se}from"./SelectListbox-10166abd.js";import{R as ne}from"./index-9e7f3058.js";import{B as ie}from"./Button-fb8694dd.js";import{u as G}from"./useTranslation-fdd24caa.js";import{I}from"./ImageComposite-3566a3b2.js";import{F as ce}from"./FilterControls-e88ccdb6.js";import"./ColorSwatch-e626154d.js";import"./index-5cd1a1ce.js";import"./index-12ae03d4.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseFlatten-9415757f.js";import"./_stringToPath-56625395.js";import"./isSymbol-f1e92ba4.js";import"./_baseToString-b5a9b60d.js";import"./IconComposer-6c240040.js";import"./i18nInstance-764935cb.js";import"./toPropertyKey-148bb9ef.js";import"./context-3d6b95f0.js";import"./utils-7aca7d2f.js";import"./CircularLoader-98248968.js";import"./index-e5f7b71c.js";import"./HorizontalSlider-284cb2a2.js";const de=p.section`
  color: var(--neutral80, #404040);
  container: colorTool / inline-size;
`,pe="900px",ue=p.div`
  --widget-areas: "image" "title" "controls" "actions";
  display: grid;
  gap: var(--color-tool-padding, var(--PADDING_SMALL, 20px));
  grid-template-areas: var(--widget-areas);
  grid-template-columns: 1fr;

  @container colorTool (min-width: ${pe}) {
    --widget-areas: "controls image" "actions actions" "title title";
    grid-template-columns: 1fr var(--image-width, 1fr);
  }
`,me=p.dl`
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
`,ge=p.div`
  display: grid;
  grid-template-columns: max-content minmax(100px, 1fr) minmax(100px, 2fr);
  grid-auto-rows: max-content;
  grid-area: controls;
  gap: var(--color-tool-padding, var(--PADDING_SMALL, 20px));
  align-items: center;
`,fe=p.div`
  position: absolute;
  top: var(--color-tool-padding, var(--PADDING_SMALL, 20px));
  left: var(--color-tool-padding, var(--PADDING_SMALL, 20px));
  width: calc(100% - var(--color-tool-padding, var(--PADDING_SMALL, 20px)) * 2);
`,O=p.div`
  font-weight: var(--FONT_WEIGHT_BOLD, 600);
`;function be(e,l){const s=function(){return e.indexOf("data:image/png")===0},n=function(t,o){var r=document.createElement("a");r.href=t,r.download=o,document.body.appendChild(r),r.click()};return{toBase64:function(){return e},toImg:function(){const t=document.createElement("img");return t.src=e,t},toCanvas:function(t){const o=document.createElement("canvas"),r=l==null?void 0:l.getBoundingClientRect();o.width=(r==null?void 0:r.width)||0,o.height=(r==null?void 0:r.height)||0;const i=o.getContext("2d");var d=this.toImg();d.onload=function(){i==null||i.drawImage(d,0,0),t(o)}},toPng:function(){if(s()){var t=document.createElement("img");return t.src=e,t}this.toCanvas(function(o){var r=document.createElement("img");return r.src=o.toDataURL(),r})},toJpeg:function(t){t=t||1,(o=>{this.toCanvas(function(r){var i=document.createElement("img");return i.src=r.toDataURL("image/jpeg",o),i})})(t)},downloadPng:function(t){if(t=t||"image.png",s()){n(e,t);return}this.toCanvas(function(o){n(o.toDataURL(),t)})}}}function ye(e){const l=e.toDataURL();return be(l)}const H=({canvas:e,filename:l,isDisabled:s,children:n})=>{const t=x.useCallback(()=>{e&&ye(e).downloadPng(l)},[e]);return a.jsx(ie,{disabled:s,style:{"--button-text-align":"left"},icon:"ArrowUpFromBracket",onClick:t,isBlock:!0,children:n})};H.displayName="Widgets.ColorTool.Reset";const he=H;try{Widgets.ColorTool.Reset.displayName="Widgets.ColorTool.Reset",Widgets.ColorTool.Reset.__docgenInfo={description:"",displayName:"Widgets.ColorTool.Reset",props:{canvas:{defaultValue:null,description:"",name:"canvas",required:!0,type:{name:"HTMLCanvasElement | null"}},filename:{defaultValue:null,description:"",name:"filename",required:!0,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!0,type:{name:"boolean"}}}}}catch{}const De=p.div`
  display: flex;
  gap: var(--color-tool-padding, var(--PADDING_SMALL, 20px));
  grid-area: actions;
`,Ce=e=>e.map(l=>{const{defaultValue:s,min:n,max:t}=l,o=s||1;return{...l,active:!1,color:"",brightness:oe(n,t,o),value:o}}),U=({actions:e,isDisabled:l,selectedData:s,selectionCallback:n,canvas:t})=>{const{t:o}=G(),{name:r,filters:i}=s,d=l||!ae(s);return a.jsx(De,{children:e.map(u=>{switch(u){case"reset":return a.jsx(ne,{isDisabled:d,onResetCallback:()=>n&&n({...s,filters:Ce(i)})},u);case"export":return a.jsx(he,{isDisabled:d,canvas:t,filename:r,children:o("colorTool.actions.export")},u);case"save":return null;default:return null}})})};U.displayName="Widgets.ColorTool.Actions";const xe=U;try{Widgets.ColorTool.Actions.displayName="Widgets.ColorTool.Actions",Widgets.ColorTool.Actions.__docgenInfo={description:"",displayName:"Widgets.ColorTool.Actions",props:{actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"ColorToolAction[]"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!0,type:{name:"boolean"}},selectedData:{defaultValue:null,description:"",name:"selectedData",required:!0,type:{name:"AstroObject"}},canvas:{defaultValue:null,description:"",name:"canvas",required:!0,type:{name:"HTMLCanvasElement | null"}},selectionCallback:{defaultValue:null,description:"",name:"selectionCallback",required:!0,type:{name:"(data: AstroObject) => void"}}}}}catch{}const z=({data:e,objectOptions:l=[],selectedData:s,colorOptions:n=[],selectionCallback:t,isDisabled:o=!1,isDisplayOnly:r=!1,className:i,config:d={actions:["reset"],width:600,height:600,hideSubtitle:!1}})=>{const u={actions:["reset"],width:600,height:600,hideSubtitle:!1},v=x.useRef(null),{t:m}=G(),{filters:g,name:f}=s,{actions:K,width:b,height:y,hideSubtitle:Q}={...u,...d};if(r)return a.jsx(I,{ref:v,filters:g,width:b,height:y,selectedObjectName:f,className:i});const X=c=>{const{label:j}=c,{filters:T}=s,ee=T.map(S=>S.label===j?c:S);return t&&t({...s,filters:ee})},Y=c=>{if(c)return t&&t({name:c,filters:re(e,c)})},L=e.length>1,Z=m("colorTool.actions.select_an_object");return a.jsx(de,{className:i,children:a.jsxs(ue,{style:{"--image-width":typeof b=="number"?`${b}px`:b,"--image-height":typeof y=="number"?`${y}px`:y},children:[f&&L&&a.jsx(me,{children:!Q&&a.jsxs(a.Fragment,{children:[a.jsx("dt",{children:m("colorTool.labels.object")}),a.jsx("dd",{children:f})]})}),a.jsxs(ge,{children:[g&&a.jsxs(a.Fragment,{children:[a.jsx(O,{id:"filterLabel",children:m("colorTool.labels.filter")}),a.jsx(O,{id:"colorLabel",children:m("colorTool.labels.color")}),a.jsx(O,{id:"intensityLabel",children:m("colorTool.labels.color_intensity")})]}),g&&g.map(c=>{const{label:j,isDisabled:T}=c;return x.createElement(ce,{filter:c,colorOptions:n,key:`filter-${j}`,isDisabled:o||T,onChangeFilterCallback:X,buttonLabelledById:"filterLabel",selectLabelledById:"colorLabel",sliderLabelledById:"intensityLabel"})})]}),a.jsx(I,{ref:v,filters:g,width:b,height:y,selectedObjectName:f,children:L&&a.jsx(fe,{children:a.jsx(se,{id:"astroObjectSelector",placeholder:Z,options:l,onChangeCallback:Y,value:f,isDisabled:o,width:"100%",maxWidth:"100%"})})}),a.jsx(xe,{actions:K,canvas:v.current,selectedData:s,isDisabled:o,selectionCallback:t})]})})};z.displayName="Widgets.ColorTool";const J=z;try{Widgets.ColorTool.displayName="Widgets.ColorTool",Widgets.ColorTool.__docgenInfo={description:"",displayName:"Widgets.ColorTool",props:{selectionCallback:{defaultValue:null,description:"",name:"selectionCallback",required:!0,type:{name:"(selectedData: AstroObject) => void"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"AstroCategory[]"}},selectedData:{defaultValue:null,description:"",name:"selectedData",required:!0,type:{name:"AstroObject"}},objectOptions:{defaultValue:{value:"[]"},description:"",name:"objectOptions",required:!1,type:{name:"ListboxOption[]"}},colorOptions:{defaultValue:{value:"[]"},description:"",name:"colorOptions",required:!1,type:{name:"ListboxOption[]"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isDisplayOnly:{defaultValue:{value:"false"},description:"",name:"isDisplayOnly",required:!1,type:{name:"boolean"}},config:{defaultValue:{value:`{
    actions: ["reset"],
    width: 600,
    height: 600,
    hideSubtitle: false,
  }`},description:"",name:"config",required:!1,type:{name:"ColorToolConfig"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ke={argTypes:{isDisplayOnly:{control:"boolean",description:"Hides the controls and puts the widget into a display-only mode.",table:{type:{summary:"boolean"},category:"Display",defaultValue:{summary:!1}}},isDisabled:{control:"boolean",description:"Disables controls for the widget.",table:{type:{summary:"boolean"},category:"Function",defaultValue:{summary:!1}}},data:{type:{name:"other",value:"AstroCategory[]",required:!0},control:"object",description:"Available datasets that can be selected to filter. An array of one item will not show any selection controls, an array with multiple items will display a selection grouped by `type` property.",table:{type:{summary:"AstroCategory[]"},category:"Model"}},objectOptions:{control:"object",description:"Options to be displayed if there are multiple datasets to select from.",table:{type:{summary:"Option[]"},category:"Model",defaultValue:{summary:"[]"}}},colorOptions:{control:"object",description:"Filter color options.",table:{type:{summary:"ListboxOption[]"},category:"Model",defaultValue:{summary:"[]"}}},selectedData:{type:{name:"other",value:"AstroObject",required:!0},control:"object",description:"Selected dataset to be displayed and filtered.",table:{type:{summary:"AstroObject"},category:"Model"}},selectionCallback:{control:!1,type:{name:"function",required:!0},description:"Callback containing the selected dataset",table:{type:{summary:"(selectedData: AstroObject) => void"},category:"Function"},action:"Selected data:"}},component:J},A=e=>{const[l,s]=x.useState(le(e.selectedData));return a.jsx(J,{...e,selectedData:l,selectionCallback:n=>{s(n),e.selectionCallback&&e.selectionCallback(n)}})},h=A.bind({});h.args={data:k,selectedData:k[0].objects[0],colorOptions:te,config:{actions:["export","reset"],width:600,height:600}};const w=[];_.forEach(e=>{e.objects.forEach(l=>{w.push({label:`${e.type}: ${l.name}`,value:l.name,optionGroup:e.type})})});const D=A.bind({});D.args={data:_,objectOptions:w,selectedData:_[0].objects[0],colorOptions:$,config:{actions:["export","reset"],width:600,height:600}};const C=A.bind({});C.args={data:V,objectOptions:w,selectedData:V[0].objects[0],colorOptions:$,isDisplayOnly:!0};var N,W,q;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [selectedData, setSelectedData] = useState(prepareData(args.selectedData));
  return <ColorTool {...args} selectedData={selectedData} selectionCallback={selected => {
    setSelectedData(selected);
    args.selectionCallback && args.selectionCallback(selected);
  }} />;
}`,...(q=(W=h.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var E,M,F;D.parameters={...D.parameters,docs:{...(E=D.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [selectedData, setSelectedData] = useState(prepareData(args.selectedData));
  return <ColorTool {...args} selectedData={selectedData} selectionCallback={selected => {
    setSelectedData(selected);
    args.selectionCallback && args.selectionCallback(selected);
  }} />;
}`,...(F=(M=D.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var P,R,B;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [selectedData, setSelectedData] = useState(prepareData(args.selectedData));
  return <ColorTool {...args} selectedData={selectedData} selectionCallback={selected => {
    setSelectedData(selected);
    args.selectionCallback && args.selectionCallback(selected);
  }} />;
}`,...(B=(R=C.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const Qe=["Primary","MultipleImages","DisplayOnly"];export{C as DisplayOnly,D as MultipleImages,h as Primary,Qe as __namedExportsOrder,Ke as default};
