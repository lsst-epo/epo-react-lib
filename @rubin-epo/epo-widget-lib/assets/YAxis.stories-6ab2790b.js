import{j as t}from"./jsx-runtime-94f6e698.js";import{s as r}from"./styled-components.browser.esm-3d9e3c21.js";import{a as i}from"./IconComposer-6c240040.js";import{Y as g}from"./index-fe8f0cfd.js";import{B as v}from"./index-2efd795f.js";import{r as m}from"./index-8db94870.js";import{g as c}from"./utils-4cb73340.js";import"./index-12ae03d4.js";import"./styles-5421d856.js";import"./_commonjsHelpers-042e6b4d.js";const T={argTypes:{ticks:{control:"number",description:"Number of ticks to render",table:{type:{summary:"number"},defaultValue:{summary:0}}},labelRender:{description:"Method to format the labels attached to each tick",table:{type:{summary:"(value: number, x: number, y: number, index: string) => ReactNode"}}},labelledById:{control:"text",description:"ID of the element that labels the X axis",table:{type:{summary:"string"}}},tickLength:{control:"number",description:"Horizontal of each tick",table:{type:{summary:"number"},defaultValue:{summary:5}}},showBaseline:{control:"boolean",description:"Should the baseline be rendered",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}}},component:g},B=r.div`
  display: grid;
  gap: 1em;
  grid-template-rows: 400px 1fr;
  justify-items: center;
`,k=r.div`
  display: grid;
  gap: 4px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
`,l=r.button`
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

  > svg {
    transform: rotate(90deg);
  }

  &:nth-of-type(2) {
    > svg {
      transform: rotate(270deg);
    }
  }
`,w=o=>{const{margin:y}=o,{left:h=0,right:x=0,bottom:b=0,top:f=0}=y||{},C=[0+h,400-x],D=[0+f,400-b],[a]=m.useState([0,400]),[n,s]=m.useState(o.yDomain||[0,400]),S=c(a,C),j=c(n,D);return t.jsxs(B,{children:[t.jsx(v,{minX:0,width:400,height:400,children:t.jsx(g,{...o,x:S(a[0]),yDomain:n,yScale:j})}),t.jsxs(k,{children:[t.jsx(l,{onClick:()=>s([n[0]+40,n[1]+40]),children:t.jsx(i,{icon:"Chevron"})}),t.jsx(l,{onClick:()=>s([n[0]-40,n[1]-40]),children:t.jsx(i,{icon:"Chevron"})})]})]})},e=w.bind({});e.args={ticks:10,margin:{left:40,right:40,top:40,bottom:40}};var u,d,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const {
    margin
  } = args;
  const {
    left = 0,
    right = 0,
    bottom = 0,
    top = 0
  } = margin || {};
  const xRange = [0 + left, 400 - right];
  const yRange = [0 + top, 400 - bottom];
  const [xDomain] = useState([0, 400]);
  const [yDomain, setYDomain] = useState(args.yDomain || [0, 400]);
  const xScale = getLinearScale(xDomain, xRange);
  const yScale = getLinearScale(yDomain, yRange);
  return <Container>
      <Chart minX={0} width={400} height={400}>
        <YAxis {...args} x={xScale(xDomain[0])} {...{
        yDomain,
        yScale
      }} />
      </Chart>
      <ButtonContainer>
        <ArrowButton onClick={() => setYDomain([yDomain[0] + 40, yDomain[1] + 40])}>
          <IconComposer icon="Chevron" />
        </ArrowButton>
        <ArrowButton onClick={() => setYDomain([yDomain[0] - 40, yDomain[1] - 40])}>
          <IconComposer icon="Chevron" />
        </ArrowButton>
      </ButtonContainer>
    </Container>;
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const _=["Primary"];export{e as Primary,_ as __namedExportsOrder,T as default};
