import { render, screen } from "@testing-library/react";
import IconComposer from ".";

const props = {
  icon: "Search",
};

test("should contain an SVG if a valid icon is selected", () => {
  render(<IconComposer {...props} />);

  const svg = screen.getByRole("presentation");
  expect(svg).toBeDefined();
});
