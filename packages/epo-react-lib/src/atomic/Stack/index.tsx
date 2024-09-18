import { FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./styles";

export interface StackProps {
  /** A CSS `margin` value */
  space?: string;
  /** Whether the spaces apply recursively (i.e. regardless of nesting level) */
  recursive?: boolean;
  className?: string;
}

const Stack: FunctionComponent<PropsWithChildren<StackProps>> = ({
  space = "var(--size-spacing-s)",
  recursive = false,
  className,
  children,
}) => {
  return (
    <Styled.Stack
      style={{
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
