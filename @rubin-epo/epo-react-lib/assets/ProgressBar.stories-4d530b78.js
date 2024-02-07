import{j as d}from"./jsx-runtime-94f6e698.js";import{s as m,n as a}from"./styled-components.browser.esm-3d9e3c21.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const $=m.div`
  --progress-bar-height: 6px;
  --progress-bar-container-background: var(--neutral60, #6a6e6e);
  --progress-bar-background: #019305;

  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 2px;
  border-radius: 1px;
  background: var(--progress-bar-container-background);
`,z=m.div.attrs(({$value:e=0})=>({style:{width:`${e}%`}}))`
  height: var(--progress-bar-height);
  background-color: var(--progress-bar-background);
  border-radius: calc(var(--progress-bar-height) / 2);
  transition: width var(--DURATION, 0.2s);

  @media (prefers-reduced-motion) {
    transition: none;
  }
`,v=m.div.attrs(({$value:e})=>({style:{left:`${e}%`}}))`
  ${({$filled:e,$active:t,$background:o,$hoverable:r,$value:n})=>a`
      --marker-border-color: ${t?a`var(--progress-bar-background)`:a`var(--progress-bar-container-background)`};
      --marker-background-color: ${e?a`
            ${o||"var(--marker-border-color)"}
          `:a`var(--white, #fff)`};
      --marker-z: ${r?2:1};
      --marker-font-size: ${n&&n>99?"6px":"7px"};
    `}
  --marker-size: 14px;
  --marker-size-radius: calc(var(--marker-size) / 2);

  position: absolute;
  left: 0;
  top: 0;
  z-index: var(--marker-z);
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--marker-size);
  height: var(--marker-size);
  color: transparent;
  background-color: var(--marker-background-color);
  border: 1px solid var(--marker-border-color);
  border-radius: 50%;
  font-size: var(--marker-font-size);
  line-height: 0;
  transform: translate(
    calc(var(--marker-size-radius) * -1),
    calc(var(--marker-size-radius) * -1)
  );
  transition: left var(--DURATION, 0.2s);

  ${({$hoverable:e})=>e&&a`
      cursor: pointer;
      transition: left var(--DURATION, 0.2s),
        color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
        transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

      &:hover {
        transform: translate(
            calc(var(--marker-size-radius) * -1),
            calc(var(--marker-size-radius) * -1)
          )
          scale(2);
        color: var(--black, #000);
      }
    `}

  @media (prefers-reduced-motion) {
    transition: none;
  }
`;v.displayName="Atomic.ProgressMarker";const u=({min:e=0,max:t=100,value:o,markerFormatter:r,labelledById:n,describedById:y,children:f,className:h,markerConfig:k})=>{const x={$active:!0,$hoverable:!0},l=o===void 0||isNaN(o),s=Math.min(Math.max(o||0,e),t),c=(s-e)/(t-e)*100;return d.jsx($,{className:h,children:d.jsxs(z,{role:"progressbar","aria-valuemin":e,"aria-valuemax":t,"aria-valuenow":l?void 0:s,"aria-valuetext":r&&r(s),"aria-labelledby":n,"aria-describedby":y,$value:l?void 0:c,children:[f,!l&&d.jsx(v,{...x,...k,$value:c,children:r?r(s):s})]})})},w=u;try{u.displayName="ProgressBar",u.__docgenInfo={description:"",displayName:"ProgressBar",props:{markerConfig:{defaultValue:null,description:"",name:"markerConfig",required:!1,type:{name:"{ $active?: boolean; $background?: string; $hoverable?: boolean | undefined; $filled?: boolean | undefined; } | undefined"}},min:{defaultValue:{value:"0"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"",name:"max",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},labelledById:{defaultValue:null,description:"",name:"labelledById",required:!1,type:{name:"string"}},describedById:{defaultValue:null,description:"",name:"describedById",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},markerFormatter:{defaultValue:null,description:"",name:"markerFormatter",required:!1,type:{name:"((value: number) => string)"}}}}}catch{}const _={component:w,argTypes:{value:{control:"number",description:"The current value of the progress bar, will be bound to `aria-valuenow`. Must be a number or will be displayed as 'indeterminate' and must be between the `min` and `max` values or else it will be bounded to them automatically.",table:{type:{summary:"number"},category:"Model"}},min:{control:"number",description:"The minimum value of the progress bar, will be bound to `aria-valuemin`.",table:{type:{summary:"number"},defaultValue:{summary:0},category:"Model"}},max:{control:"number",description:"The maximum value of the progress bar, will be bound to `aria-valuemax`.",table:{type:{summary:"number"},defaultValue:{summary:100},category:"Model"}},markerFormatter:{control:"none",description:"Formatting method for the value that will be shown in the marker.",table:{type:{summary:"(value: number) => string"},category:"Display"}},markerConfig:{control:"object",description:"Allows override of the marker display.",table:{type:{summary:"{$active?: boolean; $background?: string; $hoverable?: boolean; $filled?: boolean;}"},defaultValue:{summary:"{$active: true, $hoverable: true}"},category:"Display"}},labelledById:{control:"text",description:"The ID of an element that labels the progress bar.",table:{type:{summary:"string"},category:"Accessibility"}},describedById:{control:"text",description:"The ID of an element that describes the progress bar.",table:{type:{summary:"string"},category:"Accessibility"}}}},i={args:{value:40,markerFormatter:e=>Intl.NumberFormat("en-US",{style:"percent"}).format(e/100)}};var b,p,g;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 40,
    markerFormatter: value => Intl.NumberFormat("en-US", {
      style: "percent"
    }).format(value / 100)
  }
}`,...(g=(p=i.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const M=["Primary"];export{i as Primary,M as __namedExportsOrder,_ as default};
