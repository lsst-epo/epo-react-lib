import{s as x,n as b,j as v}from"./styled-components.browser.esm-e0114bd2.js";const V=x.circle`
  cursor: pointer;
  transition: fill ease var(--DURATION, 0.2s), r ease-out 400ms;
  ${({$isSelected:e})=>e&&b`
      stroke-width: 3;
    `}

  &:focus {
    outline: none;
  }
`,u=({type:e,isActive:n,isSelected:l,x:o,y:s,radius:c,className:d,color:p,onClickCallback:m})=>{const y={supernova:20,galaxy:60,galaxyFilter:25},f=(r,t)=>{if(t)return Math.abs(t);const{[r]:a=8}=y;return a},g=(r,t,a)=>r?"#fed828":t?a:"transparent",i=f(e,c),S=Math.max(10,i*1.2);return v.jsx(V,{onClick:m,cx:o,cy:s,r:n?S:i,fill:"transparent",stroke:g(n,l,p),tabIndex:0,role:"listitem",$isSelected:l,className:d})};u.displayName="Widgets.SourceSelector.Point";const P=u;try{Widgets.SourceSelector.Point.displayName="Widgets.SourceSelector.Point",Widgets.SourceSelector.Point.__docgenInfo={description:"",displayName:"Widgets.SourceSelector.Point",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"supernova"'},{value:'"galaxy"'},{value:'"galaxyFilter"'}]}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},x:{defaultValue:null,description:"",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!0,type:{name:"number"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},onClickCallback:{defaultValue:null,description:"",name:"onClickCallback",required:!1,type:{name:"MouseEventHandler<SVGCircleElement>"}}}}}catch{}export{P};
