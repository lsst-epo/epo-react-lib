import{j as n}from"./jsx-runtime-94f6e698.js";import{r as u}from"./index-8db94870.js";import{s as M}from"./styled-components.browser.esm-3d9e3c21.js";import{g as I}from"./utils-4cb73340.js";import{a as p}from"./IconComposer-6c240040.js";import{B as q}from"./index-2efd795f.js";import{X as z}from"./index-bf005cc4.js";import{Y as G}from"./index-fe8f0cfd.js";import{G as X}from"./index-a1b6ccbb.js";import{P as U}from"./index-399824b4.js";import{T as N,n as _,B as W}from"./index-4d9fb95a.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-12ae03d4.js";import"./styles-5421d856.js";const F=({x:d,y:B,width:T,height:A,className:h,children:i})=>{const t=u.useId();return n.jsxs(n.Fragment,{children:[n.jsx("defs",{children:n.jsx("clipPath",{id:t,children:n.jsx("rect",{x:d,y:B,width:T,height:A})})}),n.jsx("g",{clipPath:`url(#${t})`,className:h,children:i})]})};F.displayName="Charts.Clip";const O=F;try{Charts.Clip.displayName="Charts.Clip",Charts.Clip.__docgenInfo={description:"",displayName:"Charts.Clip",props:{x:{defaultValue:null,description:"",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const yn={title:"Charts"},J=M.div`
  display: grid;
  gap: 1em;
  grid-template-rows: 400px min-content;
  grid-template-columns: min-content 400px;
  justify-items: center;
`,Z=M.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`,K=M.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  grid-column-start: 2;
`,g=M.button`
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
`,nn=d=>{const h={top:25,bottom:25,left:25,right:25},[i,t]=u.useState([0,200]),[e,y]=u.useState([0,200]),[a,v]=u.useState(),s=[0+h.left,400-h.right],r=[0+h.top,400-h.bottom],o=I(i,s),c=I(e,r),f=typeof a=="number",l=d.data.map(({x,y:m},b)=>{const C=x*400,j=m*400;return{x:C,y:j,width:8,props:{onMouseEnter:()=>{v(b)},onMouseLeave:()=>{v(void 0)}}}});return n.jsxs(J,{children:[n.jsxs(Z,{children:[n.jsx(g,{"data-direction":"up",onClick:()=>y([e[0]+20,e[1]+20]),disabled:e[1]===0,children:n.jsx(p,{icon:"Chevron"})}),n.jsx(g,{"data-direction":"down",onClick:()=>y([e[0]-20,e[1]-20]),disabled:e[0]===0,children:n.jsx(p,{icon:"Chevron"})})]}),n.jsxs(q,{width:400,height:400,children:[n.jsx(z,{y:c(e[1]),xDomain:i,xScale:o,ticks:10}),n.jsx(G,{x:o(i[0]),yDomain:e,yScale:c,ticks:10}),n.jsxs(O,{x:o(i[0]),y:c(e[0]),width:s[1]-s[0],height:r[1]-r[0],children:[n.jsx(X,{guides:10,xScale:o,yScale:c,xDomain:i,yDomain:e}),n.jsx(X,{guides:10,direction:"vertical",xScale:o,yScale:c,xDomain:i,yDomain:e}),n.jsx(U,{xScale:o,yScale:c,yDomain:e,data:l})]}),a&&n.jsx(N,{x:o(l[a].x),y:c(e[1]-e[0]-l[a].y),visible:f,children:`[${parseInt(l[a].x)},${parseInt(l[a].y)}]`})]}),n.jsxs(K,{children:[n.jsx(g,{"data-direction":"left",onClick:()=>t([i[0]-20,i[1]-20]),disabled:i[0]===0,children:n.jsx(p,{icon:"Chevron"})}),n.jsx(g,{"data-direction":"right",onClick:()=>t([i[0]+20,i[1]+20]),disabled:i[1]>=400,children:n.jsx(p,{icon:"Chevron"})})]})]})},en=d=>{const t={top:30,right:10,bottom:30,left:20},[e,y]=u.useState(0),[a,v]=u.useState(200),s=_(e,a,10),r=_(0,12,6),[o,c]=u.useState(),f=[0+t.left,400-t.right],l=[0+t.top,400-t.bottom],x=I(s,f),m=I(r,l),b=(s[1]-s[0])/10,C=new Array(400/b).fill(0).map((k,D)=>({bin:D*b,value:0})),j=typeof o=="number";d.data.forEach(({x:k})=>{const D=Math.floor(k*400/b);C[D].value++});const R=C.map(({bin:k,value:D},Q)=>({x:k,value:D,width:12,props:{onMouseEnter:()=>c(Q),onMouseLeave:()=>c(void 0)}}));return n.jsxs(J,{children:[n.jsx("div",{}),n.jsxs(q,{width:400,height:400,children:[n.jsx(z,{y:m(r[1]),ticks:10,xDomain:s,xScale:x,margin:t}),n.jsx(G,{x:x(s[0])-t.left/2,showBaseline:!1,ticks:6,yDomain:r,yScale:m,margin:t}),n.jsxs(O,{x:x(s[0])-t.left/2,y:m(r[0])-t.top,width:f[1]-f[0],height:l[1]-l[0]+t.top,children:[n.jsx(X,{guides:6,xScale:x,yScale:m,xDomain:s,yDomain:r,margin:t}),n.jsx(W,{xScale:x,yScale:m,yDomain:r,data:R})]}),j&&n.jsx(N,{x:x(C[o].bin),y:m(r[1]-R[o].value),visible:j,children:R[o].value})]}),n.jsxs(K,{children:[n.jsx(g,{"data-direction":"left",onClick:()=>{y(e-20),v(a-20)},disabled:e<=0,children:n.jsx(p,{icon:"Chevron"})}),n.jsx(g,{"data-direction":"right",onClick:()=>{y(e+20),v(a+20)},disabled:a>=400,children:n.jsx(p,{icon:"Chevron"})})]})]})},H=[];for(let d=0;d<50;d++)H.push({x:Math.random(),y:Math.random()});const S=nn.bind({}),w=en.bind({});S.args={data:H};w.args={data:H};var Y,E,L;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
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
  const yRange = [0 + margin.top, height - margin.bottom];
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
        <XAxis y={yScale(yDomain[1])} {...{
        xDomain,
        xScale,
        ticks
      }} />
        <YAxis x={xScale(xDomain[0])} {...{
        yDomain,
        yScale,
        ticks
      }} />
        <ClippingContainer x={xScale(xDomain[0])} y={yScale(yDomain[0])} width={xRange[1] - xRange[0]} height={yRange[1] - yRange[0]}>
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
}`,...(L=(E=S.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var V,P,$;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
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
  const yRange = [0 + margin.top, height - margin.bottom];
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
        <XAxis y={yScale(yDomain[1])} ticks={xTicks} {...{
        xDomain,
        xScale,
        margin
      }} />
        <YAxis x={xScale(xDomain[0]) - margin.left / 2} showBaseline={false} ticks={yTicks} {...{
        yDomain,
        yScale,
        margin
      }} />
        <ClippingContainer x={xScale(xDomain[0]) - margin.left / 2} y={yScale(yDomain[0]) - margin.top} width={xRange[1] - xRange[0]} height={yRange[1] - yRange[0] + margin.top}>
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
}`,...($=(P=w.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};const vn=["ScatterPlot","Histogram"];export{w as Histogram,S as ScatterPlot,vn as __namedExportsOrder,yn as default};
