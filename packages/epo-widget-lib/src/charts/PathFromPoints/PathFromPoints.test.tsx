import { render } from "@testing-library/react";
import PathFromPoints from ".";

const svgProps: Record<string, string> = {
  id: "test",
  transform: "translate(0,0)",
};

const props = {
  points: [
    { x: 0, y: 0 },
    { x: 100, y: 50 },
    { x: 25, y: -1000 },
  ],
  svgProps,
};

describe("Path from points", () => {
  it("should create a path from points", () => {
    render(
      <svg>
        <PathFromPoints {...props} />
      </svg>
    );

    const paths = document.getElementsByTagName("path");

    Array.from(paths).forEach((path) => {
      expect(path).toHaveAttribute("d", "M0,0 L100,50 L25,-1000");
    });
  });
  it("should attach passed props", () => {
    render(
      <svg>
        <PathFromPoints {...props} />
      </svg>
    );

    const paths = document.getElementsByTagName("path");

    Array.from(paths).forEach((path) => {
      Object.keys(svgProps).forEach((prop) => {
        expect(path).toHaveAttribute(prop, svgProps[prop]);
      });
    });
  });
  it("should not render if points not provided", () => {
    render(
      <svg>
        <PathFromPoints points={[]} />
      </svg>
    );

    const paths = document.getElementsByTagName("path");

    expect(Array.from(paths).length).toEqual(0);
  });
});
