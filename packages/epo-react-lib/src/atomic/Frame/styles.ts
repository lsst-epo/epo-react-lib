import styled from "styled-components";

export const Frame = styled.div`
  aspect-ratio: var(--n) / var(--d);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img,
  & > video {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
    object-position: var(--position-img);
    transform: scale(var(--zoom-img));
  }
`;
