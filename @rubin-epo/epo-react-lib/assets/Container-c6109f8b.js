import{j as o}from"./jsx-runtime-94f6e698.js";import{s}from"./styled-components.browser.esm-3d9e3c21.js";import{t as p,i as m,j as g,k as f}from"./index-d82f0c31.js";import{r as l}from"./index-8db94870.js";const v={top:"block-start",right:"inline-end",bottom:"block-end",left:"inline-start"},i=(e,t)=>`padding-${v[e]}: ${p[`PADDING_${t.toUpperCase()}`]};`,y=s.section`
  background-color: var(--section-background-color);

  ${({$paddingSize:e})=>e&&`${i("top",e)}${i("bottom",e)}`}

  + section {
    padding-top: 0;
  }
`,C=s.div`
  ${({$width:e="regular",$nested:t})=>{if(t)return"";switch(e){case"narrow":return f();case"wide":return g();default:return m()}}}
`,w=l.createContext(!1),b=()=>l.useContext(w),u=({bgColor:e="white",children:t,className:a,width:d="narrow",paddingSize:n="large",elAttributes:c})=>{const r=b();return o.jsx(y,{"data-testid":"container",style:{"--section-background-color":`var(--${e})`},$paddingSize:!r&&n!=="none"?n:void 0,...c,children:o.jsx(C,{className:a?`${a} ${a}__inner`:void 0,$width:d,$nested:r,children:t})})};u.displayName="Layout.Container";const N=u;try{Layout.Container.displayName="Layout.Container",Layout.Container.__docgenInfo={description:"",displayName:"Layout.Container",props:{bgColor:{defaultValue:{value:"white"},description:"",name:"bgColor",required:!1,type:{name:"string | number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:{value:"narrow"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"narrow"'},{value:'"regular"'},{value:'"wide"'}]}},paddingSize:{defaultValue:{value:"large"},description:`Applies padding utility class of the same name.
Default is "large", "none" removes the class entirely`,name:"paddingSize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},elAttributes:{defaultValue:null,description:"",name:"elAttributes",required:!1,type:{name:"Partial<HTMLElement>"}}}}}catch{}export{N as C,w as N};
