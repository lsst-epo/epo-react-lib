import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import ScatterPlot from "@/charts/ScatterPlot";
import { InteractionSurface } from "@/charts/InteractionSurface";
import { AxisConfig, ChartMargin } from "@/types/charts";
import { ZoomControl, useZoom, getRanges } from ".";

const meta: Meta<typeof ZoomControl> = {
  argTypes: {},
  component: ZoomControl,
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

/** A diagonal band, so it's obvious which way the plot moves as it zooms */
const data = {
  label: "Storybook Data",
  points: [
    [8, 14],
    [17, 9],
    [21, 31],
    [29, 22],
    [34, 47],
    [42, 38],
    [46, 61],
    [55, 52],
    [58, 74],
    [67, 66],
    [73, 88],
    [81, 79],
    [88, 94],
    [94, 85],
  ].map(([x, y], index) => ({ id: index, x, y })),
};

/** The control is absolutely placed, so it needs a positioned ancestor */
const Wrapper = styled.div`
  position: relative;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
`;

const Standalone = styled(Wrapper)`
  width: 200px;
  height: 300px;
  border: 1px dashed var(--neutral40, #b1b3b3);
`;

const Slider = ({ minZoom, maxZoom }: { minZoom: number; maxZoom: number }) => {
  const [zoom, setZoom] = useState(minZoom);

  return (
    <Standalone>
      <ZoomControl onZoomChange={setZoom} {...{ zoom, minZoom, maxZoom }} />
    </Standalone>
  );
};

/**
 * The whole composition: `useZoom` turns wheel, pinch, and slider input into one transform and
 * narrows the axes by it, and `InteractionSurface` is what hears the gestures over empty space.
 */
const ZoomablePlot = ({
  minZoom,
  maxZoom,
}: {
  minZoom: number;
  maxZoom: number;
}) => {
  const { xRange, yRange } = getRanges(WIDTH, HEIGHT, MARGINS);
  const {
    transform,
    surfaceRef,
    zoomTo,
    gestureHandlers,
    zoomXAxis,
    zoomYAxis,
  } = useZoom({
    minZoom,
    maxZoom,
    xRange,
    yRange,
    xAxis,
    yAxis,
  });

  return (
    <Wrapper>
      <ScatterPlot
        width={WIDTH}
        height={HEIGHT}
        margins={MARGINS}
        data={data}
        xAxis={zoomXAxis}
        yAxis={zoomYAxis}
        plotChildren={({ Data, xStart, xEnd, yStart, yEnd }) => (
          <>
            <InteractionSurface
              area={{
                x: xStart,
                y: yEnd,
                width: xEnd - xStart,
                height: yStart - yEnd,
              }}
              {...{ surfaceRef, gestureHandlers }}
            />
            {Data}
          </>
        )}
      />
      <ZoomControl
        zoom={transform.k}
        onZoomChange={zoomTo}
        {...{ minZoom, maxZoom }}
      />
    </Wrapper>
  );
};

/** The slider on its own, driven by local state */
export const Primary: StoryObj<typeof ZoomControl> = {
  args: { minZoom: 1, maxZoom: 5 },
  render: ({ minZoom, maxZoom }) => <Slider {...{ minZoom, maxZoom }} />,
};

/**
 * The slider wired to a plot. Scroll or pinch over the plot to zoom about the pointer, or drag the
 * slider to zoom about the middle. Zooming narrows the axes rather than transforming what's drawn,
 * so the ticks stay legible and zooming back out lands exactly where it started.
 */
export const OnAPlot: StoryObj<typeof ZoomControl> = {
  args: { minZoom: 1, maxZoom: 5 },
  render: ({ minZoom, maxZoom }) => <ZoomablePlot {...{ minZoom, maxZoom }} />,
};
