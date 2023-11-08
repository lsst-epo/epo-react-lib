import { render, screen } from "@testing-library/react";
import { singleData } from "../__mocks__";
import ImageComposite from ".";

const props = {
  filters: singleData[0].objects[0].filters,
  width: 600,
  height: 600,
  selectedObjectName: singleData[0].objects[0].name,
};

describe("ImageComposite", () => {
  it(`should render an image for each filter plus base layer`, () => {
    render(<ImageComposite {...props} />);

    const filters = screen.getAllByRole("img", { hidden: true });

    expect(filters.length).toBe(props.filters.length);
  });
});
