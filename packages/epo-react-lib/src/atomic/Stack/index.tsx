import { FunctionComponent, PropsWithChildren } from "react";
// import * as Styled from "./styles";
import styles from "./styles.module.css";
import classNames from "classnames";

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
    <div
      style={{
        "--size-spacing-stack": space,
      }}
      data-recursive={recursive}
      className={classNames(styles.stack, className)}
    >
      {children}
    </div>
  );
};

Stack.displayName = "Atom.Stack";

export default Stack;
