import { FunctionComponent, ReactNode } from "react";

interface ToastProps {
  children: ReactNode;
  className?: string;
  /** list of ID's that contributed to this status message eg. if clicking on \<svg id="mySvg"/> created a message, pass ['mySvg'] */
  forIds?: string[];
}

const Toast: FunctionComponent<ToastProps> = ({
  children,
  className,
  forIds,
}) => (
  <output role="status" htmlFor={forIds?.join(" ")} {...{ className }}>
    {children}
  </output>
);

Toast.displayName = "Atomic.Toast";

export default Toast;
