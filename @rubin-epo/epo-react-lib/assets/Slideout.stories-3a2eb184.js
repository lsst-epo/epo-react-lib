import{j as t}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{s as u}from"./styled-components.browser.esm-3d9e3c21.js";import{S as n}from"./index-6821fc4b.js";import{B as a}from"./Button-3e2b426d.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d82f0c31.js";import"./index-12ae03d4.js";import"./appearance-f4837453.js";import"./open-closed-9da3c4c0.js";import"./use-is-mounted-ce5ca9dd.js";import"./IconComposer-fd2a8d4b.js";import"./defaultProps-88ef9418.js";import"./utils-95281a95.js";const I={component:n,argTypes:{isOpen:{control:"boolean",description:"State that controls if the slideout is opened or not.",type:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},onCloseCallback:{action:"Slideout closed",description:"Callback after the slideout has closed",table:{type:{summary:"() => void"}}},onOpenCallback:{action:"Slideout opened",description:"Callback after the slideout has opened",table:{type:{summary:"() => void"}}},slideFrom:{control:"select",options:["top","bottom","left","right"],description:"Side of the window that the slideout will enter from and be pinned to",table:{type:{summary:"top|bottom|left|right"},defaultValue:{summary:!0}}},showBackground:{control:"boolean",description:"Shows a semi-transparent background",type:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}}}},d=u.div`
  background-color: var(--neutral10);
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;

  & > * + * {
    margin-block-start: 1em;
  }
`,b=e=>{const[c,i]=m.useState(e.isOpen||!1),p=` Cosmic ipsum helium perturbation Hubble's law gravity visual magnitude
  limb equinox Bailey's beads escape velocity eccentricity meteoroid
  superior planets black hole revolve Oort cloud Sputnik singularity
  planetoid translunar ice giant Lagrange points twinkling ecliptic
  apastron circumpolar planet perihelion nebula gibbous moon local arm
  event horizon space station penumbra orbital eccentricity zodiac
  eclipse Kepler's laws north star sun wormhole minor planet spectrum
  deep space dark matter celestial coordinates cosmology asterism moon`;return t.jsxs(t.Fragment,{children:[t.jsx(a,{onClick:()=>i(!0),isBlock:!0,children:"Open"}),t.jsx(n,{...e,isOpen:c,onCloseCallback:()=>i(!1),children:t.jsxs(d,{style:{[e.slideFrom==="top"||e.slideFrom==="bottom"?"height":"width"]:"30ch",[e.slideFrom==="top"||e.slideFrom==="bottom"?"width":"height"]:"100%"},children:[p,t.jsx(a,{onClick:()=>i(!1),isBlock:!0,children:"Close"})]})})]})},o=b.bind({});var s,r,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);
  const text = \` Cosmic ipsum helium perturbation Hubble's law gravity visual magnitude
  limb equinox Bailey's beads escape velocity eccentricity meteoroid
  superior planets black hole revolve Oort cloud Sputnik singularity
  planetoid translunar ice giant Lagrange points twinkling ecliptic
  apastron circumpolar planet perihelion nebula gibbous moon local arm
  event horizon space station penumbra orbital eccentricity zodiac
  eclipse Kepler's laws north star sun wormhole minor planet spectrum
  deep space dark matter celestial coordinates cosmology asterism moon\`;
  return <>
      <Button onClick={() => setIsOpen(true)} isBlock>
        Open
      </Button>
      <Slideout {...args} isOpen={isOpen} onCloseCallback={() => setIsOpen(false)}>
        <Panel style={{
        [args.slideFrom === "top" || args.slideFrom === "bottom" ? "height" : "width"]: "30ch",
        [args.slideFrom === "top" || args.slideFrom === "bottom" ? "width" : "height"]: "100%"
      }}>
          {text}
          <Button onClick={() => setIsOpen(false)} isBlock>
            Close
          </Button>
        </Panel>
      </Slideout>
    </>;
}`,...(l=(r=o.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const P=["Primary"];export{o as Primary,P as __namedExportsOrder,I as default};
