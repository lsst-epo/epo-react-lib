import { containerRegular } from "@/styles/utils";
import styled from "styled-components";

export const TileLink = styled.a`
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
`;

export const PlayButton = styled.span`
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
`;

interface BrickRowProps {
  brickSizes: string;
}

export const BrickRow = styled.div<BrickRowProps>`
  ${containerRegular()}
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
  ${({ brickSizes }) => brickSizes}

  @media (max-width: 640px) {
    display: block;
    && a {
      display: block;
      width: 100%;
    }
  }
`;
