import { FunctionComponent, PropsWithChildren } from "react";

export interface ViewportProps {
  innerWidth: number;
  innerHeight: number;
  outerWidth: number;
  outerHeight: number;
  x: number;
  y: number;
}

const Viewport: FunctionComponent<PropsWithChildren<ViewportProps>> = ({
  innerWidth,
  innerHeight,
  outerWidth,
  outerHeight,
  x,
  y,
  children,
}) => {
  return (
    <svg
      preserveAspectRatio="none"
      {...{ x, y }}
      width={outerWidth}
      height={outerHeight}
      viewBox={`0 0 ${innerWidth} ${innerHeight}`}
    >
      {children}
    </svg>
  );
};

Viewport.displayName = "Widgets.Charts.Viewport";

export default Viewport;
