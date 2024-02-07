import{j as t}from"./jsx-runtime-94f6e698.js";import{s as c}from"./styled-components.browser.esm-3d9e3c21.js";import{u}from"./useTranslation-fdd24caa.js";import{P as a}from"./PlaybackControl-17421b6c.js";const m=c.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 0.5em;
  color: var(--white, #fff);
  align-items: center;
  justify-items: center;
  width: fit-content;
  font-size: 0.75em;
  text-align: center;
  z-index: 1;
`,l=({playing:n,handleStartStop:o,handleNext:i,handlePrevious:s,className:d,isDisabled:r})=>{const{t:e}=u();return t.jsxs(m,{"data-testid":"blinker-controls",className:d,children:[t.jsx(a,{"data-testid":"blinker-backward",icon:"Backward",label:e("blinker.controls.backward"),handleClick:s,disabled:r}),t.jsx(a,{"data-testid":"blinker-start-stop",icon:n?"Pause":"Play",label:e(n?"blinker.controls.pause":"blinker.controls.play"),handleClick:o,disabled:r}),t.jsx(a,{"data-testid":"blinker-forward",icon:"Forward",label:e("blinker.controls.forward"),handleClick:i,disabled:r})]})};l.displayName="Atomic.Blinker.Controls";const y=l;try{Atomic.Blinker.Controls.displayName="Atomic.Blinker.Controls",Atomic.Blinker.Controls.__docgenInfo={description:"",displayName:"Atomic.Blinker.Controls",props:{playing:{defaultValue:null,description:"",name:"playing",required:!0,type:{name:"boolean"}},handleStartStop:{defaultValue:null,description:"",name:"handleStartStop",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},handleNext:{defaultValue:null,description:"",name:"handleNext",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},handlePrevious:{defaultValue:null,description:"",name:"handlePrevious",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}}}}}catch{}export{y as C};
