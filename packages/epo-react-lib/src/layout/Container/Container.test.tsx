import { render, screen } from "@testing-library/react";
import MockChildren from "@/storybook/utilities/mocks";
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
      <Container elAttributes={attrs} className="container">
        {MockChildren}
      </Container>
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
