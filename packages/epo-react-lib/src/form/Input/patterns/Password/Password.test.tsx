import { render, screen, within, fireEvent } from "@testing-library/react";
import Password from ".";

const className = "some-class";
const id = "some-id";

describe("Input", () => {
  it("Inherits attr-shaped props as attrs", () => {
    render(<Password className={className} id={id} />);

    const password = screen.getByTestId("password");

    expect(password).toHaveAttribute("type", "password");
    expect(password).toHaveClass(className);
    expect(password).toHaveAttribute("id", id);
  });
  it("Renders toggle icon", () => {
    render(<Password className={className} id={id} />);
    const toggle = screen.getByRole("button");
    const icon = within(toggle).getByTitle("Eye icon");
    expect(icon).toBeInTheDocument();
  });
  it("Toggles password display", () => {
    render(<Password className={className} id={id} />);
    const toggle = screen.getByRole("button");
    fireEvent.click(toggle);
    const password = screen.getByRole("textbox");
    expect(password).toBeInTheDocument();
  });
});
