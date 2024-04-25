import{s as a,j as e}from"./styled-components.browser.esm-e0114bd2.js";const f=a.div`
  --label-height: 3em;
  --label-gutter: calc(var(--label-height) / 2);

  display: grid;
  grid-template-columns: min-content 1fr min-content;
  grid-template-rows: min-content 1fr min-content;
  grid-template-areas:
    "title title title"
    "vertical-label chart filler"
    ". horizontal-label filler";
  /* for Safari */
  align-items: center;
  width: 100%;
`;a.div`
  place-self: center;
  align-self: center;
`;a.div`
  display: flex;
  align-items: center;
  place-self: center;
  align-self: center;
`;const g=a.div`
  grid-area: filler;
  width: var(--label-height);
`,x=a.svg`
  grid-area: chart;
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: var(--aspect-ratio);
`,y=a.div`
  display: flex;
  align-items: center;
  grid-area: title;
  height: var(--label-height);
  padding-inline: var(--label-gutter);
`,v=a.h3`
  margin: 0;
`,b=a.div`
  width: var(--label-height);
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  grid-area: vertical-label;
`,V=a.div`
  height: var(--label-height);
  grid-area: horizontal-label;
`,c=a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-size: 80%;
`,o=({width:t=900,height:i=300,xMin:u=0,yMin:m=0,verticalLabel:r,verticalLabelId:l,horizontalLabel:n,horizontalLabelId:s,title:d,children:p,className:h})=>e.jsxs(f,{children:[d&&e.jsx(y,{children:e.jsx(v,{children:d})}),r&&e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsx(c,{id:l,"aria-hidden":!!l,children:r})}),e.jsx(g,{})]}),e.jsx(x,{preserveAspectRatio:"xMidYMid meet",viewBox:`${u} ${m} ${t} ${i}`,className:h,style:{"--aspect-ratio":`${t} / ${i}`},role:"group",children:p}),n&&e.jsx(V,{children:e.jsx(c,{id:s,"aria-hidden":!!s,children:n})})]});o.displayName="Charts.Base";const q=o;try{Charts.Base.displayName="Charts.Base",Charts.Base.__docgenInfo={description:"",displayName:"Charts.Base",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},verticalLabel:{defaultValue:null,description:"",name:"verticalLabel",required:!1,type:{name:"string"}},verticalLabelId:{defaultValue:null,description:"",name:"verticalLabelId",required:!1,type:{name:"string"}},horizontalLabel:{defaultValue:null,description:"",name:"horizontalLabel",required:!1,type:{name:"string"}},horizontalLabelId:{defaultValue:null,description:"",name:"horizontalLabelId",required:!1,type:{name:"string"}},xMin:{defaultValue:{value:"0"},description:"",name:"xMin",required:!1,type:{name:"number"}},xMax:{defaultValue:null,description:"",name:"xMax",required:!1,type:{name:"number"}},width:{defaultValue:{value:"900"},description:"",name:"width",required:!1,type:{name:"number"}},yMin:{defaultValue:{value:"0"},description:"",name:"yMin",required:!1,type:{name:"number"}},yMax:{defaultValue:null,description:"",name:"yMax",required:!1,type:{name:"number"}},height:{defaultValue:{value:"300"},description:"",name:"height",required:!1,type:{name:"number"}}}}}catch{}export{q as B};
