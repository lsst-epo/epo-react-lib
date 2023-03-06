import { render, screen } from "@testing-library/react";
import Point from ".";

const props = {
  x: 50,
  y: 50,
  radius: 10,
  isSelected: false,
  isActive: false,
  color: "#000",
};

describe("Point", () => {
  it(`should populate cx, cy, and r attributes`, () => {
    render(
      <svg>
        <Point {...props} id="galaxy" />
      </svg>
    );

    const point = screen.getByRole("listitem");

    expect(point).toHaveAttribute("cx", props.x.toString());
    expect(point).toHaveAttribute("cy", props.y.toString());
    expect(point).toHaveAttribute("r", props.radius.toString());
  });
});
