import { FunctionComponent, PropsWithChildren } from "react";

const ForeignObject: FunctionComponent<
  PropsWithChildren<{ className?: string }>
> = ({ children, className }) => {
  return (
    <foreignObject
      className={className}
      x={0}
      y={0}
      width="100%"
      height="100%"
      pointerEvents="none"
    >
      {children}
    </foreignObject>
  );
};

ForeignObject.displayName = "Charts.ForeignObject";

export default ForeignObject;
