import { FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./styles";

export type Ratios = Record<"landscape" | "portrait", number>;

export interface AspectRatioProps {
  ratio: number | Ratios;
  className?: string;
}

/**
 * Wrapper component for widgets that can accept up to 3 target ratios for
 * wide screens, medium screens, and small screens. Will resize the container
 * based on it's parent container width and screen height.
 *
 * For best results this component should be placed in a container with
 * `container-type: inline-size` applied.
 */
const AspectRatio: FunctionComponent<PropsWithChildren<AspectRatioProps>> = ({
  ratio,
  children,
  className,
}) => {
  const portraitRatio = typeof ratio === "object" ? ratio.portrait : ratio;
  const landscapeRatio = typeof ratio === "object" ? ratio.landscape : ratio;

  return (
    <Styled.AspectRatio
      style={{
        "--size-aspect-ratio-portrait": portraitRatio,
        "--size-aspect-ratio-landscape": landscapeRatio,
      }}
      className={className}
    >
      {children}
    </Styled.AspectRatio>
  );
};

AspectRatio.displayName = "Layout.AspectRatio";

export default AspectRatio;
