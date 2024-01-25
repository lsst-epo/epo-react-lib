import { fireEvent, render, waitFor } from "@testing-library/react";
import ImageStack from ".";

const urls = [
  "/images/lunar_phase/new-moon.webp",
  "/images/lunar_phase/waxing-crescent.webp",
  "/images/lunar_phase/first-quarter.webp",
  "/images/lunar_phase/waxing-gibbous.webp",
  "/images/lunar_phase/full.webp",
  "/images/lunar_phase/waning-gibbous.webp",
  "/images/lunar_phase/third-quarter.webp",
  "/images/lunar_phase/waning-crescent.webp",
];

const images = urls.map((url) => {
  return { url, width: 640, height: 613 };
});

const loadCallback = jest.fn();

const props = { images, loadCallback };

const loadImages = (images: HTMLCollectionOf<HTMLImageElement>) => {
  Array.from(images).forEach((img) => {
    fireEvent.load(img);
  });
};

describe("ImageStack", () => {
  it("Renders an element for each element of the image prop array", async () => {
    // Arrange
    const { getAllByRole } = render(<ImageStack {...props} />);

    loadImages(document.getElementsByTagName("img"));

    const images = getAllByRole("presentation", { hidden: true });

    // Assert
    expect(images.length).toEqual(urls.length);
  });
  it("Sets the current active index image visible", () => {
    const visibleIndex = 4;
    // Arrange
    const { getAllByRole } = render(
      <ImageStack visible={visibleIndex} {...props} />
    );

    loadImages(document.getElementsByTagName("img"));

    const images = getAllByRole("presentation", { hidden: true });

    // Assert
    expect(images[visibleIndex]).toBeVisible();
  });
  it("Sets multiple images visible", () => {
    const visibleIndex = [false, true, true, false, true, true, false, false];
    // Arrange
    const { getAllByRole } = render(
      <ImageStack visible={visibleIndex} {...props} />
    );

    loadImages(document.getElementsByTagName("img"));
    const images = getAllByRole("presentation", { hidden: true });

    // Assert
    images.forEach((img, i) => {
      if (visibleIndex[i]) {
        expect(img).toBeVisible();
      } else {
        expect(img).not.toBeVisible();
      }
    });
  });
  it("Makes a callback when images have finished loading", () => {
    // Arrange
    loadCallback.mockClear();
    render(<ImageStack {...props} />);
    loadImages(document.getElementsByTagName("img"));

    expect(loadCallback).toBeCalledTimes(1);
  });

  it("Exposes a single image to screen readers, with an accessible description", () => {
    const description = "My descriptor";
    // Arrange
    const { getByRole } = render(
      <>
        <span id="description">{description}</span>
        <ImageStack describedById="description" {...props} />
      </>
    );
    const stack = getByRole("img");

    expect(stack).toBeInTheDocument();
    expect(stack).toHaveAccessibleDescription(description);
  });
});
