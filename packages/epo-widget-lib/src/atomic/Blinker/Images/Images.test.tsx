import { render } from "@testing-library/react";
import Images from "./Images";

const props = {
  images: [
    { url: "/path/to/image/1.jpeg" },
    { url: "/path/to/image/2.jpeg" },
    { url: "/path/to/image/3.jpeg" },
  ],
  activeIndex: 1,
};

describe("BlinkerImages", () => {
  test("Sets the current active index image visible", () => {
    // Arrange
    const { getAllByRole } = render(<Images {...props} />);
    // Act
    const images = getAllByRole("img");
    // Assert
    expect(images.length).toBe(1);
  });
});
