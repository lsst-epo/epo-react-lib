const u=(t,n)=>{switch(!0){case t>n:return 0;case t<0:return n;default:return t}},f=(t,n,e)=>t>=n&&t<=e,l=(t=[],n=[])=>{const e=t[0]<n[0]?t:n,r=e===t?n:t;return e[1]<r[0]?null:[r[0],e[1]<r[1]?e[1]:r[1]]},g=(t=[0,1],n=[0,1],e)=>{const r={clamp:!1,fractionDigits:2},{clamp:c,fractionDigits:i}={...r,...e};return o=>{const a=t[1]-t[0];if(a===0)return(n[0]+n[1])/2;let s=(o-t[0])/a;return c&&(s=Math.min(Math.max(s,0),1)),Number((s*(n[1]-n[0])+n[0]).toFixed(i))}},m=()=>{const t=navigator.userAgent.indexOf("Chrome")>-1;return navigator.userAgent.indexOf("Safari")>-1&&!t};export{u as a,l as b,f as c,g,m as i};
