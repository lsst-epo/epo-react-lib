import { fireEvent, render } from "@testing-library/react";
import Blinker from ".";

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

describe("Blinker", () => {
  test("Blinker renders with required props", () => {
    const { images } = testProps;
    // Arrange
    const { getByTestId } = render(<Blinker {...testProps} />);
    // Assert
    expect(getByTestId(imagesId)).toBeInTheDocument();
    expect(getByTestId(controlsId)).toBeInTheDocument();
  });
  test("Single image does not show controls or call callbacks", () => {
    const { queryByTestId } = render(
      <Blinker {...testProps} images={[testProps.images[0]]} />
    );

    expect(queryByTestId(controlsId)).not.toBeInTheDocument();
    expect(testProps.blinkCallback).not.toBeCalled();
  });
  test("Controls call callback", () => {
    const { getByTestId } = render(<Blinker {...testProps} autoplay={false} />);

    const nextButton = getByTestId("blinker-forward");
    const previousButton = getByTestId("blinker-rewind");

    fireEvent.click(nextButton);

    expect(testProps.blinkCallback).toHaveBeenCalledTimes(1);
    expect(testProps.blinkCallback).toHaveBeenCalledWith(
      testProps.activeIndex + 1
    );
    fireEvent.click(previousButton);

    expect(testProps.blinkCallback).toHaveBeenCalledTimes(2);
    expect(testProps.blinkCallback).toHaveBeenCalledWith(
      testProps.activeIndex - 1
    );
  });
});
