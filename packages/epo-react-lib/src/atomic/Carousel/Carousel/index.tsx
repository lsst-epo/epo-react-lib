import { FunctionComponent, ReactNode } from "react";
import { useCarouselContext } from "../context";
import * as Styled from "./styles";

const Carousel: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const { carouselProps } = useCarouselContext();

  return <Styled.Carousel {...carouselProps}>{children}</Styled.Carousel>;
};

Carousel.displayName = "Carousel.Carousel";

export default Carousel;
