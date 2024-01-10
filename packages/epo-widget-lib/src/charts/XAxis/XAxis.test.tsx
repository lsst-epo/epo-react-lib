import { render, screen } from "@testing-library/react";
import XAxis from ".";
import { getLinearScale } from "@/lib/utils";

const domain = [0, 100];
const xScale = getLinearScale(domain, domain);

describe("X Axis", () => {
  it("should render some ticks", () => {
    // Arrange
    render(
      <svg>
        <XAxis xDomain={[0, 100]} ticks={10} xScale={xScale} />
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
        <XAxis
          xDomain={[0, 100]}
          ticks={1}
          xScale={xScale}
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
