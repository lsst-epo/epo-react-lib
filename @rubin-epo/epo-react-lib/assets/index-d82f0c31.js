import{s as p,n as B}from"./styled-components.browser.esm-3d9e3c21.js";import{d as s}from"./index-12ae03d4.js";import{c as R}from"./appearance-f4837453.js";const l={white:"#ffffff",offWhite:"#e9e9e9",neutral02:"#fafafa",neutral08:"#ebebeb",neutral10:"#f5f5f5",neutral15:"#e3e4e8",neutral20:"#dce0e3",neutral30:"#d3d4d5",neutral40:"#9E9EA3",neutral60:"#6A6E6E",neutral80:"#404040",neutral90:"#2b2e34",neutral95:"#1F2121",black:"#000000",turquoise05:"#EDFFFE",turqouise07:"#EDFFFE",turquoise10:"#D9F7F6",turquoise20:"#B2F2EF",turquoise50:"#00bebf",turquoise55:"#009fa1",turquoise60:"#078b8c",turquoise70:"#058b8c",turquoise80:"#117273",turquoise85:"#12726c",turquoise90:"#0c4a4c",orange02:"#FFFDFA",orange04:"#FFF8F0",orange05:"#FFF9F2",orange10:"#FFEDD9",orange20:"#FFE7CC",orange55:"#FAB364",blue10:"#eef5fb",blue20:"#C7D4F4",green05:"#D7E6CF",red:"#cf4040",red20:"#f2c3c0",red40:"#FF8489"},i=l,t={...i,BREAK_HEADER_LAYOUT:"1500px",BREAK_DESKTOP:"1280px",BREAK_DESKTOP_SMALL:"1130px",BREAK_LARGE_TABLET:"850px",BREAK_LARGE_TABLET_MIN:"851px",BREAK_TABLET:"768px",BREAK_TABLET_MIN:"769px",BREAK_PHABLET:"600px",BREAK_PHABLET_MIN:"601px",BREAK_MOBILE:"446px",BREAK_MOBILE_MIN:"280px",CONTAINER_MAX:"2560px",CONTAINER_FULL:"1920px",CONTAINER_WIDE:"1435px",CONTAINER_REGULAR:"1160px",CONTAINER_NARROW:"900px",FONT_WEIGHT_NORMAL:"400",FONT_WEIGHT_MEDIUM:"500",FONT_WEIGHT_BOLD:"600",FONT_SIZE_BASE_DESKTOP:"22px",FONT_SIZE_BASE_MOBILE:"16px",FONT_STACK_BASE:'"Source Sans Pro", system-ui',LINE_HEIGHT_BASE:"1.636",PADDING_LARGE:"100px",PADDING_MEDIUM:"40px",PADDING_SMALL:"20px",DURATION:"0.2s",DURATION_SLOW:"0.4s",DURATION_SUPER_SLOW:"1s"},F={loader:45,dialog:35,header:25},O=t.BREAK_HEADER_LAYOUT,d=t.BREAK_DESKTOP_SMALL,K=t.BREAK_TABLET,f=t.BREAK_TABLET_MIN,S=t.BREAK_PHABLET,m=t.BREAK_PHABLET_MIN,x=t.BREAK_MOBILE;function n(e,E,a=t.BREAK_DESKTOP,r=t.BREAK_TABLET){return e===E?e:s.fluidScaleBase(e,E,a,r)}const g=()=>o(t.CONTAINER_WIDE),M=()=>o(t.CONTAINER_REGULAR),b=()=>o(t.CONTAINER_NARROW),G=(e=3,E=t.PADDING_SMALL,a=t.PADDING_SMALL,r=t.BREAK_TABLET)=>`
  display: grid;
  grid-template-columns: repeat(${e}, 1fr);
  gap: ${n(E,a)};

  ${L(`& > * {
      grid-column: span ${e};
    }`,r)}
  `,u=e=>i[e],o=(e=t.CONTAINER_WIDE,E=t.PADDING_LARGE,a=t.PADDING_SMALL)=>{const r=E.toString().split(/\d+/),_=(r==null?void 0:r[0])||"px",T=s.stripUnit(e)+2*s.stripUnit(E),c=s.stripUnit(e)+2*s.stripUnit(a);return`
    --max-width: ${n(T+_,c+_)};
    max-width: var(--max-width);
    padding-right: ${n(E,a)};
    padding-left: ${n(E,a)};
    margin-right: auto;
    margin-left: auto;
    `},A=(e,E=t.FONT_SIZE_BASE_DESKTOP)=>`${Math.floor(s.stripUnit(e)*1.333)/s.stripUnit(E)}em`,L=(e,E=t.BREAK_TABLET,a="max",r="width")=>s.respondBase(e,E,a,r),U=p.span`
  ${R}
`,P=B`
  > * + * {
    margin-top: 1rem;
  }

  > *:first-child {
    margin-block-start: 0;
  }

  a:not([class^="c-"]) {
    color: var(--link-color, ${u("turquoise80")});
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
    margin-block-start: ${A("144pt")};
  }

  h2 {
    margin-block-start: ${A("40pt")};
  }

  h3,
  h4 {
    margin-block-start: ${A("20pt")};
  }

  figcaption {
    font-size: 18px;
    padding-block-start: 1em;
    padding-block-end: 1em;
  }
`;export{S as B,U as S,A as a,o as b,P as c,x as d,K as e,n as f,O as g,m as h,M as i,g as j,b as k,G as l,f as m,d as n,i as p,L as r,t,F as z};
