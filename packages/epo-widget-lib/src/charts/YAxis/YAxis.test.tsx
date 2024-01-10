import { render, screen } from "@testing-library/react";
import YAxis from ".";
import { getLinearScale } from "@/lib/utils";

const domain = [0, 100];
const yScale = getLinearScale(domain, domain);

describe("X Axis", () => {
  it("should render some ticks", () => {
    // Arrange
    render(
      <svg>
        <YAxis yDomain={[0, 100]} ticks={10} yScale={yScale} />
      </svg>
    );
    // Act
    const ticks = screen.getAllByRole("listitem");
    // Assert
    expect(ticks.length).toBe(11);
  });
  it("should format the values in their label", () => {
    // Arrange
    render(
      <svg>
        <YAxis
          yDomain={[0, 100]}
          ticks={1}
          yScale={yScale}
          labelFormatter={(v) => `Value: ${v}`}
        />
      </svg>
    );
    // Act
    const firstTick = screen.getByText("Value: 0");
    const secondTick = screen.getByText("Value: 100");
    // Assert
    expect(firstTick).toBeDefined();
    expect(secondTick).toBeDefined();
  });
});
