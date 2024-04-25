import{s as y,j as i}from"./styled-components.browser.esm-e0114bd2.js";import{r as x}from"./index-8db94870.js";import{B as d}from"./Blinker-1e32d670.js";import"./_commonjsHelpers-042e6b4d.js";import"./utils-54f41c78.js";import"./index-aff813a1.js";import"./toNumber-d7724b6f.js";import"./isSymbol-f1e92ba4.js";import"./CircularLoader-50e78b89.js";import"./IconComposer-0a5b6514.js";import"./index-12ae03d4.js";import"./index-223833fa.js";import"./Controls-975788a2.js";import"./useTranslation-fdd24caa.js";import"./i18nInstance-764935cb.js";import"./toPropertyKey-148bb9ef.js";import"./context-3d6b95f0.js";import"./utils-7aca7d2f.js";import"./PlaybackControl-90cf0bb9.js";const b=[{url:"https://rubin.canto.com/direct/image/4j5ucvv3gd61r1ilkl5kno1111/VFWbyjyDSQt66VtSnyvU0UxruMw/original?content-type=image%2Fjpeg&name=1464149233715_sci.jpg"},{url:"https://rubin.canto.com/direct/image/anciicc0p165vbaj05o3fn6j6t/ZgKhis-b1koVvXgfoWVwhX4xaeE/original?content-type=image%2Fjpeg&name=1456150543715_sci.jpg"},{url:"https://rubin.canto.com/direct/image/dru1sqc0o10dn371fqk7kic178/L_D98MNLVqIC1IS0FDhlIu7ZvXo/original?content-type=image%2Fjpeg&name=1470106903715_sci.jpg"},{url:"https://rubin.canto.com/direct/image/ibe4emdqoh14j7fd9l98hqaa3r/z4PaMcPgM5M7oEHFPt1vEzcaxPM/original?content-type=image%2Fjpeg&name=1466102113715_sci.jpg"},{url:"https://rubin.canto.com/direct/image/qqsm1qiijp1vl4jakirsmfgc6a/w0zonP21giNU4CTLdm6xyhP5m0U/original?content-type=image%2Fjpeg&name=1448127963715_sci.jpg"}],U={argTypes:{autoplay:{control:"boolean",description:"Determines if the blink will automatically start.",table:{type:{summary:"boolean"},defaultValue:{summary:!0},category:"Configuration"}},loop:{control:"boolean",description:"Determines if the blink will loop when it reaches it's end.",table:{type:{summary:"boolean"},defaultValue:{summary:!0},category:"Configuration"}},interval:{type:{name:"number"},control:{type:"number",min:0},description:"Duration in milliseconds that each image will be displayed in the blink. <strong>Be careful setting this value below ~50 or it may flash intensely.</strong>",table:{type:{summary:"number"},defaultValue:{summary:200},category:"Configuration"}},images:{type:{name:"other",value:"Image[]",required:!0},control:"object",description:"Array of images to be played by the Blinker. Type is the same as the standard library `Image`.",table:{type:{summary:"Image[]"},defaultValue:{summary:"[]"},category:"Model"}},activeIndex:{type:{name:"number"},control:{type:"number",min:0},description:"Index of the currently active and visible image.",table:{type:{summary:"number"},defaultValue:{summary:0},category:"Model"}},loadedCallback:{description:"Callback that will be fired when the blinker has finished loading and started blinking.",action:"Loaded",table:{type:{summary:"() => void"},category:"Function"}},blinkCallback:{description:"Callback that will return the index of the next image in the `images` array to be displayed.",action:"Image changed",table:{type:{summary:"(index: number) => void"},category:"Function"}}},component:d},h=y.div`
  aspect-ratio: 1;
  max-width: 600px;
`,p=e=>{const[u,g]=x.useState(e.activeIndex),k=n=>(e.blinkCallback&&e.blinkCallback(n),g(n));return i.jsx(h,{children:i.jsx(d,{...e,activeIndex:u,blinkCallback:k,loadedCallback:()=>e.loadedCallback&&e.loadedCallback()})})},a=p.bind({});a.args={images:b};const t=p.bind({});t.args={images:[b[0]]};var r,o,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [activeIndex, setActiveIndex] = useState(args.activeIndex);
  const blinkCallback = (nextIndex: number) => {
    args.blinkCallback && args.blinkCallback(nextIndex);
    return setActiveIndex(nextIndex);
  };
  return <Container>
      <Blinker {...args} activeIndex={activeIndex} blinkCallback={blinkCallback} loadedCallback={() => args.loadedCallback && args.loadedCallback()} />
    </Container>;
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,s,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [activeIndex, setActiveIndex] = useState(args.activeIndex);
  const blinkCallback = (nextIndex: number) => {
    args.blinkCallback && args.blinkCallback(nextIndex);
    return setActiveIndex(nextIndex);
  };
  return <Container>
      <Blinker {...args} activeIndex={activeIndex} blinkCallback={blinkCallback} loadedCallback={() => args.loadedCallback && args.loadedCallback()} />
    </Container>;
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const z=["Primary","SingleImage"];export{a as Primary,t as SingleImage,z as __namedExportsOrder,U as default};
