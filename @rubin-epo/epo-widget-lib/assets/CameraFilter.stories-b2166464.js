import{s as d,j as e}from"./styled-components.browser.esm-e0114bd2.js";import{r as v}from"./index-8db94870.js";import{S as V}from"./SelectListbox-e052c5db.js";import{t as x,c as I}from"./index-223833fa.js";import{u as T}from"./bundle.esm-ead11fbb.js";import{u as A}from"./useTranslation-fdd24caa.js";import{b as E,c as D}from"./utils-54f41c78.js";import"./_commonjsHelpers-042e6b4d.js";import"./IconComposer-0a5b6514.js";import"./index-12ae03d4.js";import"./i18nInstance-764935cb.js";import"./toPropertyKey-148bb9ef.js";import"./context-3d6b95f0.js";import"./utils-7aca7d2f.js";const y=[{band:"u",range:[338,395]},{range:[396,404]},{band:"g",range:[405,552]},{band:"r",range:[553,690]},{band:"i",range:[690,817]},{band:"z",range:[818,920]},{band:"y",range:[920,1010]}],O=[{offset:0,stopColor:"#e0e0e0"},{offset:.262,stopColor:"#dedde0"},{offset:.41,stopColor:"#dbd5e1"},{offset:.53,stopColor:"#d4c7e3"},{offset:.635,stopColor:"#cbb3e6"},{offset:.73,stopColor:"#bf9aeb"},{offset:.818,stopColor:"#b17af0"},{offset:.9,stopColor:"#a055f5"},{offset:.976,stopColor:"#8c2afc"},{offset:1,stopColor:"#861cff"}],K=[{offset:.11,stopColor:"#861cff"},{offset:.25,stopColor:"blue"},{offset:.27,stopColor:"#001ee0"},{offset:.3,stopColor:"#006d91"},{offset:.33,stopColor:"#00ab53"},{offset:.36,stopColor:"#00d826"},{offset:.38,stopColor:"#00f40a"},{offset:.39,stopColor:"lime"},{offset:.41,stopColor:"#05fe00"},{offset:.43,stopColor:"#14fc01"},{offset:.45,stopColor:"#2df803"},{offset:.47,stopColor:"#50f406"},{offset:.49,stopColor:"#7cee0a"},{offset:.51,stopColor:"#b3e70e"},{offset:.54,stopColor:"#f2de14"},{offset:.54,stopColor:"#ffdd15"},{offset:.56,stopColor:"#fccb17"},{offset:.6,stopColor:"#f49f1e"},{offset:.62,stopColor:"#f18922"},{offset:.63,stopColor:"#f08220"},{offset:.66,stopColor:"#f0711c"},{offset:.69,stopColor:"#ef5415"},{offset:.72,stopColor:"#ed2d0b"},{offset:.75,stopColor:"#ec0000"},{offset:.79,stopColor:"#eb0303"},{offset:.82,stopColor:"#e90f0f"},{offset:.86,stopColor:"#e62323"},{offset:.89,stopColor:"#e23e3e"},{offset:.93,stopColor:"#dc6262"},{offset:.96,stopColor:"#d58e8e"},{offset:.99,stopColor:"#cdc0c0"},{offset:1,stopColor:"#ccc"}],P=[{offset:0,stopColor:"#ccc"},{offset:1,stopColor:"#f2f2f2"}],H=[{name:"violet",color:"#861CFF",range:[380,450]},{name:"blue",color:"#0000FF",range:[450,495]},{name:"green",color:"#00FF00",range:[495,570]},{name:"yellow",color:"#FFDD15",range:[570,590]},{name:"orange",color:"#F18922",range:[590,620]},{name:"red",color:"#EC0000",range:[620,750]}],j=[{name:"ultraviolet",upper:400,stops:O},{name:"visible",upper:750,lower:400,stops:K,colors:H},{name:"infrared",lower:750,stops:P}],B=255,L=322,w=1084,G={condensed:{min:L,max:w,range:w-L},default:{min:B,max:w,range:w-B}},U=d.div`
  container-type: inline-size;
  container-name: camera-filter;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  text-align: center;
  position: relative;
`,Y=d.h3`
  margin-block: 1em;
`,J=d.table`
  border-collapse: collapse;
  text-align: center;
  margin-inline-start: var(--filter-table-margin-inline-start);
  width: var(--filter-table-width);
`,Q=d.tbody`
  display: table-header-group;
`,X=d.thead`
  display: table-row-group;
`,Z=d.td`
  line-height: 1.2;
  font-size: 80%;
`,ee=d.span`
  font-size: 80%;
`,te=d.th`
  font-size: 120%;
  font-weight: var(--FONT_WEIGHT_NORMAL, 400);
  border: var(--filter-name-border);
  border-width: 1px;

  @container camera-filter (min-width: ${x("BREAK_TABLET")}) {
    border-width: 3px;
  }
`,re=d.div`
  min-width: 20ch;
  width: 50%;
  max-width: 30ch;
  margin-block: 1em;
  justify-self: center;
  text-align: left;
`,oe=d.label`
  font-size: 0.75em;
`,ne=d.text`
  font-size: 2em;

  @container camera-filter (min-width: ${x("BREAK_MOBILE")}) {
    font-size: 1.25em;
  }

  @container camera-filter (min-width: ${x("BREAK_PHABLET_MIN")}) {
    font-size: 0.75em;
  }
`,se=d.tspan`
  font-size: 2em;

  @container camera-filter (min-width: ${x("BREAK_MOBILE")}) {
    font-size: 1.25em;
  }

  @container camera-filter (min-width: ${x("BREAK_PHABLET_MIN")}) {
    font-size: 0.75em;
  }
`,ae=d.tspan`
  font-size: 1.5em;

  @container camera-filter (min-width: ${x("BREAK_MOBILE")}) {
    font-size: 1em;
  }

  @container camera-filter (min-width: ${x("BREAK_PHABLET_MIN")}) {
    font-size: 0.5em;
  }
`,le=d.tspan`
  font-size: 1.3em;

  @container camera-filter (min-width: ${x("BREAK_MOBILE")}) {
    font-size: 0.8em;
  }

  @container camera-filter (min-width: ${x("BREAK_PHABLET_MIN")}) {
    font-size: 0.4em;
  }
`,ie=d.ul`
  display: flex;
  justify-content: space-between;
  line-height: 1.2;
  font-size: 80%;
  margin: 0;
  padding: 0;
  list-style-type: none;
`,de=d.li`
  list-style-type: none;
  margin: 0;
  padding: 0;

  &:before {
    content: "\200B";
  }
`,N=({filters:r,min:c,spectrumRange:u})=>{const s=v.useRef(null),t=s.current?Array.from(s.current.children):null;return e.jsxs(e.Fragment,{children:[e.jsx(ie,{ref:s,"data-testid":"condensed-filters",children:r.map(({range:a,band:o})=>e.jsxs(de,{"aria-labelledby":`${o}-name`,children:[a.join("–"),e.jsx("br",{}),"nm"]},o))}),t&&e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMinYMin meet",viewBox:`${c} 0 ${u} 50`,role:"presentation","aria-hidden":"true",children:e.jsx("g",{role:"presentation",children:r.map(({range:a,band:o},i)=>{const p=t[i],{offsetLeft:l,offsetWidth:h,offsetParent:C}=p,{offsetWidth:m}=C,g=u/m,f=(a[0]+a[1])/2,b=(l+h/2)*g;return e.jsxs("g",{children:[e.jsx("line",{strokeWidth:1,stroke:"#b2b2b2",x1:f,x2:f,y1:"100%",y2:"75%",role:"presentation"}),e.jsx("line",{strokeWidth:1,stroke:"#b2b2b2",x1:f,x2:b+c,y1:"75%",y2:"0%",role:"presentation"})]},o)})})})]})};N.displayName="Widgets.CameraFilter.CondensedFilterRanges";const ce=N;try{Widgets.CameraFilter.CondensedFilterRanges.displayName="Widgets.CameraFilter.CondensedFilterRanges",Widgets.CameraFilter.CondensedFilterRanges.__docgenInfo={description:"",displayName:"Widgets.CameraFilter.CondensedFilterRanges",props:{filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"Required<Filter>[]"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},spectrumRange:{defaultValue:null,description:"",name:"spectrumRange",required:!0,type:{name:"number"}}}}}catch{}const R=({colors:r,activeRange:c,isBandSelected:u,isCondensed:s})=>{const t=s?350:r[0].range[0],o=(s?1e3:820)-t,i=Math.floor(o/(r.length-1));return e.jsx("g",{role:"list","data-testid":"color-labels",children:r.map(({name:p,range:l,color:h},C)=>{const m=t+i*C,g=u&&E(l,c)===null,f=(l[0]+l[1])/2;return e.jsxs("g",{children:[e.jsx("line",{strokeWidth:1,stroke:"#b2b2b2",x1:f,x2:f,y1:"100",y2:s?"105":"110",role:"presentation"}),e.jsx("line",{strokeWidth:1,stroke:"#b2b2b2",x1:f,x2:m,y1:s?"105":"110",y2:s?"145":"140",role:"presentation"}),e.jsx("circle",{cx:m,cy:s?"145":"140",r:s?15:10,fill:h,role:"presentation"}),e.jsxs("text",{x:m,dominantBaseline:"middle",textAnchor:"middle",y:"150",role:"listitem","aria-hidden":g,children:[e.jsx(se,{x:m,dy:"1.25em",textAnchor:"middle",children:p}),e.jsx(ae,{x:m,dy:"1.25em",textAnchor:"middle",children:l.join("–")}),e.jsx(le,{x:m,dy:"1.25em",textAnchor:"middle",children:"nm"})]})]},p)})})};R.displayName="Widgets.CameraFilter.ColorLabels";const me=R;try{R.displayName="ColorLabels",R.__docgenInfo={description:"",displayName:"ColorLabels",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"VisibleColor[]"}},activeRange:{defaultValue:null,description:"",name:"activeRange",required:!0,type:{name:"number[]"}},isBandSelected:{defaultValue:null,description:"",name:"isBandSelected",required:!0,type:{name:"boolean"}},isCondensed:{defaultValue:null,description:"",name:"isCondensed",required:!0,type:{name:"boolean"}}}}}catch{}const k=({spectrums:r,activeBand:c,min:u,max:s,activeMin:t=0,activeMax:a=0,isCondensed:o})=>{const{t:i}=A(),p=i("camera_filter.labels.captured_range",{context:c?"":"no_filter",filter:c});return e.jsx("g",{role:"list","aria-label":p,"aria-live":"polite","data-testid":"spectrum-labels",children:r.map(({name:l,upper:h,lower:C,colors:m},g)=>{const f=h||s,b=C||u,W=c&&E([b,f],[t,a])===null;return e.jsxs("g",{role:"listitem","aria-hidden":W,children:[e.jsx(ne,{x:o&&g===0?b:(f-b)/2+b,y:"50",dominantBaseline:"middle",textAnchor:o&&g===0?"start":"middle",children:i(`camera_filter.labels.${l}`)},l),m&&e.jsx(me,{colors:m,isBandSelected:!!c,activeRange:[t,a],isCondensed:o})]},l)})})};k.displayName="Widgets.CameraFilter.SpectrumLabels";const pe=k;try{Widgets.CameraFilter.SpectrumLabels.displayName="Widgets.CameraFilter.SpectrumLabels",Widgets.CameraFilter.SpectrumLabels.__docgenInfo={description:"",displayName:"Widgets.CameraFilter.SpectrumLabels",props:{spectrums:{defaultValue:null,description:"",name:"spectrums",required:!0,type:{name:"Spectrum[]"}},activeBand:{defaultValue:null,description:"",name:"activeBand",required:!1,type:{name:"enum",value:[{value:'"y"'},{value:'"u"'},{value:'"g"'},{value:'"r"'},{value:'"i"'},{value:'"z"'}]}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},activeMin:{defaultValue:{value:"0"},description:"",name:"activeMin",required:!1,type:{name:"number"}},activeMax:{defaultValue:{value:"0"},description:"",name:"activeMax",required:!1,type:{name:"number"}},isCondensed:{defaultValue:null,description:"",name:"isCondensed",required:!0,type:{name:"boolean"}}}}}catch{}const z=({min:r,max:c,range:u,isCondensed:s,activeFilter:t})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMinYMin meet",viewBox:`${r} 0 ${u} 300`,"data-testid":"spectrum-display",children:[e.jsxs("defs",{children:[j.map(({name:a,stops:o})=>e.jsx("linearGradient",{id:`${a}-gradient`,children:o.map(({offset:i,stopColor:p,id:l})=>e.jsx("stop",{offset:i,stopColor:p,id:l},`${i}-${p}`))},a)),e.jsxs("mask",{id:"spectrumMask",children:[e.jsx("rect",{width:"100%",height:"100",fill:"white",x:r}),t&&e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:r,width:t.range[0]-r,height:"100%",fill:"black"}),e.jsx("rect",{x:t.range[1],width:c-t.range[1],height:"100%",fill:"black"})]})]})]}),e.jsx("g",{mask:"url(#spectrumMask)",role:"presentation",children:j.map(({name:a,upper:o,lower:i})=>e.jsx("rect",{width:(o||c)-(i||r),height:"50%",fill:`url(#${a}-gradient)`,x:i||r,role:"presentation"},a))}),e.jsx("g",{children:j.map(({name:a,upper:o})=>o&&e.jsx("line",{strokeWidth:2,strokeDasharray:"8 8",stroke:t&&!D(o,t.range[0],t.range[1])?"#000":"#fff",x1:o,x2:o,y1:0,y2:"50%"},a))}),e.jsx(pe,{spectrums:j,activeBand:t==null?void 0:t.band,min:r,max:c,activeMin:t==null?void 0:t.range[0],activeMax:t==null?void 0:t.range[1],isCondensed:s})]});z.displayName="Widgets.CameraFilter.SpectrumDisplay";const fe=z;try{Widgets.CameraFilter.SpectrumDisplay.displayName="Widgets.CameraFilter.SpectrumDisplay",Widgets.CameraFilter.SpectrumDisplay.__docgenInfo={description:"",displayName:"Widgets.CameraFilter.SpectrumDisplay",props:{min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},range:{defaultValue:null,description:"",name:"range",required:!0,type:{name:"number"}},isCondensed:{defaultValue:null,description:"",name:"isCondensed",required:!0,type:{name:"boolean"}},activeFilter:{defaultValue:null,description:"",name:"activeFilter",required:!1,type:{name:"Filter"}}}}}catch{}const q=()=>{const{t:r}=A(),{ref:c,width:u=1}=T(),[s,t]=v.useState(null),{BREAK_TABLET:a}=I,o=u<parseInt(a),{[o?"condensed":"default"]:{min:i,max:p,range:l}}=G,h=y[0].range[0],m=y[y.length-1].range[1]-h,g=y.filter(({band:n})=>n),b=[{value:"none",label:r("camera_filter.labels.option",{context:"none"})}].concat(g.map(({band:n})=>({value:n,label:r("camera_filter.labels.option",{band:n})}))),W=y.find(({band:n})=>n===s);return e.jsxs(U,{ref:c,children:[e.jsx(Y,{children:r("camera_filter.title")}),o&&e.jsx(ce,{filters:g,min:i,spectrumRange:l}),e.jsxs(J,{style:{"--filter-table-margin-inline-start":`${((h-i)/l*100).toFixed(2)}%`,"--filter-table-width":`${(m/l*100).toFixed(2)}%`},"data-testid":"expanded-filters",children:[e.jsx("colgroup",{children:y.map(({range:n})=>e.jsx("col",{style:{width:`${(n[1]-n[0])/m*100}%`}},n.join("")))}),e.jsx(X,{children:e.jsx("tr",{children:y.map(({band:n},_)=>e.jsx(te,{id:`${n}-name`,style:{"--filter-name-border":n?"solid #b2b2b2":"none"},scope:"col","aria-hidden":!n,children:n},_))})}),!o&&e.jsx(Q,{children:e.jsx("tr",{children:y.map(({band:n,range:_})=>e.jsx(Z,{"aria-hidden":!n,children:n&&e.jsxs(e.Fragment,{children:[_.join("–"),e.jsx("br",{}),e.jsx(ee,{children:"nm"})]})},_.join()))})})]}),e.jsx(fe,{min:i,max:p,range:l,isCondensed:o,activeFilter:W}),e.jsxs(re,{children:[e.jsx(oe,{id:"filterSelectLabel",children:r("camera_filter.labels.select")}),e.jsx(V,{options:b,value:s,onChangeCallback:n=>t(n),width:"100%",maxWidth:"100%",labelledById:"filterSelectLabel"})]})]})};q.displayName="Widgets.CameraFilter";const ue=q;try{Widgets.CameraFilter.displayName="Widgets.CameraFilter",Widgets.CameraFilter.__docgenInfo={description:"",displayName:"Widgets.CameraFilter",props:{}}}catch{}const Me={argTypes:{},component:ue},F={args:{}};var M,S,$;F.parameters={...F.parameters,docs:{...(M=F.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {}
}`,...($=(S=F.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};const Se=["Primary"];export{F as Primary,Se as __namedExportsOrder,Me as default};
