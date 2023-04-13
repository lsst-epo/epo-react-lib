import { render, fireEvent } from "@testing-library/react";
import BlinkerControls from "./Controls";

const props = {
  playing: false,
  handleStartStop: jest.fn(),
  handleNext: jest.fn(),
  handlePrevious: jest.fn(),
};

describe("BlinkerControls", () => {
  test("Controls calls callback when Start/Stop is clicked", () => {
    // Arrange
    const { getByTestId } = render(<BlinkerControls {...props} />);
    // Act
    fireEvent.click(getByTestId("blinker-start-stop"));
    // Assert
    expect(props.handleStartStop).toHaveBeenCalled();
  });

  test("Controls calls callback when Forward is clicked", () => {
    // Arrange
    const { getByTestId } = render(<BlinkerControls {...props} />);
    // Act
    fireEvent.click(getByTestId("blinker-forward"));
    // Assert
    expect(props.handleNext).toHaveBeenCalled();
  });

  test("Controls calls callback when Backward is clicked", () => {
    // Arrange
    const { getByTestId } = render(<BlinkerControls {...props} />);
    // Act
    fireEvent.click(getByTestId("blinker-backward"));
    // Assert
    expect(props.handlePrevious).toHaveBeenCalled();
  });
});
