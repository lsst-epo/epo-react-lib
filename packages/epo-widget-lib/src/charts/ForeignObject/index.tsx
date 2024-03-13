import { FunctionComponent, PropsWithChildren } from "react";

const ForeignObject: FunctionComponent<
  PropsWithChildren<{
    className?: string;
    width?: number | string;
    height?: number | string;
  }>
> = ({ children, className, width = "100%", height = "100%" }) => {
  return (
    <foreignObject
      x={0}
      y={0}
      pointerEvents="none"
      {...{ className, width, height }}
    >
      {children}
    </foreignObject>
  );
};

ForeignObject.displayName = "Charts.ForeignObject";

export default ForeignObject;
