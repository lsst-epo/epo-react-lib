import{j as e}from"./jsx-runtime-94f6e698.js";import{s as p}from"./styled-components.browser.esm-3d9e3c21.js";import{r as o}from"./index-8db94870.js";import{p as S,b as E}from"./appearance-f4837453.js";import{a as k}from"./IconComposer-fd2a8d4b.js";import{u as G,S as z}from"./index-6821fc4b.js";import{m as U,f as Q}from"./index-d82f0c31.js";import"./_commonjsHelpers-042e6b4d.js";import"./defaultProps-88ef9418.js";import"./index-12ae03d4.js";import"./utils-95281a95.js";import"./open-closed-9da3c4c0.js";import"./use-is-mounted-ce5ca9dd.js";const w=o.createContext(null),K=p.div`
  --menu-padding: var(--PADDING_SMALL, 20px);

  background-color: var(--neutral95, #1f2121);
  box-sizing: border-box;
  color: var(--white, #fff);
  padding: var(--menu-padding);
  height: 100%;
  width: 20rem;
  max-width: 100%;
  overflow-y: auto;

  & > * + * {
    margin-block-start: calc(var(--menu-padding) / 2);
  }

  @media screen and (min-width: ${U}) {
    --menu-padding: var(--PADDING_MEDIUM, 40px);
  }
`,J=p.div`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid var(--white, #fff);
  padding-block-end: calc(var(--menu-padding) / 2);

  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: min-content min-content;
  grid-template-areas:
    "title close"
    "callToAction close";
  align-items: center;
`,Y=p.h2`
  font-weight: var(--FONT_WEIGHT_NORMAL, 400);
  font-size: 0.8rem;
  grid-area: title;
  margin: 0;
  padding: 0;
`,X=p.span`
  font-weight: var(--FONT_WEIGHT_BOLD, 600);
  grid-area: callToAction;
`,Z=p.button`
  ${S()}
  aspect-ratio: 1;
  color: var(--white, #fff);
  display: flex;
  align-items: center;
  grid-area: close;
  padding: 0.25rem;

  &:not(:disabled):not([aria-disabled="true"]):hover,
  &:not(:disabled):not([aria-disabled="true"]):focus,
  &:not(:disabled):not([aria-disabled="true"]):focus-visible,
  &:not(:disabled):not([aria-disabled="true"]).focus-visible {
    outline: 3px solid var(--white, #fff);
  }
`,N=({title:t,callToAction:n,id:a,isOpen:r=!1,isSubMenuOpen:u=!1,onOpenCallback:i,onCloseCallback:d,children:c})=>{const f=o.useRef(null),s=o.useRef(null),l=o.useRef(new Set).current,[h,y]=o.useState(0),M=r&&!u,B=o.useMemo(()=>({menuItems:l,currentIndex:h}),[l,h]);o.useEffect(()=>{M&&g(h)},[u]);const O=()=>{if(M)return d&&d()},D=()=>{const m=(h+1)%l.size;g(m)},H=()=>{const m=(h-1+l.size)%l.size;g(m)},P=()=>{g(0)},F=()=>{const m=l.size-1;g(m)},g=m=>{y(m);const C=Array.from(l)[m];C?C.focus():s.current&&s.current.focus()};function W(m){if(M){const{key:j}=m,L={ArrowDown:D,ArrowUp:H,Home:P,End:F}[j];L&&(m.preventDefault(),L())}}const $=`slideOutMenu-${a}`,_=`slideOutMenuTitle-${a}`;return G(W),e.jsx(z,{onCloseCallback:O,isOpen:r,onOpenCallback:i,children:e.jsxs(K,{ref:f,role:"menu","aria-labelledby":_,id:$,children:[e.jsxs(J,{children:[e.jsx(Y,{id:_,ref:s,tabIndex:l.size===0?0:void 0,children:t}),e.jsx(X,{children:n}),e.jsx(Z,{type:"button",onClick:()=>O(),tabIndex:-1,children:e.jsx(k,{icon:"close",size:25})})]}),e.jsx(w.Provider,{value:B,children:c})]})})};N.displayName="Layout.SlideoutMenu";const x=N;try{Layout.SlideoutMenu.displayName="Layout.SlideoutMenu",Layout.SlideoutMenu.__docgenInfo={description:"",displayName:"Layout.SlideoutMenu",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},callToAction:{defaultValue:null,description:"",name:"callToAction",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},isSubMenuOpen:{defaultValue:{value:"false"},description:"",name:"isSubMenuOpen",required:!1,type:{name:"boolean"}},onOpenCallback:{defaultValue:null,description:"",name:"onOpenCallback",required:!1,type:{name:"(() => void)"}},onCloseCallback:{defaultValue:null,description:"",name:"onCloseCallback",required:!1,type:{name:"(() => void)"}}}}}catch{}const ee=p.div`
  display: flex;
  flex-direction: column;
`,te=p.h3`
  font-weight: var(--FONT_WEIGHT_NORMAL, 400);
  font-size: 1rem;
  margin: 0;
`,ne=p.hr`
  background-color: var(--white, #fff);
  border: 0;
  height: 1px;
`,q=({title:t,children:n})=>e.jsxs(e.Fragment,{children:[e.jsxs(ee,{role:"group",children:[e.jsx(te,{children:t}),n]}),e.jsx(ne,{})]});q.displayName="Layout.SlideoutMenu.MenuGroup";const I=q;try{Layout.SlideoutMenu.MenuGroup.displayName="Layout.SlideoutMenu.MenuGroup",Layout.SlideoutMenu.MenuGroup.__docgenInfo={description:"",displayName:"Layout.SlideoutMenu.MenuGroup",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}const ae=p.div`
  display: flex;
  padding: 0;
  margin: 0;

  &:first-of-type {
    margin-block-start: calc(var(--menu-padding) / 2);
  }
`,oe=p.button`
  ${E}

  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: ${Q("20px","16px")};
  border: none;
  stroke-width: 0.25px;
  width: 100%;
  padding-inline-start: 15px;

  &:not(:disabled):not([aria-disabled="true"]):hover {
    text-decoration: underline;
  }
  &:not(:disabled):not([aria-disabled="true"]):focus,
  &:not(:disabled):not([aria-disabled="true"]):focus-visible,
  &:not(:disabled):not([aria-disabled="true"]).focus-visible {
    --button-border-color: var(--white, #fff);
  }
`;function b({children:t,icon:n,text:a,type:r="button",...u}){const i=o.useContext(w),d=o.useRef();if(!i)throw new Error("Menu item must be used within a Menu Context");const{menuItems:c,currentIndex:f}=i;o.useEffect(()=>{const l=d.current;return l&&c&&c.add(l),()=>{c&&l&&c.delete(l)}},[c,f]);const s=d.current&&[...c].indexOf(d.current)===f;return e.jsxs(ae,{role:"none",children:[e.jsxs(oe,{...u,as:r==="link"?"a":void 0,ref:d,role:"menuitem",tabIndex:s?0:-1,children:[e.jsx(k,{icon:n,size:20}),a]}),t]})}b.displayName="Layout.SlideoutMenu.MenuItem";try{Layout.SlideoutMenu.MenuItem.displayName="Layout.SlideoutMenu.MenuItem",Layout.SlideoutMenu.MenuItem.__docgenInfo={description:"",displayName:"Layout.SlideoutMenu.MenuItem",props:{type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"link"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"Account"'},{value:'"ArrowUpFromBracket"'},{value:'"Backward"'},{value:'"BackwardStep"'},{value:'"Calendar"'},{value:'"Cancel"'},{value:'"CaretDown"'},{value:'"CheckeredFlag"'},{value:'"Checkmark"'},{value:'"CheckmarkCircle"'},{value:'"CircularLoader"'},{value:'"Chevron"'},{value:'"ChevronLeftElongated"'},{value:'"ChevronRightElongated"'},{value:'"ChevronThin"'},{value:'"Close"'},{value:'"CloseCircle"'},{value:'"Cloud"'},{value:'"Doc"'},{value:'"DocArrowRight"'},{value:'"DocInverted"'},{value:'"Email"'},{value:'"Expand"'},{value:'"Eye"'},{value:'"Facebook"'},{value:'"FloppyDisk"'},{value:'"Forward"'},{value:'"ForwardStep"'},{value:'"Globe"'},{value:'"Google"'},{value:'"Hamburger"'},{value:'"Info"'},{value:'"InfoCircle"'},{value:'"Instagram"'},{value:'"Lightbulb"'},{value:'"LinkedIn"'},{value:'"LockClosed"'},{value:'"LockOpen"'},{value:'"LogOut"'},{value:'"Mail"'},{value:'"Minus"'},{value:'"Page"'},{value:'"Pause"'},{value:'"Phone"'},{value:'"Pin"'},{value:'"Play"'},{value:'"Plus"'},{value:'"QuestionCircle"'},{value:'"RotateLeft"'},{value:'"RotateLeftWithCenter"'},{value:'"Search"'},{value:'"ShareCopyUrl"'},{value:'"ShareEmail"'},{value:'"ShareFacebook"'},{value:'"ShareToggle"'},{value:'"ShareTwitter"'},{value:'"Team"'},{value:'"Temp"'},{value:'"Thumbtack"'},{value:'"Time"'},{value:'"Timer"'},{value:'"Twitter"'},{value:'"User"'},{value:'"UserInverted"'},{value:'"Video"'},{value:'"YouTube"'},{value:'"Pdf"'},{value:'"Word"'}]}}}}}catch{}const ie=p.div`
  padding: 0;
  margin: 0;

  &:first-of-type {
    margin-block-start: calc(var(--menu-padding) / 2);
  }
`,re=p.div`
  ${S()}
  ${E}

  display: flex;
  align-items: center;
  padding-inline: 0;
  width: 100%;
  position: relative;

  &::before {
    background-color: var(--white, #fff);
    content: "";
    border-radius: 15px;
    display: inline-block;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
  }

  &[aria-checked="true"] {
    &::after {
      background-color: var(--turquoise55, #009fa1);
      content: "";
      border-radius: 10px;
      width: 20px;
      height: 20px;
      position: absolute;
      right: 5px;
    }
  }

  &:not(:disabled):not([aria-disabled="true"]):hover {
    text-decoration: underline;
  }
  &:not(:disabled):not([aria-disabled="true"]):focus,
  &:not(:disabled):not([aria-disabled="true"]):focus-visible,
  &:not(:disabled):not([aria-disabled="true"]).focus-visible {
    outline: 3px solid var(--white, #fff);
    outline-offset: 1px;
  }
`,V=({text:t,isChecked:n,onCheckCallback:a})=>{const r=o.useContext(w),u=o.useRef(null);if(!r)throw new Error("Menu item must be used within a Menu Context");const{menuItems:i,currentIndex:d}=r;o.useEffect(()=>{const s=u.current;return s&&i&&i.add(s),()=>{i&&s&&i.delete(s)}},[i,d]);const c=u.current&&[...i].indexOf(u.current)===d;function f(s){if(!n&&c){const{code:l}=s,y={Space:()=>a&&a(),Enter:()=>a&&a(!0)}[l];y&&(s.preventDefault(),y())}}return G(f),e.jsx(ie,{role:"none",children:e.jsx(re,{ref:u,role:"menuitemradio",tabIndex:c?0:-1,"aria-checked":n,onClick:()=>a&&a(),children:t})})};V.displayName="Layout.SlideoutMenu.MenuItemRadio";const le=V;try{Layout.SlideoutMenu.MenuItemRadio.displayName="Layout.SlideoutMenu.MenuItemRadio",Layout.SlideoutMenu.MenuItemRadio.__docgenInfo={description:"",displayName:"Layout.SlideoutMenu.MenuItemRadio",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},onCheckCallback:{defaultValue:null,description:"",name:"onCheckCallback",required:!0,type:{name:"(close?: boolean | undefined) => void"}}}}}catch{}const we={component:x,argTypes:{title:{type:{name:"string",required:!0},description:"Title that will be placed into the heading of the menu.",table:{type:{summary:"string"}}},callToAction:{type:{name:"string",required:!0},description:"Subtitle that will be placed beneath the heading of the menu",table:{type:{summary:"string"}}},id:{type:{name:"string",required:!0},description:"Unique identifier for this menu",table:{type:{summary:"string"}}},isOpen:{control:"boolean",description:"Open state of the menu",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},isSubMenuOpen:{control:"boolean",description:"Open state of the a submenu within the menu",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},onCloseCallback:{action:"Closed menu",description:"Callback that will occur when the close button is clicked or Escape pressed.",table:{type:{summary:"() => void"}}},onOpenCallback:{action:"Opened menu",description:"Callback that will occur as soon as `isOpen` is changed to `true`",table:{type:{summary:"() => void"}}}}},ue=p.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`,se=p.button`
  ${S()}
  display: flex;
  align-items: center;
  padding: 0.25rem;
  margin: 2rem;

  &:not(:disabled):not([aria-disabled="true"]):hover,
  &:not(:disabled):not([aria-disabled="true"]):focus-visible,
  &:not(:disabled):not([aria-disabled="true"]):focus,
  &:not(:disabled):not([aria-disabled="true"]).focus-visible {
    outline: 3px solid var(--black, #000);
  }
`,de=({onOpenCallback:t,onCloseCallback:n})=>{const[a,r]=o.useState(!1),[u,i]=o.useState("en"),d=[{locale:"en",label:"English"},{locale:"es",label:"Español"}],c="language";return e.jsx(b,{icon:"Globe",text:"Language selection",onClick:()=>r(!0),"aria-expanded":a,"aria-haspopup":"true","aria-controls":c,children:e.jsx(x,{isOpen:a,id:c,title:"Language selection",callToAction:"Choose your language",onOpenCallback:()=>t&&t(),onCloseCallback:()=>(r(!1),n&&n()),children:d.map(({locale:f,label:s})=>e.jsx(le,{text:s,isChecked:u===f,onCheckCallback:l=>{if(i(f),l)return r(!1),n&&n()}},f))})})},ce=({onOpenCallback:t,onCloseCallback:n})=>{const[a,r]=o.useState(!1),u="acknowledgements";return e.jsx(b,{icon:"Info",text:"Acknowledgements",onClick:()=>r(!0),"aria-expanded":a,"aria-haspopup":"true","aria-controls":u,children:e.jsxs(x,{isOpen:a,id:u,title:"About this investigation",callToAction:"Acknowledgments and Credits",onOpenCallback:()=>t&&t(),onCloseCallback:()=>(r(!1),n&&n()),children:[e.jsx("p",{children:"This investigation was created by the Education and Public Outreach program of the Vera C. Rubin Observatory Construction project. In an effort to create and test this investigation prior to the start of Operations, we rely on the data of our scientific colleagues. In particular, this investigation has made use of data and/or services provided by the International Astronomical Union’s Minor Planet Center."}),e.jsx("p",{children:"We thank the following instructors who volunteered to pilot test this investigation:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Chris Bolhuis, Hudsonville High School, Hudsonville, MI"}),e.jsx("li",{children:"Alice Few, Pierce College Ft. Steilacoom, Lakewood, WA and Tacoma Community College, Tacoma, WA"}),e.jsx("li",{children:"Scott Hildreth, Chabot College, Hayward, CA"}),e.jsx("li",{children:"Joe Muise, St. Thomas More Collegiate, Burnaby, British Columbia"}),e.jsx("li",{children:"Denine Voegeli, Plainview-Elgin-Millville Jr. High School, Elgin, MN"})]}),e.jsx("p",{children:"The team would also like to thank Siegfried Eggl, Henry Hsieh, and Mike Kelley for useful scientific discussions in the development of this investigation."})]})})},pe=({...t})=>{const n=o.useRef(null),[a,r]=o.useState(t.isOpen||!0),[u,i]=o.useState(!1),d=()=>(t.onCloseCallback&&t.onCloseCallback(),n.current&&n.current.focus(),r(!1));return e.jsxs(ue,{children:[e.jsx(se,{onClick:()=>r(!0),"aria-haspopup":"menu","aria-controls":t.id,ref:n,children:e.jsx(k,{icon:"hamburger"})}),e.jsxs(x,{...t,isOpen:a,isSubMenuOpen:u,onCloseCallback:()=>d(),children:[e.jsxs(I,{title:"Settings",children:[e.jsx(de,{onOpenCallback:()=>i(!0),onCloseCallback:()=>i(!1)}),e.jsx(b,{icon:"ArrowUpFromBracket",text:"Share this investigation"}),e.jsx(b,{type:"link",href:"https://rubinobservatory.org",icon:"QuestionCircle",text:"Help",target:"__blank"}),e.jsx(ce,{onOpenCallback:()=>i(!0),onCloseCallback:()=>i(!1)})]}),e.jsx(I,{title:"Quick access for students",children:e.jsx(b,{icon:"LogOut",text:"Log out"})}),e.jsx(I,{title:"Quick access for educators",children:e.jsx(b,{icon:"User",text:"Access educator mode"})})]})]})},v=pe.bind({});v.args={title:"Main menu",callToAction:"Settings and more",id:"mainMenu"};var T,A,R;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`({
  ...args
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(args.isOpen || true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const handleClose = () => {
    args.onCloseCallback && args.onCloseCallback();
    buttonRef.current && buttonRef.current.focus();
    return setIsOpen(false);
  };
  return <Wrapper>
      <IconButton onClick={() => setIsOpen(true)} aria-haspopup="menu" aria-controls={args.id} ref={buttonRef}>
        <IconComposer icon="hamburger" />
      </IconButton>
      <SlideoutMenu {...args} isOpen={isOpen} isSubMenuOpen={isSubMenuOpen} onCloseCallback={() => handleClose()}>
        <MenuGroup title="Settings">
          <LanguageSubmenu onOpenCallback={() => setIsSubMenuOpen(true)} onCloseCallback={() => setIsSubMenuOpen(false)} />
          <MenuItem icon="ArrowUpFromBracket" text="Share this investigation" />
          <MenuItem type="link" href="https://rubinobservatory.org" icon="QuestionCircle" text="Help" target="__blank" />
          <AcknowledgementsSubmenu onOpenCallback={() => setIsSubMenuOpen(true)} onCloseCallback={() => setIsSubMenuOpen(false)} />
        </MenuGroup>
        <MenuGroup title="Quick access for students">
          <MenuItem icon="LogOut" text="Log out" />
        </MenuGroup>
        <MenuGroup title="Quick access for educators">
          <MenuItem icon="User" text="Access educator mode" />
        </MenuGroup>
      </SlideoutMenu>
    </Wrapper>;
}`,...(R=(A=v.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const Oe=["Primary"];export{v as Primary,Oe as __namedExportsOrder,we as default};
