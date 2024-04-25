import{s as i,j as t}from"./styled-components.browser.esm-e0114bd2.js";import{S as I}from"./SelectListbox-e052c5db.js";import{g as w}from"./utils-a2998f7e.js";import{H as _}from"./HorizontalSlider-a5320790.js";import{B}from"./Button-accaf53d.js";import{u as F}from"./useTranslation-fdd24caa.js";const L=i.fieldset`
  padding: 0;
  margin: 0;
  border: none;
  display: grid;
  align-items: center;
  gap: var(--color-tool-padding, var(--PADDING_SMALL, 20px));
  grid-template-columns: max-content minmax(100px, 1fr) minmax(100px, 2fr);
  grid-auto-rows: max-content;
  grid-column: 1 / -1;
`,T=i.input`
  position: absolute;
  left: -999px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
`,j=i(B)`
  background-color: var(--filter-toggle-background, #f7f7f7);
  border: 1px solid;
  color: var(--filter-toggle-color, #6c6e6e);
  display: flex;
  justify-content: center;
  border-radius: 50%;
  font-weight: var(--FONT_WEIGHT_MEDIUM, 500);
  font-size: 22px;
  text-transform: lowercase;
  width: 38px;
  height: 38px;
  padding: 0;
  user-select: none;
`,k=i.label`
  overflow: hidden;

  input:not(:disabled) + span {
    cursor: pointer;

    &:hover {
      outline: 2px solid #6c6e6e;
      outline-offset: -2px;
    }
  }

  input:not(:disabled):focus + span,
  input:not(:disabled):focus-visible + span {
    outline: 2px solid #6c6e6e;
    outline-offset: -2px;
  }

  input:not(:disabled):checked + span {
    --filter-toggle-background: var(--turquoise85, #12726c);
    --filter-toggle-color: var(--white, #fff);

    &:hover {
      outline: 1px solid var(--white, #fff);
      outline-offset: -3px;
    }
  }

  input:not(:disabled):checked:focus + span,
  input:not(:disabled):checked:focus-visible + span {
    outline: 1px solid var(--white, #fff);
    outline-offset: -3px;
  }
`,q=i(_)`
  padding: 0;
  width: 100%;
`,d=({filter:l,colorOptions:c,isDisabled:n,onChangeFilterCallback:o,buttonLabelledById:p,selectLabelledById:u,sliderLabelledById:f})=>{const{t:m}=F(),{label:s,color:a="",value:g,active:r,min:b,max:x}=l,h=()=>o&&o({...l,active:!r}),y=e=>e&&o&&o({...l,color:e}),v=e=>o&&o({...l,brightness:w(b,x,e),value:e}),C=m("colorTool.actions.select_filter");return t.jsxs(L,{disabled:n,children:[t.jsxs(k,{children:[t.jsx(T,{checked:r,type:"checkbox",onChange:h,"aria-describedby":p}),t.jsx(j,{as:"span",children:s})]}),t.jsx(I,{placeholder:C,value:a,options:c,onChangeCallback:y,width:"100%",maxWidth:"100%",labelledById:u,isDisabled:!r||n}),t.jsx(q,{min:1,max:100,onChangeCallback:e=>typeof e=="number"&&v(e),isDisabled:!r||n,labelledbyId:f,value:g,label:s,color:a})]})};d.displayName="Widgets.ColorTool.FilterControls";const O=d;try{Widgets.ColorTool.FilterControls.displayName="Widgets.ColorTool.FilterControls",Widgets.ColorTool.FilterControls.__docgenInfo={description:"",displayName:"Widgets.ColorTool.FilterControls",props:{filter:{defaultValue:null,description:"",name:"filter",required:!0,type:{name:"ImageFilter"}},colorOptions:{defaultValue:null,description:"",name:"colorOptions",required:!0,type:{name:"ListboxOption[]"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!0,type:{name:"boolean"}},onChangeFilterCallback:{defaultValue:null,description:"",name:"onChangeFilterCallback",required:!0,type:{name:"(filter: ImageFilter) => void"}},buttonLabelledById:{defaultValue:null,description:"",name:"buttonLabelledById",required:!0,type:{name:"string"}},selectLabelledById:{defaultValue:null,description:"",name:"selectLabelledById",required:!0,type:{name:"string"}},sliderLabelledById:{defaultValue:null,description:"",name:"sliderLabelledById",required:!0,type:{name:"string"}}}}}catch{}export{O as F};
