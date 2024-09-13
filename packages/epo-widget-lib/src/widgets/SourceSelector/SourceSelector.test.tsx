import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SourceSelector from ".";
import { biggerData } from "./mocks";
import { toDecimalPercent } from "./utils";

const selectionCallback = jest.fn();
const alertChangeCallback = jest.fn();
const { sources, alerts } = biggerData;
const props = { sources, alerts, selectionCallback, alertChangeCallback };

describe("SourceSelector", () => {
  it("should select a source when its point is clicked", async () => {
    const { getByTestId, getByRole } = render(<SourceSelector {...props} />);
    const target = sources[0];
    const blinker = getByTestId("blinker-container");
    const { width, height } = blinker.getBoundingClientRect();

    await userEvent.pointer({
      keys: "[MouseLeft]",
      target: blinker,
      coords: {
        x: width * toDecimalPercent(target.x),
        y: height * toDecimalPercent(target.x),
      },
    });
    const points = getByRole("list");

    waitFor(() => {
      expect(selectionCallback).toBeCalledWith([target.id]);
      expect(points.children.length).toBe(1);
    });
  });
  it("should not make a selection when an area outside a point is clicked", async () => {
    jest.clearAllMocks();
    const { getByTestId } = render(<SourceSelector {...props} />);
    const blinker = getByTestId("blinker-container");

    await userEvent.pointer({
      keys: "[MouseLeft]",
      target: blinker,
      coords: {
        x: 0,
        y: 0,
      },
    });

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
