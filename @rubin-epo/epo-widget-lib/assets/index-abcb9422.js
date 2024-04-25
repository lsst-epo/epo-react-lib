import{b as y}from"./styles-2fca3e33.js";import{j as l,s as c}from"./styled-components.browser.esm-e0114bd2.js";import{i as $}from"./utils-54f41c78.js";function V(e,t,i){let n;for(;;){const r=y(e,t,i);if(r===n||r===0||!isFinite(r))return[e,t];r>0?(e=Math.floor(e/r)*r,t=Math.ceil(t/r)*r):r<0&&(e=Math.ceil(e*r)/r,t=Math.floor(t*r)/r),n=r}}const u=({children:e,className:t,width:i="100%",height:n="100%"})=>l.jsx("foreignObject",{x:0,y:0,pointerEvents:"none",className:t,width:i,height:n,children:e});u.displayName="Charts.ForeignObject";const w=u;try{Charts.ForeignObject.displayName="Charts.ForeignObject",Charts.ForeignObject.__docgenInfo={description:"",displayName:"Charts.ForeignObject",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"100%"},description:"",name:"height",required:!1,type:{name:"string | number"}}}}}catch{}const _=c(w)`
  overflow: visible;
`,j=c.div`
  background-color: #dce0e3;
  border-radius: 4px;
  font-size: 0.5em;
  line-height: 1;
  padding: 2px 4px;
  text-align: center;
  position: fixed;
`,v=c.div`
  width: 0;
  height: 0;
  border-left: var(--arrow-width, 6px) solid transparent;
  border-right: var(--arrow-width, 6px) solid transparent;

  border-top: var(--arrow-width, 6px) solid #dce0e3;

  position: absolute;
  left: 0;
`,O=(e,t)=>e.includes("left")?`calc(0% + ${t}px)`:e.includes("right")?`calc(-100% - ${t}px)`:(e.includes("center"),"-50%"),C=(e,t)=>e.includes("top")?`calc(0% + ${t}px)`:e.includes("bottom")?`calc(-100% - ${t}px)`:(e.includes("center"),"-50%"),N=e=>{let t="0",i="0",n="0",r="0",a="0deg";return e.includes("center")&&(t="50%",i="50%",n="-50%",r="-50%"),e.includes("top")&&(i="0",r="-100%",a="180deg"),e.includes("right")&&(t="100%",n="-25%",a="-90deg"),e.includes("left")&&(t="0",n="-75%",a="90deg"),e.includes("bottom")&&(i="100%",r="0"),{left:t,top:i,transform:`translate(${n}, ${r}) rotate(${a})`}},f=({x:e,y:t,visible:i=!0,offset:n=5,origin:r="center bottom",children:a,className:m})=>{const h="center center",s=[...r.split(" "),...h.split(" ")].slice(0,2).join(" "),o=6,d=O(s,o+n),p=C(s,o+n),g=s.includes("center")&&s.split(" ").filter(x=>x!=="center").length===1,b=N(s);return l.jsx(_,{children:typeof e=="number"&&typeof t=="number"&&l.jsxs(j,{className:m,style:$()?{left:`${e}px`,top:`${t}px`,transform:`translate(${d},${p})`}:{transform:`translate(calc(${d} + ${e}px), calc(${p} + ${t}px))`},hidden:!i,children:[a,g&&l.jsx(v,{style:{"--arrow-size":`${o}px`,...b}})]})})};f.displayName="Charts.Tooltip";const M=f;try{Charts.Tooltip.displayName="Charts.Tooltip",Charts.Tooltip.__docgenInfo={description:"",displayName:"Charts.Tooltip",props:{x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"number"}},visible:{defaultValue:{value:"true"},description:"",name:"visible",required:!1,type:{name:"boolean"}},offset:{defaultValue:{value:"5"},description:"",name:"offset",required:!1,type:{name:"number"}},origin:{defaultValue:{value:"center bottom"},description:"",name:"origin",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{w as F,M as T,V as n};
