var $=Object.create,d=Object.defineProperty,h=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,j=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty,S=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),P=(r,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of m(e))!x.call(r,c)&&c!==t&&d(r,c,{get:()=>e[c],enumerable:!(a=h(e,c))||a.enumerable});return r},U=(r,e,t)=>(t=r!=null?$(j(r)):{},P(e||!r||!r.__esModule?d(t,"default",{value:r,enumerable:!0}):t,r)),E=S(r=>{Object.defineProperty(r,"__esModule",{value:!0}),r.isEqual=function(){var e=Object.prototype.toString,t=Object.getPrototypeOf,a=Object.getOwnPropertySymbols?function(c){return Object.keys(c).concat(Object.getOwnPropertySymbols(c))}:Object.keys;return function(c,l){return function f(n,i,o){var y,s,u,p=e.call(n),A=e.call(i);if(n===i)return!0;if(n==null||i==null)return!1;if(o.indexOf(n)>-1&&o.indexOf(i)>-1)return!0;if(o.push(n,i),p!=A||(y=a(n),s=a(i),y.length!=s.length||y.some(function(g){return!f(n[g],i[g],o)})))return!1;switch(p.slice(8,-1)){case"Symbol":return n.valueOf()==i.valueOf();case"Date":case"Number":return+n==+i||+n!=+n&&+i!=+i;case"RegExp":case"Function":case"String":case"Boolean":return""+n==""+i;case"Set":case"Map":y=n.entries(),s=i.entries();do if(!f((u=y.next()).value,s.next().value,o))return!1;while(!u.done);return!0;case"ArrayBuffer":n=new Uint8Array(n),i=new Uint8Array(i);case"DataView":n=new Uint8Array(n.buffer),i=new Uint8Array(i.buffer);case"Float32Array":case"Float64Array":case"Int8Array":case"Int16Array":case"Int32Array":case"Uint8Array":case"Uint16Array":case"Uint32Array":case"Uint8ClampedArray":case"Arguments":case"Array":if(n.length!=i.length)return!1;for(u=0;u<n.length;u++)if((u in n||u in i)&&(u in n!=u in i||!f(n[u],i[u],o)))return!1;return!0;case"Object":return f(t(n),t(i),o);default:return!1}}(c,l,[])}}()});function _(r){return r.replace(/_/g," ").replace(/-/g," ").replace(/\./g," ").replace(/([^\n])([A-Z])([a-z])/g,(e,t,a,c)=>`${t} ${a}${c}`).replace(/([a-z])([A-Z])/g,(e,t,a)=>`${t} ${a}`).replace(/([a-z])([0-9])/gi,(e,t,a)=>`${t} ${a}`).replace(/([0-9])([a-z])/gi,(e,t,a)=>`${t} ${a}`).replace(/(\s|^)(\w)/g,(e,t,a)=>`${t}${a.toUpperCase()}`).replace(/ +/g," ").trim()}var O=U(E()),w=r=>r.map(e=>typeof e<"u").filter(Boolean).length,q=(r,e)=>{let{exists:t,eq:a,neq:c,truthy:l}=r;if(w([t,a,c,l])>1)throw new Error(`Invalid conditional test ${JSON.stringify({exists:t,eq:a,neq:c})}`);if(typeof a<"u")return(0,O.isEqual)(e,a);if(typeof c<"u")return!(0,O.isEqual)(e,c);if(typeof t<"u"){let f=typeof e<"u";return t?f:!f}return typeof l>"u"||l?!!e:!e},M=(r,e,t)=>{if(!r.if)return!0;let{arg:a,global:c}=r.if;if(w([a,c])!==1)throw new Error(`Invalid conditional value ${JSON.stringify({arg:a,global:c})}`);let l=a?e[a]:t[c];return q(r.if,l)},I=r=>r.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),b=(r,e)=>{let t=I(r);if(t==="")throw new Error(`Invalid ${e} '${r}', must include alphanumeric characters`);return t},N=(r,e)=>`${b(r,"kind")}${e?`--${b(e,"name")}`:""}`,z=r=>_(r);function v(r,e){return Array.isArray(e)?e.includes(r):r.match(e)}function B(r,{includeStories:e,excludeStories:t}){return r!=="__esModule"&&(!e||v(r,e))&&(!t||!v(r,t))}export{B as G,I as L,z as M,N,M as O};
