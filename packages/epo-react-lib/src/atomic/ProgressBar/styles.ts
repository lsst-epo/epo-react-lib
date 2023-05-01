import styled, { css } from "styled-components";

interface SimpleValue {
  $value?: number;
}

interface MarkerProps extends SimpleValue {
  $active?: boolean;
  $filled?: boolean;
  $hoverable?: boolean;
  $background?: string;
}

export const ProgressBarContainer = styled.div`
  --progress-bar-height: 6px;
  --progress-bar-container-background: var(--neutral60, #6a6e6e);
  --progress-bar-background: #019305;

  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 2px;
  border-radius: 1px;
  background: var(--progress-bar-container-background);
`;
export const ProgressBar = styled.div.attrs<SimpleValue>(({ $value = 0 }) => ({
  style: { width: `${$value}%` },
}))<SimpleValue>`
  height: var(--progress-bar-height);
  background-color: var(--progress-bar-background);
  border-radius: calc(var(--progress-bar-height) / 2);
  transition: width var(--DURATION, 0.2s);
`;

export const Marker = styled.div.attrs<MarkerProps>(({ $value }) => ({
  style: { left: `${$value}%` },
}))<MarkerProps>`
  ${({ $filled, $active, $background, $hoverable, $value }) =>
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
  line-height: 1;
  transform: translate(
    calc(var(--marker-size-radius) * -1),
    calc(var(--marker-size-radius) * -1)
  );
  transition: left var(--DURATION, 0.2s);

  ${({ $hoverable }) =>
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
`;
