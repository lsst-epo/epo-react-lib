import { render, screen } from "@testing-library/react";
import { getGradientImage } from "@/storybook/utilities/helpers";
import MasonryGrid from ".";

const image = {
  altText: "A placeholder image",
  url: getGradientImage(200, 200),
  width: 200,
  height: 200,
};

const item = {
  galleryItemCategory: [{ id: "a1", slug: "image", title: "Gallery Item 1" }],
  id: "a1",
  image: [image],
  title: "Gallery Item 1",
  uri: "",
};

describe("MasonryGrid", () => {
  it("renders children", () => {
    render(<MasonryGrid items={[item]} />);

    const image = screen.getByRole("img");
    const link = screen.getByRole("link");

    expect(image).toBeDefined();
    expect(image).toHaveAccessibleName();
    expect(link).toBeDefined();
  });
  it("renders videos with play icon", () => {
    item.galleryItemCategory[0].slug = "video";
    render(<MasonryGrid items={[item]} />);

    const svg = screen.getByRole("presentation");

    expect(svg).toBeDefined();
  });
});
