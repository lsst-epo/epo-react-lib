import {
  act,
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import {
  singleData,
  multiData,
  title,
  colorOptions,
  multiSpectralOptions,
} from "./__mocks__";
import { Option } from "@rubin-epo/epo-react-lib/dist/types/select";
import ColorTool from ".";
import { getCategoryName } from "./utilities";

const props = {
  data: singleData,
  selectedData: singleData[0].objects[0],
  title,
  colorOptions,
  selectionCallback: jest.fn(),
};

const objectOptions: Option[] = [];

multiData.forEach((category) => {
  category.objects.forEach((object) => {
    objectOptions.push({
      label: `${category.type}: ${object.name}`,
      value: object.name,
      optionGroup: category.type,
    });
  });
});

const multiProps = {
  ...props,
  data: multiData,
  selectedData: multiData[0].objects[0],
  objectOptions,
  colorOptions: multiSpectralOptions,
};

describe("ColorTool", () => {
  it(`should render a title`, async () => {
    await act(async () => {
      render(<ColorTool {...props} />);
    });

    const titleElement = screen.getByRole("heading");

    expect(titleElement.textContent).toBe(title);
  });
  it(`should render an object description and select dropdown if multiple datasets are available`, async () => {
    await act(async () => {
      render(<ColorTool {...multiProps} />);
    });
    const descriptions = screen.getAllByRole("definition");
    const select = screen.getByDisplayValue(objectOptions[0].label);
    expect(descriptions.length).toBe(2);
    expect(select).toBeInTheDocument();
  });
  it(`should change the selected object using the dropdown`, async () => {
    await act(async () => {
      render(<ColorTool {...multiProps} />);
    });
    const { name } = multiProps.selectedData;
    const initialType = getCategoryName(multiProps.data, name) || "";

    const select = screen.getByDisplayValue(objectOptions[0].label);
    const type = screen.getByText(initialType);

    fireEvent.change(select, { target: { value: objectOptions[1].value } });

    waitFor(() => {
      expect(multiProps.selectionCallback).toBeCalled();
      expect(type.textContent).not.toBe(initialType);
    });
  });
  it(`should disable controls when isDisabled set`, async () => {
    await act(async () => {
      render(<ColorTool {...{ ...multiProps, isDisabled: true }} />);
    });
    const selects = screen.getAllByRole("combobox");
    const buttons = screen.getAllByRole("button");

    buttons.forEach((b) => {
      expect(b).toBeDisabled();
    });
    selects.forEach((s) => {
      expect(s).toBeDisabled();
    });
  });
  it(`should hide controls when hideControls set`, async () => {
    await act(async () => {
      render(<ColorTool {...{ ...multiProps, hideControls: true }} />);
    });

    expect(screen.queryAllByRole("combobox").length).toBe(0);
    expect(screen.queryAllByRole("button").length).toBe(0);
  });
  it(`should hide image when hideImage set`, async () => {
    await act(async () => {
      render(<ColorTool {...{ ...multiProps, hideImage: true }} />);
    });

    expect(screen.queryAllByRole("img").length).toBe(0);
  });
  it(`should hide subtitle when hideSubtitle set`, async () => {
    await act(async () => {
      render(<ColorTool {...{ ...multiProps, hideSubtitle: true }} />);
    });

    const { name } = multiProps.selectedData;

    expect(screen.queryByText(name)).toBeFalsy();
  });
});
