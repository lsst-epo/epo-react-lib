import{j as s}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{o as y}from"./argTypes-39b02fc3.js";import{B as m}from"./Button-fb8694dd.js";import{s as d}from"./styled-components.browser.esm-3d9e3c21.js";import{t as M,c as x,d as w,e as j,l as V}from"./index-5cd1a1ce.js";import{a as B}from"./IconComposer-6c240040.js";import{M as b}from"./Message-a89ea25a.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-12ae03d4.js";const $={top:"block-start",right:"inline-end",bottom:"block-end",left:"inline-start"},u=(e,t)=>`padding-${$[e]}: ${M[`PADDING_${t.toUpperCase()}`]};`,S=d.section`
  background-color: var(--section-background-color);

  ${({$paddingSize:e})=>e&&`${u("top",e)}${u("bottom",e)}`}

  + section {
    padding-top: 0;
  }
`,F=d.div`
  ${({$width:e="regular",$nested:t})=>{if(t)return"";switch(e){case"narrow":return j();case"wide":return w();default:return x()}}}
`,v=c.createContext(!1),N=()=>c.useContext(v),f=({bgColor:e="white",children:t,className:n,width:l="narrow",paddingSize:a="large",elAttributes:r})=>{const i=N();return s.jsx(S,{"data-testid":"container",style:{"--section-background-color":`var(--${e})`},$paddingSize:!i&&a!=="none"?a:void 0,...r,children:s.jsx(F,{className:n?`${n} ${n}__inner`:void 0,$width:l,$nested:i,children:t})})};f.displayName="Layout.Container";const C=d.div`
  ${V(2)}
`;C.displayName="Form.FormButtons";const I=C,k=s.jsxs(s.Fragment,{children:[s.jsx(B,{size:18,icon:"Checkmark"}),"You found it!"]}),_="Try again.",W={argTypes:{children:y,onMessageChangeCallback:{type:{name:"function",required:!0},description:"Callback made when the toast has finished displaying, should be used to toggle `isVisible` and hide the element again.",action:"Message closed"},isVisible:{control:"boolean",description:"Sets the visibility of the message.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},forIds:{control:"object",description:"Array of ID's corresponding to an input or element that influenced this message. For a toast this should correspond to an element that the user acted on.",table:{type:{summary:"string[]"}}}},component:b},A=e=>{const[t,n]=c.useState(e.isVisible||!1),[l,a]=c.useState(e.children||""),r=i=>{a(i),n(!0)};return s.jsxs(f,{children:[s.jsx(b,{...e,isVisible:t,onMessageChangeCallback:()=>(e.onMessageChangeCallback(),n(!1)),children:l}),s.jsxs(I,{children:[s.jsx(m,{onClick:()=>r(k),children:"Show message"}),s.jsx(m,{onClick:()=>r(_),styleAs:"secondary",children:"Show a different message"})]})]})},o=A.bind({});o.args={children:k};var g,h,p;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [isVisible, setVisible] = useState(args.isVisible || false);
  const [message, setMessage] = useState<ReactNode>(args.children || "");
  const handleClick = (newMessage: ReactNode) => {
    setMessage(newMessage);
    setVisible(true);
  };
  return <Container>
      <Message {...args} isVisible={isVisible} onMessageChangeCallback={() => {
      args.onMessageChangeCallback();
      return setVisible(false);
    }}>
        {message}
      </Message>
      <FormButtons>
        <Button onClick={() => handleClick(successMessage)}>
          Show message
        </Button>
        <Button onClick={() => handleClick(failureMessage)} styleAs="secondary">
          Show a different message
        </Button>
      </FormButtons>
    </Container>;
}`,...(p=(h=o.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const Y=["Primary"];export{o as Primary,Y as __namedExportsOrder,W as default};
