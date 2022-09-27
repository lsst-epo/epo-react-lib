import styled from "styled-components";

interface ResponsiveImageContainerProps {
  aspectRatio: number[];
}

export const ResponsiveImageContainer = styled.div<ResponsiveImageContainerProps>`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: ${({ aspectRatio }) =>
    aspectRatio.length > 1
      ? `${(aspectRatio[1] / aspectRatio[0]) * 100}%}`
      : "100%"};

  @supports (aspect-ratio: auto) {
    padding-top: 0;
    aspect-ratio: ${({ aspectRatio }) =>
      `${aspectRatio[0]} / ${aspectRatio[1]}`};
  }

  @supports not (aspect-ratio: auto) {
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
`;
