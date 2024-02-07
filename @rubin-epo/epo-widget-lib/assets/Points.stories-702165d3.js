import{j as n}from"./jsx-runtime-94f6e698.js";import{s as y}from"./styled-components.browser.esm-3d9e3c21.js";import{P as p}from"./index-399824b4.js";import{B as S}from"./index-2efd795f.js";import{X as f}from"./index-bf005cc4.js";import{Y as D}from"./index-fe8f0cfd.js";import{g as c}from"./utils-4cb73340.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./styles-5421d856.js";const E={argTypes:{},component:p},u=y.div`
  display: grid;
  gap: 1em;
  grid-template-rows: 400px 1fr;
  justify-items: center;
`,w=h=>{const x=[25,375],l=[0+25,400-25],t=[0,400],i=[0,400],o=c(t,x),s=c(i,l),e=[];for(let r=0;r<25;r++)e.push({x:Math.random()*400,y:Math.random()*400});return n.jsx(u,{children:n.jsxs(S,{minX:0,width:400,height:400,children:[n.jsx(f,{ticks:10,y:s(i[1]),xDomain:t,xScale:o}),n.jsx(D,{ticks:10,x:o(t[0]),yDomain:i,yScale:s}),n.jsx(p,{...h,xScale:o,yScale:s,data:e})]})})},a=w.bind({});a.args={};var m,d,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const width = 400;
  const height = 400;
  const padding = 25;
  const xRange = [0 + padding, width - padding];
  const yRange = [0 + padding, height - padding];
  const xDomain = [0, 400];
  const yDomain = [0, 400];
  const xScale = getLinearScale(xDomain, xRange);
  const yScale = getLinearScale(yDomain, yRange);
  const data = [];
  for (let i = 0; i < 25; i++) {
    data.push({
      x: Math.random() * width,
      y: Math.random() * height
    });
  }
  return <Container>
      <Chart minX={0} {...{
      width,
      height
    }}>
        <XAxis ticks={10} y={yScale(yDomain[1])} xDomain={xDomain} {...{
        xScale
      }} />
        <YAxis ticks={10} x={xScale(xDomain[0])} yDomain={yDomain}
      // labelFormatter={(v) => 400 - v}
      {...{
        yScale
      }} />
        <Points {...args} {...{
        xScale,
        yScale,
        data
      }} />
      </Chart>
    </Container>;
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const T=["Primary"];export{a as Primary,T as __namedExportsOrder,E as default};
