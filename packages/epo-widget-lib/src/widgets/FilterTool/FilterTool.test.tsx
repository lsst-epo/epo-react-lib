import { fireEvent, render, screen } from "@testing-library/react";
import FilterTool from ".";

const selectionCallback = jest.fn();

describe("Filter Tool", () => {
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
  it("Changes displayed rays based on user selection", () => {
    render(
      <FilterTool selectedColor="red" selectionCallback={selectionCallback} />
    );

    const select = screen.getByRole("combobox");
    const option = screen.getByText("violet");

    const redRay = document.getElementById("red_ray");
    const redArrow = document.getElementById("red_arrow");
    const violetRay = document.getElementById("violet_ray");
    const violetArrow = document.getElementById("violet_arrow");

    expect(redRay).toBeVisible();
    expect(redArrow).toBeVisible();
    expect(violetRay).not.toBeVisible();
    expect(violetArrow).not.toBeVisible();

    fireEvent.click(option);

    expect(selectionCallback).toBeCalledWith("violet");
  });
});
