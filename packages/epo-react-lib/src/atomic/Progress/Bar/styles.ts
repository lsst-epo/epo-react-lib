import styled from "styled-components";

export interface SimpleValue {
  $value?: number;
}

export const ProgressBarContainer = styled.div`
  --color-background-progress-default: #019305;

  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 2px;
  border-radius: 1px;
  background: var(
    --progress-bar-container-background,
    var(--neutral60, #6a6e6e)
  );
`;
export const ProgressBar = styled.div.attrs<SimpleValue>(({ $value = 0 }) => ({
  style: { width: `${$value}%` },
}))<SimpleValue>`
  height: var(--progress-bar-height, 6px);
  background-color: var(
    --progress-bar-background,
    var(--color-background-progress-default)
  );
  border-radius: calc(var(--progress-bar-height, 6px) / 2);
  transition: width var(--DURATION, 0.2s);

  @media (prefers-reduced-motion) {
    transition: none;
  }
`;
