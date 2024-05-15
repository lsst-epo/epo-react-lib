import { render, screen, fireEvent } from "@testing-library/react";
import { biggerData } from "../mocks";
import PointSelector from ".";

const width = 600;
const height = 600;

const { sources } = biggerData;
const onSelectCallback = jest.fn();

const props = {
  width,
  height,
  sources,
  onSelectCallback,
  selectedSource: [],
};

describe("PointSelector", () => {
  it(`should render a point for each object in the dataset`, () => {
    render(<PointSelector {...props} />);

    const points = screen.getAllByRole("listitem");

    expect(points.length).toBe(sources.length);
  });
  it(`should return the ID of the clicked object`, () => {
    render(<PointSelector {...props} />);

    const points = screen.getAllByRole("listitem");
    fireEvent.click(points[0]);

    expect(onSelectCallback).toBeCalledWith(sources[0].id);
  });
});
