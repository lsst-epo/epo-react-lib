import { FunctionComponent, useLayoutEffect, useRef, useState } from "react";
import { Box } from "@/charts/types";
import { EMPTY_BOX, getElBox } from "@/charts/Trendline/helpers";
import * as Styled from "./styles";

/** Padding between the label's text and the edge of its box */
const LABEL_OFFSET = 5;

interface PointLabelProps {
  label: string;
  /** Where the text sits, relative to the point */
  x: number;
  y: number;
  isActive?: boolean;
}

/**
 * A boxed label beside a point. The box can only be sized once the text has been laid out, so it is
 * measured after every paint and only committed when it changes.
 */
const PointLabel: FunctionComponent<PointLabelProps> = ({
  label,
  x,
  y,
  isActive = false,
}) => {
  const labelRef = useRef<SVGTextElement>(null);
  const [box, setBox] = useState<Box>(EMPTY_BOX);

  useLayoutEffect(() => {
    const { x, y, width, height } = getElBox(labelRef.current);

    setBox((previous) =>
      previous.x === x &&
      previous.y === y &&
      previous.width === width &&
      previous.height === height
        ? previous
        : { x, y, width, height }
    );
  });

  return (
    <>
      <Styled.LabelBox
        width={box.width + 2 * LABEL_OFFSET}
        height={box.height + 2 * LABEL_OFFSET}
        x={box.x - LABEL_OFFSET}
        y={box.y - LABEL_OFFSET}
      />
      <Styled.Label ref={labelRef} data-active={isActive} {...{ x, y }}>
        {label}
      </Styled.Label>
    </>
  );
};

PointLabel.displayName = "Charts.EditablePoints.PointLabel";

export default PointLabel;
