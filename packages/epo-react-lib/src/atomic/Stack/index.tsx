import { CSSProperties, FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./styles";

export interface StackProps {
  space?: string;
  recursive?: boolean;
  className?: string;
  style?: CSSProperties;
}

const Stack: FunctionComponent<PropsWithChildren<StackProps>> = ({
  space = "var(--size-spacing-s)",
  recursive = false,
  className,
  style,
  children,
}) => {
  return (
    <Styled.Stack
      style={{
        ...style,
        "--size-spacing-stack": space,
      }}
      data-recursive={recursive}
      className={className}
    >
      {children}
    </Styled.Stack>
  );
};

Stack.displayName = "Atom.Stack";

export default Stack;
