import{s as e,n as o,j as s}from"./styled-components.browser.esm-e0114bd2.js";import{r as u}from"./index-8db94870.js";import{a as f}from"./IconComposer-0a5b6514.js";import{a as c,b as B,f as $}from"./index-223833fa.js";const g=e.button`
  ${({$styleAs:t="primary"})=>c(t)}
  ${B}

  --button-text-align: center;

  align-items: center;
  gap: 10px;
  font-size: ${$("20px","16px")};
  text-align: center;

  ${({$isBlock:t})=>t&&o`
      display: flex;
      width: 100%;
    `}

  ${({$hasIcon:t})=>t&&o`
      display: inline-flex;
      padding-inline-start: 15px;
    `}
`,b=e.span`
  flex: 1 1 auto;
  text-align: var(--button-text-align);
`,n=u.forwardRef(({children:t,icon:a,iconSize:i,isBlock:r,styleAs:p,isInactive:x,className:d,...l},m)=>s.jsxs(g,{$isBlock:r,$styleAs:p,$hasIcon:!!a,"aria-disabled":x||void 0,"data-testid":"button",...l,className:d,ref:m,children:[a&&s.jsx(f,{icon:a,size:i,"aria-hidden":t&&!0}),t&&s.jsx(b,{children:t})]}));n.displayName="Atomic.Button";n.__docgenInfo={description:"",methods:[],displayName:"Atomic.Button"};export{n as B};
