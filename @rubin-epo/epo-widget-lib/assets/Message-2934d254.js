import{j as a,s as c}from"./styled-components.browser.esm-e0114bd2.js";import{r as l}from"./index-8db94870.js";const o=({children:e,className:t,forIds:s})=>a.jsx("output",{htmlFor:s==null?void 0:s.join(" "),className:t,children:e});o.displayName="Atomic.Toast";const d=c(o)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1ch;
  width: 100%;
  height: ${({$isOpen:e})=>e?24:0}px;
  overflow: hidden;
  background-color: var(--black, #000);
  color: #30e0e3;
  font-size: 1rem;
  font-weight: var(--FONT_WEIGHT_BOLD, 600);
  text-align: center;
  transition: height ease var(--DURATION_SLOW, 0.4s);

  @media (prefers-reduced-motion) {
    transition: unset;
  }
`,r=({children:e,isVisible:t=!1,onMessageChangeCallback:s,forIds:i})=>(l.useEffect(()=>{if(t){const n=setTimeout(()=>{s&&s()},1800);return()=>clearTimeout(n)}},[e,t]),a.jsx(d,{forIds:i,$isOpen:t,children:e}));r.displayName="Widgets.SourceSelector.Message";const p=r;try{Widgets.SourceSelector.Message.displayName="Widgets.SourceSelector.Message",Widgets.SourceSelector.Message.__docgenInfo={description:"",displayName:"Widgets.SourceSelector.Message",props:{isVisible:{defaultValue:{value:"false"},description:"",name:"isVisible",required:!1,type:{name:"boolean"}},onMessageChangeCallback:{defaultValue:null,description:"",name:"onMessageChangeCallback",required:!0,type:{name:"() => void"}},forIds:{defaultValue:null,description:`list of ID's that contributed to this status message eg. if clicking on \\<svg id="mySvg"/> created a message, pass ['mySvg']`,name:"forIds",required:!1,type:{name:"string[]"}}}}}catch{}export{p as M};
