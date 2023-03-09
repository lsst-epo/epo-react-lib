import { render } from "@testing-library/react";
import Blinker from "./index.js";

const imagesId = "blinker-images";
const controlsId = "blinker-controls";
const testProps = {
  images: [
    { url: "/path/to/image/1.jpeg" },
    { url: "/path/to/image/2.jpeg" },
    { url: "/path/to/image/3.jpeg" },
  ],
  activeIndex: 1,
  blinkCallback: jest.fn(),
};

test("Blinker renders with required props", () => {
  const { images } = testProps;
  // Arrange
  const { getByTestId } = render(<Blinker {...testProps} />);
  // Assert
  expect(getByTestId(imagesId)).toBeInTheDocument();
  expect(getByTestId(controlsId)).toBeInTheDocument();
});
