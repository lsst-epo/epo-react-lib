import { render, screen, fireEvent } from "@testing-library/react";
import HorizontalSlider from ".";

beforeEach(() => {
  window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
      disconnect: jest.fn(),
      observe: jest.fn(),
      unobserve: jest.fn(),
    }));
});

const min = 10;
const max = 120;
const value = 50;

const props = {
  min,
  max,
  value,
  onChangeCallback: jest.fn(),
  label: "test-slider",
};

describe("HorizontalSlider", () => {
  it("Creates an accessible slider", () => {
    render(<HorizontalSlider {...props} />);

    const slider = screen.getByRole("slider");

    expect(slider).toBeDefined;
    expect(slider).toHaveAttribute("aria-valuemin", min.toString());
    expect(slider).toHaveAttribute("aria-valuenow", value.toString());
    expect(slider).toHaveAttribute("aria-valuemax", max.toString());
    expect(slider).toHaveAttribute("aria-orientation", "horizontal");
  });
  it("Displays a double handled slider", () => {
    const values = [20, 80];
    const minLabel = "MinLabel";
    const maxLabel = "MaxLabel";

    render(
      <HorizontalSlider {...{ ...props, value: values, minLabel, maxLabel }} />
    );

    const left = screen.getByLabelText(minLabel);
    const right = screen.getByLabelText(maxLabel);
    expect(left).toHaveAttribute("aria-valuenow", values[0].toString());
    expect(left).to;
    expect(right).toHaveAttribute("aria-valuenow", values[1].toString());
  });
});
