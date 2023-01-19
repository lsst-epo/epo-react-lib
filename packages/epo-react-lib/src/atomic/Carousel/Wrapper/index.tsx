import { FunctionComponent, ReactNode } from "react";
import * as Styled from "./styles";

export interface WrapperProps {
  children: ReactNode;
  className?: string;
}

const Wrapper: FunctionComponent<WrapperProps> = ({ children, className }) => {
  return <Styled.Wrapper className={className}>{children}</Styled.Wrapper>;
};

Wrapper.displayName = "Carousel.Wrapper";

export default Wrapper;
