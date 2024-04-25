import{s as K,j as n}from"./styled-components.browser.esm-e0114bd2.js";import{r as h}from"./index-8db94870.js";import{g as $}from"./utils-54f41c78.js";import{n as O,T as X}from"./index-abcb9422.js";import{r as Y}from"./range-6bc2a9a0.js";import{t as S}from"./index-223833fa.js";import{B as W}from"./index-b48b975d.js";import{d as M,P as F}from"./index-a35313c6.js";import{Y as J}from"./index-600f51cf.js";import{C as Q}from"./index-69893c61.js";import{G as R}from"./index-3d39e395.js";import{X as U}from"./index-42ed9bd3.js";const Z={linear:$},N=({min:i,max:l,step:r,range:d,scale:m="linear",scaleOptions:p})=>{const f=h.useMemo(()=>Math.ceil((l-i+1)/10)*10/r,[i,l,r]),s=h.useMemo(()=>O(i,l,f),[i,l,f]),y=Y(s[0],s[1],r),o=h.useCallback(Z[m](s,d,p),[s,d,m]);return[s,y,o]},ee=K(W)`
  font-size: 2.5em;
  overflow: visible;

  @container (
min-width: ${S("BREAK_MOBILE")}
) {
    font-size: 1.75em;
  }

  @container (
min-width: ${S("BREAK_PHABLET_MIN")}
) {
    font-size: 1.5em;
  }

  @container (
min-width: ${S("BREAK_LARGE_TABLET_MIN")}
) {
    font-size: 1.25em;
  }
`,w=({data:i,className:l,xAxis:r,yAxis:d,width:m,height:p,title:f,activePointId:s,margins:y,tooltip:o,plotChildren:_})=>{const[A,I]=h.useState(),{label:z,points:x}=i,g={...M.margins,...y},e=typeof A<"u"?x[A]:x.find(({id:v})=>v===s),b=[0+g.left,m-g.right],C=[p-g.bottom,0+g.top],[c,B,t]=N({...r,range:b}),[u,q,a]=N({...d,range:C}),E=a(u[0]),P=t(c[0]),L=a(u[1]),T=t(c[1]),V="x-axis-label",j="y-axis-label",H=Math.abs(b[1]-b[0]),D=Math.abs(C[1]-C[0]),k=n.jsx(F,{data:x,onHoverCallback:v=>I(v),onHoverOutCallback:()=>I(void 0),label:z,xScale:t,yScale:a}),G={Data:k,xScale:t,yScale:a,yStart:E,yEnd:L,xStart:P,xEnd:T,yDomain:u,xDomain:c};return n.jsxs(ee,{verticalLabel:d.label,verticalLabelId:j,horizontalLabel:r.label,horizontalLabelId:V,className:l,width:m,height:p,title:f,children:[n.jsx(J,{ticks:q,x:P,labelledById:j,yDomain:u,yScale:a}),n.jsxs(Q,{x:P,y:L,width:H,height:D,children:[r.guidelines&&n.jsx(R,{guides:B.length,direction:"vertical",xDomain:c,yDomain:u,xScale:t,yScale:a}),d.guidelines&&n.jsx(R,{guides:q.length,xDomain:c,yDomain:u,xScale:t,yScale:a}),_?_(G):k]}),n.jsx(U,{ticks:B,y:E,labelledById:V,xDomain:c,xScale:t}),o&&n.jsxs(X,{x:e?t(e.x):void 0,y:e?a(e.y):void 0,visible:!!e,offset:M.pointRadius,children:[e&&typeof o=="function"&&o(e),e&&typeof o=="string"&&o]})]})};w.displayName="Charts.ScatterPlot";const pe=w;try{Charts.ScatterPlot.displayName="Charts.ScatterPlot",Charts.ScatterPlot.__docgenInfo={description:"",displayName:"Charts.ScatterPlot",props:{xAxis:{defaultValue:null,description:"",name:"xAxis",required:!0,type:{name:"AxisConfig"}},yAxis:{defaultValue:null,description:"",name:"yAxis",required:!0,type:{name:"AxisConfig"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ScatterPlotDataset"}},activePointId:{defaultValue:null,description:"",name:"activePointId",required:!1,type:{name:"string | number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},margins:{defaultValue:null,description:"",name:"margins",required:!1,type:{name:"Partial<ChartMargin>"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string | ((point: Point) => ReactNode)"}},plotChildren:{defaultValue:null,description:"",name:"plotChildren",required:!1,type:{name:"PlotChildRenderer"}}}}}catch{}export{pe as B};
