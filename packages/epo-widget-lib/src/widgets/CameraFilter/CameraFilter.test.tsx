import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getAllByRole("option").length).toBe(
      ["u", "g", "r", "i", "z", "y", "none"].length
    );
  });
  it("hides the spectrum of the unselected filters if a filter is selected", () => {
    render(<CameraFilter />);

    const select = screen.getByRole("combobox");
    const options = screen.getAllByRole("option");
    fireEvent.click(select);
    fireEvent.click(options[2]); // g band

    waitFor(() => {
      expect(screen.getByTestId("spectrum-labels").children.length).toBe(1); // visible light
      expect(screen.getByTestId("color-labels").children.length).toBe(3); // violet, blue, and green
    });
  });
});
