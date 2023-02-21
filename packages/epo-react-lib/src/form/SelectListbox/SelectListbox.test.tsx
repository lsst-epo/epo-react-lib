import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { options } from "./__mocks__";
import SelectListbox from ".";
import { act } from "react-dom/test-utils";

const props = {
  placeholder: "Select a value",
  value: "red",
  options,
  onChangeCallback: jest.fn(),
};

describe("SelectListbox", () => {
  it("should display a placeholder if no value is selected", () => {
    render(<SelectListbox {...{ ...props, value: null }} />);

    const selectBox = screen.getByText(props.placeholder);

    expect(selectBox).toBeInTheDocument();
  });
  it("should disable selection based on props", () => {
    render(<SelectListbox {...{ ...props, isDisabled: true }} />);

    const selectBox = screen.getByRole("combobox");

    expect(selectBox).toBeDisabled();
  });
  it("should open a dropdown list if clicked", () => {
    render(<SelectListbox {...props} />);

    const selectBox = screen.getByRole("combobox");

    fireEvent.click(selectBox);

    expect(selectBox).toHaveAttribute("aria-expanded", "true");
  });
  it("should toggle the dropdown list if enter key, or space key pressed", async () => {
    render(<SelectListbox {...props} />);

    const selectBox = screen.getByRole("combobox");

    act(() => {
      selectBox.focus();
    });

    userEvent.keyboard("{Enter}");
    waitFor(() => {
      expect(selectBox).toHaveAttribute("aria-expanded", "true");
    });

    userEvent.keyboard("{Space}");
    waitFor(() => {
      expect(selectBox).toHaveAttribute("aria-expanded", "false");
    });
  });
  it("should navigate the dropdown list options with arrow keys", () => {
    render(<SelectListbox {...props} />);

    const selectBox = screen.getByRole("combobox");
    const options = screen.getAllByRole("option");

    fireEvent.click(selectBox);

    expect(options[0]).toHaveAttribute("aria-selected", "true");

    userEvent.keyboard("{ArrowDown}");

    waitFor(() => {
      expect(options[0]).toHaveAttribute("aria-selected", "false");
      expect(options[1]).toHaveAttribute("aria-selected", "true");
    });
  });
  it("should close the dropdown list on selection, escape key, and click outside", () => {
    render(<SelectListbox {...props} />);
    const selectBox = screen.getByRole("combobox");
    const options = screen.getAllByRole("option");

    fireEvent.click(selectBox);
    fireEvent.click(options[0]);

    waitFor(() => {
      expect(selectBox).toHaveAttribute("aria-expanded", "false");
    });

    fireEvent.click(selectBox);
    userEvent.keyboard("{Esc}");

    waitFor(() => {
      expect(selectBox).toHaveAttribute("aria-expanded", "false");
    });

    fireEvent.click(selectBox);
    fireEvent.click(document.body);

    waitFor(() => {
      expect(selectBox).toHaveAttribute("aria-expanded", "false");
    });
  });
  it("should select an option on click, enter key, and space key and update the display", () => {
    render(<SelectListbox {...props} />);
    const selectBox = screen.getByRole("combobox");
    const options = screen.getAllByRole("option");
    fireEvent.click(selectBox);
    fireEvent.click(options[0]);
    waitFor(() => {
      expect(selectBox).toHaveTextContent(props.options[0].label);
      expect(props.onChangeCallback).toBeCalledTimes(1);
      expect(props.onChangeCallback).toBeCalledWith(props.options[0].value);
    });
    fireEvent.click(selectBox);
    userEvent.keyboard("{ArrowDown}{Enter}");
    waitFor(() => {
      expect(selectBox).toHaveTextContent(props.options[1].label);
      expect(props.onChangeCallback).toBeCalledTimes(1);
      expect(props.onChangeCallback).toBeCalledWith(props.options[1].value);
    });
    fireEvent.click(selectBox);
    userEvent.keyboard("{ArrowDown}{Space}");
    waitFor(() => {
      expect(selectBox).toHaveTextContent(props.options[2].label);
      expect(props.onChangeCallback).toBeCalledTimes(1);
      expect(props.onChangeCallback).toBeCalledWith(props.options[2].value);
    });
  });
  it("should select multiple options if enabled", () => {
    render(<SelectListbox {...{ ...props, isMultiselect: true }} />);
    const selectBox = screen.getByRole("combobox");
    const options = screen.getAllByRole("option");
    fireEvent.click(options[0]);
    fireEvent.click(options[1]);

    waitFor(() => {
      expect(selectBox).toHaveTextContent(props.options[0].label);
      expect(selectBox).toHaveTextContent(props.options[1].label);
      expect(props.onChangeCallback).toBeCalledTimes(2);
    });
  });
});
