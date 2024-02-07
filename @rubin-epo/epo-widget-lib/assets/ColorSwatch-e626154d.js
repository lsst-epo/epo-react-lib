import{j as a}from"./jsx-runtime-94f6e698.js";import{S as n}from"./index-5cd1a1ce.js";import{n as s,s as c}from"./styled-components.browser.esm-3d9e3c21.js";const i=s`
  width: 11px;
  height: 11px;
`,l=s`
  width: var(--PADDING_SMALL, 20px);
  height: var(--PADDING_SMALL, 20px);
`,p=s`
  width: calc(var(--PADDING_SMALL, 20px) * 1.5);
  height: calc(var(--PADDING_SMALL, 20px) * 1.5);
`,h={small:i,normal:l,large:p},x=c.span.attrs(({color:t})=>({style:{backgroundColor:t}}))`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--black, #000);
  transition: background-color var(--DURATION, 0.2s) ease-in-out;

  ${({size:t})=>h[t]}
`,d=({className:t,content:o,color:r,size:e="normal"})=>a.jsxs("span",{className:t,children:[a.jsx(x,{size:e,color:r,"data-testid":"color-swatch"}),a.jsx(n,{children:o||r})]});d.displayName="Atomic.ColorSwatch";export{d as C};
