import { render, screen, within } from "@testing-library/react";
import ProgressRadial from ".";

const min = 0;
const max = 100;
const value = 50;
const displayValue = "Page 1 / 4";
const labelText = "My progress bar";

describe("ProgessRadial", () => {
  it("should bind min, max, and value to ARIA attributes", () => {
    render(<ProgressRadial {...{ min, max, value }} />);

    const progressBar = screen.getByRole("progressbar");

    expect(progressBar).toHaveAttribute("aria-valuemin", min.toString());
    expect(progressBar).toHaveAttribute("aria-valuemax", max.toString());
    expect(progressBar).toHaveAttribute("aria-valuenow", value.toString());
  });
  it("should display an alternate value if provided", () => {
    render(<ProgressRadial {...{ min, max, value, displayValue }} />);

    const progressBar = screen.getByRole("progressbar");

    expect(progressBar.textContent).toBe(displayValue);
    expect(progressBar).toHaveAttribute("aria-valuetext", displayValue);
  });
  it("should keep the value within the min and max", () => {
    render(<ProgressRadial {...{ min, max, value: 200 }} />);

    const progressBar = screen.getByRole("progressbar");

    expect(progressBar).toHaveAttribute("aria-valuenow", max.toString());
  });
  it("should be labelled by other elements", () => {
    render(
      <>
        <span id="test-label">{labelText}</span>
        <ProgressRadial {...{ min, max, value, labelledById: "test-label" }} />
      </>
    );

    const progressBar = screen.getByLabelText(labelText);

    expect(progressBar).toHaveAttribute("role", "progressbar");
  });
});
