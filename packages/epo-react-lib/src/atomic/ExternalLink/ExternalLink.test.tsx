import { render, screen } from "@testing-library/react";
import ExternalLink from ".";

const props = {
  href: "https://rubinobservatory.org/",
  children: "Rubin Observatory",
};

test("should contain href", () => {
  render(<ExternalLink {...props} />);

  const link = screen.getByRole("link");

  expect(link).toBeDefined();
  expect(link).toHaveAttribute("href", expect.stringMatching(props.href));
});
