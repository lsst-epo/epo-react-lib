import{g as M}from"./helpers-9f040751.js";import{j as l}from"./jsx-runtime-94f6e698.js";import{i as k}from"./index-d82f0c31.js";import{s as p}from"./styled-components.browser.esm-3d9e3c21.js";import{L}from"./link-cb9f4c3f.js";import{R as z}from"./ResponsiveImage-bfab868d.js";import{a as V}from"./IconComposer-fd2a8d4b.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-12ae03d4.js";import"./appearance-f4837453.js";import"./Image-7070a7b2.js";import"./defaultProps-88ef9418.js";import"./utils-95281a95.js";const T=p.a`
  position: relative;
  transition: filter 0.2s;
  &:hover,
  &.focus-visible,
  &:focus-visible {
    img {
      filter: invert(25%) sepia(80%) saturate(102%) hue-rotate(130deg)
        brightness(100%) contrast(100%);
      outline: none;
      opacity: 0.7;
    }
  }
`,j=p.span`
  position: absolute;
  display: block;
  width: 6%;
  height: auto;
  min-width: 40px;
  min-height: 40px;
  color: var(--white);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    color: var(--neutral15);
  }
  svg {
    width: 100%;
    height: 100%;
    min-width: 40px;
    min-height: 40px;
  }
`,C=p.div`
  ${k()}
  display: flex;
  flex-wrap: wrap;
  a {
    max-height: 400px;
    overflow: hidden;
    margin: 0 0.5rem 1rem 0.5rem;
    flex: 1 0 auto;
    div {
      height: 100%;
    }
  }
  ${({$brickSizes:i})=>i}

  @media (max-width: 640px) {
    display: block;
    && a {
      display: block;
      width: 100%;
    }
  }
`,x=({image:i,isVideo:n,link:m,title:d,prefetch:y=!1})=>l.jsx(L,{legacyBehavior:!0,href:m,passHref:!0,prefetch:y,children:l.jsxs(T,{children:[l.jsx(z,{image:i,ratio:"16:9",title:d}),n&&l.jsx(j,{children:l.jsx(V,{icon:"play"})})]})});x.displayName="Layout.MasonryGridTile";const $=x;try{Layout.MasonryGridTile.displayName="Layout.MasonryGridTile",Layout.MasonryGridTile.__docgenInfo={description:"",displayName:"Layout.MasonryGridTile",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"ImageShape"}},isVideo:{defaultValue:null,description:"",name:"isVideo",required:!0,type:{name:"boolean"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},prefetch:{defaultValue:{value:"false"},description:"",name:"prefetch",required:!1,type:{name:"boolean"}}}}}catch{}const v=({items:i,randomize:n})=>{const m=(e,r)=>`
          a:nth-child(${e+1}n + ${e+1}) {
            width: ${r}%;
          }
        `,d=()=>{const e=[20,20,20,20,30,30,30,40,40,80];let r="";for(let t=0;t<20;t++){const u=n?e[Math.floor(Math.random()*e.length)]:e[t];r+=m(t,u)}return r},y=e=>{var r;return((r=e==null?void 0:e[0])==null?void 0:r.slug)==="video"},w=d();return l.jsx(C,{$brickSizes:w,children:i.map(({galleryItemCategory:e,id:r,image:t,title:u,uri:b})=>l.jsx($,{image:t==null?void 0:t[0],link:`/${b}`,title:u,isVideo:y(e)},r))})};v.displayName="Layout.MasonryGrid";const q=v;try{Layout.MasonryGrid.displayName="Layout.MasonryGrid",Layout.MasonryGrid.__docgenInfo={description:"",displayName:"Layout.MasonryGrid",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"GalleryEntry[]"}},randomize:{defaultValue:null,description:"",name:"randomize",required:!1,type:{name:"boolean"}}}}}catch{}const a={altText:"A placeholder image",url:M(200,200),width:200,height:200},_=[{galleryItemCategory:[{id:"a1",slug:"image",title:"Gallery Item 1"}],id:"a1",image:[a],title:"Gallery Item 1",uri:""},{galleryItemCategory:[{id:"a2",slug:"video",title:"Gallery Item 2"}],id:"a2",image:[a],title:"Gallery Item 2",uri:""},{galleryItemCategory:[{id:"a3",slug:"image",title:"Gallery Item 3"}],id:"a3",image:[a],title:"Gallery Item 3",uri:""},{galleryItemCategory:[{id:"a4",slug:"video",title:"Gallery Item 4"}],id:"a4",image:[a],title:"Gallery Item 4",uri:""},{galleryItemCategory:[{id:"a5",slug:"image",title:"Gallery Item 5"}],id:"a5",image:[a],title:"Gallery Item 1",uri:""},{galleryItemCategory:[{id:"a6",slug:"video",title:"Gallery Item 6"}],id:"a6",image:[a],title:"Gallery Item 2",uri:""},{galleryItemCategory:[{id:"a7",slug:"image",title:"Gallery Item 7"}],id:"a7",image:[a],title:"Gallery Item 3",uri:""},{galleryItemCategory:[{id:"a8",slug:"video",title:"Gallery Item 8"}],id:"a8",image:[a],title:"Gallery Item 4",uri:""}],Q={component:q,argTypes:{items:{description:"Array of gallery entries to show in masonry grid",type:{name:"other",value:"GalleryEntry[]",required:!0},table:{type:{summary:"GalleryEntry[]"}}},randomize:{control:"boolean",description:"Will use randomly selected masonry grid sizes instead of following the preset order.",table:{type:{summary:"boolean",default:!1}}}}},o={args:{items:_}},s={args:{items:_,randomize:!0}};var c,g,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items: galleryItems
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,I,G;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: galleryItems,
    randomize: true
  }
}`,...(G=(I=s.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};const U=["Primary","Randomized"];export{o as Primary,s as Randomized,U as __namedExportsOrder,Q as default};
