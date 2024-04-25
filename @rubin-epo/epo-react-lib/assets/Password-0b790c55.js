import{j as o}from"./jsx-runtime-94f6e698.js";import{r as a}from"./index-8db94870.js";import{p as d}from"./appearance-f4837453.js";import{S as m}from"./index-d82f0c31.js";import{s as t}from"./styled-components.browser.esm-3d9e3c21.js";import{I as c}from"./styles-e1e813f4.js";import{u as l}from"./useTranslation-7385a6f5.js";import{a as x}from"./IconComposer-fd2a8d4b.js";const f=t.div`
  position: relative;
`,w=t.button`
  ${d()}
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  padding-inline-end: 18px;
  padding-inline-start: 18px;
  color: var(--neutral30);

  &[aria-selected="true"] {
    color: var(--turquoise85);
  }
`,u=m,g=t(c)`
  padding-right: ${40+18*3}px;
`,i=a.forwardRef((s,n)=>{const[r,p]=a.useState(!1),{t:e}=l();return o.jsxs(f,{children:[o.jsx(g,{"data-testid":"password",ref:n,type:r?"text":"password",...s}),o.jsxs(w,{type:"button","aria-controls":s.id,"aria-selected":r,onClick:()=>p(!r),children:[o.jsx(u,{children:e(r?"form.hide_password":"form.show_password")}),o.jsx(x,{icon:"eye"})]})]})});i.displayName="Form.Password";const b=i;try{Form.Password.displayName="Form.Password",Form.Password.__docgenInfo={description:"",displayName:"Form.Password",props:{}}}catch{}export{b as P};
