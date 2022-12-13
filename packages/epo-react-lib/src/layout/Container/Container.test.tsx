import { render, screen } from "@testing-library/react";
import MockChildren from "../../../.storybook/utilities/MockChildren";
import Container from ".";

describe("Container", () => {
  it("passes attrs", () => {
    const attrs = {
      role: "list",
      "aria-hidden": false,
      "aria-labelledby": "containerTitle",
      id: "containerContent",
    };
    render(
      <Container
        children={MockChildren}
        elAttributes={attrs}
        className="container"
      />
    );

    const section = screen.getByRole(attrs.role);

    expect(section).toHaveAttribute("aria-hidden", "false");
    expect(section).toHaveAttribute("id", attrs.id);
    expect(section).toHaveAttribute(
      "aria-labelledby",
      attrs["aria-labelledby"]
    );
    expect(section.firstChild).toHaveClass("container__inner");
  });
});
