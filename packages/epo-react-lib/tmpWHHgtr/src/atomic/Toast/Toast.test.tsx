import { render, screen } from "@testing-library/react";
import Toast from ".";

const props = {
  forIds: ["first", "second", "third"],
  className: "myClass",
  children: "Rubin Observatory",
};

test("should attach a className and any ID's", () => {
  render(<Toast {...props} />);

  const toast = screen.getByRole("status");

  expect(toast).toBeDefined();
  expect(toast).toHaveClass(props.className);
  expect(toast).toHaveAttribute("for", props.forIds.join(" "));
});
