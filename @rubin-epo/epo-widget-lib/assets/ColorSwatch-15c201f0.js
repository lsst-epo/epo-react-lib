import{n as s,s as n,j as a}from"./styled-components.browser.esm-e0114bd2.js";import{S as c}from"./index-223833fa.js";const i=s`
  width: 11px;
  height: 11px;
`,l=s`
  width: var(--PADDING_SMALL, 20px);
  height: var(--PADDING_SMALL, 20px);
`,h=s`
  width: calc(var(--PADDING_SMALL, 20px) * 1.5);
  height: calc(var(--PADDING_SMALL, 20px) * 1.5);
`,p={small:i,normal:l,large:h},x=n.span.attrs(({color:t})=>({style:{backgroundColor:t}}))`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--black, #000);
  transition: background-color var(--DURATION, 0.2s) ease-in-out;

  ${({size:t})=>t&&p[t]}
`,d=({className:t,content:o,color:r,size:e="normal"})=>a.jsxs("span",{className:t,children:[a.jsx(x,{size:e,color:r,"data-testid":"color-swatch"}),a.jsx(c,{children:o||r})]});d.displayName="Atomic.ColorSwatch";export{d as C};
