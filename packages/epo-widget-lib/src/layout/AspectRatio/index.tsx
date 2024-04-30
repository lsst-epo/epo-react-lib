import { FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./styles";

type AspectRatio = "square" | "portrait" | "landscape";

export interface AspectRatioProps {
  ratio: AspectRatio;
  medScreenRatio?: AspectRatio;
  smallScreenRatio?: AspectRatio;
  className?: string;
}

const ratios: Record<AspectRatio, number> = {
  square: 1,
  portrait: parseFloat((9 / 16).toFixed(3)),
  landscape: parseFloat((16 / 9).toFixed(3)),
};

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
  medScreenRatio = ratio,
  smallScreenRatio = ratio,
  children,
  className,
}) => {
  const cssVariables = {
    "--aspect-large-ratio": ratios[ratio],
    "--aspect-med-ratio": ratios[medScreenRatio],
    "--aspect-small-ratio": ratios[smallScreenRatio],
  };

  return (
    <Styled.AspectRatio style={cssVariables} className={className}>
      {children}
    </Styled.AspectRatio>
  );
};

AspectRatio.displayName = "Layout.AspectRatio";

export default AspectRatio;
