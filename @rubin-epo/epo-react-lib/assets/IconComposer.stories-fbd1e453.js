import{j as s}from"./jsx-runtime-94f6e698.js";import{s as g}from"./styled-components.browser.esm-3d9e3c21.js";import{a as u}from"./argTypes-00d6a2ce.js";import{a as m,I as d}from"./IconComposer-1fded3c7.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./defaultProps-88ef9418.js";import"./index-12ae03d4.js";import"./utils-108824b3.js";const V={component:m,argTypes:{icon:{control:{type:"select"},options:Object.keys(d),description:"Name of the icon to be rendered",table:{category:"Model"}},fill:{control:"color",description:"Color to apply to SVG fill",table:{category:"Styling"}},stroke:{control:"color",description:"Color to apply to SVG strokes",table:{category:"Styling"}},size:{control:"object",description:"Size to render the SVG icon",table:{type:{summary:"string | number"},category:"Styling"}},className:{...u,table:{category:"Styling"}},svgProps:{control:"object",description:"Additional props to pass to the SVG",table:{category:"Model"}},customIcons:{control:"object",description:"Custom SVG icons that will override the included iconset",table:{type:{summary:"{[key: string]: ComponentType<SVGProps>}"},category:"Model"}}}},b=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--grid-size, 36px), 1fr));
  gap: 0.5rem;
  width: 100%;
`,S=({size:e=36,...y})=>s.jsx(b,{style:{"--grid-size":Number(e)?e:`${e}px`},children:Object.keys(d).map(t=>s.jsx(m,{...y,size:e,icon:t},t))}),r={args:{icon:"Search"}},o=S.bind({});o.args={size:36};o.parameters={controls:{exclude:/.*/g}};var n,a,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    icon: "Search"
  }
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var i,p,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`({
  size = 36,
  ...args
}) => {
  return <IconGrid style={{
    "--grid-size": Number(size) ? size : \`\${size}px\`
  }}>
      {Object.keys(Icons).map(key => <IconComposer key={key} {...args} size={size} icon={key} />)}
    </IconGrid>;
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const N=["Playground","AllIcons"];export{o as AllIcons,r as Playground,N as __namedExportsOrder,V as default};
