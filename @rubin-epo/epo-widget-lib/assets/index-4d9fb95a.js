import{a as g,b}from"./styles-5421d856.js";import{j as u}from"./jsx-runtime-94f6e698.js";import{s as m}from"./styled-components.browser.esm-3d9e3c21.js";import{r as $}from"./index-8db94870.js";function N(e,t,a){let n;for(;;){const r=g(e,t,a);if(r===n||r===0||!isFinite(r))return[e,t];r>0?(e=Math.floor(e/r)*r,t=Math.ceil(t/r)*r):r<0&&(e=Math.ceil(e*r)/r,t=Math.floor(t*r)/r),n=r}}const _=m.div`
  background-color: #dce0e3;
  border-radius: 4px;
  font-size: 0.5em;
  line-height: 1;
  padding: 2px 4px;
  text-align: center;
  position: absolute;
`,w=m.div`
  width: 0;
  height: 0;
  border-left: var(--arrow-width, 6px) solid transparent;
  border-right: var(--arrow-width, 6px) solid transparent;

  border-top: var(--arrow-width, 6px) solid #dce0e3;

  position: absolute;
  left: 0;
`,v=(e,t)=>e.includes("left")?`calc(0% + ${t}px)`:e.includes("right")?`calc(-100% - ${t}px)`:(e.includes("center"),"-50%"),q=(e,t)=>e.includes("top")?`calc(0% + ${t}px)`:e.includes("bottom")?`calc(-100% - ${t}px)`:(e.includes("center"),"-50%"),B=e=>{let t="0",a="0",n="0",r="0",l="0deg";return e.includes("center")&&(t="50%",a="50%",n="-50%",r="-50%"),e.includes("top")&&(a="0",r="-100%",l="180deg"),e.includes("right")&&(t="100%",n="-25%",l="-90deg"),e.includes("left")&&(t="0",n="-75%",l="90deg"),e.includes("bottom")&&(a="100%",r="0"),{left:t,top:a,transform:`translate(${n}, ${r}) rotate(${l})`}},h=({x:e,y:t,visible:a=!0,origin:n="center bottom",children:r,className:l})=>{if(typeof e>"u"||typeof t>"u")return null;const d="center center",i=[...n.split(" "),...d.split(" ")].slice(0,2).join(" "),s=6,o=v(i,s),p=q(i,s),f=i.includes("center")&&i.split(" ").filter(x=>x!=="center").length===1,c=B(i);return u.jsx("foreignObject",{x:0,y:0,width:"100%",height:"100%",pointerEvents:"none",children:u.jsxs(_,{className:l,style:{transform:`translate(calc(${o} + ${e}px), calc(${p} + ${t}px))`},hidden:!a,children:[r,f&&u.jsx(w,{style:{"--arrow-size":`${s}px`,...c}})]})})};h.displayName="Charts.Tooltip";const O=h;try{Charts.Tooltip.displayName="Charts.Tooltip",Charts.Tooltip.__docgenInfo={description:"",displayName:"Charts.Tooltip",props:{x:{defaultValue:null,description:"",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!0,type:{name:"number"}},visible:{defaultValue:{value:"true"},description:"",name:"visible",required:!1,type:{name:"boolean"}},origin:{defaultValue:{value:"center bottom"},description:"",name:"origin",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const y=({data:e,yDomain:t,xScale:a,yScale:n,y:r=n(t[1])})=>e.length===0?null:u.jsx("g",{role:"list",children:e.map(({stroke:l,fill:d,width:i=8,x:s,value:o,props:p},f)=>{if(o===0)return null;const c=n(o)-n(t[0]);return $.createElement(b,{role:"listitem",height:c,y:r,width:i,x:a(s),fill:d||"var(--bar-fill, #12726D)",stroke:l||"var(--bar-stroke, transparent)",key:f,transform:`translate(-${i/2} -${c})`,...p})})});y.displayName="Charts.Bars";const k=y;try{Charts.Bars.displayName="Charts.Bars",Charts.Bars.__docgenInfo={description:"",displayName:"Charts.Bars",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Bar[]"}},yDomain:{defaultValue:null,description:"",name:"yDomain",required:!0,type:{name:"Domain"}},xScale:{defaultValue:null,description:"",name:"xScale",required:!0,type:{name:"ScaleFunction"}},yScale:{defaultValue:null,description:"",name:"yScale",required:!0,type:{name:"ScaleFunction"}},y:{defaultValue:{value:"yScale(yDomain[1])"},description:"",name:"y",required:!1,type:{name:"number"}}}}}catch{}export{k as B,O as T,N as n};
