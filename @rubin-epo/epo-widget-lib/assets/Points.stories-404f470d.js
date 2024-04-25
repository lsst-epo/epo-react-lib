import{s as l,j as n}from"./styled-components.browser.esm-e0114bd2.js";import{P as p}from"./index-a35313c6.js";import{B as S}from"./index-b48b975d.js";import{X as D}from"./index-42ed9bd3.js";import{Y as f}from"./index-600f51cf.js";import{g as c}from"./utils-54f41c78.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./styles-2fca3e33.js";const T={argTypes:{},component:p},u=l.div`
  display: grid;
  gap: 1em;
  grid-template-rows: 400px 1fr;
  justify-items: center;
`,w=h=>{const x=[25,375],y=[400-25,0+25],t=[0,400],i=[0,400],o=c(t,x),s=c(i,y),r=[];for(let e=0;e<25;e++)r.push({id:e,x:Math.random()*400,y:Math.random()*400});return n.jsx(u,{children:n.jsxs(S,{xMin:0,width:400,height:400,children:[n.jsx(D,{ticks:10,y:s(i[0]),xDomain:t,xScale:o}),n.jsx(f,{ticks:10,x:o(t[0]),yDomain:i,yScale:s}),n.jsx(p,{...h,xScale:o,yScale:s,data:r})]})})},a=w.bind({});a.args={};var d,m,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const width = 400;
  const height = 400;
  const padding = 25;
  const xRange = [0 + padding, width - padding];
  const yRange = [height - padding, 0 + padding];
  const xDomain = [0, 400];
  const yDomain = [0, 400];
  const xScale = getLinearScale(xDomain, xRange);
  const yScale = getLinearScale(yDomain, yRange);
  const data = [];
  for (let i = 0; i < 25; i++) {
    data.push({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height
    });
  }
  return <Container>
      <Chart xMin={0} {...{
      width,
      height
    }}>
        <XAxis ticks={10} y={yScale(yDomain[0])} xDomain={xDomain} {...{
        xScale
      }} />
        <YAxis ticks={10} x={xScale(xDomain[0])} yDomain={yDomain} {...{
        yScale
      }} />
        <Points {...args} {...{
        xScale,
        yScale,
        data
      }} />
      </Chart>
    </Container>;
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const _=["Primary"];export{a as Primary,_ as __namedExportsOrder,T as default};
