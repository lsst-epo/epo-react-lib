import{j as n}from"./jsx-runtime-94f6e698.js";import{g as s}from"./utils-4cb73340.js";import{s as i,n as B}from"./styled-components.browser.esm-3d9e3c21.js";import{B as h}from"./Blinker-64c78ae4.js";import{E}from"./ElapsedTime-bb6d6a7b.js";import{P as N}from"./Point-8e8f6269.js";const A=i.div`
  position: relative;
  min-width: var(--BREAK_MOBILE_MIN, 280px);

  @media print {
    width: var(--BREAK_MOBILE_MIN, 280px);
  }
`,j=i(A)`
  ${({width:e,height:t})=>B`
    aspect-ratio: ${e} / ${t};
    max-width: ${e}px;
    max-height: ${t}px;
  `}
`,M=i.svg`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`,k=i(h)`
  position: absolute;
  width: 100%;
  height: 100%;
`,D=i(E)`
  position: absolute;
  right: var(--PADDING_SMALL, 20px);
  bottom: var(--PADDING_SMALL, 20px);
`,a=({width:e,height:t,id:l,sources:d,selectedSource:c,onSelectCallback:r})=>{const p=s([0,e],[0,e]),u=s([0,t],[0,t]);return n.jsx(M,{preserveAspectRatio:"xMidYMid meet",viewBox:`0 0 ${e} ${t}`,onClick:()=>r&&r(void 0),id:l,children:n.jsx("g",{role:"list",children:d.map(m=>{const{type:x,id:o,color:S,radius:g=NaN,x:f,y}=m,_=c.includes(o),P=!1;return n.jsx(N,{x:p(f),y:u(y),onClickCallback:v=>(v.stopPropagation(),r&&r(o)),radius:g,id:o,type:x,isActive:P,isSelected:_,color:S},o)})})})};a.displayName="Widgets.PointSelector";const W=a;try{Widgets.PointSelector.displayName="Widgets.PointSelector",Widgets.PointSelector.__docgenInfo={description:"",displayName:"Widgets.PointSelector",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},sources:{defaultValue:null,description:"",name:"sources",required:!0,type:{name:"Source[]"}},selectedSource:{defaultValue:null,description:"",name:"selectedSource",required:!0,type:{name:"string[]"}},onSelectCallback:{defaultValue:null,description:"",name:"onSelectCallback",required:!0,type:{name:"(id?: string | undefined) => void"}}}}}catch{}export{k as B,D as E,W as P,j as S};
