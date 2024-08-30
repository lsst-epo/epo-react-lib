import { CSSProperties, FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

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
    <div
      style={{
        ...style,
        "--size-spacing-stack": space,
      }}
      data-recursive={recursive}
      className={classNames(className, styles.stack)}
    >
      {children}
    </div>
  );
};

Stack.displayName = "Atom.Stack";

export default Stack;
