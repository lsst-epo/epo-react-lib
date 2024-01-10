import { FunctionComponent, PropsWithChildren, useId } from "react";

export interface ClippingContainerProps {
  x: number;
  y: number;
  width: number;
  height: number;
  className?: string;
}

const ClippingContainer: FunctionComponent<
  PropsWithChildren<ClippingContainerProps>
> = ({ x, y, width, height, className, children }) => {
  const containerId = useId();
  return (
    <>
      <defs>
        <clipPath id={containerId}>
          <rect {...{ x, y, width, height }} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${containerId})`} className={className}>
        {children}
      </g>
    </>
  );
};

ClippingContainer.displayName = "Charts.Clip";

export default ClippingContainer;
