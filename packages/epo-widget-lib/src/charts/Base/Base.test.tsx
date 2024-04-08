import { render } from "@testing-library/react";
import Base from ".";

const xMin = 0;
const yMin = 0;
const width = 300;
const height = 200;
const title = "My Test Chart";
const verticalLabel = "Y Axis Label";
const horizontalLabel = "X Axis Label";

describe("Chart Base", () => {
  it("should create a viewbox", () => {
    // Arrange
    const { getByRole } = render(<Base {...{ xMin, yMin, width, height }} />);

    const chart = getByRole("group");
    // Assert
    expect(chart).toHaveAttribute(
      "viewBox",
      `${xMin} ${yMin} ${width} ${height}`
    );
  });
  it("should add labels", () => {
    // Arrange
    const { getByText } = render(
      <Base
        {...{
          xMin,
          yMin,
          width,
          height,
          title,
          verticalLabel,
          horizontalLabel,
        }}
      />
    );

    // Assert
    [title, verticalLabel, horizontalLabel].forEach((text) => {
      expect(getByText(text)).toBeInTheDocument();
    });
  });
});
