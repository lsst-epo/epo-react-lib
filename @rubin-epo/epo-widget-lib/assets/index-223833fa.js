import{n as u,s as d}from"./styled-components.browser.esm-e0114bd2.js";import{d as a}from"./index-12ae03d4.js";const p=()=>`
    display: inline-block;
    padding: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
    background: transparent;
    border: 0;
    appearance: none;
  `,L=r=>{switch(r){case"secondary":return u`
        --button-background-color: var(--red);
        --button-border-color: var(--red);
        --button-color: var(--white);
      `;case"tertiary":return u`
        --button-background-color: var(--white);
        --button-border-color: var(--black);
        --button-color: var(--black);
      `;case"educator":return u`
        --button-background-color: var(--orange55);
        --button-border-color: var(--orange55);
        --button-focus-outline-color: var(--black);
        --button-color: var(--black);
      `;default:return u`
        --button-background-color: var(--turquoise85);
        --button-border-color: var(--turquoise85);
        --button-color: var(--white);
      `}},O=u`
  ${p()}

  border: 1px solid var(--button-border-color);
  border-radius: 6px;
  background-color: var(--button-background-color);
  padding: 15px 32px;
  color: var(--button-color) !important;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;

  &:not(:disabled):not([aria-disabled="true"]):hover,
  &:not(:disabled):not([aria-disabled="true"]):focus-visible,
  &:not(:disabled):not([aria-disabled="true"]).focus-visible {
    outline: 3px solid var(--button-border-color);
    outline-offset: 1px;
  }

  &:disabled,
  &[aria-disabled="true"] {
    --button-background-color: var(--neutral40);
    --button-border-color: var(--neutral40);
    pointer-events: none;

    &.focus-visible,
    &:focus-visible,
    &:hover {
      outline: 0;
    }
  }
`,T=u`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`,b={white:"#ffffff",offWhite:"#e9e9e9",neutral02:"#fafafa",neutral08:"#ebebeb",neutral10:"#f5f5f5",neutral15:"#e3e4e8",neutral20:"#dce0e3",neutral30:"#d3d4d5",neutral40:"#9E9EA3",neutral60:"#6A6E6E",neutral80:"#404040",neutral90:"#2b2e34",neutral95:"#1F2121",black:"#000000",turquoise05:"#EDFFFE",turqouise07:"#EDFFFE",turquoise10:"#D9F7F6",turquoise20:"#B2F2EF",turquoise50:"#00bebf",turquoise55:"#009fa1",turquoise60:"#078b8c",turquoise70:"#058b8c",turquoise80:"#117273",turquoise85:"#12726c",turquoise90:"#0c4a4c",orange02:"#FFFDFA",orange04:"#FFF8F0",orange05:"#FFF9F2",orange10:"#FFEDD9",orange20:"#FFE7CC",orange55:"#FAB364",blue10:"#eef5fb",blue20:"#C7D4F4",green05:"#D7E6CF",red:"#cf4040",red20:"#f2c3c0",red40:"#FF8489"},A=b,t={...A,BREAK_HEADER_LAYOUT:"1500px",BREAK_DESKTOP:"1280px",BREAK_DESKTOP_SMALL:"1130px",BREAK_LARGE_TABLET:"850px",BREAK_LARGE_TABLET_MIN:"851px",BREAK_TABLET:"768px",BREAK_TABLET_MIN:"769px",BREAK_PHABLET:"600px",BREAK_PHABLET_MIN:"601px",BREAK_MOBILE:"446px",BREAK_MOBILE_MIN:"280px",CONTAINER_MAX:"2560px",CONTAINER_FULL:"1920px",CONTAINER_WIDE:"1435px",CONTAINER_REGULAR:"1160px",CONTAINER_NARROW:"900px",FONT_WEIGHT_NORMAL:"400",FONT_WEIGHT_MEDIUM:"500",FONT_WEIGHT_BOLD:"600",FONT_SIZE_BASE_DESKTOP:"22px",FONT_SIZE_BASE_MOBILE:"16px",FONT_STACK_BASE:'"Source Sans Pro", system-ui',LINE_HEIGHT_BASE:"1.636",PADDING_LARGE:"100px",PADDING_MEDIUM:"40px",PADDING_SMALL:"20px",DURATION:"0.2s",DURATION_SLOW:"0.4s",DURATION_SUPER_SLOW:"1s"},D={loader:45,dialog:35,header:25};t.white;t.offWhite;t.neutral02;t.neutral08;t.neutral10;t.neutral15;t.neutral20;t.neutral30;t.neutral40;t.neutral60;t.neutral80;t.neutral90;t.neutral95;t.black;t.orange20;t.orange55;t.turquoise10;t.turquoise20;t.turquoise50;t.turquoise55;t.turquoise60;t.turquoise70;t.turquoise80;t.turquoise85;t.turquoise90;t.blue10;t.red;t.red20;t.red40;t.BREAK_HEADER_LAYOUT;t.BREAK_DESKTOP;t.BREAK_DESKTOP_SMALL;t.BREAK_LARGE_TABLET;t.BREAK_LARGE_TABLET_MIN;t.BREAK_TABLET;t.BREAK_TABLET_MIN;t.BREAK_PHABLET;t.BREAK_PHABLET_MIN;t.BREAK_MOBILE;t.BREAK_MOBILE_MIN;t.CONTAINER_MAX;t.CONTAINER_FULL;t.CONTAINER_WIDE;t.CONTAINER_REGULAR;t.CONTAINER_NARROW;t.FONT_WEIGHT_NORMAL;t.FONT_WEIGHT_MEDIUM;t.FONT_WEIGHT_BOLD;t.FONT_SIZE_BASE_DESKTOP;t.FONT_SIZE_BASE_MOBILE;t.FONT_STACK_BASE;t.LINE_HEIGHT_BASE;t.PADDING_LARGE;t.PADDING_MEDIUM;t.PADDING_SMALL;t.DURATION;t.DURATION_SLOW;t.DURATION_SUPER_SLOW;function i(r,o,e=t.BREAK_DESKTOP,n=t.BREAK_TABLET){return r===o?r:a.fluidScaleBase(r,o,e,n)}const f=()=>l(t.CONTAINER_WIDE),g=()=>l(t.CONTAINER_REGULAR),F=()=>l(t.CONTAINER_NARROW),S=(r=3,o=t.PADDING_SMALL,e=t.PADDING_SMALL,n=t.BREAK_TABLET)=>`
  display: grid;
  grid-template-columns: repeat(${r}, 1fr);
  gap: ${i(o,e)};

  ${R(`& > * {
      grid-column: span ${r};
    }`,n)}
  `,N=r=>A[r],l=(r=t.CONTAINER_WIDE,o=t.PADDING_LARGE,e=t.PADDING_SMALL)=>{const n=o.toString().split(/\d+/),E=(n==null?void 0:n[0])||"px",c=a.stripUnit(r)+2*a.stripUnit(o),_=a.stripUnit(r)+2*a.stripUnit(e);return`
    --max-width: ${i(c+E,_+E)};
    max-width: var(--max-width);
    padding-right: ${i(o,e)};
    padding-left: ${i(o,e)};
    margin-right: auto;
    margin-left: auto;
    `},s=(r,o=t.FONT_SIZE_BASE_DESKTOP)=>`${Math.floor(a.stripUnit(r)*1.333)/a.stripUnit(o)}em`,R=(r,o=t.BREAK_TABLET,e="max",n="width")=>a.respondBase(r,o,e,n);function x(r){return typeof r=="string"?t[r]:Array.isArray(r)?r.reduce((e,n)=>(e[n]=t[n],e),{}):t}const K=d.span`
  ${T}
`;u`
  > * + * {
    margin-top: 1rem;
  }

  > *:first-child {
    margin-block-start: 0;
  }

  a:not([class^="c-"]) {
    color: var(--link-color, ${N("turquoise80")});
    text-decoration: underline;
  }

  ul {
    padding-inline-start: 1em;
    list-style-type: disc;
  }

  ol {
    padding-inline-start: 1em;
    list-style-type: decimal;
  }

  li {
    padding-inline-start: 0.5em;
  }

  h1 {
    margin-block-start: ${s("144pt")};
  }

  h2 {
    margin-block-start: ${s("40pt")};
  }

  h3,
  h4 {
    margin-block-start: ${s("20pt")};
  }

  figcaption {
    font-size: 18px;
    padding-block-start: 1em;
    padding-block-end: 1em;
  }
`;export{K as S,L as a,O as b,t as c,g as d,f as e,i as f,F as g,S as l,p,x as t,D as z};
