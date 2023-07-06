import styled from "styled-components";
import { focusDefault } from "@/styles/mixins/appearance";

export const Carousel = styled.div`
  ${focusDefault()}

  &.flickity-enabled {
    position: relative;
  }

  .flickity-viewport {
    overflow: hidden;
    position: relative;
    height: 100%;
  }

  .flickity-slider {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  /* draggable */
  &.flickity-enabled.is-draggable {
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    user-select: none;

    .flickity-viewport {
      cursor: move;
      cursor: grab;

      &.is-pointer-down {
        cursor: grabbing;
      }
    }
  }
`;
