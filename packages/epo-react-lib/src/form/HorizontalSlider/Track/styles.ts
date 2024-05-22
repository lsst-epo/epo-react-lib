import styled from "styled-components";

export const Track = styled.div`
  --size-height-track: 6px;
  --size-border-radius-track: calc(var(--size-height-track) / 2);

  box-sizing: border-box;
  border-radius: var(--size-border-radius-track);
  background-color: var(--color-background-track);
  height: var(--size-height-track);
  opacity: var(--opacity-background-track, 0);
`;
