import styled from "styled-components";

export interface SimpleValue {
  $value?: number;
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

  @media (prefers-reduced-motion) {
    transition: none;
  }
`;
