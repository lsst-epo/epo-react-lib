import { act, render, screen, waitFor } from "@testing-library/react";
import FilterImage from ".";

const props = {
  url: "https://via.placeholder.com/300",
  width: 300,
  height: 300,
  active: true,
  onLoadCallback: jest.fn(),
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
  it("should perform a callback when loading is complete", async () => {
    await act(async () => {
      render(<FilterImage {...props} />);
    });

    waitFor(() => {
      expect(props.onLoadCallback).toBeCalled();
    });
  });
});
