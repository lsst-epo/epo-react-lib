import { useState } from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import BaseContainer from "@rubin-epo/epo-react-lib/Container";
import styled from "styled-components";
import { EditablePoint } from "@/charts/PointEditing";
import InteractiveScatterPlot from "./InteractiveScatterPlot";
import galaxies from "./mock/galaxies.json";
import scrambler from "./mock/scrambler.json";

const meta: Meta<typeof InteractiveScatterPlot> = {
  argTypes: {},
  component: InteractiveScatterPlot,
};
export default meta;

const Container = styled(BaseContainer)`
  container-type: inline-size;
`;

const Template: StoryFn<typeof InteractiveScatterPlot> = (args) => {
  return (
    <Container width="narrow">
      <InteractiveScatterPlot {...args} />
    </Container>
  );
};

const data = {
  label: "Redness vs. Distance",
  points: galaxies.map(({ id, distance, color }) => ({
    id,
    x: distance,
    y: color,
  })),
};

export const Primary: StoryObj<typeof InteractiveScatterPlot> = Template.bind(
  {},
);

Primary.args = {
  scatterplot: {
    width: 600,
    height: 600,
    title: "Redness vs. Distance",
    data,
    xAxis: {
      min: 0,
      max: 16,
      step: 2,
      label: "Distance (Billion Ly)",
      guidelines: true,
    },
    yAxis: {
      min: 0,
      max: 2,
      step: 0.25,
      label: "Flux ratio i/z (redness)",
      guidelines: true,
    },
    tooltip: ({ x, y }) => (
      <div>
        {`Distance: ${x.toFixed(2)} Billion Ly —`}
        <br />
        {`Flux: ${y.toFixed(2)} Flux ratio`}
      </div>
    ),
    margins: { left: 40, bottom: 20, top: 0, right: 0 },
  },
};

/**
 * The plot with zooming turned on: scroll or pinch over the plot to zoom about the pointer, or use
 * the slider to zoom about the middle.
 */
export const Zoomable: StoryObj<typeof InteractiveScatterPlot> = Template.bind(
  {},
);

Zoomable.args = {
  ...Primary.args,
  isZoomable: true,
};

/** The plot with a trendline drawn along its right edge */
export const WithTrendline: StoryObj<typeof InteractiveScatterPlot> =
  Template.bind({});

WithTrendline.args = {
  ...Primary.args,
  trendline: {
    variant: "axis",
    label: "Redder",
    padding: 80,
    pointUp: false,
  },
};

/**
 * The Hubble plot from the Galaxy Scrambler widget
 */
export const WithSlope: StoryObj<typeof InteractiveScatterPlot> = Template.bind(
  {},
);

WithSlope.args = {
  scatterplot: {
    width: 600,
    height: 600,
    title: "Velocity vs. Distance",
    data: {
      label: "Velocity vs. Distance",
      points: scrambler.map(({ id, distance, velocity, color }) => ({
        id,
        x: distance,
        y: velocity,
        fill: color,
      })),
    },
    xAxis: {
      min: 0,
      max: 1300,
      step: 200,
      label: "Distance (Mpc)",
      guidelines: true,
    },
    yAxis: {
      min: 0,
      max: 75000,
      step: 10000,
      label: "Velocity (km/s)",
      guidelines: true,
    },
    tooltip: ({ x, y }) => (
      <div>
        {`Distance: ${x.toFixed(0)} Mpc`}
        <br />
        {`Velocity: ${y.toFixed(0)} km/s`}
      </div>
    ),
    margins: { left: 60, bottom: 20, top: 0, right: 0 },
  },
  trendline: {
    variant: "slope",
    slope: 65.7,
    label: (slope) => `slope = ${slope}`,
  },
};

interface EditablePlanet extends EditablePoint {
  id: string;
  label: string;
  color: string;
  /** Null until the user has placed it */
  distance: number | null;
  period: number | null;
}

const PLANETS: Array<EditablePlanet> = [
  {
    id: "mercury",
    label: "Mercury",
    color: "#1ab579",
    distance: null,
    period: null,
  },
  {
    id: "venus",
    label: "Venus",
    color: "#8e3efe",
    distance: null,
    period: null,
  },
  {
    id: "earth",
    label: "Earth",
    color: "#c82960",
    distance: null,
    period: null,
  },
  { id: "mars", label: "Mars", color: "#eb7c39", distance: null, period: null },
];

const describePlanet = ({ label, distance, period }: EditablePlanet) =>
  distance === null || period === null
    ? `${label}, not plotted`
    : `${label}: ${distance.toFixed(2)} AU, ${period.toFixed(2)} years`;

/** The plot owns no data of its own, so the story holds the edits */
const EditablePlot = () => {
  const [points, setPoints] = useState(PLANETS);

  return (
    <Container width="narrow">
      <InteractiveScatterPlot<EditablePlanet>
        scatterplot={{
          width: 600,
          height: 600,
          title: "Orbital Period vs. Distance",
          data: { label: "Planets", points: [] },
          xAxis: {
            min: 0,
            max: 2,
            step: 0.25,
            label: "Distance (AU)",
            guidelines: true,
          },
          yAxis: {
            min: 0,
            max: 2,
            step: 0.25,
            label: "Orbital period (years)",
            guidelines: true,
          },
          margins: { left: 60, bottom: 20, top: 0, right: 0 },
        }}
        pointEditing={{
          points,
          label: "Planets",
          xValueAccessor: "distance",
          yValueAccessor: "period",
          describePoint: describePlanet,
          onChange: setPoints,
          isSelectable: true,
          isEditable: true,
        }}
      />
    </Container>
  );
};

/**
 * The plot with editing turned on. Nothing is placed to begin with: a ghost point follows the
 * pointer, and clicking plots the next planet. Once a point is down, drag it to move it, or press
 * it to select it and use the D-pad that appears — the arrow keys work on a selected point too.
 */
export const Editable: StoryObj<typeof InteractiveScatterPlot> = {
  render: () => <EditablePlot />,
};
