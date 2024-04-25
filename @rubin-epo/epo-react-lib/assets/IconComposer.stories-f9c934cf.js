import{j as n}from"./jsx-runtime-94f6e698.js";import{s as g}from"./styled-components.browser.esm-3d9e3c21.js";import{a as u}from"./argTypes-93df8e96.js";import{a as d,I as y}from"./IconComposer-fd2a8d4b.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./defaultProps-88ef9418.js";import"./index-12ae03d4.js";import"./utils-95281a95.js";const V={component:d,argTypes:{icon:{control:{type:"select"},options:Object.keys(y),description:"Name of the icon to be rendered",table:{category:"Model"}},fill:{control:"color",description:"Color to apply to SVG fill",table:{category:"Styling"}},stroke:{control:"color",description:"Color to apply to SVG strokes",table:{category:"Styling"}},size:{control:"object",description:"Size to render the SVG icon",table:{type:{summary:"string | number"},category:"Styling"}},className:{...u,table:{category:"Styling"}},svgProps:{control:"object",description:"Additional props to pass to the SVG",table:{category:"Model"}},customIcons:{control:"object",description:"Custom SVG icons that will override the included iconset",table:{type:{summary:"{[key: string]: ComponentType<SVGProps>}"},category:"Model"}}}},b=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--grid-size, 36px), 1fr));
  gap: 0.5rem;
  width: 100%;
`,S=t=>{const{size:e=36}=t;return n.jsx(b,{style:{"--grid-size":Number(e)?e:`${e}px`},children:Object.keys(y).map(s=>n.jsx(d,{...t,size:e,icon:s},s))})},r={args:{icon:"Search"}},o=S.bind({});o.args={size:36};o.parameters={controls:{exclude:/.*/g}};var c,a,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    icon: "Search"
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,l,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const {
    size = 36
  } = args;
  return <IconGrid style={{
    "--grid-size": Number(size) ? size : \`\${size}px\`
  }}>
      {Object.keys(Icons).map(key => <IconComposer key={key} {...args} size={size} icon={key} />)}
    </IconGrid>;
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const N=["Playground","AllIcons"];export{o as AllIcons,r as Playground,N as __namedExportsOrder,V as default};
