import { render, screen } from "@testing-library/react";
import Buttonish from ".";

const text = "Stuff and Things";
const url = "https://rubinobservatory.org";
const className = "some-class";
const id = "some-id";

const props = { text, url, className, id };

describe("Buttonish", () => {
  it("Renders text and url", () => {
    render(<Buttonish {...props} />);

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", url);
  });

  it("Inherits attr-shaped props as attrs", () => {
    render(<Buttonish isInactive={true} {...props}></Buttonish>);

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("aria-disabled", "true");
    expect(link).toHaveClass(className);
    expect(link).toHaveAttribute("id", id);
  });
});
