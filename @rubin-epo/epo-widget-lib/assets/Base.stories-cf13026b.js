import{s as a,j as r}from"./styled-components.browser.esm-e0114bd2.js";import{a as o}from"./IconComposer-0a5b6514.js";import{B as l}from"./index-b48b975d.js";import{r as u}from"./index-8db94870.js";import"./index-12ae03d4.js";import"./_commonjsHelpers-042e6b4d.js";const v={argTypes:{width:{control:"number",description:"The width of the SVG viewbox",table:{type:{summary:"number"},defaultValue:{summary:900}}},height:{control:"number",description:"The height of the SVG viewbox",table:{type:{summary:"number"},defaultValue:{summary:300}}},xMin:{control:"number",description:"The upper left corner X coordinate",table:{type:{summary:"number"},defaultValue:{summary:0}}},yMin:{control:"number",description:"The upper left corner Y coordinate",table:{type:{summary:"number"},defaultValue:{summary:0}}}},component:l},h=a.div`
  display: grid;
  gap: 1em;
  grid-template-rows: 400px 1fr;
  justify-items: center;
`,p=a.div`
  display: grid;
  gap: 4px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
`,i=a.button`
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
  &:nth-of-type(3) {
    > svg {
      transform: rotate(90deg);
    }
  }
  &:nth-of-type(4) {
    > svg {
      transform: rotate(270deg);
    }
  }
`,x=e=>{const[n,t]=u.useState([e.xMin||0,e.yMin||0]);return r.jsxs(h,{children:[r.jsxs(l,{...e,xMin:n[0],yMin:n[1],width:e.width||5,height:e.height||5,children:[r.jsx("rect",{x:"0",y:"0",width:"10",height:"10"}),r.jsx("circle",{cx:"5",cy:"5",r:"4",fill:"white"})]}),r.jsxs(p,{children:[r.jsx(i,{disabled:n[0]===0,onClick:()=>t([0,n[1]]),children:r.jsx(o,{icon:"Chevron"})}),r.jsx(i,{disabled:n[0]>0,onClick:()=>t([5,n[1]]),children:r.jsx(o,{icon:"Chevron"})}),r.jsx(i,{disabled:n[1]===0,onClick:()=>t([n[0],0]),children:r.jsx(o,{icon:"Chevron"})}),r.jsx(i,{disabled:n[1]>0,onClick:()=>t([n[0],5]),children:r.jsx(o,{icon:"Chevron"})})]})]})},s=x.bind({});var c,m,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [min, setMin] = useState([args.xMin || 0, args.yMin || 0]);
  return <Container>
      <Base {...args} xMin={min[0]} yMin={min[1]} width={args.width || 5} height={args.height || 5}>
        <rect x="0" y="0" width="10" height="10" />
        <circle cx="5" cy="5" r="4" fill="white" />
      </Base>
      <ButtonContainer>
        <ArrowButton disabled={min[0] === 0} onClick={() => setMin([0, min[1]])}>
          <IconComposer icon="Chevron" />
        </ArrowButton>
        <ArrowButton disabled={min[0] > 0} onClick={() => setMin([5, min[1]])}>
          <IconComposer icon="Chevron" />
        </ArrowButton>
        <ArrowButton disabled={min[1] === 0} onClick={() => setMin([min[0], 0])}>
          <IconComposer icon="Chevron" />
        </ArrowButton>
        <ArrowButton disabled={min[1] > 0} onClick={() => setMin([min[0], 5])}>
          <IconComposer icon="Chevron" />
        </ArrowButton>
      </ButtonContainer>
    </Container>;
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const j=["Primary"];export{s as Primary,j as __namedExportsOrder,v as default};
