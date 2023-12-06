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
  colorOptions,
  multiSpectralOptions,
} from "./__mocks__";
import { ListboxOption } from "@rubin-epo/epo-react-lib/SelectListbox";
import ColorTool from ".";
import { getCategoryName } from "./utilities";

const props = {
  data: singleData,
  selectedData: singleData[0].objects[0],
  colorOptions,
  selectionCallback: jest.fn(),
};

const objectOptions: ListboxOption[] = [];

multiData.forEach((category) => {
  category.objects.forEach((object) => {
    objectOptions.push({
      label: `${category.type}: ${object.name}`,
      value: object.name,
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
  it(`should render an object description and select dropdown if multiple datasets are available`, async () => {
    await act(async () => {
      render(<ColorTool {...multiProps} />);
    });
    const descriptions = screen.getAllByRole("definition");
    const select = document.getElementById("astroObjectSelector");
    expect(descriptions.length).toBe(1);
    expect(select).toBeInTheDocument();
  });
  it(`should disable controls when isDisabled set`, async () => {
    await act(async () => {
      render(<ColorTool {...{ ...multiProps, isDisabled: true }} />);
    });
    const buttons = screen.getAllByRole("button");

    buttons.forEach((b) => {
      expect(b).toBeDisabled();
    });
  });
  it(`should hide controls when isDisplayOnly set`, async () => {
    await act(async () => {
      render(<ColorTool {...{ ...multiProps, isDisplayOnly: true }} />);
    });

    expect(screen.queryAllByRole("button").length).toBe(0);
  });
  it(`should hide subtitle when hideSubtitle set`, async () => {
    await act(async () => {
      render(
        <ColorTool {...{ ...multiProps, config: { hideSubtitle: true } }} />
      );
    });

    const { name } = multiProps.selectedData;

    expect(screen.queryByText(name)).toBeFalsy();
  });
});
