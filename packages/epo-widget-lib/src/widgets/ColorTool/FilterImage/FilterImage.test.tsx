import { act, render, screen } from "@testing-library/react";
import FilterImage from ".";

const props = {
  image: "https://via.placeholder.com/300",
  width: 300,
  height: 300,
};

describe("FilterImage", () => {
  it(`should compile`, () => {
    render(<FilterImage {...props} />);

    const canvas = screen.getByRole("img");

    expect(canvas).toBeInTheDocument();
    expect(canvas).toHaveAttribute("width", props.width.toString());
    expect(canvas).toHaveAttribute("height", props.height.toString());
  });
  it("should render an image", async () => {
    await act(async () => {
      render(<FilterImage {...props} />);
    });

    const canvas = screen.getByRole<HTMLCanvasElement>("img");
    const img = canvas.toDataURL();

    expect(img).toMatchSnapshot();
  });
});
