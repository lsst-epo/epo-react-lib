import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import Meta, { Primary } from "./Image.stories";
import { stringifySizes, stringifySrcSet } from "./utils";

const Image = composeStory(Primary, Meta);

describe("Image", () => {
  it("should attach url to src", () => {
    render(<Image />);

    const img = screen.getByRole("img");

    expect(img).toHaveAttribute("src", Image.args.image?.url);
  });

  it("should create a srcset", () => {
    render(<Image />);

    const img = screen.getByRole("img");

    expect(img).toHaveAttribute("srcset");
  });

  it("should have accessible naming", () => {
    render(<Image />);

    const img = screen.getByRole("img");
    expect(img).toHaveAccessibleName(Image.args.image?.altText);
  });

  it("should have width and height attached", () => {
    render(<Image />);

    const img = screen.getByRole("img");

    expect(img).toHaveAttribute("width", Image.args.image?.width.toString());
    expect(img).toHaveAttribute("height", Image.args.image?.height.toString());
  });
});

describe("stringifySrcSet", () => {
  it("should transform an array of objects into a srcset string", () => {
    const srcSet = [
      { src: "https://rubinobservatory.org", size: 100 },
      { src: "https://rubinobservatory.org", size: "2x" },
    ];

    const result = stringifySrcSet(srcSet);

    expect(result).toBe(
      `${srcSet[0].src} ${srcSet[0].size}w, ${srcSet[1].src} ${srcSet[1].size}`
    );
  });
});

const sizes = [
  { size: "30em" },
  { size: 101, mediaCondition: "(max-width: 200px)" },
  { size: 202, mediaCondition: "(max-width: 300px)" },
];

describe("stringifySizes", () => {
  it("should move sizes without media conditions to the end", () => {
    const result = stringifySizes(sizes).split(",");
    expect(result[0].includes("(")).toBeTruthy();
    expect(result[result.length - 1].includes("(")).toBeFalsy();
  });
  it("should turn numeric sizes to pixels", () => {
    const result = stringifySizes(sizes);
    expect(result.includes(`${sizes[1].size}px`)).toBeTruthy();
  });
  it("should create a valid sizes string", () => {
    const result = stringifySizes(sizes);
    expect(result).toBe(
      `${sizes[0].mediaCondition} ${sizes[0].size}px, ${sizes[1].mediaCondition} ${sizes[1].size}px, ${sizes[2].size}`
    );
  });
});
