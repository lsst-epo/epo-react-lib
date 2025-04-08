import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import styled, { css } from "styled-components";

const Base = css`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-background-button, var(--color-rubin-teal-300));
  color: var(--color-text-button, var(--color-font-invert));
  cursor: pointer;
  width: var(--size-button, var(--size-spacing-l));
  transition: background-color 0.4s;
  pointer-events: initial;

  & > svg {
    width: var(--size-button-icon, 1.5em);
    height: var(--size-button-icon, 1.5em);
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:disabled):hover,
  &:not(:disabled):focus-visible {
    outline: 1px;
    outline-color: var(--color-outline-button, #0f8fff);
    outline-style: solid;
    background-color: var(
      --color-background-button-hover,
      var(--color-rubin-teal-600)
    );
  }
`;

export const CopyUrlButton = styled.button`
  ${Base}
`;

export const Email = styled(EmailShareButton)`
  ${Base}
`;

export const Facebook = styled(FacebookShareButton)`
  ${Base}

  --color-background-button: #3d5a99;
  --color-background-button-hover: #3d5a99;
`;

export const Twitter = styled(TwitterShareButton)`
  ${Base}

  --color-background-button: #000;
  --color-background-button-hover: #000;
`;

export const LinkedIn = styled(LinkedinShareButton)`
  ${Base}

  --color-background-button: #007BB5;
  --color-background-button-hover: #007bb5;
`;
