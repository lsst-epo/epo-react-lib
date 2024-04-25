import{j as t}from"./jsx-runtime-94f6e698.js";import{s as m}from"./styled-components.browser.esm-3d9e3c21.js";import{I as p}from"./Image-7070a7b2.js";const l=m.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: ${({$aspectRatio:e})=>e.length>1?`${e[1]/e[0]*100}%}`:"100%"};

  @supports (aspect-ratio: auto) {
    padding-top: 0;
    aspect-ratio: ${({$aspectRatio:e})=>`${e[0]} / ${e[1]}`};
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
`,a=({image:e,ratio:i="8:5",className:s,title:o,...n})=>{const r=i.split(":").map(Number);return t.jsx(l,{$aspectRatio:r,className:s,children:t.jsx(p,{image:e,title:o,...n})})};a.displayName="Atomic.ResponsiveImage";const g=a;try{Atomic.ResponsiveImage.displayName="Atomic.ResponsiveImage",Atomic.ResponsiveImage.__docgenInfo={description:"",displayName:"Atomic.ResponsiveImage",props:{ratio:{defaultValue:{value:"8:5"},description:"",name:"ratio",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"ImageShape"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}export{g as R};
