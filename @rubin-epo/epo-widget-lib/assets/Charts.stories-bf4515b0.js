import{s as M,j as n}from"./styled-components.browser.esm-e0114bd2.js";import{r as u}from"./index-8db94870.js";import{g as I}from"./utils-54f41c78.js";import{a as g}from"./IconComposer-0a5b6514.js";import{B as G}from"./index-b48b975d.js";import{X as P}from"./index-42ed9bd3.js";import{Y as _}from"./index-600f51cf.js";import{C as $}from"./index-69893c61.js";import{G as T}from"./index-3d39e395.js";import{P as Q}from"./index-a35313c6.js";import{T as V,n as R}from"./index-abcb9422.js";import{B as U}from"./index-8834bc9f.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-12ae03d4.js";import"./styles-2fca3e33.js";const yn={title:"Charts"},O=M.div`
  display: grid;
  gap: 1em;
  grid-template-rows: 400px min-content;
  grid-template-columns: min-content 400px;
  justify-items: center;
`,W=M.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`,q=M.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  grid-column-start: 2;
`,p=M.button`
  aspect-ratio: 1;
  background-color: var(--white);
  border: 1px solid var(--neutral95);
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    cursor: default;
    color: var(--neutral60);
  }

  &[data-direction="up"] {
    > svg {
      transform: rotate(90deg);
    }
  }
  &[data-direction="right"] {
    > svg {
      transform: rotate(180deg);
    }
  }
  &[data-direction="down"] {
    > svg {
      transform: rotate(270deg);
    }
  }
`,Z=m=>{const h={top:25,bottom:25,left:25,right:25},[o,e]=u.useState([0,200]),[t,y]=u.useState([0,200]),[a,v]=u.useState(),s=[0+h.left,400-h.right],r=[400-h.bottom,0+h.top],i=I(o,s),c=I(t,r),f=typeof a=="number",d=m.data.map(({x:l,y:x},b)=>{const D=l*400,k=x*400;return{x:D,y:k,width:8,props:{onMouseEnter:()=>{v(b)},onMouseLeave:()=>{v(void 0)}}}});return n.jsxs(O,{children:[n.jsxs(W,{children:[n.jsx(p,{"data-direction":"up",onClick:()=>y([t[0]+20,t[1]+20]),disabled:t[1]===0,children:n.jsx(g,{icon:"Chevron"})}),n.jsx(p,{"data-direction":"down",onClick:()=>y([t[0]-20,t[1]-20]),disabled:t[0]===0,children:n.jsx(g,{icon:"Chevron"})})]}),n.jsxs(G,{width:400,height:400,children:[n.jsx(P,{y:c(t[0]),xDomain:o,xScale:i,ticks:10}),n.jsx(_,{x:i(o[0]),yDomain:t,yScale:c,ticks:10}),n.jsxs($,{x:i(o[0]),y:c(t[1]),width:s[1]-s[0],height:r[0]-r[1]+h.top,children:[n.jsx(T,{guides:10,xScale:i,yScale:c,xDomain:o,yDomain:t}),n.jsx(T,{guides:10,direction:"vertical",xScale:i,yScale:c,xDomain:o,yDomain:t}),n.jsx(Q,{xScale:i,yScale:c,yDomain:t,data:d})]}),a&&n.jsx(V,{x:i(d[a].x),y:c(t[1]-t[0]-d[a].y),visible:f,children:`[${parseInt(d[a].x)},${parseInt(d[a].y)}]`})]}),n.jsxs(q,{children:[n.jsx(p,{"data-direction":"left",onClick:()=>e([o[0]-20,o[1]-20]),disabled:o[0]===0,children:n.jsx(g,{icon:"Chevron"})}),n.jsx(p,{"data-direction":"right",onClick:()=>e([o[0]+20,o[1]+20]),disabled:o[1]>=400,children:n.jsx(g,{icon:"Chevron"})})]})]})},nn=m=>{const e={top:30,right:10,bottom:30,left:20},[t,y]=u.useState(0),[a,v]=u.useState(200),s=R(t,a,10),r=R(0,12,6),[i,c]=u.useState(),f=[0+e.left,400-e.right],d=[400-e.bottom,0+e.top],l=I(s,f),x=I(r,d),b=(s[1]-s[0])/10,D=new Array(400/b).fill(0).map((j,S)=>({bin:S*b,value:0})),k=typeof i=="number";m.data.forEach(({x:j})=>{const S=Math.floor(j*400/b);D[S].value++});const B=D.map(({bin:j,value:S},N)=>({x:j,value:S,width:12,props:{onMouseEnter:()=>c(N),onMouseLeave:()=>c(void 0)}}));return n.jsxs(O,{children:[n.jsx("div",{}),n.jsxs(G,{width:400,height:400,children:[n.jsx(P,{y:x(r[0]),ticks:10,xDomain:s,xScale:l,margin:e}),n.jsx(_,{x:l(s[0])-e.left/2,showBaseline:!1,ticks:6,yDomain:r,yScale:x,margin:e}),n.jsxs($,{x:l(s[0])-e.left/2,y:x(r[1])-e.top,width:f[1]-f[0],height:d[0]-d[1]+e.top,children:[n.jsx(T,{guides:6,xScale:l,yScale:x,xDomain:s,yDomain:r,margin:e}),n.jsx(U,{xScale:l,yScale:x,yDomain:r,data:B})]}),k&&n.jsx(V,{x:l(D[i].bin),y:x(r[1]-B[i].value),visible:k,children:B[i].value})]}),n.jsxs(q,{children:[n.jsx(p,{"data-direction":"left",onClick:()=>{y(t-20),v(a-20)},disabled:t<=0,children:n.jsx(g,{icon:"Chevron"})}),n.jsx(p,{"data-direction":"right",onClick:()=>{y(t+20),v(a+20)},disabled:a>=400,children:n.jsx(g,{icon:"Chevron"})})]})]})},A=[];for(let m=0;m<50;m++)A.push({x:Math.random(),y:Math.random()});const w=Z.bind({}),C=nn.bind({});w.args={data:A};C.args={data:A};var X,H,Y;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const ticks = 10;
  const width = 400;
  const height = 400;
  const margin = {
    top: 25,
    bottom: 25,
    left: 25,
    right: 25
  };
  const [xDomain, setXDomain] = useState([0, 200]);
  const [yDomain, setYDomain] = useState([0, 200]);
  const [hoveredIndex, setHoveredIndex] = useState<number>();
  const xRange = [0 + margin.left, width - margin.right];
  const yRange = [height - margin.bottom, 0 + margin.top];
  const xScale = getLinearScale(xDomain, xRange);
  const yScale = getLinearScale(yDomain, yRange);
  const hasTooltip = typeof hoveredIndex === "number";
  const data = args.data.map(({
    x,
    y
  }: {
    x: number;
    y: number;
  }, i: number) => {
    const finalX = x * width;
    const finalY = y * height;
    return {
      x: finalX,
      y: finalY,
      width: 8,
      props: {
        onMouseEnter: () => {
          setHoveredIndex(i);
        },
        onMouseLeave: () => {
          setHoveredIndex(undefined);
        }
      }
    };
  });
  return <Container>
      <VerticalButtons>
        <ArrowButton data-direction="up" onClick={() => setYDomain([yDomain[0] + 20, yDomain[1] + 20])} disabled={yDomain[1] === 0}>
          <IconComposer icon="Chevron" />
        </ArrowButton>
        <ArrowButton data-direction="down" onClick={() => setYDomain([yDomain[0] - 20, yDomain[1] - 20])} disabled={yDomain[0] === 0}>
          <IconComposer icon="Chevron" />
        </ArrowButton>
      </VerticalButtons>
      <Base {...{
      width,
      height
    }}>
        <XAxis y={yScale(yDomain[0])} {...{
        xDomain,
        xScale,
        ticks
      }} />
        <YAxis x={xScale(xDomain[0])} {...{
        yDomain,
        yScale,
        ticks
      }} />
        <ClippingContainer x={xScale(xDomain[0])} y={yScale(yDomain[1])} width={xRange[1] - xRange[0]} height={yRange[0] - yRange[1] + margin.top}>
          <Guidelines guides={ticks} {...{
          xScale,
          yScale,
          xDomain,
          yDomain
        }} />
          <Guidelines guides={ticks} direction="vertical" {...{
          xScale,
          yScale,
          xDomain,
          yDomain
        }} />
          <Points {...{
          xScale,
          yScale,
          yDomain,
          data
        }} />
        </ClippingContainer>
        {hoveredIndex && <Tooltip x={xScale(data[hoveredIndex].x)} y={yScale(yDomain[1] - yDomain[0] - data[hoveredIndex].y)} visible={hasTooltip}>{\`[\${parseInt(data[hoveredIndex].x)},\${parseInt(data[hoveredIndex].y)}]\`}</Tooltip>}
      </Base>
      <HorizontalButtons>
        <ArrowButton data-direction="left" onClick={() => setXDomain([xDomain[0] - 20, xDomain[1] - 20])} disabled={xDomain[0] === 0}>
          <IconComposer icon="Chevron" />
        </ArrowButton>
        <ArrowButton data-direction="right" onClick={() => setXDomain([xDomain[0] + 20, xDomain[1] + 20])} disabled={xDomain[1] >= 400}>
          <IconComposer icon="Chevron" />
        </ArrowButton>
      </HorizontalButtons>
    </Container>;
}`,...(Y=(H=w.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var E,L,z;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const xTicks = 10;
  const yTicks = 6;
  const width = 400;
  const height = 400;
  const yMax = 12;
  const margin = {
    top: 30,
    right: 10,
    bottom: 30,
    left: 20
  };
  const [xMin, setXMin] = useState(0);
  const [xMax, setXMax] = useState(200);
  const xDomain = nice(xMin, xMax, xTicks);
  const yDomain = nice(0, yMax, yTicks);
  const [hoveredIndex, setHoveredIndex] = useState<number>();
  const xRange = [0 + margin.left, width - margin.right];
  const yRange = [height - margin.bottom, 0 + margin.top];
  const xScale = getLinearScale(xDomain, xRange);
  const yScale = getLinearScale(yDomain, yRange);
  const binInterval = (xDomain[1] - xDomain[0]) / xTicks;
  const bins = new Array(width / binInterval).fill(0).map((_, i) => {
    return {
      bin: i * binInterval,
      value: 0
    };
  });
  const hasTooltip = typeof hoveredIndex === "number";
  args.data.forEach(({
    x
  }: {
    x: number;
  }) => {
    const bin = Math.floor(x * width / binInterval);
    bins[bin].value++;
  });
  const data = bins.map(({
    bin,
    value
  }, i) => {
    return {
      x: bin,
      value,
      width: 12,
      props: {
        onMouseEnter: () => setHoveredIndex(i),
        onMouseLeave: () => setHoveredIndex(undefined)
      }
    };
  });
  return <Container>
      <div />
      <Base {...{
      width,
      height
    }}>
        <XAxis y={yScale(yDomain[0])} ticks={xTicks} {...{
        xDomain,
        xScale,
        margin
      }} />
        <YAxis x={xScale(xDomain[0]) - margin.left / 2} showBaseline={false} ticks={yTicks} {...{
        yDomain,
        yScale,
        margin
      }} />
        <ClippingContainer x={xScale(xDomain[0]) - margin.left / 2} y={yScale(yDomain[1]) - margin.top} width={xRange[1] - xRange[0]} height={yRange[0] - yRange[1] + margin.top}>
          <Guidelines guides={yTicks} {...{
          xScale,
          yScale,
          xDomain,
          yDomain,
          margin
        }} />
          <Bars {...{
          xScale,
          yScale,
          yDomain,
          data
        }} />
        </ClippingContainer>
        {hasTooltip && <Tooltip x={xScale(bins[hoveredIndex].bin)} y={yScale(yDomain[1] - data[hoveredIndex].value)} visible={hasTooltip}>
            {data[hoveredIndex].value}
          </Tooltip>}
      </Base>
      <HorizontalButtons>
        <ArrowButton data-direction="left" onClick={() => {
        setXMin(xMin - 20);
        setXMax(xMax - 20);
      }} disabled={xMin <= 0}>
          <IconComposer icon="Chevron" />
        </ArrowButton>
        <ArrowButton data-direction="right" onClick={() => {
        setXMin(xMin + 20);
        setXMax(xMax + 20);
      }} disabled={xMax >= 400}>
          <IconComposer icon="Chevron" />
        </ArrowButton>
      </HorizontalButtons>
    </Container>;
}`,...(z=(L=C.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const vn=["ScatterPlot","Histogram"];export{C as Histogram,w as ScatterPlot,vn as __namedExportsOrder,yn as default};
