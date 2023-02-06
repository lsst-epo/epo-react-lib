import { render, screen, fireEvent } from "@testing-library/react";
import CircularLoader from ".";

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
  description: "Loading",
};

describe("CircularLoader", () => {
  it("Creates an accessible loader", () => {
    render(<CircularLoader {...props} />);

    const loader = screen.getByRole("status");

    expect(loader).toBeDefined;
    expect(loader).toHaveAttribute("aria-live", "assertive");
    expect(loader).toHaveAttribute("aria-atomic", "true");
    expect(loader).toHaveAccessibleDescription(props.description);
  });
  it("Is visible based on props", () => {
    const { rerender } = render(<CircularLoader {...props} />);

    const loader = screen.getByRole("status");

    expect(loader).not.toBeVisible();

    rerender(<CircularLoader {...{ ...props, isVisible: true }} />);

    expect(loader).toBeVisible();
  });
});
