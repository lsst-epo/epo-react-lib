import { FunctionComponent, PropsWithChildren } from "react";

export interface ToastProps {
  className?: string;
  /** list of ID's that contributed to this status message eg. if clicking on \<svg id="mySvg"/> created a message, pass ['mySvg'] */
  forIds?: string[];
}

const Toast: FunctionComponent<PropsWithChildren<ToastProps>> = ({
  children,
  className,
  forIds,
}) => (
  <output htmlFor={forIds?.join(" ")} {...{ className }}>
    {children}
  </output>
);

Toast.displayName = "Atomic.Toast";

export default Toast;
