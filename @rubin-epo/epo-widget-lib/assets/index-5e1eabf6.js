import{s,j as o}from"./styled-components.browser.esm-e0114bd2.js";import{g as n}from"./utils-54f41c78.js";import{B as h}from"./Blinker-1e32d670.js";import{E as N}from"./ElapsedTime-d829c963.js";import{P as V}from"./Point-cf4d0900.js";const b=s.svg`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`,D=s(h)`
  position: absolute;
  width: 100%;
  height: 100%;
`,E=s(N)`
  position: absolute;
  right: var(--PADDING_SMALL, 20px);
  bottom: var(--PADDING_SMALL, 20px);
`,a=({width:e,height:r,id:l,sources:d,selectedSource:c,onSelectCallback:t})=>{const u=n([0,e],[0,e]),p=n([0,r],[0,r]);return o.jsx(b,{preserveAspectRatio:"xMidYMid meet",viewBox:`0 0 ${e} ${r}`,onClick:()=>t&&t(void 0),id:l,children:o.jsx("g",{role:"list",children:d.map(m=>{const{type:g,id:i,color:f,radius:y=NaN,x:S,y:x}=m,P=c.includes(i),_=!1;return o.jsx(V,{x:u(S),y:p(x),onClickCallback:v=>(v.stopPropagation(),t&&t(i)),radius:y,id:i,type:g,isActive:_,isSelected:P,color:f},i)})})})};a.displayName="Widgets.PointSelector";const L=a;try{Widgets.PointSelector.displayName="Widgets.PointSelector",Widgets.PointSelector.__docgenInfo={description:"",displayName:"Widgets.PointSelector",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},sources:{defaultValue:null,description:"",name:"sources",required:!0,type:{name:"Source[]"}},selectedSource:{defaultValue:null,description:"",name:"selectedSource",required:!0,type:{name:"string[]"}},onSelectCallback:{defaultValue:null,description:"",name:"onSelectCallback",required:!0,type:{name:"(id?: string | undefined) => void"}}}}}catch{}export{D as B,E,L as P};
