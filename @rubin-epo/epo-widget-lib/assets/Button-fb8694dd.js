import{j as s}from"./jsx-runtime-94f6e698.js";import{r as d}from"./index-8db94870.js";import{a as u}from"./IconComposer-6c240040.js";import{s as e,n as o}from"./styled-components.browser.esm-3d9e3c21.js";import{a as f,b as c,f as $}from"./index-5cd1a1ce.js";const B=e.button`
  ${({$styleAs:t="primary"})=>f(t)}
  ${c}

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
`,g=e.span`
  flex: 1 1 auto;
  text-align: var(--button-text-align);
`,b=d.forwardRef(({children:t,icon:a,iconSize:n,isBlock:i,styleAs:r,isInactive:p,className:x,...l},m)=>s.jsxs(B,{$isBlock:i,$styleAs:r,$hasIcon:!!a,"aria-disabled":p||void 0,"data-testid":"button",...l,className:x,ref:m,children:[a&&s.jsx(u,{icon:a,size:n,"aria-hidden":t&&!0}),t&&s.jsx(g,{children:t})]}));b.displayName="Atomic.Button";export{b as B};
