import{s as a,j as t}from"./styled-components.browser.esm-e0114bd2.js";import{T as m}from"./Trans-b99fee83.js";const g=a.div`
  background-color: var(--neutral20, #dce0e3);
  border-radius: 5px;
  color: var(--neutral95, "#1F2121");
  display: grid;
  grid-template-areas: "header" "time";
  font-size: 0.75em;
  font-weight: var(--FONT_WEIGHT_NORMAL, 400);
  min-width: 70px;
  max-width: fit-content;
`,x=a.h2`
  border-bottom: 1px solid var(--neutral95, "#1F2121");
  font-weight: inherit;
  font-size: 1em;
  line-height: 1;
  grid-area: header;
  text-align: center;
  margin: 0;
  padding: 0.5em 0.75em;
`,T=a.time`
  grid-area: time;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
`,b=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.25em 0.5em;
  line-height: 1.6;

  &:not(:first-of-type) {
    border-left: 1px solid var(--neutral95, "#1F2121");
  }
`,v=a.span`
  font-size: 1.167em;
`,_=a.span`
  font-size: 0.6em;
`,o=({year:l,day:c,hour:p,minute:u,second:f,className:h})=>{const n={year:l,day:c,hour:p,minute:u,second:f},d=Object.keys(n).filter(e=>n[e]!==void 0).map(e=>({interval:e,time:n[e]})),y=d.reduce((e,i)=>{const{interval:r,time:s=0}=i;return`${e}${s}${r.charAt(0).toUpperCase()}`},"PT");return t.jsxs(g,{className:h,children:[t.jsx(x,{id:"elapsedTimeHeader",children:t.jsx(m,{children:"elapsed_time.title"})}),t.jsx(T,{dateTime:y,"aria-labelledby":"elapsedTimeHeader",children:d.map(e=>{const{interval:i,time:r=0}=e,s=`elapsed_time.step.${i}`;return t.jsxs(b,{children:[t.jsx(v,{children:r}),t.jsx(_,{children:t.jsx(m,{i18nKey:s,count:r})})]},i)})})]})};o.displayName="Atomic.ElapsedTime";const N=o;try{Atomic.ElapsedTime.displayName="Atomic.ElapsedTime",Atomic.ElapsedTime.__docgenInfo={description:"",displayName:"Atomic.ElapsedTime",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},year:{defaultValue:null,description:"",name:"year",required:!1,type:{name:"number"}},day:{defaultValue:null,description:"",name:"day",required:!1,type:{name:"number"}},hour:{defaultValue:null,description:"",name:"hour",required:!1,type:{name:"number"}},minute:{defaultValue:null,description:"",name:"minute",required:!1,type:{name:"number"}},second:{defaultValue:null,description:"",name:"second",required:!1,type:{name:"number"}}}}}catch{}export{N as E};
