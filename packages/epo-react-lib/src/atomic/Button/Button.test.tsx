import { render, screen, within } from "@testing-library/react";
import Button from "./Button";

const text = "Stuff and Things";
const children = <span>{text}</span>;
const className = "some-class";
const id = "some-id";

describe("Button", () => {
  it("Renders text", () => {
    render(<Button>{children}</Button>);

    const buttonText = screen.getByTestId("button");

    expect(buttonText).toBeInTheDocument();
  });

  it("Inherits attr-shaped props as attrs", () => {
    render(
      <Button isInactive={true} className={className} id={id} type="submit">
        {children}
      </Button>
    );

    const button = screen.getByTestId("button");

    expect(button).toHaveAttribute("aria-disabled", "true");
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveClass(className);
    expect(button).toHaveAttribute("id", id);
  });

  it("Renders icon", () => {
    render(<Button icon="Chevron">{children}</Button>);
    const button = screen.getByTestId("button");
    const icon = within(button).getByRole("presentation");
    expect(icon).toBeInTheDocument();
  });
});
