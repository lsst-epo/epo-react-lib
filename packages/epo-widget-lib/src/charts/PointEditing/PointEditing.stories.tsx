import { FunctionComponent, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import ScatterPlot from "@/charts/ScatterPlot";
import { InteractionSurface } from "@/charts/InteractionSurface";
import { Coordinates } from "@/charts/types";
import { AxisConfig, ChartMargin } from "@/types/charts";
import { invertLinearScale } from "@/lib/utils";
import {
  EditablePoint,
  EditingLayer,
  EditingOverlay,
  PointEditingConfig,
  getValue,
  usePointEditingState,
} from ".";

const meta: Meta = {
  title: "Charts/PointEditing",
};
export default meta;

const WIDTH = 500;
const HEIGHT = 500;
const MARGINS: ChartMargin = { top: 10, right: 10, bottom: 20, left: 40 };

const xAxis: AxisConfig = {
  min: 0,
  max: 100,
  step: 20,
  label: "X",
  guidelines: true,
};

const yAxis: AxisConfig = {
  min: 0,
  max: 100,
  step: 20,
  label: "Y",
  guidelines: true,
};

interface DemoPoint extends EditablePoint {
  id: string;
  label: string;
  color: string;
  /** Null until the user has placed it */
  x: number | null;
  y: number | null;
}

const PLOTTED: Array<DemoPoint> = [
  { id: "a", label: "A", color: "#1ab579", x: 18, y: 24 },
  { id: "b", label: "B", color: "#8e3efe", x: 37, y: 51 },
  { id: "c", label: "C", color: "#c82960", x: 62, y: 44 },
  { id: "d", label: "D", color: "#eb7c39", x: 81, y: 77 },
];

const UNPLOTTED: Array<DemoPoint> = PLOTTED.map((point) => ({
  ...point,
  x: null,
  y: null,
}));

const describePoint = ({ label, x, y }: DemoPoint) =>
  x === null || y === null
    ? `${label}, not plotted`
    : `${label}: ${x.toFixed(1)}, ${y.toFixed(1)}`;

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
`;

/** A plot the user can edit, built only out of `PointEditing` and the chart primitives */
const EditablePlot: FunctionComponent<{ initialPoints: Array<DemoPoint> }> = ({
  initialPoints,
}) => {
  const [points, setPoints] = useState(initialPoints);

  const config: PointEditingConfig<DemoPoint> = {
    points,
    label: "Points",
    xValueAccessor: "x",
    yValueAccessor: "y",
    describePoint,
    onChange: setPoints,
    isSelectable: true,
    isEditable: true,
  };

  const editing = usePointEditingState<DemoPoint>({ config, xAxis, yAxis });

  const data = {
    label: "Points",
    points: points.flatMap((point) => {
      const x = getValue(point, "x");
      const y = getValue(point, "y");

      return x === null || y === null ? [] : [{ id: point.id, x, y }];
    }),
  };

  return (
    <Wrapper>
      <ScatterPlot
        width={WIDTH}
        height={HEIGHT}
        margins={MARGINS}
        title="Point editing"
        activePointId={editing.activeId}
        {...{ data, xAxis, yAxis }}
        plotChildren={({
          xScale,
          yScale,
          xDomain,
          yDomain,
          xStart,
          xEnd,
          yStart,
          yEnd,
        }) => {
          const toDomain = ([x, y]: Coordinates): Coordinates => [
            invertLinearScale(xScale, xDomain)(x),
            invertLinearScale(yScale, yDomain)(y),
          ];
          const editingProps = { config, state: editing, xScale, yScale };

          return (
            <>
              <InteractionSurface
                area={{
                  x: xStart,
                  y: yEnd,
                  width: xEnd - xStart,
                  height: yStart - yEnd,
                }}
                canPlace
                onPlace={editing.place}
                tracksGhost={editing.tracksGhost}
                onGhostMove={editing.moveGhost}
                {...{ toDomain }}
              />
              <EditingLayer {...{ toDomain, ...editingProps }} />
              <EditingOverlay {...editingProps} />
            </>
          );
        }}
      />
    </Wrapper>
  );
};

/**
 * Nothing is on the plot yet. A ghost point follows the pointer, and clicking places the next
 * point; once they are all down the ghost stops following.
 */
export const Placing: StoryObj = {
  render: () => <EditablePlot initialPoints={UNPLOTTED} />,
};

/**
 * The same plot with the points already down. Drag one to move it, or press it to select it and use
 * the D-pad that appears — holding an arrow accelerates the nudge. A selected point takes the arrow
 * keys directly too.
 */
export const Editing: StoryObj = {
  render: () => <EditablePlot initialPoints={PLOTTED} />,
};
