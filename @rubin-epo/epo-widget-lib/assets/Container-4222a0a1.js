import{s as i,j as s}from"./styled-components.browser.esm-e0114bd2.js";import{c as u,d as p,e as $,g}from"./index-223833fa.js";import{r as c}from"./index-8db94870.js";const x={top:"block-start",right:"inline-end",bottom:"block-end",left:"inline-start"},a=(t,e)=>`padding-${x[t]}: ${u[`PADDING_${e.toUpperCase()}`]};`,m=i.section`
  background-color: var(--section-background-color);

  ${({$paddingSize:t})=>t&&`${a("top",t)}${a("bottom",t)}`}

  + section {
    padding-top: 0;
  }
`,C=i.div`
  ${({$width:t="regular",$nested:e})=>{if(e)return"";switch(t){case"narrow":return g();case"wide":return $();default:return p()}}}
`,b=c.createContext(!1),f=()=>c.useContext(b),w=({bgColor:t="white",children:e,className:o,width:d="narrow",paddingSize:n="large",elAttributes:l})=>{const r=f();return s.jsx(m,{"data-testid":"container",style:{"--section-background-color":`var(--${t})`},$paddingSize:!r&&n!=="none"?n:void 0,...l,children:s.jsx(C,{className:o?`${o} ${o}__inner`:void 0,$width:d,$nested:r,children:e})})};w.displayName="Layout.Container";export{w as C};
