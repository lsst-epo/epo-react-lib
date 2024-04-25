import{s as C,j as $}from"./styled-components.browser.esm-e0114bd2.js";import{a as ce}from"./IconComposer-0a5b6514.js";import{z as Be,p as Ue}from"./index-223833fa.js";import{r as u,R as F,a as de}from"./index-8db94870.js";var qe=Object.defineProperty,ze=(e,t,n)=>t in e?qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ee=(e,t,n)=>(ze(e,typeof t!="symbol"?t+"":t,n),n);let Ve=class{constructor(){ee(this,"current",this.detect()),ee(this,"handoffState","pending"),ee(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},k=new Ve,P=(e,t)=>{k.isServer?u.useEffect(e,t):u.useLayoutEffect(e,t)};function B(e){let t=u.useRef(e);return P(()=>{t.current=e},[e]),t}function xe(e,t){let[n,r]=u.useState(e),i=B(e);return P(()=>r(i.current),[i,r,...t]),n}function Qe(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function M(){let e=[],t={addEventListener(n,r,i,a){return n.addEventListener(r,i,a),t.add(()=>n.removeEventListener(r,i,a))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return Qe(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,i){let a=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:a})})},group(n){let r=M();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let i of e.splice(r,1))i()}},dispose(){for(let n of e.splice(0))n()}};return t}function G(){let[e]=u.useState(M);return u.useEffect(()=>()=>e.dispose(),[e]),e}let h=function(e){let t=B(e);return F.useCallback((...n)=>t.current(...n),[t])};function Ke(){let e=typeof document>"u";return"useSyncExternalStore"in de?(t=>t.useSyncExternalStore)(de)(()=>()=>{},()=>!1,()=>!e):!1}function We(){let e=Ke(),[t,n]=u.useState(k.isHandoffComplete);return t&&k.isHandoffComplete===!1&&n(!1),u.useEffect(()=>{t!==!0&&n(!0)},[t]),u.useEffect(()=>k.handoff(),[]),e?!1:t}var fe;let X=(fe=F.useId)!=null?fe:function(){let e=We(),[t,n]=F.useState(e?()=>k.nextId():null);return P(()=>{t===null&&n(k.nextId())},[t]),t!=null?""+t:void 0};function T(e,t,...n){if(e in t){let i=t[e];return typeof i=="function"?i(...n):i}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,T),r}function ye(e){return k.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let pe=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var _e=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(_e||{}),Ge=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ge||{}),Xe=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Xe||{}),ie=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ie||{});function Oe(e,t=0){var n;return e===((n=ye(e))==null?void 0:n.body)?!1:T(t,{0(){return e.matches(pe)},1(){let r=e;for(;r!==null;){if(r.matches(pe))return!0;r=r.parentElement}return!1}})}var Ye=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Ye||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Je(e,t=n=>n){return e.slice().sort((n,r)=>{let i=t(n),a=t(r);if(i===null||a===null)return 0;let o=i.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function W(e,t,n){let r=B(t);u.useEffect(()=>{function i(a){r.current(a)}return document.addEventListener(e,i,n),()=>document.removeEventListener(e,i,n)},[e,n])}function Ze(e,t,n){let r=B(t);u.useEffect(()=>{function i(a){r.current(a)}return window.addEventListener(e,i,n),()=>window.removeEventListener(e,i,n)},[e,n])}function et(e,t,n=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function i(o,l){if(!r.current||o.defaultPrevented)return;let s=l(o);if(s===null||!s.getRootNode().contains(s)||!s.isConnected)return;let d=function p(f){return typeof f=="function"?p(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e);for(let p of d){if(p===null)continue;let f=p instanceof HTMLElement?p:p.current;if(f!=null&&f.contains(s)||o.composed&&o.composedPath().includes(f))return}return!Oe(s,ie.Loose)&&s.tabIndex!==-1&&o.preventDefault(),t(o,s)}let a=u.useRef(null);W("pointerdown",o=>{var l,s;r.current&&(a.current=((s=(l=o.composedPath)==null?void 0:l.call(o))==null?void 0:s[0])||o.target)},!0),W("mousedown",o=>{var l,s;r.current&&(a.current=((s=(l=o.composedPath)==null?void 0:l.call(o))==null?void 0:s[0])||o.target)},!0),W("click",o=>{a.current&&(i(o,()=>a.current),a.current=null)},!0),W("touchend",o=>i(o,()=>o.target instanceof HTMLElement?o.target:null),!0),Ze("blur",o=>i(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ve(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function tt(e,t){let[n,r]=u.useState(()=>ve(e));return P(()=>{r(ve(e))},[e.type,e.as]),P(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}let nt=Symbol();function U(...e){let t=u.useRef(e);u.useEffect(()=>{t.current=e},[e]);let n=h(r=>{for(let i of t.current)i!=null&&(typeof i=="function"?i(r):i.current=r)});return e.every(r=>r==null||(r==null?void 0:r[nt]))?void 0:n}function rt(e){throw new Error("Unexpected object: "+e)}var I=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(I||{});function ot(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),i=r??-1,a=(()=>{switch(e.focus){case 0:return n.findIndex(o=>!t.resolveDisabled(o));case 1:{let o=n.slice().reverse().findIndex((l,s,d)=>i!==-1&&d.length-s-1>=i?!1:!t.resolveDisabled(l));return o===-1?o:n.length-1-o}case 2:return n.findIndex((o,l)=>l<=i?!1:!t.resolveDisabled(o));case 3:{let o=n.slice().reverse().findIndex(l=>!t.resolveDisabled(l));return o===-1?o:n.length-1-o}case 4:return n.findIndex(o=>t.resolveId(o)===e.id);case 5:return null;default:rt(e)}})();return a===-1?r:a}function be(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var re=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(re||{}),it=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(it||{});function A({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:a=!0,name:o}){let l=Se(t,e);if(a)return _(l,n,r,o);let s=i??0;if(s&2){let{static:d=!1,...p}=l;if(d)return _(p,n,r,o)}if(s&1){let{unmount:d=!0,...p}=l;return T(d?0:1,{0(){return null},1(){return _({...p,hidden:!0,style:{display:"none"}},n,r,o)}})}return _(l,n,r,o)}function _(e,t={},n,r){let{as:i=n,children:a,refName:o="ref",...l}=te(e,["unmount","static"]),s=e.ref!==void 0?{[o]:e.ref}:{},d=typeof a=="function"?a(t):a;"className"in l&&l.className&&typeof l.className=="function"&&(l.className=l.className(t));let p={};if(t){let f=!1,E=[];for(let[x,v]of Object.entries(t))typeof v=="boolean"&&(f=!0),v===!0&&E.push(x);f&&(p["data-headlessui-state"]=E.join(" "))}if(i===u.Fragment&&Object.keys(oe(l)).length>0){if(!u.isValidElement(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(l).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`));let f=d.props,E=typeof(f==null?void 0:f.className)=="function"?(...v)=>be(f==null?void 0:f.className(...v),l.className):be(f==null?void 0:f.className,l.className),x=E?{className:E}:{};return u.cloneElement(d,Object.assign({},Se(d.props,oe(te(l,["ref"]))),p,s,lt(d.ref,s.ref),x))}return u.createElement(i,Object.assign({},te(l,["ref"]),i!==u.Fragment&&s,i!==u.Fragment&&p),d)}function lt(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function Se(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let i in r)i.startsWith("on")&&typeof r[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(r[i])):t[i]=r[i];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](i,...a){let o=n[r];for(let l of o){if((i instanceof Event||(i==null?void 0:i.nativeEvent)instanceof Event)&&i.defaultPrevented)return;l(i,...a)}}});return t}function j(e){var t;return Object.assign(u.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function oe(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function te(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function at(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&ut(n)?!1:r}function ut(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}function we(e={},t=null,n=[]){for(let[r,i]of Object.entries(e))Re(n,Ee(t,r),i);return n}function Ee(e,t){return e?e+"["+t+"]":t}function Re(e,t,n){if(Array.isArray(n))for(let[r,i]of n.entries())Re(e,Ee(t,r.toString()),i);else n instanceof Date?e.push([t,n.toISOString()]):typeof n=="boolean"?e.push([t,n?"1":"0"]):typeof n=="string"?e.push([t,n]):typeof n=="number"?e.push([t,`${n}`]):n==null?e.push([t,""]):we(n,t,e)}let st="div";var Le=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Le||{});function ct(e,t){let{features:n=1,...r}=e,i={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return A({ourProps:i,theirProps:r,slot:{},defaultTag:st,name:"Hidden"})}let dt=j(ct),le=u.createContext(null);le.displayName="OpenClosedContext";var H=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(H||{});function ft(){return u.useContext(le)}function pt({value:e,children:t}){return F.createElement(le.Provider,{value:e},t)}var S=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(S||{});function vt(e,t,n){let[r,i]=u.useState(n),a=e!==void 0,o=u.useRef(a),l=u.useRef(!1),s=u.useRef(!1);return a&&!o.current&&!l.current?(l.current=!0,o.current=a,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!a&&o.current&&!s.current&&(s.current=!0,o.current=a,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[a?e:r,h(d=>(a||i(d),t==null?void 0:t(d)))]}function me(e){return[e.screenX,e.screenY]}function bt(){let e=u.useRef([-1,-1]);return{wasMoved(t){let n=me(t);return e.current[0]===n[0]&&e.current[1]===n[1]?!1:(e.current=n,!0)},update(t){e.current=me(t)}}}let he=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function ge(e){var t,n;let r=(t=e.innerText)!=null?t:"",i=e.cloneNode(!0);if(!(i instanceof HTMLElement))return r;let a=!1;for(let l of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))l.remove(),a=!0;let o=a?(n=i.innerText)!=null?n:"":r;return he.test(o)&&(o=o.replace(he,"")),o}function mt(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let r=n.split(" ").map(i=>{let a=document.getElementById(i);if(a){let o=a.getAttribute("aria-label");return typeof o=="string"?o.trim():ge(a).trim()}return null}).filter(Boolean);if(r.length>0)return r.join(", ")}return ge(e).trim()}function ht(e){let t=u.useRef(""),n=u.useRef("");return h(()=>{let r=e.current;if(!r)return"";let i=r.innerText;if(t.current===i)return n.current;let a=mt(r).trim().toLowerCase();return t.current=i,n.current=a,a})}var gt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(gt||{}),xt=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(xt||{}),yt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(yt||{}),Ot=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(Ot||{});function ne(e,t=n=>n){let n=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,r=Je(t(e.options.slice()),a=>a.dataRef.current.domRef.current),i=n?r.indexOf(n):null;return i===-1&&(i=null),{options:r,activeOptionIndex:i}}let St={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let t=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex(i=>n(i.dataRef.current.value));return r!==-1&&(t=r),{...e,listboxState:0,activeOptionIndex:t}},2(e,t){var n;if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=ne(e),i=ot(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:i,activationTrigger:(n=t.trigger)!=null?n:1}},3:(e,t)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=e.searchQuery!==""?0:1,r=e.searchQuery+t.value.toLowerCase(),i=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find(o=>{var l;return!o.dataRef.current.disabled&&((l=o.dataRef.current.textValue)==null?void 0:l.startsWith(r))}),a=i?e.options.indexOf(i):-1;return a===-1||a===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:a,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},r=ne(e,i=>[...i,n]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},6:(e,t)=>{let n=ne(e,r=>{let i=r.findIndex(a=>a.id===t.id);return i!==-1&&r.splice(i,1),r});return{...e,...n,activationTrigger:1}},7:(e,t)=>({...e,labelId:t.id})},ae=u.createContext(null);ae.displayName="ListboxActionsContext";function q(e){let t=u.useContext(ae);if(t===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,q),n}return t}let ue=u.createContext(null);ue.displayName="ListboxDataContext";function z(e){let t=u.useContext(ue);if(t===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,z),n}return t}function wt(e,t){return T(t.type,St,e,t)}let Et=u.Fragment;function Rt(e,t){let{value:n,defaultValue:r,form:i,name:a,onChange:o,by:l=(b,m)=>b===m,disabled:s=!1,horizontal:d=!1,multiple:p=!1,...f}=e;const E=d?"horizontal":"vertical";let x=U(t),[v=p?[]:void 0,w]=vt(n,o,r),[g,c]=u.useReducer(wt,{dataRef:u.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),y=u.useRef({static:!1,hold:!1}),N=u.useRef(null),V=u.useRef(null),J=u.useRef(null),R=h(typeof l=="string"?(b,m)=>{let L=l;return(b==null?void 0:b[L])===(m==null?void 0:m[L])}:l),D=u.useCallback(b=>T(O.mode,{1:()=>v.some(m=>R(m,b)),0:()=>R(v,b)}),[v]),O=u.useMemo(()=>({...g,value:v,disabled:s,mode:p?1:0,orientation:E,compare:R,isSelected:D,optionsPropsRef:y,labelRef:N,buttonRef:V,optionsRef:J}),[v,s,p,g]);P(()=>{g.dataRef.current=O},[O]),et([O.buttonRef,O.optionsRef],(b,m)=>{var L;c({type:1}),Oe(m,ie.Loose)||(b.preventDefault(),(L=O.buttonRef.current)==null||L.focus())},O.listboxState===0);let Ie=u.useMemo(()=>({open:O.listboxState===0,disabled:s,value:v}),[O,s,v]),$e=h(b=>{let m=O.options.find(L=>L.id===b);m&&Z(m.dataRef.current.value)}),Te=h(()=>{if(O.activeOptionIndex!==null){let{dataRef:b,id:m}=O.options[O.activeOptionIndex];Z(b.current.value),c({type:2,focus:I.Specific,id:m})}}),Pe=h(()=>c({type:0})),De=h(()=>c({type:1})),Fe=h((b,m,L)=>b===I.Specific?c({type:2,focus:I.Specific,id:m,trigger:L}):c({type:2,focus:b,trigger:L})),Ne=h((b,m)=>(c({type:5,id:b,dataRef:m}),()=>c({type:6,id:b}))),ke=h(b=>(c({type:7,id:b}),()=>c({type:7,id:null}))),Z=h(b=>T(O.mode,{0(){return w==null?void 0:w(b)},1(){let m=O.value.slice(),L=m.findIndex(K=>R(K,b));return L===-1?m.push(b):m.splice(L,1),w==null?void 0:w(m)}})),Ce=h(b=>c({type:3,value:b})),Ae=h(()=>c({type:4})),je=u.useMemo(()=>({onChange:Z,registerOption:Ne,registerLabel:ke,goToOption:Fe,closeListbox:De,openListbox:Pe,selectActiveOption:Te,selectOption:$e,search:Ce,clearSearch:Ae}),[]),Me={ref:x},Q=u.useRef(null),He=G();return u.useEffect(()=>{Q.current&&r!==void 0&&He.addEventListener(Q.current,"reset",()=>{w==null||w(r)})},[Q,w]),F.createElement(ae.Provider,{value:je},F.createElement(ue.Provider,{value:O},F.createElement(pt,{value:T(O.listboxState,{0:H.Open,1:H.Closed})},a!=null&&v!=null&&we({[a]:v}).map(([b,m],L)=>F.createElement(dt,{features:Le.Hidden,ref:L===0?K=>{var se;Q.current=(se=K==null?void 0:K.closest("form"))!=null?se:null}:void 0,...oe({key:b,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:i,name:b,value:m})})),A({ourProps:Me,theirProps:f,slot:Ie,defaultTag:Et,name:"Listbox"}))))}let Lt="button";function It(e,t){var n;let r=X(),{id:i=`headlessui-listbox-button-${r}`,...a}=e,o=z("Listbox.Button"),l=q("Listbox.Button"),s=U(o.buttonRef,t),d=G(),p=h(g=>{switch(g.key){case S.Space:case S.Enter:case S.ArrowDown:g.preventDefault(),l.openListbox(),d.nextFrame(()=>{o.value||l.goToOption(I.First)});break;case S.ArrowUp:g.preventDefault(),l.openListbox(),d.nextFrame(()=>{o.value||l.goToOption(I.Last)});break}}),f=h(g=>{switch(g.key){case S.Space:g.preventDefault();break}}),E=h(g=>{if(at(g.currentTarget))return g.preventDefault();o.listboxState===0?(l.closeListbox(),d.nextFrame(()=>{var c;return(c=o.buttonRef.current)==null?void 0:c.focus({preventScroll:!0})})):(g.preventDefault(),l.openListbox())}),x=xe(()=>{if(o.labelId)return[o.labelId,i].join(" ")},[o.labelId,i]),v=u.useMemo(()=>({open:o.listboxState===0,disabled:o.disabled,value:o.value}),[o]),w={ref:s,id:i,type:tt(e,o.buttonRef),"aria-haspopup":"listbox","aria-controls":(n=o.optionsRef.current)==null?void 0:n.id,"aria-expanded":o.listboxState===0,"aria-labelledby":x,disabled:o.disabled,onKeyDown:p,onKeyUp:f,onClick:E};return A({ourProps:w,theirProps:a,slot:v,defaultTag:Lt,name:"Listbox.Button"})}let $t="label";function Tt(e,t){let n=X(),{id:r=`headlessui-listbox-label-${n}`,...i}=e,a=z("Listbox.Label"),o=q("Listbox.Label"),l=U(a.labelRef,t);P(()=>o.registerLabel(r),[r]);let s=h(()=>{var p;return(p=a.buttonRef.current)==null?void 0:p.focus({preventScroll:!0})}),d=u.useMemo(()=>({open:a.listboxState===0,disabled:a.disabled}),[a]);return A({ourProps:{ref:l,id:r,onClick:s},theirProps:i,slot:d,defaultTag:$t,name:"Listbox.Label"})}let Pt="ul",Dt=re.RenderStrategy|re.Static;function Ft(e,t){var n;let r=X(),{id:i=`headlessui-listbox-options-${r}`,...a}=e,o=z("Listbox.Options"),l=q("Listbox.Options"),s=U(o.optionsRef,t),d=G(),p=G(),f=ft(),E=(()=>f!==null?(f&H.Open)===H.Open:o.listboxState===0)();u.useEffect(()=>{var c;let y=o.optionsRef.current;y&&o.listboxState===0&&y!==((c=ye(y))==null?void 0:c.activeElement)&&y.focus({preventScroll:!0})},[o.listboxState,o.optionsRef]);let x=h(c=>{switch(p.dispose(),c.key){case S.Space:if(o.searchQuery!=="")return c.preventDefault(),c.stopPropagation(),l.search(c.key);case S.Enter:if(c.preventDefault(),c.stopPropagation(),o.activeOptionIndex!==null){let{dataRef:y}=o.options[o.activeOptionIndex];l.onChange(y.current.value)}o.mode===0&&(l.closeListbox(),M().nextFrame(()=>{var y;return(y=o.buttonRef.current)==null?void 0:y.focus({preventScroll:!0})}));break;case T(o.orientation,{vertical:S.ArrowDown,horizontal:S.ArrowRight}):return c.preventDefault(),c.stopPropagation(),l.goToOption(I.Next);case T(o.orientation,{vertical:S.ArrowUp,horizontal:S.ArrowLeft}):return c.preventDefault(),c.stopPropagation(),l.goToOption(I.Previous);case S.Home:case S.PageUp:return c.preventDefault(),c.stopPropagation(),l.goToOption(I.First);case S.End:case S.PageDown:return c.preventDefault(),c.stopPropagation(),l.goToOption(I.Last);case S.Escape:return c.preventDefault(),c.stopPropagation(),l.closeListbox(),d.nextFrame(()=>{var y;return(y=o.buttonRef.current)==null?void 0:y.focus({preventScroll:!0})});case S.Tab:c.preventDefault(),c.stopPropagation();break;default:c.key.length===1&&(l.search(c.key),p.setTimeout(()=>l.clearSearch(),350));break}}),v=xe(()=>{var c,y,N;return(N=(c=o.labelRef.current)==null?void 0:c.id)!=null?N:(y=o.buttonRef.current)==null?void 0:y.id},[o.labelRef.current,o.buttonRef.current]),w=u.useMemo(()=>({open:o.listboxState===0}),[o]),g={"aria-activedescendant":o.activeOptionIndex===null||(n=o.options[o.activeOptionIndex])==null?void 0:n.id,"aria-multiselectable":o.mode===1?!0:void 0,"aria-labelledby":v,"aria-orientation":o.orientation,id:i,onKeyDown:x,role:"listbox",tabIndex:0,ref:s};return A({ourProps:g,theirProps:a,slot:w,defaultTag:Pt,features:Dt,visible:E,name:"Listbox.Options"})}let Nt="li";function kt(e,t){let n=X(),{id:r=`headlessui-listbox-option-${n}`,disabled:i=!1,value:a,...o}=e,l=z("Listbox.Option"),s=q("Listbox.Option"),d=l.activeOptionIndex!==null?l.options[l.activeOptionIndex].id===r:!1,p=l.isSelected(a),f=u.useRef(null),E=ht(f),x=B({disabled:i,value:a,domRef:f,get textValue(){return E()}}),v=U(t,f);P(()=>{if(l.listboxState!==0||!d||l.activationTrigger===0)return;let R=M();return R.requestAnimationFrame(()=>{var D,O;(O=(D=f.current)==null?void 0:D.scrollIntoView)==null||O.call(D,{block:"nearest"})}),R.dispose},[f,d,l.listboxState,l.activationTrigger,l.activeOptionIndex]),P(()=>s.registerOption(r,x),[x,r]);let w=h(R=>{if(i)return R.preventDefault();s.onChange(a),l.mode===0&&(s.closeListbox(),M().nextFrame(()=>{var D;return(D=l.buttonRef.current)==null?void 0:D.focus({preventScroll:!0})}))}),g=h(()=>{if(i)return s.goToOption(I.Nothing);s.goToOption(I.Specific,r)}),c=bt(),y=h(R=>c.update(R)),N=h(R=>{c.wasMoved(R)&&(i||d||s.goToOption(I.Specific,r,0))}),V=h(R=>{c.wasMoved(R)&&(i||d&&s.goToOption(I.Nothing))}),J=u.useMemo(()=>({active:d,selected:p,disabled:i}),[d,p,i]);return A({ourProps:{id:r,ref:v,role:"option",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,"aria-selected":p,disabled:void 0,onClick:w,onFocus:g,onPointerEnter:y,onMouseEnter:y,onPointerMove:N,onMouseMove:N,onPointerLeave:V,onMouseLeave:V},theirProps:o,slot:J,defaultTag:Nt,name:"Listbox.Option"})}let Ct=j(Rt),At=j(It),jt=j(Tt),Mt=j(Ft),Ht=j(kt),Y=Object.assign(Ct,{Button:At,Label:jt,Options:Mt,Option:Ht});const Bt=C.div`
  --select-background-color: var(--turquoise10, #d9f7f6);
  --select-border-color: var(--turquoise85, #12726c);
  --select-color: var(--turquoise95, #1f2121);
  --select-height: 32px;
  --select-padding: 5px;

  display: inline-block;
  font-size: 14px;
  position: relative;
  max-width: var(--max-width);
  width: var(--width);
`,Ut=C(Y.Options)`
  background-color: var(--select-background-color);
  border: 1px solid var(--select-border-color);
  border-radius: var(--select-padding);
  color: var(--select-color);
  margin: 0;
  padding: var(--select-padding) 0;
  list-style: none;

  position: absolute;
  z-index: ${Be.dialog};
  top: calc(var(--select-height) + var(--select-padding));
  min-width: 100%;

  &:focus-within {
    outline: none;
  }
`,qt=C.span`
  grid-column: 3;
  white-space: nowrap;
`,zt=C(Y.Option)`
  display: grid;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  grid-template-rows: 1fr;
  grid-template-columns: 0 15px 1fr;
  gap: var(--select-padding);
  height: var(--select-height);
  padding: 0 10px 0 5px;

  &:hover,
  &[data-headlessui-state="active"],
  &[data-headlessui-state="active selected"] {
    border-color: var(--select-border-color);
  }
`,Vt=C(Y.Button)`
  ${Ue()}

  background-color: var(--select-background-color);
  border: 1px solid var(--select-border-color);
  border-radius: var(--select-padding);
  color: var(--select-color);
  height: var(--select-height);
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  svg {
    color: var(--select-border-color);
    transform: rotate(-90deg);
    margin-inline-start: 10px;
    flex-shrink: 0;
  }

  &:hover {
    outline: 1px solid var(--select-border-color);
  }

  &:disabled {
    --select-background-color: var(--neutral10, "#f5f5f5");
    --select-border-color: var(--neutral60, #6a6e6e);
    --select-color: var(--neutral60, #6a6e6e);

    pointer-events: none;
    user-select: none;
  }
`,Qt=C.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Kt=({value:e=null,options:t,onChangeCallback:n,isDisabled:r,labelledById:i,placeholder:a="Select",isMultiselect:o=!1,maxWidth:l="200px",width:s,className:d,id:p})=>{const f=x=>t.find(v=>v.value===x),E=x=>{var v;return Array.isArray(x)?x.map(w=>{var g;return(g=f(w))==null?void 0:g.label}).join(", "):(v=f(x))==null?void 0:v.label};return $.jsxs(Y,{as:Bt,style:{"--max-width":l,"--width":s},onChange:n,"aria-labelledby":i,value:e,disabled:r,multiple:o,className:d,id:p,children:[$.jsx(Vt,{children:({value:x})=>$.jsxs($.Fragment,{children:[$.jsx(Qt,{children:E(x)||a}),$.jsx(ce,{icon:"chevronThin",size:12})]})}),$.jsx(Ut,{children:t.map(({label:x,value:v,icon:w})=>$.jsx(zt,{value:v,children:({selected:g})=>$.jsxs($.Fragment,{children:[g?$.jsx(ce,{icon:"checkmark",size:12}):w,$.jsx(qt,{children:x})]})},v))})]})};Kt.displayName="Form.SelectListbox";export{Kt as S};
