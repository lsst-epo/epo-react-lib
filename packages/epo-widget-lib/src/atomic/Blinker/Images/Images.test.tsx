import { fireEvent, render, waitFor } from "@testing-library/react";
import Images from "./Images";

const props = {
  images: [
    { url: "/path/to/image/1.jpeg", altText: "1" },
    { url: "/path/to/image/2.jpeg", altText: "2" },
    { url: "/path/to/image/3.jpeg", altText: "3" },
  ],
  activeIndex: 1,
  readyCallback: jest.fn(),
};

describe("BlinkerImages", () => {
  test("Sets the current active index image visible", () => {
    // Arrange
    const { getAllByRole } = render(<Images {...props} />);
    const images = getAllByRole("img", { hidden: true });

    // Assert
    expect(images[props.activeIndex]).toBeVisible();
  });
  test("Makes a callback when images have finished loading", () => {
    // Arrange
    const { getAllByRole } = render(<Images {...props} />);
    // Act
    const images = getAllByRole("img", { hidden: true });

    images.forEach((i) => {
      fireEvent.load(i);
    });
    // Assert
    waitFor(() => {
      expect(props.readyCallback).toBeCalled();
    });
  });
});
