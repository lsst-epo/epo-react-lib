import { FunctionComponent, PropsWithChildren } from "react";
import useWindowSize from "@/hooks/useWindowsize";
import * as Styled from "./styles";

type AspectRatio = "square" | "portrait" | "landscape";
interface RangedRatio {
  narrow: number;
  wide: number;
}

export interface AspectRatioProps {
  ratio: AspectRatio;
  medScreenRatio?: AspectRatio;
  smallScreenRatio?: AspectRatio;
  className?: string;
}

const getClosestRatio = (screenRatio: number, targetRatio: AspectRatio) => {
  const ratios: Record<"portrait" | "landscape", RangedRatio> = {
    portrait: {
      narrow: parseFloat((9 / 16).toFixed(3)),
      wide: parseFloat((4 / 5).toFixed(3)),
    },
    landscape: {
      narrow: parseFloat((16 / 9).toFixed(3)),
      wide: parseFloat((5 / 4).toFixed(3)),
    },
  };

  if (targetRatio === "square") {
    return 1;
  } else {
    const {
      [targetRatio]: { narrow, wide },
    } = ratios;

    return [narrow, wide].reduce((prev, curr) => {
      return Math.abs(curr - screenRatio) < Math.abs(prev - screenRatio)
        ? curr
        : prev;
    });
  }
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
  const { width, height } = useWindowSize();
  const screenRatio = width && height ? width / height : 16 / 9;

  const cssVariables = {
    "--aspect-large-ratio": getClosestRatio(screenRatio, ratio),
    "--aspect-med-ratio": getClosestRatio(screenRatio, medScreenRatio),
    "--aspect-small-ratio": getClosestRatio(screenRatio, smallScreenRatio),
  };

  return (
    <Styled.AspectRatio style={cssVariables} className={className}>
      {children}
    </Styled.AspectRatio>
  );
};

AspectRatio.displayName = "Layout.AspectRatio";

export default AspectRatio;
