import { FunctionComponent, ReactNode } from "react";
import { useCarouselContext } from "../context";
import * as Styled from "./styles";

const Slide: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const { slideProps } = useCarouselContext();

  return <Styled.Slide {...slideProps}>{children}</Styled.Slide>;
};

Slide.displayName = "Carousel.Slide";

export default Slide;
