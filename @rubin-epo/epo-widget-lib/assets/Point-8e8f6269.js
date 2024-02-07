import{j as x}from"./jsx-runtime-94f6e698.js";import{s as b,n as v}from"./styled-components.browser.esm-3d9e3c21.js";const V=b.circle`
  cursor: pointer;
  transition: fill ease var(--DURATION, 0.2s), r ease-out 400ms;
  ${({$isSelected:e})=>e&&v`
      stroke-width: 3;
    `}

  &:focus {
    outline: none;
  }
`,o=({type:e,isActive:n,isSelected:l,x:u,y:s,radius:c,className:d,color:p,onClickCallback:m})=>{const f={supernova:20,galaxy:60,galaxyFilter:25},y=(r,t)=>{if(t)return Math.abs(t);const{[r]:a=8}=f;return a},g=(r,t,a)=>r?"#fed828":t?a:"transparent",i=y(e,c),S=Math.max(10,i*1.2);return x.jsx(V,{onClick:m,cx:u,cy:s,r:n?S:i,fill:"transparent",stroke:g(n,l,p),tabIndex:0,role:"listitem",$isSelected:l,className:d})};o.displayName="Widgets.SourceSelector.Point";const k=o;try{Widgets.SourceSelector.Point.displayName="Widgets.SourceSelector.Point",Widgets.SourceSelector.Point.__docgenInfo={description:"",displayName:"Widgets.SourceSelector.Point",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"supernova"'},{value:'"galaxy"'},{value:'"galaxyFilter"'}]}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},x:{defaultValue:null,description:"",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!0,type:{name:"number"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},onClickCallback:{defaultValue:null,description:"",name:"onClickCallback",required:!1,type:{name:"MouseEventHandler<SVGCircleElement>"}}}}}catch{}export{k as P};
