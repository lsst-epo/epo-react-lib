import { act, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { composeStories } from "@storybook/react";
import * as stories from "./HorizontalSlider.stories";

beforeEach(() => {
  window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
      disconnect: jest.fn(),
      observe: jest.fn(),
      unobserve: jest.fn(),
    }));
});

const onChangeCallback = jest.fn();

const { SingleHandle, DoubleHandle, Disabled } = composeStories(stories, {
  args: { onChangeCallback },
});

describe("HorizontalSlider", () => {
  it("Creates an accessible slider", () => {
    const { getByRole } = render(<SingleHandle />);

    const slider = getByRole("slider");

    const { min, value, max } = SingleHandle.args;

    expect(slider).toBeDefined;
    expect(slider).toHaveAttribute("aria-valuemin", min?.toString());
    expect(slider).toHaveAttribute("aria-valuenow", value?.toString());
    expect(slider).toHaveAttribute("aria-valuemax", max?.toString());
    expect(slider).toHaveAttribute("aria-orientation", "horizontal");
  });
  it("Displays a double handled slider", () => {
    const { getByLabelText } = render(<DoubleHandle />);

    const { value, minLabel, maxLabel } = DoubleHandle.args;

    if (minLabel && maxLabel && Array.isArray(value)) {
      const left = getByLabelText(minLabel);
      const right = getByLabelText(maxLabel);

      expect(left).toHaveAttribute("aria-valuenow", value[0].toString());
      expect(right).toHaveAttribute("aria-valuenow", value[1].toString());
    }
  });
  it("Performs a callback when the value is changed", () => {
    onChangeCallback.mockClear();
    const { getByRole } = render(<SingleHandle />);

    const slider = getByRole("slider");

    act(() => {
      slider.focus();
      userEvent.keyboard("{ArrowDown}");
    });

    waitFor(() => {
      expect(onChangeCallback).toBeCalled();
    });
  });
  it("Should use a default color for invalid or transparent tracks", () => {
    const { getByTestId } = render(<SingleHandle color="transparent" />);

    const track = getByTestId("slider-track-0");
    const thumb = getByTestId("slider-thumb");
    const trackStyles = getComputedStyle(track);
    const thumbStyles = getComputedStyle(thumb);

    expect(trackStyles.backgroundColor).not.toBe("transparent");
    expect(thumbStyles.backgroundColor).not.toBe("transparent");
  });
  it("Disable the slider", () => {
    const { getByRole } = render(<Disabled />);

    const slider = getByRole("slider");

    expect(slider).toHaveAttribute("aria-disabled", "true");
  });
});
