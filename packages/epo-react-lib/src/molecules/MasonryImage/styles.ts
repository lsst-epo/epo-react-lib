import Link from "next/link";
import styled from "styled-components";

export const TileLink = styled(Link)`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  text-decoration: none;

  & > img {
    background-color: var(--color-background-tile-light);
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
    object-position: center;
    text-decoration: none;
    transition: filter 0.2s;

    @media (prefers-reduced-motion: no-preference) {
      transition: filter 0.2s, transform 0.2s;
    }
  }

  &:hover,
  &.focus-visible,
  &:focus-visible {
    --color-play-icon: var(--neutral15);
    & > img {
      filter: invert(25%) sepia(80%) saturate(102%) hue-rotate(130deg)
        brightness(100%) contrast(100%);
      outline: none;
      opacity: 0.7;

      @media (prefers-reduced-motion: no-preference) {
        transform: scale(1.01);
      }
    }
  }
`;

export const PlayButton = styled.span`
  position: absolute;
  display: block;
  color: var(--color-play-icon, var(--color-text-button-primary));
  transition: color 0.2s;
`;
