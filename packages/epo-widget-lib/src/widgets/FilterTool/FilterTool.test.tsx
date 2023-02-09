import { fireEvent, render, screen } from "@testing-library/react";
import FilterTool from ".";

describe("Filter Tool", () => {
  it("Renders an SVG widget", () => {
    render(<FilterTool />);

    const svg = screen.getByRole("presentation");

    expect(svg).toBeDefined();
  });
  it("Renders only the pre-selected filters", () => {
    render(<FilterTool selectedColor="red" />);

    const redRay = document.getElementById("red_ray");
    const redArrow = document.getElementById("red_arrow");
    const violetRay = document.getElementById("violet_ray");
    const violetArrow = document.getElementById("violet_arrow");

    expect(redRay).toBeVisible();
    expect(redArrow).toBeVisible();
    expect(violetRay).not.toBeVisible();
    expect(violetArrow).not.toBeVisible();
  });
  it("Disables selection in read only mode", () => {
    render(<FilterTool selectedColor="red" />);

    const select = screen.getByRole("combobox");

    const redRay = document.getElementById("red_ray");
    const redArrow = document.getElementById("red_arrow");
    const violetRay = document.getElementById("violet_ray");
    const violetArrow = document.getElementById("violet_arrow");

    expect(redRay).toBeVisible();
    expect(redArrow).toBeVisible();
    expect(violetRay).not.toBeVisible();
    expect(violetArrow).not.toBeVisible();

    fireEvent.change(select, { target: { value: "violet" } });

    expect(redRay).not.toBeVisible();
    expect(redArrow).not.toBeVisible();
    expect(violetRay).toBeVisible();
    expect(violetArrow).toBeVisible();
  });
});
