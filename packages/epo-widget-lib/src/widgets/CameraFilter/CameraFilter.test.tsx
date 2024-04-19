import { render, screen, fireEvent } from "@testing-library/react";
import CameraFilter from ".";

describe("CameraFilter", () => {
  it("displays a table of camera filters and their spectrum for wide displays", async () => {
    render(
      <div style={{ width: "1500px" }}>
        <CameraFilter />
      </div>
    );

    expect(await screen.findByTestId("expanded-filters")).toBeInTheDocument();
  });
  it("displays a list of camera filters and their spectrum for narrow displays", async () => {
    render(<CameraFilter />);

    expect(await screen.findByTestId("condensed-filters")).toBeInTheDocument();
  });
  it("displays an image of the electromagnetic spectrum from ultraviolet to infrared", async () => {
    render(<CameraFilter />);

    expect(await screen.findByTestId("spectrum-display")).toBeInTheDocument();
  });
  it("has callouts for visible light colors and their spectrum", async () => {
    render(<CameraFilter />);

    expect(await screen.findByTestId("color-labels")).toBeInTheDocument();
  });
  it("has a dropdown with options for each camera filter", () => {
    render(<CameraFilter />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getAllByRole("option").length).toBe(
      ["u", "g", "r", "i", "z", "y", "none"].length
    );
  });
});
