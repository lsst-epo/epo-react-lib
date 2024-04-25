import{j as u}from"./jsx-runtime-94f6e698.js";import{s as g}from"./styled-components.browser.esm-3d9e3c21.js";const y=g.img`
  display: block;
  width: 100%;
  height: auto;

  &[loading] {
    opacity: 0;
    transition: opacity 0.4s 0.1s;
  }
`,i=({image:t,title:r,...s})=>{const{url:a,url2x:m,url3x:o,width:l,height:n,altText:c}=t,p=[a,m,o].filter(e=>e!==void 0).map((e,d)=>`${e} ${d+1}x`).join(", ");return u.jsx(y,{alt:c||r,height:n,src:a,srcSet:p,width:l,...s})};i.displayName="Atomic.Image";const h=i;try{Atomic.Image.displayName="Atomic.Image",Atomic.Image.__docgenInfo={description:"",displayName:"Atomic.Image",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"ImageShape"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}export{h as I};
