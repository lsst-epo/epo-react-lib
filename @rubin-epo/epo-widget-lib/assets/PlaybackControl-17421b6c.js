import{j as e}from"./jsx-runtime-94f6e698.js";import{a as i}from"./IconComposer-6c240040.js";import{s as l}from"./styled-components.browser.esm-3d9e3c21.js";const o=l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: var(--button-background-color);
  color: var(--neutral95, #1f2121);
`,c=l.button`
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

    ${o} {
      outline: 1px solid var(--white, #fff);
      outline-offset: 1px;
    }
  }
  &:not(:disabled):not([aria-disabled="true"]):focus {
    outline: none;
  }
`,r=({icon:a,label:t,handleClick:u,...n})=>e.jsxs(c,{...n,onClick:u,children:[e.jsx(o,{children:e.jsx(i,{icon:a,size:15})}),e.jsx("span",{children:t})]});r.displayName="Atomic.PlaybackControl";const p=r;try{Atomic.PlaybackControl.displayName="Atomic.PlaybackControl",Atomic.PlaybackControl.__docgenInfo={description:"",displayName:"Atomic.PlaybackControl",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"Account"'},{value:'"ArrowUpFromBracket"'},{value:'"Backward"'},{value:'"BackwardStep"'},{value:'"Calendar"'},{value:'"Cancel"'},{value:'"CaretDown"'},{value:'"CheckeredFlag"'},{value:'"Checkmark"'},{value:'"CheckmarkCircle"'},{value:'"CircularLoader"'},{value:'"Chevron"'},{value:'"ChevronLeftElongated"'},{value:'"ChevronRightElongated"'},{value:'"ChevronThin"'},{value:'"Close"'},{value:'"CloseCircle"'},{value:'"Cloud"'},{value:'"Doc"'},{value:'"DocArrowRight"'},{value:'"DocInverted"'},{value:'"Email"'},{value:'"Expand"'},{value:'"Eye"'},{value:'"Facebook"'},{value:'"FloppyDisk"'},{value:'"Forward"'},{value:'"ForwardStep"'},{value:'"Globe"'},{value:'"Google"'},{value:'"Hamburger"'},{value:'"Info"'},{value:'"InfoCircle"'},{value:'"Instagram"'},{value:'"Lightbulb"'},{value:'"LinkedIn"'},{value:'"LockClosed"'},{value:'"LockOpen"'},{value:'"LogOut"'},{value:'"Mail"'},{value:'"Minus"'},{value:'"Page"'},{value:'"Pause"'},{value:'"Phone"'},{value:'"Pin"'},{value:'"Play"'},{value:'"Plus"'},{value:'"QuestionCircle"'},{value:'"RotateLeft"'},{value:'"RotateLeftWithCenter"'},{value:'"Search"'},{value:'"ShareCopyUrl"'},{value:'"ShareEmail"'},{value:'"ShareFacebook"'},{value:'"ShareToggle"'},{value:'"ShareTwitter"'},{value:'"Team"'},{value:'"Temp"'},{value:'"Thumbtack"'},{value:'"Time"'},{value:'"Timer"'},{value:'"Twitter"'},{value:'"User"'},{value:'"UserInverted"'},{value:'"Video"'},{value:'"YouTube"'},{value:'"Pdf"'},{value:'"Word"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}export{p as P};
