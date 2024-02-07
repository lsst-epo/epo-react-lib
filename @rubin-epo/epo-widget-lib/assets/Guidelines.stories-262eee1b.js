import{j as n}from"./jsx-runtime-94f6e698.js";import{s as u}from"./styled-components.browser.esm-3d9e3c21.js";import{G as c}from"./index-a1b6ccbb.js";import{B as p}from"./index-2efd795f.js";import{X as y}from"./index-bf005cc4.js";import{Y as g}from"./index-fe8f0cfd.js";import{g as o}from"./utils-4cb73340.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./styles-5421d856.js";const z={argTypes:{direction:{control:"radio",options:["horizontal","vertical"],table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"horizontal"}}},guides:{control:"number",description:"Number of guides to render",table:{type:{summary:"number"},defaultValue:{summary:0}}},xDomain:{description:"Domain of the x axis",control:"object",table:{type:{summary:"number[]"},defaultValue:{summary:"[0,1]"}}},xScale:{description:"Scaling function for the x axis",table:{type:{summary:"(value: number) => number"},defaultValue:{summary:"(v) => v"}}},yDomain:{description:"Domain of the y axis",control:"object",table:{type:{summary:"number[]"},defaultValue:{summary:"[0,1]"}}},yScale:{description:"Scaling function for the y axis",table:{type:{summary:"(value: number) => number"},defaultValue:{summary:"(v) => v"}}}},component:c},x=u.div`
  display: grid;
  gap: 1em;
  grid-template-rows: 400px 1fr;
  justify-items: center;
`,h=a=>{const d=[25,375],l=[0+25,400-25],i=o(a.xDomain,d),t=o(a.yDomain,l);return n.jsx(x,{children:n.jsxs(p,{minX:0,width:400,height:400,children:[n.jsx(y,{ticks:a.guides,y:t(a.yDomain[1]),xDomain:a.xDomain,xScale:i}),n.jsx(g,{ticks:a.guides,x:i(a.xDomain[0]),yDomain:a.yDomain,yScale:t}),n.jsx(c,{...a,xScale:i,yScale:t})]})})},e=h.bind({});e.args={guides:10,xDomain:[0,400],yDomain:[0,400]};var r,s,m;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const width = 400;
  const height = 400;
  const padding = 25;
  const xRange = [0 + padding, width - padding];
  const yRange = [0 + padding, height - padding];
  const xScale = getLinearScale(args.xDomain, xRange);
  const yScale = getLinearScale(args.yDomain, yRange);
  return <Container>
      <Chart minX={0} {...{
      width,
      height
    }}>
        <XAxis ticks={args.guides} y={yScale(args.yDomain[1])} xDomain={args.xDomain} {...{
        xScale
      }} />
        <YAxis ticks={args.guides} x={xScale(args.xDomain[0])} yDomain={args.yDomain}
      // labelFormatter={(v) => 400 - v}
      {...{
        yScale
      }} />
        <Guidelines {...args} {...{
        xScale,
        yScale
      }} />
      </Chart>
    </Container>;
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const G=["Primary"];export{e as Primary,G as __namedExportsOrder,z as default};
