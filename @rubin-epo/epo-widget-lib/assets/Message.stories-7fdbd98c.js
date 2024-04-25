import{s as b,j as e}from"./styled-components.browser.esm-e0114bd2.js";import{r as n}from"./index-8db94870.js";import{o as C}from"./argTypes-39b02fc3.js";import{M as d}from"./Message-2934d254.js";import{a as y}from"./IconComposer-0a5b6514.js";import{C as M}from"./Container-4222a0a1.js";import{l as k}from"./index-223833fa.js";import{B as i}from"./Button-accaf53d.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-12ae03d4.js";const m=b.div`
  ${k(2)}
`;m.displayName="Form.FormButtons";const V=m;Button.__docgenInfo={description:"",methods:[],displayName:"Atomic.Button"};Password.__docgenInfo={description:"",methods:[],displayName:"Form.Password"};Select.__docgenInfo={description:"",methods:[],displayName:"Form.Select",props:{options:{defaultValue:{value:"[]",computed:!1},required:!1}}};Switch.__docgenInfo={description:"",methods:[],displayName:"Form.Switch",props:{checked:{defaultValue:{value:"false",computed:!1},required:!1}}};const u=e.jsxs(e.Fragment,{children:[e.jsx(y,{size:18,icon:"Checkmark"}),"You found it!"]}),B="Try again.",q={argTypes:{children:C,onMessageChangeCallback:{type:{name:"function",required:!0},description:"Callback made when the toast has finished displaying, should be used to toggle `isVisible` and hide the element again.",action:"Message closed"},isVisible:{control:"boolean",description:"Sets the visibility of the message.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},forIds:{control:"object",description:"Array of ID's corresponding to an input or element that influenced this message. For a toast this should correspond to an element that the user acted on.",table:{type:{summary:"string[]"}}}},component:d},S=t=>{const[g,a]=n.useState(t.isVisible||!1),[p,h]=n.useState(t.children||""),o=f=>{h(f),a(!0)};return e.jsxs(M,{children:[e.jsx(d,{...t,isVisible:g,onMessageChangeCallback:()=>(t.onMessageChangeCallback(),a(!1)),children:p}),e.jsxs(V,{children:[e.jsx(i,{onClick:()=>o(u),children:"Show message"}),e.jsx(i,{onClick:()=>o(B),styleAs:"secondary",children:"Show a different message"})]})]})},s=S.bind({});s.args={children:u};var r,l,c;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const E=["Primary"];export{s as Primary,E as __namedExportsOrder,q as default};
