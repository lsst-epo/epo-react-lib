import{j as o}from"./jsx-runtime-94f6e698.js";import{r as y}from"./index-8db94870.js";import{r as w,t as r,c as u}from"./index-d82f0c31.js";import{s as l,n as i}from"./styled-components.browser.esm-3d9e3c21.js";import{C as k}from"./Container-c6109f8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-12ae03d4.js";import"./appearance-f4837453.js";const g={none:r.neutral10,blue:r.blue20,green:r.green05,orange:r.orange10,paleOrange:r.orange04},s={none:r.turquoise80,blue:r.turquoise90,green:r.turquoise90,orange:r.turquoise80,paleOrange:r.turquoise80},T=l.dl`
  display: grid;
  grid-template-columns: 212px 1fr;
  gap: 5px;

  ${w("grid-template-columns: 1fr;",r.BREAK_PHABLET)}
`,m=i`
  a:not([class^="c-"]) {
    color: var(--SimpleTable-link-color, ${s.orange});
    text-decoration: underline;
  }
`,h=l.dt`
  ${u}
  ${m}

  margin: 0;
  padding: 20px;
  padding-inline-end: 6px;
  padding-block-end: 22px;

  ${({$color:e="none"})=>i`
      background: ${g[e]};
      --SimpleTable-link-color: ${s[e]};
    `}
`,C=l.dd`
  ${u}
  ${m}


  margin: 0;
  padding: 20px;
  padding-block-end: 22px;

  ${({$color:e="none"})=>i`
      background: ${g[e]};
      --SimpleTable-link-color: ${s[e]};
    `}
`,t=({simpleTable:e})=>e?o.jsx(k,{width:"narrow",children:o.jsx(T,{role:"list",children:e.map((n,b)=>o.jsxs(y.Fragment,{children:[o.jsx(h,{$color:n.rowColor,dangerouslySetInnerHTML:{__html:n.rowTitle}}),o.jsx(C,{$color:n.rowColor,dangerouslySetInnerHTML:{__html:n.rowContent}})]},b))})}):null,f=t;try{t.displayName="SimpleTable",t.__docgenInfo={description:"",displayName:"SimpleTable",props:{simpleTable:{defaultValue:null,description:"",name:"simpleTable",required:!0,type:{name:"SimpleTableRow[]"}}}}}catch{}const x=[{rowColor:"none",rowTitle:"Default background",rowContent:"<p>Circumpolar black hole syzygy dwarf star wavelength totality meridian ice giant free fall nadir parsec waning day</p><a href='https://rubinobservatory.org/' target='_blank'>Rubin Observatory</a>"},{rowColor:"blue",rowTitle:"Blue background",rowContent:"<p>eclipse muttnik exoplanet moon plane of the ecliptic conjunction Pluto</p><a href='https://rubinobservatory.org/' target='_blank'>Rubin Observatory</a>"},{rowColor:"green",rowTitle:"Green background",rowContent:"<p>gravity gravitational lens retrograde cluster gibbous moon occultation</p><a href='https://rubinobservatory.org/' target='_blank'>Rubin Observatory</a>"},{rowColor:"orange",rowTitle:"Orange background",rowContent:"<p>celestial equator kiloparsec Messier object celestial binary star</p><a href='https://rubinobservatory.org/' target='_blank'>Rubin Observatory</a>"},{rowColor:"paleOrange",rowTitle:"Pale orange background",rowContent:"<p>hypernova translunar sky lens Kirkwood gaps meteor gravitation singularity new moon density culmination event horizon north star opposition Earthshine axial tilt solar</p><a href='https://rubinobservatory.org/' target='_blank'>Rubin Observatory</a>"},{rowColor:"none",rowTitle:"Default background",rowContent:"<ul><li>I am an unordered list</li><li>I am an unordered list</li><li>I am an unordered list</li></ul>"},{rowColor:"none",rowTitle:"Default background",rowContent:"<ol><li>I am an ordered list</li><li>I am an ordered list</li><li>I am an ordered list</li></ol>"}],q={component:f,argTypes:{simpleTable:{}}},a={args:{simpleTable:x}};var p,c,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    simpleTable: MockTableContent
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const E=["Primary"];export{a as Primary,E as __namedExportsOrder,q as default};
