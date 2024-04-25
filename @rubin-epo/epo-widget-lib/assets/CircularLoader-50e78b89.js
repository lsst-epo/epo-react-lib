import{c as n,s as c,n as e,j as t}from"./styled-components.browser.esm-e0114bd2.js";import{a as l}from"./IconComposer-0a5b6514.js";import{z as m,S as d}from"./index-223833fa.js";const f={slow:"50s",normal:"20s",fast:"2s"},p=n`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,u=c.div.attrs(({$isVisible:a})=>({style:{opacity:a?1:0}}))`
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
          z-index: ${m.loader};

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
`,x=({withOverlay:a=!1,isVisible:o=!1,speed:r="normal",description:i,className:s})=>t.jsxs(u,{$withOverlay:a,$isVisible:o,$speed:r,className:s,role:"status","aria-live":"assertive","aria-atomic":"true","aria-describedby":i&&"loaderDescription",children:[i&&t.jsx(d,{id:"loaderDescription",children:i}),t.jsx(l,{icon:"CircularLoader",size:100})]});x.displayName="Atomic.CircularLoader";export{x as C};
