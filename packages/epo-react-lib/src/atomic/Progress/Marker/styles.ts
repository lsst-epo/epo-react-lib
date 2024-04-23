import styled, { css } from "styled-components";
import { SimpleValue } from "../Bar/styles";

interface MarkerProps extends SimpleValue {
  $active?: boolean;
  $filled?: boolean;
  $hoverable?: boolean;
  $background?: string;
}

export const Marker = styled.div.attrs<MarkerProps>(({ $value }) => ({
  style: { left: `${$value}%` },
}))<MarkerProps>`
  ${({ $filled, $active, $background, $hoverable, $value }: MarkerProps) =>
    css`
      --marker-border-color: ${$active
        ? css`var(--progress-bar-background)`
        : css`var(--progress-bar-container-background)`};
      --marker-background-color: ${$filled
        ? css`
            ${$background || "var(--marker-border-color)"}
          `
        : css`var(--white, #fff)`};
      --marker-z: ${$hoverable ? 2 : 1};
      --marker-font-size: ${$value && $value > 99 ? "6px" : "7px"};
    `}
  --marker-size: 14px;
  --marker-size-radius: calc(var(--marker-size) / 2);

  position: absolute;
  left: 0;
  top: 0;
  z-index: var(--marker-z);
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--marker-size);
  height: var(--marker-size);
  color: transparent;
  background-color: var(--marker-background-color);
  border: 1px solid var(--marker-border-color);
  border-radius: 50%;
  font-size: var(--marker-font-size);
  line-height: 0;
  transform: translate(
    calc(var(--marker-size-radius) * -1),
    calc(var(--marker-size-radius) * -1)
  );
  transition: left var(--DURATION, 0.2s);

  ${({ $hoverable }: MarkerProps) =>
    $hoverable &&
    css`
      cursor: pointer;
      transition: left var(--DURATION, 0.2s),
        color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
        transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

      &:hover {
        transform: translate(
            calc(var(--marker-size-radius) * -1),
            calc(var(--marker-size-radius) * -1)
          )
          scale(2);
        color: var(--black, #000);
      }
    `}

  @media (prefers-reduced-motion) {
    transition: none;
  }
`;
