import { render, screen, fireEvent } from "@testing-library/react";
import ExpandToggle from ".";
const props = {
  isOpen: false,
  isHidden: false,
  onToggle: jest.fn(),
  controlsId: "#someElement",
};
test("reflects expanded and collapsed states", () => {
  const { rerender } = render(<ExpandToggle {...props} />);

  const toggle = screen.getByRole("button");

  expect(toggle).toHaveAttribute("aria-expanded", "false");

  rerender(<ExpandToggle {...{ ...props, isOpen: true }} />);

  expect(toggle).toHaveAttribute("aria-expanded", "true");
});

test("renders controls id", () => {
  render(<ExpandToggle {...props} />);
  const toggle = screen.getByRole("button");

  expect(toggle).toHaveAttribute("aria-controls", props.controlsId);
});

test("hides button visually and to screenreaders", () => {
  render(<ExpandToggle {...{ ...props, isHidden: true }} />);
  const toggle = screen.getByRole("button", { hidden: true });

  expect(toggle).toHaveAttribute("aria-hidden", "true");
  expect(toggle).not.toBeVisible();
});

test("performs toggle callback on click", () => {
  render(<ExpandToggle {...{ ...props }} />);
  const toggle = screen.getByRole("button");
  fireEvent.click(toggle);
  expect(props.onToggle).toHaveBeenCalledTimes(1);
});
