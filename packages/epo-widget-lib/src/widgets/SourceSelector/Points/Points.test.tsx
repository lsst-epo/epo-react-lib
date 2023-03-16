import { SourceDataset } from "@/types/astro";
import { render, screen } from "@testing-library/react";
import Points from ".";
import { getLinearScale } from "../utilities";

const width = 600;
const height = 600;
const domain = [0, 1200];
const data: SourceDataset = {
  name: "All Three Filters",
  id: "ZTF19abvhduf",
  color: "#fed828",
  distance: 124.63102831794073,
  dec: 56.07525,
  velocity: 8573.901530035577,
  ra: 97.139708,
  redshift: 0.029,
  sources: [
    {
      id: "01",
      type: "galaxy",
      x: 120,
      y: 780,
      color: "#fed828",
    },
    {
      id: "02",
      type: "galaxyFilter",
      x: 590,
      y: 630,
      color: "#fed828",
    },
    {
      id: "03",
      type: "supernova",
      x: 990,
      y: 440,
      color: "#fed828",
    },
  ],
};

const xScale = getLinearScale(domain, [0, width]);
const yScale = getLinearScale(domain, [height, 0]);

const props = {
  data: data.sources,
  xScale,
  yScale,
};

describe("Points", () => {
  it(`should render a point for each object in the dataset`, () => {
    render(
      <svg>
        <Points {...props} />
      </svg>
    );

    const points = screen.getAllByRole("listitem");

    expect(points.length).toBe(props.data.length);
  });
});
