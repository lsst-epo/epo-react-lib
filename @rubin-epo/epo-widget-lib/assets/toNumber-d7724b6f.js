import{c as s,b as m}from"./isSymbol-f1e92ba4.js";var a=/\s/;function f(r){for(var t=r.length;t--&&a.test(r.charAt(t)););return t}var c=f,o=c,b=/^\s+/;function d(r){return r&&r.slice(0,o(r)+1).replace(b,"")}var p=d,I=p,i=s,x=m,n=0/0,y=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,_=/^0o[0-7]+$/i,$=parseInt;function N(r){if(typeof r=="number")return r;if(x(r))return n;if(i(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=i(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=I(r);var e=O.test(r);return e||_.test(r)?$(r.slice(2),e?2:8):y.test(r)?n:+r}var B=N;export{B as t};
