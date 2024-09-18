import { FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./styles";

export interface CenterProps {
  /** The maximum width of the centered element */
  maxWidth?: string;
  /** Whether to apply `text-align: center` too */
  andText?: boolean;
  /** The width of the gutters (leave empty for no gutters) */
  gutter?: string;
  /** Whether to center and child elements narrower than the max value */
  intrinsic?: boolean;
  className?: string;
}

const Center: FunctionComponent<PropsWithChildren<CenterProps>> = ({
  maxWidth = "auto",
  andText,
  gutter = "0",
  intrinsic,
  className,
  children,
}) => {
  return (
    <Styled.Center
      data-center-text={andText}
      data-intrinsic={intrinsic}
      style={{ "--size-width-center": maxWidth, "--size-gutters": gutter }}
      className={className}
    >
      {children}
    </Styled.Center>
  );
};

Center.displayName = "Atom.Center";

export default Center;
