import{j as e,s as m}from"./styled-components.browser.esm-e0114bd2.js";import{r as C}from"./index-8db94870.js";import{b as re}from"./index-f0f43cc6.js";import{e as W,c as ne,m as H,u as se,a as ue,P as le,d as o}from"./helpers-954c5b70.js";import{u as de,H as k}from"./HorizontalSlider-a5320790.js";import{r as oe}from"./range-6bc2a9a0.js";import{c as me}from"./utils-54f41c78.js";import{u as y}from"./useTranslation-fdd24caa.js";import{R as ce}from"./index-83633d92.js";import{F as pe}from"./index-abcb9422.js";import{C as ge}from"./Container-4222a0a1.js";import"./_commonjsHelpers-042e6b4d.js";import"./isSymbol-f1e92ba4.js";import"./_baseIteratee-2d0bc0db.js";import"./_stringToPath-4591b2bb.js";import"./_baseIsEqual-8f245713.js";import"./_baseToString-b5a9b60d.js";import"./toString-bc7f5975.js";import"./index-237b72e7.js";import"./index-223833fa.js";import"./index-12ae03d4.js";import"./index-b48b975d.js";import"./index-a35313c6.js";import"./index-600f51cf.js";import"./styles-2fca3e33.js";import"./index-69893c61.js";import"./index-3d39e395.js";import"./index-42ed9bd3.js";import"./min-d247b692.js";import"./IconComposer-0a5b6514.js";import"./i18nInstance-764935cb.js";import"./toPropertyKey-148bb9ef.js";import"./context-3d6b95f0.js";import"./utils-7aca7d2f.js";import"./Button-accaf53d.js";const G=({innerWidth:t,innerHeight:a,outerWidth:n,outerHeight:s,x:r,y:i,children:u})=>e.jsx("svg",{preserveAspectRatio:"none",x:r,y:i,width:n,height:s,viewBox:`0 0 ${t} ${a}`,children:u});G.displayName="Widgets.Charts.Viewport";const he=G;try{Widgets.Charts.Viewport.displayName="Widgets.Charts.Viewport",Widgets.Charts.Viewport.__docgenInfo={description:"",displayName:"Widgets.Charts.Viewport",props:{innerWidth:{defaultValue:null,description:"",name:"innerWidth",required:!0,type:{name:"number"}},innerHeight:{defaultValue:null,description:"",name:"innerHeight",required:!0,type:{name:"number"}},outerWidth:{defaultValue:null,description:"",name:"outerWidth",required:!0,type:{name:"number"}},outerHeight:{defaultValue:null,description:"",name:"outerHeight",required:!0,type:{name:"number"}},x:{defaultValue:null,description:"",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!0,type:{name:"number"}}}}}catch{}const z=({xScale:t,xDomain:a,yScale:n,yDomain:s,gaussianWidth:r,yOffset:i})=>{const l=oe(a[0],a[1],.5).map(c=>({x:c,y:W(c,r)})).map(({x:c,y:d},p)=>`${p===0?"M":"L"}${t(c)},${n(d)}`).join("");return e.jsx("path",{transform:`translate(0,${n(s[1]-i)})`,d:l,fill:"none",strokeWidth:2,stroke:"var(--black,#000)",pointerEvents:"none"})};z.displayName="Widgets.LightCurve.Curve";const fe=z;try{Widgets.LightCurve.Curve.displayName="Widgets.LightCurve.Curve",Widgets.LightCurve.Curve.__docgenInfo={description:"",displayName:"Widgets.LightCurve.Curve",props:{xScale:{defaultValue:null,description:"",name:"xScale",required:!0,type:{name:"ScaleFunction"}},yScale:{defaultValue:null,description:"",name:"yScale",required:!0,type:{name:"ScaleFunction"}},yOffset:{defaultValue:null,description:"",name:"yOffset",required:!0,type:{name:"number"}},gaussianWidth:{defaultValue:null,description:"",name:"gaussianWidth",required:!0,type:{name:"number"}},xDomain:{defaultValue:null,description:"",name:"xDomain",required:!0,type:{name:"Domain"}},yDomain:{defaultValue:null,description:"",name:"yDomain",required:!0,type:{name:"Domain"}}}}}catch{}const ve=m.output`
  clip: rect(1px 1px 1px 1px); /* IE 6/7 */
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,B=({data:t,gaussianWidth:a,yOffset:n,controlledById:s,estimatedPeak:r})=>{const{t:i,i18n:{language:u}}=y(),l=t.filter(({x:d})=>me(d,0,15)).reduce((d,p)=>d+ne(p,a,n),0)/t.length,{y:c}=H(t,({y:d})=>d)||{};return e.jsx(ve,{form:s,children:i("light_curve.curve.description",{residual:l.toLocaleString(u,{minimumFractionDigits:2,maximumFractionDigits:2}),brightest:c==null?void 0:c.toLocaleString(u,{minimumFractionDigits:1,maximumFractionDigits:1}),context:r<Number(c)?"above":"below"})})};B.displayName="Widgets.LightCurvel.A11Y.LightCurveLabel";const ye=B;try{Widgets.LightCurvel.A11Y.LightCurveLabel.displayName="Widgets.LightCurvel.A11Y.LightCurveLabel",Widgets.LightCurvel.A11Y.LightCurveLabel.__docgenInfo={description:"",displayName:"Widgets.LightCurvel.A11Y.LightCurveLabel",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}},controlledById:{defaultValue:null,description:"",name:"controlledById",required:!1,type:{name:"string"}},estimatedPeak:{defaultValue:null,description:"",name:"estimatedPeak",required:!0,type:{name:"number"}},gaussianWidth:{defaultValue:null,description:"",name:"gaussianWidth",required:!0,type:{name:"number"}},yOffset:{defaultValue:null,description:"",name:"yOffset",required:!0,type:{name:"number"}}}}}catch{}const be=m(de)`
  --thumb-size: 20px;
  --thumb-border-width: 2px;

  width: 100%;
  height: 100%;
`,xe=m.div`
  box-sizing: border-box;
  border: none;
  border-bottom: var(--thumb-border-width) dashed var(--black, #000);
  flex-grow: 1;
`,Ce=m.div`
  aspect-ratio: 1;
  box-sizing: border-box;
  background-color: var(--white, #fff);
  border: var(--thumb-border-width) solid var(--black, #000);
  border-radius: 50%;
  pointer-events: auto;
  width: var(--thumb-size);
`,We=m.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 0px;
  width: 100%;
  overflow: visible;
  pointer-events: auto;

  &:focus {
    outline: none;
  }

  &:not([aria-disabled="true"]) {
    cursor: grab;

    &:active,
    &.active {
      cursor: grabbing;
    }
  }
`,Me=(t,a,n)=>{const s=Number(Math.abs(a-t).toFixed(1)),r=s.toLocaleString(n,{minimumFractionDigits:1,maximumFractionDigits:1});let i;return s<=.05?(i="equal",{distance:s,context:i}):(t<a?i="above":i="below",{distance:r,context:i})},T=({magnitude:t,yMin:a,yMax:n,onMagnitudeChangeCallback:s,estimatedPeak:r,disabled:i})=>{const{t:u,i18n:{language:l}}=y(),c=Math.min(a,n),d=Math.max(a,n);return e.jsx(be,{ariaLabel:u("light_curve.magnitude_slider.label")||void 0,orientation:"vertical",value:t,step:.1,ariaValuetext:()=>u("light_curve.magnitude_slider.value",{...Me(r,t,l),magnitude:t.toLocaleString(l,{minimumFractionDigits:1,maximumFractionDigits:1})}),onChange:s,renderThumb:({key:p,style:h,...b})=>e.jsxs(We,{...b,style:h,children:[e.jsx(xe,{}),e.jsx(Ce,{})]},p),min:c,max:d,disabled:i})};T.displayName="Widgets.LightCurve.MagnitudeSlider";const Le=T;try{Widgets.LightCurve.MagnitudeSlider.displayName="Widgets.LightCurve.MagnitudeSlider",Widgets.LightCurve.MagnitudeSlider.__docgenInfo={description:"",displayName:"Widgets.LightCurve.MagnitudeSlider",props:{yMin:{defaultValue:null,description:"",name:"yMin",required:!0,type:{name:"number"}},yMax:{defaultValue:null,description:"",name:"yMax",required:!0,type:{name:"number"}},magnitude:{defaultValue:null,description:"",name:"magnitude",required:!0,type:{name:"number"}},onMagnitudeChangeCallback:{defaultValue:null,description:"",name:"onMagnitudeChangeCallback",required:!0,type:{name:"(value: number) => void"}},estimatedPeak:{defaultValue:null,description:"",name:"estimatedPeak",required:!0,type:{name:"number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const _e=m.div`
  display: flex;
  justify-content: end;
  align-items: start;
`,Ve=m.div`
  display: flex;
  align-items: center;
  gap: 1ch;
  min-height: 1em;
`,qe=m.div`
  background-color: var(--black, #000);
  height: 2px;
  width: 3ch;
`,M=({gaussianWidth:t,className:a})=>{const{t:n,i18n:{language:s}}=y(),r=W(0,t),u=W(15,t)-r;return e.jsx(pe,{children:e.jsx(_e,{children:e.jsxs(Ve,{className:a,children:[e.jsx(qe,{}),e.jsxs("math",{xmlns:"http://www.w3.org/1998/Math/MathML",children:[e.jsx("mn",{children:"Δ"}),e.jsxs("msub",{children:[e.jsx("mi",{children:"m"}),e.jsx("mn",{children:"15"})]}),e.jsx("mo",{children:"="}),e.jsx("mn",{role:"status","aria-live":"polite","aria-label":n("light_curve.deltaM15.label")||void 0,children:Number(u).toLocaleString(s,{minimumFractionDigits:2,maximumFractionDigits:2})})]})]})})})};M.displayName="Widgets.LightCurve.DM15Display";const je=M;M.__docgenInfo={description:`@param {object} props
@param {number} props.gaussianWidth
@param {string} [props.className]
@returns`,methods:[],displayName:"Widgets.LightCurve.DM15Display"};const De=m.div`
  --light-curve-padding: var(--PADDING_SMALL, 20px);

  display: grid;
  gap: var(--light-curve-padding);
  grid-template-rows: 1fr min-content;
  position: relative;
`;m.div`
  display: flex;
  flex-direction: column;
  container-type: inline-size;
  background-color: var(--white, #fff);
  border: 1px solid var(--turquoise55, #009fa1);
  gap: var(--light-curve-padding);
  padding: var(--light-curve-padding);
  grid-template-columns: 1fr;
`;m.h3`
  margin: 0;
`;const we=m(je)`
  background-color: var(--white, #fff);
  margin: 2px 1em;
  padding: 2px;
`,Oe=m.form`
  display: flex;
  flex-direction: column;
  gap: var(--light-curve-padding);
`,N=m.span`
  display: block;
  margin-block-end: var(--light-curve-padding);
`,U=({gaussianWidth:t=o.gaussianWidth,yOffset:a=o.yOffset,alerts:n,peakMjd:s,yMin:r=o.yMin,yMax:i=o.yMax,width:u=o.width,height:l=o.height,userMagnitude:c=(i-r)/2+r,onUserMagnitudeChangeCallback:d,onGaussianChangeCallback:p,onYOffsetChangeCallback:h,className:b,isDisplayOnly:_,...Q})=>{const{t:V}=y(),q="lightCurveControls",j="gaussianWidthLabel",D="yOffsetLabel",x=se(n,s),X=()=>{d&&d((i-r)/2+r),h&&h(o.yOffset),p&&p(o.gaussianWidth)},w=ue(0,t,a);return e.jsxs(De,{className:b,children:[e.jsx(le,{slider:e.jsx(Le,{magnitude:c,onMagnitudeChangeCallback:g=>d&&d(g),disabled:_,yMin:r,yMax:i,estimatedPeak:w}),plotChildren:({xScale:g,yScale:Z,xDomain:ee,yDomain:te,xStart:O,xEnd:ae,yStart:ie,yEnd:S})=>e.jsxs(e.Fragment,{children:[e.jsx(fe,{gaussianWidth:t,yOffset:a,xDomain:ee,xScale:g,yScale:Z,yDomain:te}),e.jsx(he,{x:O,y:S,outerHeight:ie-S,outerWidth:ae-O,innerWidth:u,innerHeight:l,children:e.jsx(we,{gaussianWidth:t})})]}),...Q,data:x,width:u,height:l,yMin:r,yMax:i}),x.length>0?e.jsx(e.Fragment,{}):null,!_&&e.jsxs(Oe,{id:q,children:[e.jsxs("div",{children:[e.jsx(N,{id:j,children:V("light_curve.curve.controls.gaussian_width")}),e.jsx(k,{label:"Gaussian Width",labelledbyId:j,color:"var(--turquoise85, #12726D)",min:o.gaussianMin,max:o.gaussianMax,step:o.gaussianStep,value:t,onChangeCallback:g=>typeof g=="number"&&p&&p(g)})]}),e.jsxs("div",{children:[e.jsx(N,{id:D,children:V("light_curve.curve.controls.y_offset")}),e.jsx(k,{label:"Y Offset",labelledbyId:D,color:"var(--turquoise85, #12726D)",min:o.yOffsetMin,max:o.yOffsetMax,step:o.yOffsetStep,value:a,onChangeCallback:g=>typeof g=="number"&&h&&h(g)})]}),e.jsx(ce,{onResetCallback:X})]}),e.jsx(ye,{controlledById:q,data:x,gaussianWidth:t,yOffset:a,estimatedPeak:w})]})};U.displayName="Widgets.LightCurve";const E=U;try{Widgets.LightCurve.displayName="Widgets.LightCurve",Widgets.LightCurve.__docgenInfo={description:"",displayName:"Widgets.LightCurve",props:{gaussianWidth:{defaultValue:{value:"-2"},description:"",name:"gaussianWidth",required:!1,type:{name:"number"}},yOffset:{defaultValue:{value:"-2"},description:"",name:"yOffset",required:!1,type:{name:"number"}},userMagnitude:{defaultValue:{value:"(yMax - yMin) / 2 + yMin"},description:"",name:"userMagnitude",required:!1,type:{name:"number"}},onUserMagnitudeChangeCallback:{defaultValue:null,description:"",name:"onUserMagnitudeChangeCallback",required:!1,type:{name:"((value: number) => void)"}},onGaussianChangeCallback:{defaultValue:null,description:"",name:"onGaussianChangeCallback",required:!1,type:{name:"((value: number) => void)"}},onYOffsetChangeCallback:{defaultValue:null,description:"",name:"onYOffsetChangeCallback",required:!1,type:{name:"((value: number) => void)"}},isDisplayOnly:{defaultValue:null,description:"",name:"isDisplayOnly",required:!1,type:{name:"boolean"}},alerts:{defaultValue:null,description:"",name:"alerts",required:!0,type:{name:"Alert[]"}},peakMjd:{defaultValue:null,description:"",name:"peakMjd",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:{value:"600"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"600"},description:"",name:"height",required:!1,type:{name:"number"}},xMin:{defaultValue:null,description:"",name:"xMin",required:!1,type:{name:"number"}},xMax:{defaultValue:null,description:"",name:"xMax",required:!1,type:{name:"number"}},yMin:{defaultValue:{value:"20"},description:"",name:"yMin",required:!1,type:{name:"number"}},yMax:{defaultValue:{value:"14"},description:"",name:"yMax",required:!1,type:{name:"number"}},plotChildren:{defaultValue:null,description:"",name:"plotChildren",required:!1,type:{name:"PlotChildRenderer"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},activeAlertId:{defaultValue:null,description:"",name:"activeAlertId",required:!1,type:{name:"number"}},slider:{defaultValue:null,description:"",name:"slider",required:!1,type:{name:"ReactNode"}}}}}catch{}const pt={argTypes:{gaussianWidth:{control:"none"},yOffset:{control:"none"}},component:E},{alerts:L}=re;var F;const J=(((F=H(L,({magnitude:t})=>t))==null?void 0:F.date)||0)-.5,K=t=>{const[a,n]=C.useState(t.userMagnitude),[s,r]=C.useState(t.gaussianWidth),[i,u]=C.useState(t.yOffset);return e.jsx(ge,{children:e.jsx(E,{...t,gaussianWidth:s,yOffset:i,userMagnitude:a,onGaussianChangeCallback:l=>r(l),onYOffsetChangeCallback:l=>u(l),onUserMagnitudeChangeCallback:l=>n(l)})})},f=K.bind({});f.args={alerts:L,peakMjd:J,name:"Supernova A"};const v=K.bind({});v.args={alerts:L,peakMjd:J,name:"Supernova A",isDisplayOnly:!0};var I,A,P;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [userMagnitude, setUserMagnitude] = useState(args.userMagnitude);
  const [gaussianWidth, setGaussianWidth] = useState(args.gaussianWidth);
  const [yOffset, setYOffset] = useState(args.yOffset);
  return <Container>
      <PlotWithCurve {...args} {...{
      gaussianWidth,
      yOffset,
      userMagnitude
    }} onGaussianChangeCallback={value => setGaussianWidth(value)} onYOffsetChangeCallback={value => setYOffset(value)} onUserMagnitudeChangeCallback={value => setUserMagnitude(value)} />
    </Container>;
}`,...(P=(A=f.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var Y,R,$;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const [userMagnitude, setUserMagnitude] = useState(args.userMagnitude);
  const [gaussianWidth, setGaussianWidth] = useState(args.gaussianWidth);
  const [yOffset, setYOffset] = useState(args.yOffset);
  return <Container>
      <PlotWithCurve {...args} {...{
      gaussianWidth,
      yOffset,
      userMagnitude
    }} onGaussianChangeCallback={value => setGaussianWidth(value)} onYOffsetChangeCallback={value => setYOffset(value)} onUserMagnitudeChangeCallback={value => setUserMagnitude(value)} />
    </Container>;
}`,...($=(R=v.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};const gt=["Primary","ReadOnly"];export{f as Primary,v as ReadOnly,gt as __namedExportsOrder,pt as default};
