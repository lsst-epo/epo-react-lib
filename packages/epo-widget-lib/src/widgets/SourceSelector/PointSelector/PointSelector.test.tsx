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
  it(`should return a source's ID when it has been clicked`, () => {
    render(<PointSelector {...props} />);

    const points = screen.getAllByRole("listitem");
    fireEvent.click(points[0]);

    expect(onSelectCallback).toBeCalledWith(sources[0].id);
  });
  it(`should return undefined when clicked elsewhere`, () => {
    render(<PointSelector {...props} />);

    const group = screen.getByRole("list");
    fireEvent.click(group);

    expect(onSelectCallback).toBeCalledWith(undefined);
  });
});
