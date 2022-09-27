import { render, screen } from "@testing-library/react";
import Figure from ".";

const props = {
  children: "Rubin Observatory",
  caption: "My figure caption",
};

test("should render caption if present", () => {
  render(<Figure {...props} />);

  const figure = screen.getByRole("figure");
  const figCaption = figure.closest("figcaption");

  expect(figure).toBeDefined();
  expect(figCaption).toBeDefined();
});
