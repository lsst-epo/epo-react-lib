import { FunctionComponent, PropsWithChildren } from "react";
import { ForeignObject, Viewport } from "..";
import { ViewportProps } from "../Viewport";
import * as Styled from "./styles";

type Props = {
  className?: string;
  position?: string;
  viewport?: ViewportProps;
};

const getPosition = (position: string = "") => {
  const defaultPosition = ["top", "right"];
  const fillerPosition = ["center", "center"];
  const finalPosition = position
    ? [...position.split(" "), ...fillerPosition].slice(0, 2)
    : defaultPosition;
  const style: Record<string, string | null> = {
    justifyContent: null,
    alignItems: null,
  };

  finalPosition.forEach((position) => {
    switch (position) {
      case "center":
        style.alignItems = style.alignItems ?? "center";
        style.justifyContent = style.justifyContent ?? "center";
        break;
      case "top":
        style.alignItems = "start";
        break;
      case "right":
        style.justifyContent = "end";
        break;
      case "bottom":
        style.alignItems = "end";
        break;
      case "left":
        style.justifyContent = "start";
        break;

      default:
        break;
    }
  });

  return style;
};

/**
 * Readout for plots, optionally includes a Viewport wrapper that
 * can be used if the parent plot has margins at its edges
 */
const Readout: FunctionComponent<PropsWithChildren<Props>> = ({
  className,
  children,
  position,
  viewport,
}) => {
  const Readout = (
    <ForeignObject>
      <Styled.DisplayContainer style={getPosition(position)}>
        <Styled.Display className={className}>{children}</Styled.Display>
      </Styled.DisplayContainer>
    </ForeignObject>
  );

  return viewport ? <Viewport {...viewport}>{Readout}</Viewport> : Readout;
};

Readout.displayName = "Charts.Readout";

export default Readout;
