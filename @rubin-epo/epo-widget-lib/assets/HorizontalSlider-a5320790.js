import{s as g,j as m}from"./styled-components.browser.esm-e0114bd2.js";import{i as U,b as $}from"./IconComposer-0a5b6514.js";import{R as k,r as H}from"./index-8db94870.js";function O(a,p){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(a,p)}function I(a,p){a.prototype=Object.create(p.prototype),a.prototype.constructor=a,O(a,p)}function E(a){return a&&a.stopPropagation&&a.stopPropagation(),a&&a.preventDefault&&a.preventDefault(),!1}function K(a){return a==null?[]:Array.isArray(a)?a.slice():[a]}function T(a){return a!==null&&a.length===1?a[0]:a.slice()}function z(a){Object.keys(a).forEach(p=>{typeof document<"u"&&document.addEventListener(p,a[p],!1)})}function y(a,p){return A(function(r,e){let t=r;return t<=e.min&&(t=e.min),t>=e.max&&(t=e.max),t}(a,p),p)}function A(a,p){const r=(a-p.min)%p.step;let e=a-r;return 2*Math.abs(r)>=p.step&&(e+=r>0?p.step:-p.step),parseFloat(e.toFixed(5))}let B=function(a){function p(e){var t;(t=a.call(this,e)||this).onKeyUp=()=>{t.onEnd()},t.onMouseUp=()=>{t.onEnd(t.getMouseEventMap())},t.onTouchEnd=s=>{s.preventDefault(),t.onEnd(t.getTouchEventMap())},t.onBlur=()=>{t.setState({index:-1},t.onEnd(t.getKeyDownEventMap()))},t.onMouseMove=s=>{t.setState({pending:!0});const i=t.getMousePosition(s),l=t.getDiffPosition(i[0]),c=t.getValueFromPosition(l);t.move(c)},t.onTouchMove=s=>{if(s.touches.length>1)return;t.setState({pending:!0});const i=t.getTouchPosition(s);if(t.isScrolling===void 0){const h=i[0]-t.startPosition[0],u=i[1]-t.startPosition[1];t.isScrolling=Math.abs(u)>Math.abs(h)}if(t.isScrolling)return void t.setState({index:-1});const l=t.getDiffPosition(i[0]),c=t.getValueFromPosition(l);t.move(c)},t.onKeyDown=s=>{if(!(s.ctrlKey||s.shiftKey||s.altKey||s.metaKey))switch(t.setState({pending:!0}),s.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":s.preventDefault(),t.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":s.preventDefault(),t.moveUpByStep();break;case"Home":s.preventDefault(),t.move(t.props.min);break;case"End":s.preventDefault(),t.move(t.props.max);break;case"PageDown":s.preventDefault(),t.moveDownByStep(t.props.pageFn(t.props.step));break;case"PageUp":s.preventDefault(),t.moveUpByStep(t.props.pageFn(t.props.step))}},t.onSliderMouseDown=s=>{if(!t.props.disabled&&s.button!==2){if(t.setState({pending:!0}),!t.props.snapDragDisabled){const i=t.getMousePosition(s);t.forceValueFromPosition(i[0],l=>{t.start(l,i[0]),z(t.getMouseEventMap())})}E(s)}},t.onSliderClick=s=>{if(!t.props.disabled&&t.props.onSliderClick&&!t.hasMoved){const i=t.getMousePosition(s),l=y(t.calcValue(t.calcOffsetFromPosition(i[0])),t.props);t.props.onSliderClick(l)}},t.createOnKeyDown=s=>i=>{t.props.disabled||(t.start(s),z(t.getKeyDownEventMap()),E(i))},t.createOnMouseDown=s=>i=>{if(t.props.disabled||i.button===2)return;t.setState({pending:!0});const l=t.getMousePosition(i);t.start(s,l[0]),z(t.getMouseEventMap()),E(i)},t.createOnTouchStart=s=>i=>{if(t.props.disabled||i.touches.length>1)return;t.setState({pending:!0});const l=t.getTouchPosition(i);t.startPosition=l,t.isScrolling=void 0,t.start(s,l[0]),z(t.getTouchEventMap()),function(c){c.stopPropagation&&c.stopPropagation()}(i)},t.handleResize=()=>{const s=window.setTimeout(()=>{t.pendingResizeTimeouts.shift(),t.resize()},0);t.pendingResizeTimeouts.push(s)},t.renderThumb=(s,i)=>{const l=t.props.thumbClassName+" "+t.props.thumbClassName+"-"+i+" "+(t.state.index===i?t.props.thumbActiveClassName:""),c={ref:u=>{t["thumb"+i]=u},key:t.props.thumbClassName+"-"+i,className:l,style:s,onMouseDown:t.createOnMouseDown(i),onTouchStart:t.createOnTouchStart(i),onFocus:t.createOnKeyDown(i),tabIndex:0,role:"slider","aria-orientation":t.props.orientation,"aria-valuenow":t.state.value[i],"aria-valuemin":t.props.min,"aria-valuemax":t.props.max,"aria-label":Array.isArray(t.props.ariaLabel)?t.props.ariaLabel[i]:t.props.ariaLabel,"aria-labelledby":Array.isArray(t.props.ariaLabelledby)?t.props.ariaLabelledby[i]:t.props.ariaLabelledby,"aria-disabled":t.props.disabled},h={index:i,value:T(t.state.value),valueNow:t.state.value[i]};return t.props.ariaValuetext&&(c["aria-valuetext"]=typeof t.props.ariaValuetext=="string"?t.props.ariaValuetext:t.props.ariaValuetext(h)),t.props.renderThumb(c,h)},t.renderTrack=(s,i,l)=>{const c={key:t.props.trackClassName+"-"+s,className:t.props.trackClassName+" "+t.props.trackClassName+"-"+s,style:t.buildTrackStyle(i,t.state.upperBound-l)},h={index:s,value:T(t.state.value)};return t.props.renderTrack(c,h)};let o=K(e.value);o.length||(o=K(e.defaultValue)),t.pendingResizeTimeouts=[];const n=[];for(let s=0;s<o.length;s+=1)o[s]=y(o[s],e),n.push(s);return t.resizeObserver=null,t.resizeElementRef=k.createRef(),t.state={index:-1,upperBound:0,sliderLength:0,value:o,zIndices:n},t}I(p,a);var r=p.prototype;return r.componentDidMount=function(){typeof window<"u"&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},p.getDerivedStateFromProps=function(e,t){const o=K(e.value);return o.length?t.pending?null:{value:o.map(n=>y(n,e))}:null},r.componentDidUpdate=function(){this.state.upperBound===0&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(t){Object.keys(t).forEach(o=>{typeof document<"u"&&document.removeEventListener(o,t[o],!1)})}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return T(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,o=-1;const{value:n}=this.state,s=n.length;for(let i=0;i<s;i+=1){const l=this.calcOffset(n[i]),c=Math.abs(e-l);c<t&&(t=c,o=i)}return o},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return y(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const o=this.sizeKey(),n=e.getBoundingClientRect(),s=e[o],i=n[this.posMaxKey()],l=n[this.posMinKey()],c=t.getBoundingClientRect()[o.replace("client","").toLowerCase()],h=s-c,u=Math.abs(i-l);this.state.upperBound===h&&this.state.sliderLength===u&&this.state.thumbSize===c||this.setState({upperBound:h,sliderLength:u,thumbSize:c})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return t===0?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,o=t.getBoundingClientRect(),n=o[this.posMaxKey()],s=o[this.posMinKey()];let i=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:s));return this.props.invert&&(i=this.state.sliderLength-i),i-=this.state.thumbSize/2,i},r.forceValueFromPosition=function(e,t){const o=this.calcOffsetFromPosition(e),n=this.getClosestIndex(o),s=y(this.calcValue(o),this.props),i=this.state.value.slice();i[n]=s;for(let l=0;l<i.length-1;l+=1)if(i[l+1]-i[l]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:i},()=>{t(n),this.fireChangeEvent("onChange")})},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const o=this["thumb"+e];o&&o.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState(s=>({startValue:s.value[e],startPosition:t!==void 0?t:s.startPosition,index:e,zIndices:n}))},r.moveUpByStep=function(e){e===void 0&&(e=this.props.step);const t=this.state.value[this.state.index],o=y(this.props.invert&&this.props.orientation==="horizontal"?t-e:t+e,this.props);this.move(Math.min(o,this.props.max))},r.moveDownByStep=function(e){e===void 0&&(e=this.props.step);const t=this.state.value[this.state.index],o=y(this.props.invert&&this.props.orientation==="horizontal"?t+e:t-e,this.props);this.move(Math.max(o,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:o}=this.state,{length:n}=t,s=t[o];if(e===s)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:i,max:l,min:c,minDistance:h}=this.props;if(!i){if(o>0){const u=t[o-1];e<u+h&&(e=u+h)}if(o<n-1){const u=t[o+1];e>u-h&&(e=u-h)}}t[o]=e,i&&n>1&&(e>s?(this.pushSucceeding(t,h,o),function(u,f,S,x){for(let d=0;d<u;d+=1){const v=x-d*S;f[u-1-d]>v&&(f[u-1-d]=v)}}(n,t,h,l)):e<s&&(this.pushPreceding(t,h,o),function(u,f,S,x){for(let d=0;d<u;d+=1){const v=x+d*S;f[d]<v&&(f[d]=v)}}(n,t,h,c))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,o){let n,s;for(n=o,s=e[n]+t;e[n+1]!==null&&s>e[n+1];n+=1,s=e[n]+t)e[n+1]=A(s,this.props)},r.pushPreceding=function(e,t,o){for(let n=o,s=e[n]-t;e[n-1]!==null&&s<e[n-1];n-=1,s=e[n]-t)e[n-1]=A(s,this.props)},r.axisKey=function(){return this.props.orientation==="vertical"?"Y":"X"},r.orthogonalAxisKey=function(){return this.props.orientation==="vertical"?"X":"Y"},r.posMinKey=function(){return this.props.orientation==="vertical"?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return this.props.orientation==="vertical"?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return this.props.orientation==="vertical"?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](T(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const o={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return o[this.posMinKey()]=e+"px",o},r.buildTrackStyle=function(e,t){const o={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return o[this.posMinKey()]=e,o[this.posMaxKey()]=t,o},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,o=[];for(let s=0;s<t;s+=1)o[s]=this.buildThumbStyle(e[s],s);const n=[];for(let s=0;s<t;s+=1)n[s]=this.renderThumb(o[s],s);return n},r.renderTracks=function(e){const t=[],o=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<o;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(o+1,e[o],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return typeof e=="boolean"?e=Array.from({length:t}).map((o,n)=>n):typeof e=="number"&&(e=Array.from({length:t}).map((o,n)=>n).filter(o=>o%e==0)),e.map(parseFloat).sort((o,n)=>o-n).map(o=>{const n=this.calcOffset(o),s={key:o,className:this.props.markClassName,style:this.buildMarkStyle(n)};return this.props.renderMark(s)})},r.render=function(){const e=[],{value:t}=this.state,o=t.length;for(let l=0;l<o;l+=1)e[l]=this.calcOffset(t[l],l);const n=this.props.withTracks?this.renderTracks(e):null,s=this.renderThumbs(e),i=this.props.marks?this.renderMarks():null;return k.createElement("div",{ref:l=>{this.slider=l,this.resizeElementRef.current=l},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,s,i)},p}(k.Component);B.displayName="ReactSlider",B.defaultProps={min:0,max:100,step:1,pageFn:a=>10*a,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:a=>k.createElement("div",a),renderTrack:a=>k.createElement("div",a),renderMark:a=>k.createElement("span",a)};var _=B;const R=18,X=8,V=6,W=4,Y=g.div`
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
`,q=g.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3px 6px;
`,j=g.div`
  box-sizing: border-box;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.6;
  color: var(--slider-color);
`,G=g.span`
  background-color: var(--slider-background-color);
  border: 1px solid var(--slider-border-color);
  box-sizing: border-box;
  color: var(--slider-color);
  position: absolute;
  top: calc(100% + ${W}px);
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
`,J=g.div`
  &:focus,
  &.active {
    outline: none;
  }
`,Q=g.div`
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
`,Z=g.div`
  box-sizing: border-box;
  border-radius: ${V/2}px;
  background-color: var(--track-color);
  height: ${V}px;
`,tt=g(_)`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.35);
  height: ${R}px;
  background-color: var(--neutral60, #6a6e6e);
  border: ${X}px solid var(--white, #fff);
  border-radius: ${R/2}px;

  & + & {
    margin-top: 43px;
  }
`,et=({value:a,onChangeCallback:p,label:r,minLabel:e,maxLabel:t,labelledbyId:o,color:n,darkMode:s=!1,isDisabled:i=!1,className:l,...c})=>{const[h,u]=H.useState(!1),f=Array.isArray(a)&&a.length>1,x=(b=>{const M=b&&U("color",b)&&!$(b)?b:"#313333";return i?"var(--neutral60, #6a6e6e)":M})(n),d=(b,M)=>{const{index:w}=M,{key:C,style:P,...D}=b,F=f&&w===1||!f&&w===0;return m.jsx(Z,{"data-testid":`slider-track-${w}`,style:{...P,"--track-color":F&&x},...D},C)},v=(b,M)=>{const{key:w,style:C,...P}=b,{valueNow:D}=M;return m.jsx(J,{style:{...C,"--thumb-color":x,"--thumb-label-opacity":h?1:void 0},...P,children:m.jsx(Q,{"aria-disabled":i,"data-testid":"slider-thumb",children:m.jsx(G,{children:D})})},w)},L=`${r}-min-label`,N=`${r}-max-label`;return m.jsxs(Y,{"data-theme":s?"dark":"light",className:l,children:[e||t?m.jsxs(q,{children:[m.jsx(j,{id:L,children:e}),m.jsx(j,{id:N,children:t})]}):null,m.jsx(tt,{value:a,...c,onBeforeChange:()=>u(!0),onChange:p,onAfterChange:()=>u(!1),renderTrack:d,renderThumb:v,ariaLabelledby:f?[L,N]:o,disabled:i})]})};et.displayName="Form.HorizontalSlider";export{et as H,_ as u};
