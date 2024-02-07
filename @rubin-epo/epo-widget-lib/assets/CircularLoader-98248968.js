import{j as t}from"./jsx-runtime-94f6e698.js";import{a as n}from"./IconComposer-6c240040.js";import{z as c,S as l}from"./index-5cd1a1ce.js";import{c as m,s as d,n as e}from"./styled-components.browser.esm-3d9e3c21.js";const f={slow:"50s",normal:"20s",fast:"2s"},p=m`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,u=d.div.attrs(({$isVisible:a})=>({style:{opacity:a?1:0}}))`
  color: var(--turquoise50, #00bebf);
  pointer-events: none;
  opacity: 0;
  transition: opacity var(--DURATION_SLOW, 0.4s) ease-in-out;

  svg {
    animation-name: ${p};
    animation-duration: ${({$speed:a})=>f[a]};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  ${({$withOverlay:a=!1})=>a?e`
          z-index: ${c.loader};

          position: fixed;
          top: 0;
          left: 0;

          width: 100%;
          height: 100%;

          background-color: rgba(0, 0, 0, 1);

          display: flex;
          justify-content: center;
          align-items: center;
        `:e``}
`,x=({withOverlay:a=!1,isVisible:o=!1,speed:r="normal",description:i,className:s})=>t.jsxs(u,{$withOverlay:a,$isVisible:o,$speed:r,className:s,role:"status","aria-live":"assertive","aria-atomic":"true","aria-describedby":i&&"loaderDescription",children:[i&&t.jsx(l,{id:"loaderDescription",children:i}),t.jsx(n,{icon:"CircularLoader",size:100})]});x.displayName="Atomic.CircularLoader";export{x as C};
