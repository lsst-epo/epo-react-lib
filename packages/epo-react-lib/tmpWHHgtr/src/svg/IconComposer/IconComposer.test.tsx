import { SVGProps } from "@/types/svg";
import { FunctionComponent } from "react";
import { render, screen } from "@testing-library/react";
import IconComposer from ".";

const props = {
  icon: "Search",
};

const SearchTitle = "Custom search icon";

const SearchIcon: FunctionComponent<SVGProps> = ({
  className,
  size = 36,
  fill = "currentColor",
}) => {
  const props = {
    viewBox: "0 0 36 36",
    width: size,
    height: size,
    fill,
    className,
  };

  return (
    <svg {...props}>
      <title>{SearchTitle}</title>
    </svg>
  );
};

describe("IconComposer", () => {
  it("should contain an SVG if a valid icon is selected", () => {
    render(<IconComposer {...props} />);

    const svg = screen.getByRole("presentation");
    expect(svg).toBeDefined();
  });
  it("should override the default icons if custom are provided", () => {
    render(<IconComposer {...props} customIcons={{ Search: SearchIcon }} />);

    const svg = screen.getByTitle(SearchTitle);
    expect(svg).toBeDefined();
  });
});
