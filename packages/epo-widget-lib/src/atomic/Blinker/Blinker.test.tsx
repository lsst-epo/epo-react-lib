import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
    // Arrange
    const { getByTestId } = render(<Blinker {...testProps} />);
    // Assert
    expect(getByTestId(imagesId)).toBeInTheDocument();
    expect(getByTestId(controlsId)).toBeInTheDocument();
  });
  test("Controls call callback", async () => {
    render(<Blinker {...testProps} autoplay={false} />);

    const nextButton = screen.getByTestId("blinker-forward");

    fireEvent.click(nextButton);

    expect(testProps.blinkCallback).toHaveBeenCalled();
    waitFor(() => {
      expect(testProps.blinkCallback).toHaveBeenCalledWith(
        testProps.activeIndex + 1
      );
    });
  });
  test("Single image does not show controls", () => {
    const { queryByTestId } = render(
      <Blinker {...testProps} images={[testProps.images[0]]} />
    );

    expect(queryByTestId(controlsId)).not.toBeInTheDocument();
  });
});
