import{s as t,j as e}from"./styled-components.browser.esm-e0114bd2.js";import{a as c}from"./IconComposer-0a5b6514.js";const n=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: var(--button-background-color);
  color: var(--neutral95, #1f2121);
`,s=t.button`
  --button-color: var(--white, #fff);
  --button-background-color: var(--neutral15, #e6e6e6);

  background: transparent;
  border: none;
  color: var(--button-color);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75em;
  text-align: center;
  padding: 0;
  margin: 0;

  &:not(:disabled):not([aria-disabled="true"]):hover,
  &:not(:disabled):not([aria-disabled="true"]):focus-visible,
  &:not(:disabled):not([aria-disabled="true"]).focus-visible {
    text-decoration: underline;

    ${n} {
      outline: 1px solid var(--white, #fff);
      outline-offset: 1px;
    }
  }
  &:not(:disabled):not([aria-disabled="true"]):focus {
    outline: none;
  }
`,r=({icon:o,label:a,handleClick:i,...l})=>e.jsxs(s,{...l,onClick:i,children:[e.jsx(n,{children:e.jsx(c,{icon:o,size:15})}),e.jsx("span",{children:a})]});r.displayName="Atomic.PlaybackControl";const p=r;try{Atomic.PlaybackControl.displayName="Atomic.PlaybackControl",Atomic.PlaybackControl.__docgenInfo={description:"",displayName:"Atomic.PlaybackControl",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}export{p as P};
