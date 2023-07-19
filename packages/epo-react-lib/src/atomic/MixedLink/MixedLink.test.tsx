import { render, screen } from "@testing-library/react";
import MixedLink from ".";

const props = {
  url: "https://rubinobservatory.org/",
  children: "Rubin Observatory",
};

test("should contain href and external link attrs", () => {
  render(<MixedLink {...props} />);

  const link = screen.getByRole("link");

  expect(link).toBeDefined();
  expect(link).toHaveAttribute("href", expect.stringMatching(props.url));
  expect(link).toHaveAttribute("target", expect.stringMatching("_blank"));
  expect(link).toHaveAttribute(
    "rel",
    expect.stringMatching("noopener noreferrer")
  );
});
test("should contain href and no external link attrs", () => {
  process.env.NEXT_PUBLIC_BASE_URL = "https://rubinobservatory.org";
  const url = "rubinobservatory.org/help";

  render(<MixedLink {...props} url={url} />);

  const link = screen.getByRole("link");

  expect(link).toBeDefined();
  expect(link).toHaveAttribute("href", expect.stringMatching(url));
  expect(link).not.toHaveAttribute("target");
  expect(link).not.toHaveAttribute("rel");
});
