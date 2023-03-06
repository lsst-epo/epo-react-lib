import { render, screen } from "@testing-library/react";
import Points from ".";
import { AstroDataset } from "../GalaxySelector";
import { getLinearScale } from "../utilities";

const width = 600;
const height = 600;
const domain = [0, 1200];
const data: AstroDataset = {
  name: "All Three Filters",
  id: "ZTF19abvhduf",
  color: "#fed828",
  distance: 124.63102831794073,
  dec: 56.07525,
  velocity: 8573.901530035577,
  ra: 97.139708,
  redshift: 0.029,
  objects: [
    {
      object_id: "01",
      id: "galaxy",
      ra: 120,
      dec: 780,
      color: "#fed828",
    },
    {
      object_id: "02",
      id: "galaxyFilter",
      ra: 590,
      dec: 630,
      color: "#fed828",
    },
    {
      object_id: "03",
      id: "supernova",
      ra: 990,
      dec: 440,
      color: "#fed828",
    },
  ],
};

const xScale = getLinearScale(domain, [0, width]);
const yScale = getLinearScale(domain, [height, 0]);

const props = {
  data: data.objects,
  xScale,
  yScale,
};

describe("Points", () => {
  it(`should render a point for each object in the dataset`, () => {
    render(
      <svg>
        <Points {...props} xValueAccessor="ra" yValueAccessor="dec" />
      </svg>
    );

    const points = screen.getAllByRole("listitem");

    expect(points.length).toBe(props.data.length);
  });
});
