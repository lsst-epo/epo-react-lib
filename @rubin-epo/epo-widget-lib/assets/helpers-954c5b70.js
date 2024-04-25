import{g as q}from"./_commonjsHelpers-042e6b4d.js";import{b as w}from"./isSymbol-f1e92ba4.js";import{_ as C}from"./_baseIteratee-2d0bc0db.js";import{s as f,j as c}from"./styled-components.browser.esm-e0114bd2.js";import{B as V}from"./index-237b72e7.js";import{t as g}from"./index-223833fa.js";import{B as $}from"./index-b48b975d.js";import{u as M}from"./useTranslation-fdd24caa.js";import{m as j,a as I}from"./min-d247b692.js";var N=w;function S(e,t,i){for(var n=-1,s=e.length;++n<s;){var a=e[n],r=t(a);if(r!=null&&(o===void 0?r===r&&!N(r):i(r,o)))var o=r,m=a}return m}var R=S;function W(e,t){return e<t}var O=W,k=R,z=C,F=O;function D(e,t){return e&&e.length?k(e,z(t),F):void 0}var T=D;const me=q(T),K={xMin:-10,xMax:50,xStep:10,yStep:-.5,yMin:20,yMax:14,width:600,height:600,gaussianMin:-4,gaussianMax:4,gaussianStep:.01,gaussianWidth:-2,yOffsetMin:-50,yOffsetMax:50,yOffsetStep:.1,yOffset:-2},u=K,G=f.div`
  --label-height: 3em;

  aspect-ratio: 1;
  color: var(--neutral95, #1f2121);
  container-type: inline-size;
  background-color: var(--white, #fff);
  border: 1px solid var(--turquoise55, #009fa1);
  gap: var(--light-curve-padding);
  position: relative;
`;f($)`
  font-size: 2.5em;
  overflow: visible;

  @container (
  min-width: ${g("BREAK_MOBILE")}
) {
    font-size: 1.75em;
  }

  @container (
  min-width: ${g("BREAK_PHABLET_MIN")}
) {
    font-size: 1.5em;
  }

  @container (
  min-width: ${g("BREAK_LARGE_TABLET_MIN")}
) {
    font-size: 1.25em;
  }
`;const H=f.div`
  position: absolute;
  width: calc(100% - calc(var(--label-height) * 2));
  height: calc(100% - calc(var(--label-height) * 2));
  top: var(--label-height);
  left: var(--label-height);
  pointer-events: none;
`,U=f.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
`,J=(e,t,i)=>{const n={};return Object.keys(e).forEach(a=>{const r=a==="top"||a==="bottom"?i:t,o=`${a.charAt(0).toUpperCase()}${a.slice(1)}`;n[`padding${o}`]=`${e[a]/r*100}%`}),n},_=({data:e,activeAlertId:t,xMin:i,xMax:n,yMin:s=u.yMin,yMax:a=u.yMax,width:r=u.width,height:o=u.height,name:m,slider:d,className:A,plotChildren:x})=>{const{t:p,i18n:{language:P}}=M(),E=p("light_curve.plot.x_label"),L=p("light_curve.plot.y_label"),b={top:10,right:10,bottom:25,left:40};return c.jsxs(G,{className:A,children:[c.jsx(V,{width:r,height:o,margins:b,activePointId:t,title:m,xAxis:{min:i||j(e,({x:l})=>l)||u.xMin,max:n||I(e,({x:l})=>l)||u.xMax,step:u.xStep,label:E},yAxis:{min:s,max:a,step:s<a?Math.abs(u.yStep):u.yStep,label:L},data:{label:p("light_curve.plot.plot_label"),points:e},tooltip:({y:l})=>p("light_curve.plot.tooltip",{magnitude:l.toLocaleString(P,{minimumFractionDigits:2,maximumFractionDigits:2})}),plotChildren:({xScale:l,yStart:v,yEnd:h,Data:y,...B})=>c.jsxs(c.Fragment,{children:[c.jsx("rect",{x:l(0),y:h,width:l(15)-l(0),height:v-h,stroke:"var(--neutral60,##6A6E6E)",strokeDasharray:6,fill:"var(--neutral20,#DCE0E3)"}),y,x&&x({xScale:l,yStart:v,yEnd:h,Data:y,...B})]})}),d&&c.jsx(H,{children:c.jsx(U,{style:{...J(b,r,o)},children:d})})]})};_.displayName="Widgets.LightCurve.Plot";const ce=_;try{Widgets.LightCurve.Plot.displayName="Widgets.LightCurve.Plot",Widgets.LightCurve.Plot.__docgenInfo={description:"",displayName:"Widgets.LightCurve.Plot",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Point[]"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},activeAlertId:{defaultValue:null,description:"",name:"activeAlertId",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},slider:{defaultValue:null,description:"",name:"slider",required:!1,type:{name:"ReactNode"}},plotChildren:{defaultValue:null,description:"",name:"plotChildren",required:!1,type:{name:"PlotChildRenderer"}},xMin:{defaultValue:null,description:"",name:"xMin",required:!1,type:{name:"number"}},xMax:{defaultValue:null,description:"",name:"xMax",required:!1,type:{name:"number"}},width:{defaultValue:{value:"600"},description:"",name:"width",required:!1,type:{name:"number"}},yMin:{defaultValue:{value:"20"},description:"",name:"yMin",required:!1,type:{name:"number"}},yMax:{defaultValue:{value:"14"},description:"",name:"yMax",required:!1,type:{name:"number"}},height:{defaultValue:{value:"600"},description:"",name:"height",required:!1,type:{name:"number"}}}}}catch{}const Q=(e,t)=>e-t,de=(e,t)=>{const{t:i}=M();return e.map(({date:n,magnitude:s,error:a,id:r})=>{const o=Q(n,t),m=Math.round(o),d=m>0?"after":m===0?"peak":"before";return{x:o,y:s,error:{y:{min:a,max:a}},id:r,date:n,description:i("light_curve.plot.point_label",{magnitude:s,count:Math.abs(m),context:d})||void 0}})},X=(e,t)=>t*Math.exp(-((e-5)**2)/20**2)+1,Y=(e,t)=>t*=Math.exp(-.1*(e- -15))+1,Z=(e,t)=>{let s=X(e,t);s=Y(e,s);const a=Math.max(e,0);return s+=.02*a+15,Number(s.toFixed(4))},ee=(e,t,i)=>Z(e,t)-i,pe=(e,t,i)=>Math.abs(e.y-ee(e.x,t,i));export{ce as P,ee as a,pe as c,u as d,Z as e,me as m,de as u};
