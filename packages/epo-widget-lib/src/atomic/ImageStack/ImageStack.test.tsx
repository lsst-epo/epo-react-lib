import { fireEvent, render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./ImageStack.stories";

const loadCallback = jest.fn();

const loadImages = (images: HTMLCollectionOf<HTMLImageElement>) => {
  Array.from(images).forEach((img) => {
    fireEvent.load(img);
  });
};

const { OneActive, MultipleActive } = composeStories(stories, {
  args: { loadCallback },
});

describe("ImageStack", () => {
  it("Renders an element for each element of the image prop array", async () => {
    // Arrange
    const { getAllByRole } = render(<OneActive />);
    loadImages(document.getElementsByTagName("img"));

    const images = getAllByRole("presentation", { hidden: true });
    // Assert
    expect(images.length).toEqual(OneActive.args.images?.length);
  });
  it("Sets the current active index image visible", () => {
    // Arrange
    const { getAllByRole } = render(<OneActive />);
    loadImages(document.getElementsByTagName("img"));

    const images = getAllByRole("presentation", { hidden: true });

    // Assert
    expect(images[OneActive.args?.visible as number]).toBeVisible();
  });
  it("Sets multiple images visible", () => {
    // Arrange
    const { getAllByRole } = render(<MultipleActive />);

    loadImages(document.getElementsByTagName("img"));
    const images = getAllByRole("presentation", { hidden: true });

    // Assert
    images.forEach((img, i) => {
      if ((MultipleActive.args.visible as Array<boolean>)[i]) {
        expect(img).toBeVisible();
      } else {
        expect(img).not.toBeVisible();
      }
    });
  });
  it("Makes a callback when images have finished loading", () => {
    // Arrange
    loadCallback.mockClear();
    render(<OneActive />);
    loadImages(document.getElementsByTagName("img"));

    expect(loadCallback).toBeCalledTimes(1);
  });

  it("Exposes a single image to screen readers, with an accessible description", () => {
    const description = "My descriptor";
    // Arrange
    const { getByRole } = render(
      <>
        <span id="description">{description}</span>
        <OneActive describedById="description" />
      </>
    );
    const stack = getByRole("img");

    expect(stack).toBeInTheDocument();
    expect(stack).toHaveAccessibleDescription(description);
  });
});
