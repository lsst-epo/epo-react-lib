import { render, screen } from "@testing-library/react";
import { data } from "../mocks";
import Points from ".";
import { getLinearScale } from "../utilities";

const width = 600;
const height = 600;
const domain = [0, 1200];

const xScale = getLinearScale(domain, [0, width]);
const yScale = getLinearScale(domain, [height, 0]);
const { sources } = data;

const props = {
  sources,
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

    expect(points.length).toBe(sources.length);
  });
});
