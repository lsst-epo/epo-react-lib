import { FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./styles";
import { isSafari } from "@/lib/utils";

export interface TooltipProps {
  x?: number;
  y?: number;
  visible: boolean;
  offset?: number;
  origin?: string;
  className?: string;
}

const getXOffset = (origin: string, offset: number) => {
  if (origin.includes("left")) return `calc(0% + ${offset}px)`;
  if (origin.includes("right")) return `calc(-100% - ${offset}px)`;
  if (origin.includes("center")) return "-50%";

  return "-50%";
};
const getYOffset = (origin: string, offset: number) => {
  if (origin.includes("top")) return `calc(0% + ${offset}px)`;
  if (origin.includes("bottom")) return `calc(-100% - ${offset}px)`;
  if (origin.includes("center")) return "-50%";

  return "-50%";
};

const getArrowPosition = (origin: string) => {
  let left = "0";
  let top = "0";
  let translateX = "0";
  let translateY = "0";
  let rotate = "0deg";

  if (origin.includes("center")) {
    left = "50%";
    top = "50%";
    translateX = "-50%";
    translateY = "-50%";
  }
  if (origin.includes("top")) {
    top = "0";
    translateY = "-100%";
    rotate = "180deg";
  }
  if (origin.includes("right")) {
    left = "100%";
    translateX = "-25%";
    rotate = "-90deg";
  }
  if (origin.includes("left")) {
    left = "0";
    translateX = "-75%";
    rotate = "90deg";
  }
  if (origin.includes("bottom")) {
    top = "100%";
    translateY = "0";
  }

  return {
    left,
    top,
    transform: `translate(${translateX}, ${translateY}) rotate(${rotate})`,
  };
};

const Tooltip: FunctionComponent<PropsWithChildren<TooltipProps>> = ({
  x,
  y,
  visible = true,
  offset = 5,
  origin = "center bottom",
  children,
  className,
}) => {
  const defaultOrigin = "center center";
  const fullOrigin = [...origin.split(" "), ...defaultOrigin.split(" ")]
    .slice(0, 2)
    .join(" ");

  const arrowWidth = 6;

  const xOffset = getXOffset(fullOrigin, arrowWidth + offset);
  const yOffset = getYOffset(fullOrigin, arrowWidth + offset);

  const showArrow =
    fullOrigin.includes("center") &&
    fullOrigin.split(" ").filter((o) => o !== "center").length === 1;
  const arrowPosition = getArrowPosition(fullOrigin);

  return (
    <Styled.TooltipContainer>
      {typeof x === "number" && typeof y === "number" && (
        <Styled.Tooltip
          className={className}
          style={
            isSafari()
              ? {
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: `translate(${xOffset},${yOffset})`,
                }
              : {
                  transform: `translate(calc(${xOffset} + ${x}px), calc(${yOffset} + ${y}px))`,
                }
          }
          hidden={!visible}
        >
          {children}
          {showArrow && (
            <Styled.Arrow
              style={{
                "--arrow-size": `${arrowWidth}px`,
                ...arrowPosition,
              }}
            />
          )}
        </Styled.Tooltip>
      )}
    </Styled.TooltipContainer>
  );
};

Tooltip.displayName = "Charts.Tooltip";

export default Tooltip;
