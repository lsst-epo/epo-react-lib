import { render, screen } from "@testing-library/react";
import Input from ".";

const className = "some-class";
const id = "some-id";

describe("Input", () => {
  it("Inherits attr-shaped props as attrs", () => {
    render(<Input className={className} id={id} type="text" />);

    const input = screen.getByRole("textbox");

    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveClass(className);
    expect(input).toHaveAttribute("id", id);
  });
});
