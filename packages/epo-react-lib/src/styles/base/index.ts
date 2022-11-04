import { css } from "styled-components";
import { aButton, aButtonTheme } from "@/styles/mixins/appearance";

export default css`
  svg {
    fill: currentColor;
  }
  .c-buttonish {
    ${aButton}
    ${aButtonTheme()}
    padding: 15px 2.125em;
    font-size: 16px;

    &--block {
      display: block;
      text-align: center;
    }

    &--educator {
      ${aButtonTheme("educator")}
    }

    &--inert:hover {
      outline: none;
    }
  }
`;
