import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from ".";
const props = {
  summary: "Summary text",
  children: "Child text",
};
test("renders summary text and details", () => {
  render(<Accordion {...props} />);

  expect(screen.getByText(props.summary)).toBeDefined();
  expect(screen.getByText(props.children)).toBeDefined();
  expect(screen.getByText(props.children)).not.toBeVisible();
});

test("renders opens on click", () => {
  render(<Accordion {...props} />);

  // according to MDN summary should have an implicit role
  // of "button" but this is not the case during testing
  const summary = screen.getByRole("group").closest("summary");
  if (summary) {
    fireEvent.click(summary);
    expect(screen.getByText(props.children)).toBeVisible();
  }
});

test("renders closes on second click", () => {
  render(<Accordion {...props} />);

  // according to MDN summary should have an implicit role
  // of "button" but this is not the case during testing
  const summary = screen.getByRole("group").closest("summary");
  if (summary) {
    fireEvent.click(summary);
    fireEvent.click(summary);
    expect(screen.getByText(props.children)).not.toBeVisible();
  }
});
