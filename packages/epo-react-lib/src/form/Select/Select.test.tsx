import { render, screen } from "@testing-library/react";
import Select from ".";

const options = [
  { value: "mercury", label: "Mercury" },
  { value: "venus", label: "Venus" },
  { value: "earth", label: "Earth" },
  { value: "mars", label: "Mars" },
  { value: "jupiter", label: "Jupiter" },
  { value: "saturn", label: "Saturn" },
  { value: "uranus", label: "Uranus" },
  { value: "neptune", label: "Neptune" },
];

const emptyOption = { value: "", label: "" };

describe("Select", () => {
  it("Inherits option props as select options", () => {
    render(<Select {...{ options }} />);

    const selectOptions = screen.getAllByRole("option");

    expect(selectOptions.length).toBe(options.length);
  });
  it("Adds empty option if inherited", () => {
    render(<Select {...{ options, emptyOption }} />);

    const selectOptions = screen.getAllByRole("option");

    expect(selectOptions.length).toBe(++options.length);
  });
});
