import { fireEvent, render, screen } from "@testing-library/react";
import { singleData, colorOptions } from "../__mocks__";
import FilterControls from ".";
import { getBrightnessValue } from "../utilities";

const { value = 1, min, max } = singleData[0].objects[0].filters[0];
const props = {
  filter: {
    ...singleData[0].objects[0].filters[0],
    color: "#EC1C24",
    brightness: getBrightnessValue(min, max, value),
  },
  colorOptions,
  isDisabled: false,
  onChangeFilterCallback: jest.fn(),
  buttonLabelledById: "buttonLabel",
  selectLabelledById: "selectLabel",
  sliderLabelledById: "sliderLabel",
};

describe("FilterControls", () => {
  it(`should create accessible controls`, () => {
    render(
      <>
        <div id="buttonLabel">Button</div>
        <div id="selectLabel">Select</div>
        <div id="sliderLabel">Slider</div>
        <FilterControls {...props} />
      </>
    );

    const button = screen.getByLabelText("Button");
    const select = screen.getByLabelText("Select");
    const slider = screen.getByLabelText("Slider");

    expect(button).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(slider).toBeInTheDocument();
  });
  it(`should disable controls`, () => {
    render(<FilterControls {...{ ...props, isDisabled: true }} />);

    const button = screen.getByRole("checkbox");
    const select = screen.getByRole("combobox");
    const slider = screen.getByRole("slider");

    expect(button).toBeDisabled();
    expect(select).toBeDisabled();
    expect(slider.parentElement).toHaveClass("disabled");
  });
  it(`should call callback on modification`, () => {
    render(<FilterControls {...props} />);

    const button = screen.getByRole("checkbox");

    fireEvent.click(button);

    expect(props.onChangeFilterCallback).toBeCalledTimes(1);
  });
});
