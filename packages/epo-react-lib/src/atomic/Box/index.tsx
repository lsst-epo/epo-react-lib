import { FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./styles";

interface BoxProps {
  className?: string;
}

const Box: FunctionComponent<PropsWithChildren<BoxProps>> = ({ children }) => {
  return <Styled.Box>{children}</Styled.Box>;
};

Box.displayName = "Atom.Box";

export default Box;
