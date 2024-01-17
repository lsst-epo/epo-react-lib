import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SourceSelector from ".";
import { biggerData } from "./mocks";

const selectionCallback = jest.fn();
const alertChangeCallback = jest.fn();
const { sources, alerts } = biggerData;
const props = { sources, alerts, selectionCallback, alertChangeCallback };

describe("SourceSelector", () => {
  it("should render sources into an SVG", () => {
    render(<SourceSelector {...props} />);
    const points = screen.getAllByRole("listitem");

    expect(points.length).toBe(sources.length);
  });
  it("should select a source when its point is clicked", () => {
    render(<SourceSelector {...props} />);
    const points = screen.getAllByRole("listitem");
    fireEvent.click(points[0]);

    waitFor(() => {
      expect(selectionCallback).toBeCalledWith(sources[0]);
    });
  });
  it("should not make a selection when another SVG element is clicked", () => {
    render(<SourceSelector {...props} />);
    jest.clearAllMocks();
    const group = screen.getByRole("list");
    fireEvent.click(group);

    expect(selectionCallback).not.toBeCalled();
  });
  it("should include elapsed time for alerts", () => {
    const { alerts } = biggerData;
    render(<SourceSelector {...{ ...props, alerts }} />);

    const elapsedTime = document.getElementsByTagName("time");

    Array.from(elapsedTime).forEach((e) => {
      expect(e).toBeInTheDocument();
    });
  });
});
