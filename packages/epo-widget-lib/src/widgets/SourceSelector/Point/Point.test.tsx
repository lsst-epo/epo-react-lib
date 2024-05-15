import { render, screen } from "@testing-library/react";
import Point from ".";
import { PointProps } from "./Point";

const props: PointProps = {
  id: "test",
  x: 50,
  y: 50,
  radius: 10,
  isSelected: false,
  isActive: false,
  color: "#000",
  type: "galaxy",
};

describe("Point", () => {
  it(`should populate cx, cy, and r attributes`, () => {
    render(
      <svg>
        <Point {...props} />
      </svg>
    );

    const point = screen.getByRole("listitem");

    expect(point).toHaveAttribute("cx", props.x.toString());
    expect(point).toHaveAttribute("cy", props.y.toString());
    expect(point).toHaveAttribute("r", props.radius?.toString());
  });
});
