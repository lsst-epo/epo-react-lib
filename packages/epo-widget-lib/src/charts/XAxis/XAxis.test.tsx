import { render, screen } from "@testing-library/react";
import XAxis from ".";
import { getLinearScale } from "@/lib/utils";

const domain = [0, 100];
const xScale = getLinearScale(domain, domain);
const ticks = [0, 25, 50, 75];

describe("X Axis", () => {
  it("should render some ticks", () => {
    // Arrange
    render(
      <svg>
        <XAxis xDomain={[0, 100]} ticks={ticks} xScale={xScale} />
      </svg>
    );
    // Assert
    expect(screen.getAllByRole("listitem").length).toBe(ticks.length);
  });
  it("should format the values in their label", () => {
    // Arrange
    render(
      <svg>
        <XAxis
          xDomain={[0, 100]}
          ticks={1}
          xScale={xScale}
          labelRender={(v) => <text>Value: {v}</text>}
        />
      </svg>
    );
    // Act
    const firstTick = screen.getByText("Value: 0");
    // Assert
    expect(firstTick).toBeDefined();
  });
});
