import { render, screen } from "@testing-library/react";
import FilterImage from ".";

const props = {
  image: "https://via.placeholder.com/300",
};

describe("FilterImage", () => {
  it(`should compile`, () => {
    render(<FilterImage {...props} />);

    const canvas = screen.getByRole("img");

    expect(canvas).toBeInTheDocument();
  });
  it("should render an image", () => {
    render(<FilterImage {...props} />);

    const canvas = screen.getByRole<HTMLCanvasElement>("img");
    const img = canvas.toDataURL();
    const data = img.replace(/^data:image\/\w+;base64,/, "");
    const buf = Buffer.from(data, "base64");

    expect(buf).toMatchImageSnapshot({
      failureThreshold: 0.5,
      failureThresholdType: "percent",
    });
  });
});
