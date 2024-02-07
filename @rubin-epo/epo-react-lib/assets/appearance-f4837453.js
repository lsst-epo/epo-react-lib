import{n as o}from"./styled-components.browser.esm-3d9e3c21.js";const e=(r="")=>`
    .js-focus-visible &:focus:not(.focus-visible) {
      outline-width: 0;
    }

    &.focus-visible:not(:disabled) {
      outline: auto 4px;
      ${r}
    }
  `,t=()=>`
    display: inline-block;
    padding: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
    background: transparent;
    border: 0;
    appearance: none;
  `,a=r=>{switch(r){case"secondary":return o`
        --button-background-color: var(--red);
        --button-border-color: var(--red);
        --button-color: var(--white);
      `;case"tertiary":return o`
        --button-background-color: var(--white);
        --button-border-color: var(--black);
        --button-color: var(--black);
      `;case"educator":return o`
        --button-background-color: var(--orange55);
        --button-border-color: var(--orange55);
        --button-focus-outline-color: var(--black);
        --button-color: var(--black);
      `;default:return o`
        --button-background-color: var(--turquoise85);
        --button-border-color: var(--turquoise85);
        --button-color: var(--white);
      `}},i=o`
  ${t()}

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
`,u=o`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;export{a,i as b,u as c,e as f,t as p};
