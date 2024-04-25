import{j as l}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{s as u,n as t}from"./styled-components.browser.esm-3d9e3c21.js";import{f as p}from"./index-d82f0c31.js";import{a as f,b as h}from"./appearance-f4837453.js";import{a as y}from"./IconComposer-fd2a8d4b.js";const g=u.button`
  ${({$styleAs:e="primary"})=>f(e)}
  ${h}

  --button-text-align: center;

  align-items: center;
  gap: 10px;
  font-size: ${p("20px","16px")};
  text-align: center;

  ${({$isBlock:e})=>e&&t`
      display: flex;
      width: 100%;
    `}

  ${({$hasIcon:e})=>e&&t`
      display: inline-flex;
      padding-inline-start: 15px;
    `}
`,b=u.span`
  flex: 1 1 auto;
  text-align: var(--button-text-align);
`,o=m.forwardRef(({children:e,icon:a,iconSize:r,isBlock:n,styleAs:i,isInactive:s,className:v,...c},d)=>l.jsxs(g,{$isBlock:n,$styleAs:i,$hasIcon:!!a,"aria-disabled":s||void 0,"data-testid":"button",...c,className:v,ref:d,children:[a&&l.jsx(y,{icon:a,size:r,"aria-hidden":e&&!0}),e&&l.jsx(b,{children:e})]}));o.displayName="Atomic.Button";const A=o;try{Atomic.Button.displayName="Atomic.Button",Atomic.Button.__docgenInfo={description:"",displayName:"Atomic.Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"Account"'},{value:'"ArrowUpFromBracket"'},{value:'"Backward"'},{value:'"BackwardStep"'},{value:'"Calendar"'},{value:'"Cancel"'},{value:'"CaretDown"'},{value:'"CheckeredFlag"'},{value:'"Checkmark"'},{value:'"CheckmarkCircle"'},{value:'"CircularLoader"'},{value:'"Chevron"'},{value:'"ChevronLeftElongated"'},{value:'"ChevronRightElongated"'},{value:'"ChevronThin"'},{value:'"Close"'},{value:'"CloseCircle"'},{value:'"Cloud"'},{value:'"Doc"'},{value:'"DocArrowRight"'},{value:'"DocInverted"'},{value:'"Email"'},{value:'"Expand"'},{value:'"Eye"'},{value:'"Facebook"'},{value:'"FloppyDisk"'},{value:'"Forward"'},{value:'"ForwardStep"'},{value:'"Globe"'},{value:'"Google"'},{value:'"Hamburger"'},{value:'"Info"'},{value:'"InfoCircle"'},{value:'"Instagram"'},{value:'"Lightbulb"'},{value:'"LinkedIn"'},{value:'"LockClosed"'},{value:'"LockOpen"'},{value:'"LogOut"'},{value:'"Mail"'},{value:'"Minus"'},{value:'"Page"'},{value:'"Pause"'},{value:'"Phone"'},{value:'"Pin"'},{value:'"Play"'},{value:'"Plus"'},{value:'"QuestionCircle"'},{value:'"RotateLeft"'},{value:'"RotateLeftWithCenter"'},{value:'"Search"'},{value:'"ShareCopyUrl"'},{value:'"ShareEmail"'},{value:'"ShareFacebook"'},{value:'"ShareToggle"'},{value:'"ShareTwitter"'},{value:'"Team"'},{value:'"Temp"'},{value:'"Thumbtack"'},{value:'"Time"'},{value:'"Timer"'},{value:'"Twitter"'},{value:'"User"'},{value:'"UserInverted"'},{value:'"Video"'},{value:'"YouTube"'},{value:'"Pdf"'},{value:'"Word"'}]}},iconSize:{defaultValue:null,description:"",name:"iconSize",required:!1,type:{name:"string | number"}},isBlock:{defaultValue:null,description:"",name:"isBlock",required:!1,type:{name:"boolean"}},styleAs:{defaultValue:null,description:"",name:"styleAs",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"educator"'}]}},isInactive:{defaultValue:null,description:`This is a disabled style without disabling the button.
Good for a11y - button is visible even if form isn't complete.`,name:"isInactive",required:!1,type:{name:"boolean"}}}}}catch{}export{A as B};
