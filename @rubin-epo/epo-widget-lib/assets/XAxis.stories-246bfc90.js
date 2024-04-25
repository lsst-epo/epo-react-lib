import{s as o,j as e}from"./styled-components.browser.esm-e0114bd2.js";import{a as i}from"./IconComposer-0a5b6514.js";import{X as u}from"./index-42ed9bd3.js";import{B as g}from"./index-b48b975d.js";import{r as f}from"./index-8db94870.js";import{g as y}from"./utils-54f41c78.js";import"./index-12ae03d4.js";import"./styles-2fca3e33.js";import"./_commonjsHelpers-042e6b4d.js";const I={argTypes:{xDomain:{description:"Domain of the x axis",control:"object",table:{type:{summary:"number[]"},defaultValue:{summary:"[0,1]"}}},xScale:{description:"Scaling function for the x axis",table:{type:{summary:"(value: number) => number"},defaultValue:{summary:"(v) => v"}}},y:{control:"number",description:"Position along the Y axis at which the X axis will be placed",table:{type:{summary:"number"},defaultValue:{summary:0}}},ticks:{control:"number",description:"Number of ticks to render",table:{type:{summary:"number"},defaultValue:{summary:0}}},labelRender:{description:"Method to format the labels attached to each tick",table:{type:{summary:"(value: number, x: number, y: number, index: string) => ReactNode"}}},labelledById:{control:"text",description:"ID of the element that labels the X axis",table:{type:{summary:"string"}}},tickHeight:{control:"number",description:"Vertical height of each tick",table:{type:{summary:"number"},defaultValue:{summary:5}}},showBaseline:{control:"boolean",description:"Should the baseline be rendered",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}}},component:u},C=o.div`
  display: grid;
  gap: 1em;
  grid-template-rows: 400px 1fr;
  justify-items: center;
`,D=o.div`
  display: grid;
  gap: 4px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
`,s=o.button`
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

  &:nth-of-type(2) {
    > svg {
      transform: rotate(180deg);
    }
  }
`,v=n=>{const{margin:d}=n,{left:p=0,right:x=0}=d||{},h=[0+p,400-x],[t,a]=f.useState(n.xDomain||[0,400]),b=y(t,h);return e.jsxs(C,{children:[e.jsx(g,{xMin:0,width:400,height:400,children:e.jsx(u,{...n,xDomain:t,xScale:b})}),e.jsxs(D,{children:[e.jsx(s,{onClick:()=>a([t[0]-40,t[1]-40]),children:e.jsx(i,{icon:"Chevron"})}),e.jsx(s,{onClick:()=>a([t[0]+40,t[1]+40]),children:e.jsx(i,{icon:"Chevron"})})]})]})},r=v.bind({});r.args={ticks:10,y:375,margin:{top:25,bottom:25,left:25,right:25}};var m,c,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const {
    margin
  } = args;
  const {
    left = 0,
    right = 0
  } = margin || {};
  const xRange = [0 + left, 400 - right];
  const [xDomain, setXDomain] = useState(args.xDomain || [0, 400]);
  const xScale = getLinearScale(xDomain, xRange);
  return <Container>
      <Chart xMin={0} width={400} height={400}>
        <XAxis {...args} xDomain={xDomain} xScale={xScale} />
      </Chart>
      <ButtonContainer>
        <ArrowButton onClick={() => setXDomain([xDomain[0] - 40, xDomain[1] - 40])}>
          <IconComposer icon="Chevron" />
        </ArrowButton>
        <ArrowButton onClick={() => setXDomain([xDomain[0] + 40, xDomain[1] + 40])}>
          <IconComposer icon="Chevron" />
        </ArrowButton>
      </ButtonContainer>
    </Container>;
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const E=["Primary"];export{r as Primary,E as __namedExportsOrder,I as default};
