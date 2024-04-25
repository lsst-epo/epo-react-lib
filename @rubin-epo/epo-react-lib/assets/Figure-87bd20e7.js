import{j as e}from"./jsx-runtime-94f6e698.js";import{s as r}from"./styled-components.browser.esm-3d9e3c21.js";import{a as c,B as s}from"./index-d82f0c31.js";const u=r.figure`
  --figcaption-gap: calc(var(--figure-padding, 20px) * 0.75);

  background-color: var(--figure-background-color);
  padding: var(--figure-padding);

  &[data-layout="horizontal"] {
    &:after {
      content: "";
      visibility: hidden;
      display: block;
      height: 0;
      clear: both;
    }
  }
`,g=r.figcaption`
  font-size: ${c("14pt")};
  line-height: 1.428;

  &[data-layout="vertical"] {
    margin-block-start: var(--figcaption-gap);
  }
`,m=r.div`
  @media (min-width: ${s}) {
    @supports (float: inline-start) {
      float: inline-start;
    }

    float: left;
    margin-inline-end: var(--figcaption-gap);
    max-inline-size: 50%;
  }
`,n=({condition:i,wrapper:t,children:a})=>e.jsx(e.Fragment,{children:i?t(a):a});n.displayName="Util.ConditionalWrapper";try{Util.ConditionalWrapper.displayName="Util.ConditionalWrapper",Util.ConditionalWrapper.__docgenInfo={description:"",displayName:"Util.ConditionalWrapper",props:{condition:{defaultValue:null,description:"",name:"condition",required:!0,type:{name:"boolean"}},wrapper:{defaultValue:null,description:"",name:"wrapper",required:!0,type:{name:"(child: ReactNode) => ReactNode"}}}}}catch{}const o=({children:i,caption:t,layout:a="vertical",withBackground:l,className:p})=>e.jsxs(u,{"data-layout":a,style:l?{"--figure-background-color":"var(--neutral10, #f5f5f5)","--figure-padding":"var(--PADDING_SMALL, 20px)"}:void 0,className:p,children:[e.jsx(n,{condition:a==="horizontal",wrapper:d=>e.jsx(m,{children:d}),children:i}),t&&e.jsx(g,{"data-layout":a,dangerouslySetInnerHTML:{__html:t}})]});o.displayName="Atomic.Figure";const h=o;try{Atomic.Figure.displayName="Atomic.Figure",Atomic.Figure.__docgenInfo={description:"",displayName:"Atomic.Figure",props:{layout:{defaultValue:{value:"vertical"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},withBackground:{defaultValue:null,description:"",name:"withBackground",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{h as F};
