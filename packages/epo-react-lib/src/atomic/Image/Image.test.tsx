import { render, screen } from "@testing-library/react";
import Image from ".";

const props = {
  image: {
    altText: "A placeholder image",
    url: "https://via.placeholder.com/150",
    url2x: "https://via.placeholder.com/300",
    url3x: "https://via.placeholder.com/450",
    width: 150,
    height: 150,
  },
};

test("should attach url to src", () => {
  render(<Image {...props} />);

  const img = screen.getByRole("img");

  const urls = [props.image.url, props.image.url2x, props.image.url3x]
    .filter((url) => url !== undefined)
    .map((url, i) => `${url} ${i + 1}x`)
    .join(", ");

  expect(img).toHaveAttribute("src", expect.stringMatching(props.image.url));
  expect(img).toHaveAttribute("srcSet", expect.stringMatching(urls));
});

test("should have accessible naming", () => {
  render(<Image {...props} />);

  const img = screen.getByRole("img");
  expect(img).toHaveAccessibleName(props.image.altText);
});

test("should have width and height attached", () => {
  render(<Image {...props} />);

  const img = screen.getByRole("img");

  expect(img).toHaveAttribute(
    "width",
    expect.stringContaining(props.image.width.toString())
  );
  expect(img).toHaveAttribute(
    "height",
    expect.stringContaining(props.image.height.toString())
  );
});
