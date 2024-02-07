import{j as m}from"./jsx-runtime-94f6e698.js";import{a as ne}from"./argTypes-00d6a2ce.js";import{R as S,r as Z}from"./index-8db94870.js";import{a as oe,b as se}from"./utils-108824b3.js";import{s as g}from"./styled-components.browser.esm-3d9e3c21.js";import"./_commonjsHelpers-042e6b4d.js";function N(i,u){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},N(i,u)}function ae(i,u){i.prototype=Object.create(u.prototype),i.prototype.constructor=i,N(i,u)}function K(i){return i&&i.stopPropagation&&i.stopPropagation(),i&&i.preventDefault&&i.preventDefault(),!1}function O(i){return i==null?[]:Array.isArray(i)?i.slice():[i]}function D(i){return i!==null&&i.length===1?i[0]:i.slice()}function V(i){Object.keys(i).forEach(u=>{typeof document<"u"&&document.addEventListener(u,i[u],!1)})}function y(i,u){return A(function(a,t){let e=a;return e<=t.min&&(e=t.min),e>=t.max&&(e=t.max),e}(i,u),u)}function A(i,u){const a=(i-u.min)%u.step;let t=i-a;return 2*Math.abs(a)>=u.step&&(t+=a>0?u.step:-u.step),parseFloat(t.toFixed(5))}let B=function(i){function u(t){var e;(e=i.call(this,t)||this).onKeyUp=()=>{e.onEnd()},e.onMouseUp=()=>{e.onEnd(e.getMouseEventMap())},e.onTouchEnd=r=>{r.preventDefault(),e.onEnd(e.getTouchEventMap())},e.onBlur=()=>{e.setState({index:-1},e.onEnd(e.getKeyDownEventMap()))},e.onMouseMove=r=>{e.setState({pending:!0});const o=e.getMousePosition(r),l=e.getDiffPosition(o[0]),c=e.getValueFromPosition(l);e.move(c)},e.onTouchMove=r=>{if(r.touches.length>1)return;e.setState({pending:!0});const o=e.getTouchPosition(r);if(e.isScrolling===void 0){const d=o[0]-e.startPosition[0],p=o[1]-e.startPosition[1];e.isScrolling=Math.abs(p)>Math.abs(d)}if(e.isScrolling)return void e.setState({index:-1});const l=e.getDiffPosition(o[0]),c=e.getValueFromPosition(l);e.move(c)},e.onKeyDown=r=>{if(!(r.ctrlKey||r.shiftKey||r.altKey||r.metaKey))switch(e.setState({pending:!0}),r.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":r.preventDefault(),e.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":r.preventDefault(),e.moveUpByStep();break;case"Home":r.preventDefault(),e.move(e.props.min);break;case"End":r.preventDefault(),e.move(e.props.max);break;case"PageDown":r.preventDefault(),e.moveDownByStep(e.props.pageFn(e.props.step));break;case"PageUp":r.preventDefault(),e.moveUpByStep(e.props.pageFn(e.props.step))}},e.onSliderMouseDown=r=>{if(!e.props.disabled&&r.button!==2){if(e.setState({pending:!0}),!e.props.snapDragDisabled){const o=e.getMousePosition(r);e.forceValueFromPosition(o[0],l=>{e.start(l,o[0]),V(e.getMouseEventMap())})}K(r)}},e.onSliderClick=r=>{if(!e.props.disabled&&e.props.onSliderClick&&!e.hasMoved){const o=e.getMousePosition(r),l=y(e.calcValue(e.calcOffsetFromPosition(o[0])),e.props);e.props.onSliderClick(l)}},e.createOnKeyDown=r=>o=>{e.props.disabled||(e.start(r),V(e.getKeyDownEventMap()),K(o))},e.createOnMouseDown=r=>o=>{if(e.props.disabled||o.button===2)return;e.setState({pending:!0});const l=e.getMousePosition(o);e.start(r,l[0]),V(e.getMouseEventMap()),K(o)},e.createOnTouchStart=r=>o=>{if(e.props.disabled||o.touches.length>1)return;e.setState({pending:!0});const l=e.getTouchPosition(o);e.startPosition=l,e.isScrolling=void 0,e.start(r,l[0]),V(e.getTouchEventMap()),function(c){c.stopPropagation&&c.stopPropagation()}(o)},e.handleResize=()=>{const r=window.setTimeout(()=>{e.pendingResizeTimeouts.shift(),e.resize()},0);e.pendingResizeTimeouts.push(r)},e.renderThumb=(r,o)=>{const l=e.props.thumbClassName+" "+e.props.thumbClassName+"-"+o+" "+(e.state.index===o?e.props.thumbActiveClassName:""),c={ref:p=>{e["thumb"+o]=p},key:e.props.thumbClassName+"-"+o,className:l,style:r,onMouseDown:e.createOnMouseDown(o),onTouchStart:e.createOnTouchStart(o),onFocus:e.createOnKeyDown(o),tabIndex:0,role:"slider","aria-orientation":e.props.orientation,"aria-valuenow":e.state.value[o],"aria-valuemin":e.props.min,"aria-valuemax":e.props.max,"aria-label":Array.isArray(e.props.ariaLabel)?e.props.ariaLabel[o]:e.props.ariaLabel,"aria-labelledby":Array.isArray(e.props.ariaLabelledby)?e.props.ariaLabelledby[o]:e.props.ariaLabelledby,"aria-disabled":e.props.disabled},d={index:o,value:D(e.state.value),valueNow:e.state.value[o]};return e.props.ariaValuetext&&(c["aria-valuetext"]=typeof e.props.ariaValuetext=="string"?e.props.ariaValuetext:e.props.ariaValuetext(d)),e.props.renderThumb(c,d)},e.renderTrack=(r,o,l)=>{const c={key:e.props.trackClassName+"-"+r,className:e.props.trackClassName+" "+e.props.trackClassName+"-"+r,style:e.buildTrackStyle(o,e.state.upperBound-l)},d={index:r,value:D(e.state.value)};return e.props.renderTrack(c,d)};let n=O(t.value);n.length||(n=O(t.defaultValue)),e.pendingResizeTimeouts=[];const s=[];for(let r=0;r<n.length;r+=1)n[r]=y(n[r],t),s.push(r);return e.resizeObserver=null,e.resizeElementRef=S.createRef(),e.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:s},e}ae(u,i);var a=u.prototype;return a.componentDidMount=function(){typeof window<"u"&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},u.getDerivedStateFromProps=function(t,e){const n=O(t.value);return n.length?e.pending?null:{value:n.map(s=>y(s,t))}:null},a.componentDidUpdate=function(){this.state.upperBound===0&&this.resize()},a.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},a.onEnd=function(t){t&&function(e){Object.keys(e).forEach(n=>{typeof document<"u"&&document.removeEventListener(n,e[n],!1)})}(t),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},a.getValue=function(){return D(this.state.value)},a.getClosestIndex=function(t){let e=Number.MAX_VALUE,n=-1;const{value:s}=this.state,r=s.length;for(let o=0;o<r;o+=1){const l=this.calcOffset(s[o]),c=Math.abs(t-l);c<e&&(e=c,n=o)}return n},a.getMousePosition=function(t){return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},a.getTouchPosition=function(t){const e=t.touches[0];return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},a.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},a.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},a.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},a.getValueFromPosition=function(t){const e=t/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return y(this.state.startValue+e,this.props)},a.getDiffPosition=function(t){let e=t-this.state.startPosition;return this.props.invert&&(e*=-1),e},a.resize=function(){const{slider:t,thumb0:e}=this;if(!t||!e)return;const n=this.sizeKey(),s=t.getBoundingClientRect(),r=t[n],o=s[this.posMaxKey()],l=s[this.posMinKey()],c=e.getBoundingClientRect()[n.replace("client","").toLowerCase()],d=r-c,p=Math.abs(o-l);this.state.upperBound===d&&this.state.sliderLength===p&&this.state.thumbSize===c||this.setState({upperBound:d,sliderLength:p,thumbSize:c})},a.calcOffset=function(t){const e=this.props.max-this.props.min;return e===0?0:(t-this.props.min)/e*this.state.upperBound},a.calcValue=function(t){return t/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},a.calcOffsetFromPosition=function(t){const{slider:e}=this,n=e.getBoundingClientRect(),s=n[this.posMaxKey()],r=n[this.posMinKey()];let o=t-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?s:r));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},a.forceValueFromPosition=function(t,e){const n=this.calcOffsetFromPosition(t),s=this.getClosestIndex(n),r=y(this.calcValue(n),this.props),o=this.state.value.slice();o[s]=r;for(let l=0;l<o.length-1;l+=1)if(o[l+1]-o[l]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},()=>{e(s),this.fireChangeEvent("onChange")})},a.clearPendingResizeTimeouts=function(){do{const t=this.pendingResizeTimeouts.shift();clearTimeout(t)}while(this.pendingResizeTimeouts.length)},a.start=function(t,e){const n=this["thumb"+t];n&&n.focus();const{zIndices:s}=this.state;s.splice(s.indexOf(t),1),s.push(t),this.setState(r=>({startValue:r.value[t],startPosition:e!==void 0?e:r.startPosition,index:t,zIndices:s}))},a.moveUpByStep=function(t){t===void 0&&(t=this.props.step);const e=this.state.value[this.state.index],n=y(this.props.invert&&this.props.orientation==="horizontal"?e-t:e+t,this.props);this.move(Math.min(n,this.props.max))},a.moveDownByStep=function(t){t===void 0&&(t=this.props.step);const e=this.state.value[this.state.index],n=y(this.props.invert&&this.props.orientation==="horizontal"?e+t:e-t,this.props);this.move(Math.max(n,this.props.min))},a.move=function(t){const e=this.state.value.slice(),{index:n}=this.state,{length:s}=e,r=e[n];if(t===r)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:l,min:c,minDistance:d}=this.props;if(!o){if(n>0){const p=e[n-1];t<p+d&&(t=p+d)}if(n<s-1){const p=e[n+1];t>p-d&&(t=p-d)}}e[n]=t,o&&s>1&&(t>r?(this.pushSucceeding(e,d,n),function(p,b,z,x){for(let h=0;h<p;h+=1){const v=x-h*z;b[p-1-h]>v&&(b[p-1-h]=v)}}(s,e,d,l)):t<r&&(this.pushPreceding(e,d,n),function(p,b,z,x){for(let h=0;h<p;h+=1){const v=x+h*z;b[h]<v&&(b[h]=v)}}(s,e,d,c))),this.setState({value:e},this.fireChangeEvent.bind(this,"onChange"))},a.pushSucceeding=function(t,e,n){let s,r;for(s=n,r=t[s]+e;t[s+1]!==null&&r>t[s+1];s+=1,r=t[s]+e)t[s+1]=A(r,this.props)},a.pushPreceding=function(t,e,n){for(let s=n,r=t[s]-e;t[s-1]!==null&&r<t[s-1];s-=1,r=t[s]-e)t[s-1]=A(r,this.props)},a.axisKey=function(){return this.props.orientation==="vertical"?"Y":"X"},a.orthogonalAxisKey=function(){return this.props.orientation==="vertical"?"X":"Y"},a.posMinKey=function(){return this.props.orientation==="vertical"?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},a.posMaxKey=function(){return this.props.orientation==="vertical"?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},a.sizeKey=function(){return this.props.orientation==="vertical"?"clientHeight":"clientWidth"},a.fireChangeEvent=function(t){this.props[t]&&this.props[t](D(this.state.value),this.state.index)},a.buildThumbStyle=function(t,e){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(e)+1};return n[this.posMinKey()]=t+"px",n},a.buildTrackStyle=function(t,e){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=t,n[this.posMaxKey()]=e,n},a.buildMarkStyle=function(t){var e;return(e={position:"absolute"})[this.posMinKey()]=t,e},a.renderThumbs=function(t){const{length:e}=t,n=[];for(let r=0;r<e;r+=1)n[r]=this.buildThumbStyle(t[r],r);const s=[];for(let r=0;r<e;r+=1)s[r]=this.renderThumb(n[r],r);return s},a.renderTracks=function(t){const e=[],n=t.length-1;e.push(this.renderTrack(0,0,t[0]));for(let s=0;s<n;s+=1)e.push(this.renderTrack(s+1,t[s],t[s+1]));return e.push(this.renderTrack(n+1,t[n],this.state.upperBound)),e},a.renderMarks=function(){let{marks:t}=this.props;const e=this.props.max-this.props.min+1;return typeof t=="boolean"?t=Array.from({length:e}).map((n,s)=>s):typeof t=="number"&&(t=Array.from({length:e}).map((n,s)=>s).filter(n=>n%t==0)),t.map(parseFloat).sort((n,s)=>n-s).map(n=>{const s=this.calcOffset(n),r={key:n,className:this.props.markClassName,style:this.buildMarkStyle(s)};return this.props.renderMark(r)})},a.render=function(){const t=[],{value:e}=this.state,n=e.length;for(let l=0;l<n;l+=1)t[l]=this.calcOffset(e[l],l);const s=this.props.withTracks?this.renderTracks(t):null,r=this.renderThumbs(t),o=this.props.marks?this.renderMarks():null;return S.createElement("div",{ref:l=>{this.slider=l,this.resizeElementRef.current=l},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},s,r,o)},u}(S.Component);B.displayName="ReactSlider",B.defaultProps={min:0,max:100,step:1,pageFn:i=>10*i,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:i=>S.createElement("div",i),renderTrack:i=>S.createElement("div",i),renderMark:i=>S.createElement("span",i)};var ie=B;const I=18,le=8,j=6,ue=4,ce=g.div`
  --slider-color: inherit;
  --slider-border-color: var(--blue20, #c7d4f4);
  --slider-background-color: var(--neutral10, #f5f5f5);

  &[data-theme="dark"] {
    --slider-color: var(--white, #fff);
    --slider-border-color: var(--white, #fff);
    --slider-background-color: var(--neutral80, #404040);
  }

  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 16px;
`,pe=g.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3px 6px;
`,_=g.div`
  box-sizing: border-box;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.6;
  color: var(--slider-color);
`,de=g.span`
  background-color: var(--slider-background-color);
  border: 1px solid var(--slider-border-color);
  box-sizing: border-box;
  color: var(--slider-color);
  position: absolute;
  top: calc(100% + ${ue}px);
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  line-height: 1.35;
  border-radius: 5px;
  opacity: var(--thumb-label-opacity, 0);
  transition: opacity 0.4s ease-in-out;
  user-select: none;
`,he=g.div`
  &:focus,
  &.active {
    outline: none;
  }
`,me=g.div`
  --thumb-height: 14px;

  background-color: var(--thumb-color);
  box-sizing: border-box;
  position: relative;
  cursor: grab;
  width: var(--thumb-height);
  height: var(--thumb-height);
  text-align: center;
  border-radius: 50%;

  &::before {
    --click-box-height: calc(var(--thumb-height) * 2);

    content: "";
    display: inline-block;
    position: relative;
    left: -50%;
    top: -50%;
    width: var(--click-box-height);
    height: var(--click-box-height);
  }

  &[aria-disabled="true"] {
    background-color: var(--neutral60, #6a6e6e);
    cursor: not-allowed;
  }

  &:not([aria-disabled="true"]):focus,
  &:not([aria-disabled="true"]):hover,
  &:not([aria-disabled="true"]):active,
  &:not([aria-disabled="true"]).active {
    outline: none;
    --thumb-label-opacity: 1;
  }

  &:not([aria-disabled="true"]):active,
  &:not([aria-disabled="true"]).active,
  &:not([aria-disabled="true"]):focus {
    cursor: grabbing;
  }
`,be=g.div`
  box-sizing: border-box;
  border-radius: ${j/2}px;
  background-color: var(--track-color);
  height: ${j}px;
`,fe=g(ie)`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.35);
  height: ${I}px;
  background-color: var(--neutral60, #6a6e6e);
  border: ${le}px solid var(--white, #fff);
  border-radius: ${I/2}px;

  & + & {
    margin-top: 43px;
  }
`,ee=({value:i,onChangeCallback:u,label:a,minLabel:t,maxLabel:e,labelledbyId:n,color:s,darkMode:r=!1,isDisabled:o=!1,className:l,...c})=>{const[d,p]=Z.useState(!1),b=Array.isArray(i)&&i.length>1,x=(f=>{const C=f&&oe("color",f)&&!se(f)?f:"#313333";return o?"var(--neutral60, #6a6e6e)":C})(s),h=(f,C)=>{const{index:M}=C,{key:E,style:P,...L}=f,re=b&&M===1||!b&&M===0;return m.jsx(be,{"data-testid":`slider-track-${M}`,style:{...P,"--track-color":re&&x},...L},E)},v=(f,C)=>{const{key:M,style:E,...P}=f,{valueNow:L}=C;return m.jsx(he,{style:{...E,"--thumb-color":x,"--thumb-label-opacity":d?1:void 0},...P,children:m.jsx(me,{"aria-disabled":o,"data-testid":"slider-thumb",children:m.jsx(de,{children:L})})},M)},R=`${a}-min-label`,H=`${a}-max-label`;return m.jsxs(ce,{"data-theme":r?"dark":"light",className:l,children:[t||e?m.jsxs(pe,{children:[m.jsx(_,{id:R,children:t}),m.jsx(_,{id:H,children:e})]}):null,m.jsx(fe,{value:i,...c,onBeforeChange:()=>p(!0),onChange:u,onAfterChange:()=>p(!1),renderTrack:h,renderThumb:v,ariaLabelledby:b?[R,H]:n,disabled:o})]})};ee.displayName="Form.HorizontalSlider";const te=ee;try{Form.HorizontalSlider.displayName="Form.HorizontalSlider",Form.HorizontalSlider.__docgenInfo={description:"",displayName:"Form.HorizontalSlider",props:{onChangeCallback:{defaultValue:null,description:"",name:"onChangeCallback",required:!0,type:{name:"((value: number | readonly number[], index: number) => void) | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},minLabel:{defaultValue:null,description:"",name:"minLabel",required:!1,type:{name:"string"}},maxLabel:{defaultValue:null,description:"",name:"maxLabel",required:!1,type:{name:"string"}},labelledbyId:{defaultValue:null,description:"",name:"labelledbyId",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},darkMode:{defaultValue:{value:"false"},description:"",name:"darkMode",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}}}}}catch{}const Ce={component:te,argTypes:{className:{...ne,table:{category:"Styling"}},min:{control:"number",description:"The maximum value of the slider.",table:{category:"Slider",type:{summary:"number"},defaultValue:{summary:0}}},max:{control:"number",description:"The minimum value of the slider.",table:{category:"Slider",type:{summary:"number"},defaultValue:{summary:100}}},step:{control:{type:"number",min:0},description:"Value to be added or subtracted on each step the slider makes. Must be greater than zero. max - min should be evenly divisible by the step value.",table:{category:"Slider",type:{summary:"number"},defaultValue:{summary:1}}},value:{description:"Determines the initial positions of the thumbs and the number of thumbs. If a number is passed a slider with one thumb will be rendered. If an array is passed each value will determine the position of one thumb. The values in the array must be sorted.",type:{name:"other",required:!0,value:"number | number[]"},table:{category:"Slider",type:{summary:"number | number[]"}}},label:{control:"text",type:{name:"string",required:!0},description:"Unique label attached to the slider to differentiate it in callbacks.",table:{category:"Labels",type:{summary:"string"}}},minLabel:{control:"text",description:"Text label displayed above the left side `min` value of the slider.",table:{category:"Labels",type:{summary:"string"}}},maxLabel:{control:"text",description:"Text label displayed above the right side `max` value of the slider.",table:{category:"Labels",type:{summary:"string"}}},labelledbyId:{control:"text",description:"`aria-labelledby` for screen-readers to apply to the thumbs. Used when slider rendered with separate label. For ranged values the ID's for `minLabel` and `maxLabel` will be used and `labelledbyId` ignored.",table:{category:"Labels",type:{summary:"string"}}},color:{control:"color",description:`Color that either fills the slider starting from the left for single values, or fills the slider between the two thumbs for ranged values. Also fills the background-color of the slider thumb.

Can also be a CSS variable.`,table:{category:"Styling",type:{summary:"string"}}},darkMode:{control:"boolean",description:"Inverts color scheme for visibility against dark backgrounds.",table:{category:"Styling",type:{summary:"boolean"},defaultValue:{summary:!1}}},onChangeCallback:{type:{name:"function",required:!0},action:"Value changed",description:"Callback to bind to the `onAfterChange` event. Will pass the new value along with the slider's `label`.",table:{category:"Function",type:{summary:"(value: number | readonly number[], label: string) => void"}}},isDisabled:{description:"Disables the slider so the thumb cannot be moved.",control:"boolean",table:{category:"Function",type:{summary:"boolean",defaultValue:{summary:!1}}}}}},F=({value:i,...u})=>{const[a,t]=Z.useState(i);return m.jsx(te,{...u,value:a,onChangeCallback:(e,n)=>(u.onChangeCallback&&u.onChangeCallback(e,n),t(e))})},k=F.bind({});k.args={value:50,label:"primaryExample"};const w=F.bind({});w.args={value:[20,80],label:"doubleHandleExample",minLabel:"Min",maxLabel:"Max"};const T=F.bind({});T.args={...k.args,isDisabled:!0};var U,$,q;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`({
  value: argValue,
  ...args
}) => {
  const [value, setValue] = useState(argValue);
  return <HorizontalSlider {...args} value={value} onChangeCallback={(v, i) => {
    args.onChangeCallback && args.onChangeCallback(v, i);
    return setValue(v);
  }} />;
}`,...(q=($=k.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var X,W,Y;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`({
  value: argValue,
  ...args
}) => {
  const [value, setValue] = useState(argValue);
  return <HorizontalSlider {...args} value={value} onChangeCallback={(v, i) => {
    args.onChangeCallback && args.onChangeCallback(v, i);
    return setValue(v);
  }} />;
}`,...(Y=(W=w.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var G,J,Q;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`({
  value: argValue,
  ...args
}) => {
  const [value, setValue] = useState(argValue);
  return <HorizontalSlider {...args} value={value} onChangeCallback={(v, i) => {
    args.onChangeCallback && args.onChangeCallback(v, i);
    return setValue(v);
  }} />;
}`,...(Q=(J=T.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Me=["SingleHandle","DoubleHandle","Disabled"];export{T as Disabled,w as DoubleHandle,k as SingleHandle,Me as __namedExportsOrder,Ce as default};
