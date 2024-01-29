import { render, screen } from "@testing-library/react";
import YAxis from ".";
import { getLinearScale } from "@/lib/utils";

const domain = [0, 100];
const yScale = getLinearScale(domain, domain);
const ticks = 10;

describe("X Axis", () => {
  it("should render some ticks", () => {
    // Arrange
    render(
      <svg>
        <YAxis yDomain={[0, 100]} ticks={ticks} yScale={yScale} />
      </svg>
    );
    // Assert
    expect(screen.getAllByRole("listitem").length).toBe(ticks);
  });
  it("should format the values in their label", () => {
    // Arrange
    render(
      <svg>
        <YAxis
          yDomain={[0, 100]}
          ticks={1}
          yScale={yScale}
          labelRender={(v) => <text>Value: {v}</text>}
        />
      </svg>
    );
    // Act
    const tick = screen.getByText("Value: 100");
    // Assert
    expect(tick).toBeDefined();
  });
});
