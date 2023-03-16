import { render, screen } from "@testing-library/react";
import Point from ".";
import { PointProps } from "./Point";

const props: PointProps = {
  x: 50,
  y: 50,
  radius: 10,
  isSelected: false,
  isActive: false,
  color: "#000",
  type: "galaxy",
  id: "01",
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
  it(`should add id and type data attributes`, () => {
    render(
      <svg>
        <Point {...props} />
      </svg>
    );

    const point = screen.getByRole("listitem");

    expect(point).toHaveAttribute("data-type", props.type);
    expect(point).toHaveAttribute("data-id", props.id);
  });
});
