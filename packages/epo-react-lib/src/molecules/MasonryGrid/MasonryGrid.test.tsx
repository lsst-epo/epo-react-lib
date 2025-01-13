import { render, screen } from "@testing-library/react";
import { getGradientImage } from "@/storybook/utilities/helpers";
import MasonryGrid from ".";
import MasonryImage from "../MasonryImage";

const image = {
  altText: "A placeholder image",
  url: getGradientImage(200, 200),
  width: 200,
  height: 200,
};

const imageProps = {
  image,
  title: "Gallery Item 1",
  linkProps: { href: "https://rubinobservatory.org" },
};

describe("MasonryGrid", () => {
  it("renders children", () => {
    render(
      <MasonryGrid
        items={[
          {
            id: "a1",
            element: <MasonryImage {...imageProps} />,
          },
        ]}
      />
    );

    const link = screen.getByRole("link");
    expect(link).toBeDefined();
  });
  it("renders videos with play icon", () => {
    render(
      <MasonryGrid
        items={[
          {
            id: "a1",
            element: <MasonryImage {...{ ...imageProps, icon: "Play" }} />,
          },
        ]}
      />
    );

    const svg = screen.getByRole("presentation");

    expect(svg).toBeDefined();
  });
});
