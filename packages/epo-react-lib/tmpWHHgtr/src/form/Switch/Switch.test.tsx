import { render, screen } from "@testing-library/react";
import Switch from ".";

const className = "some-class";
const id = "some-id";

describe("Switch", () => {
  it("Inherits attr-shaped props as attrs", () => {
    render(
      <Switch
        className={className}
        id={id}
        checked={true}
        aria-disabled={true}
      />
    );

    const switchButton = screen.getByRole("switch");

    expect(switchButton).toHaveAttribute("aria-disabled", "true");
    expect(switchButton).toHaveAttribute("aria-checked", "true");
    expect(switchButton).toHaveClass(className);
    expect(switchButton).toHaveAttribute("id", id);
  });
});
