import { FunctionComponent, PropsWithChildren } from "react";
import Button from "@rubin-epo/epo-react-lib/Button";
import { AstroObject, ImageFilter } from "../../ColorTool";
import { getBrightnessValue } from "../../lib/utils";

interface ResetProps {
  isDisabled: boolean;
  selectedData: AstroObject;
  onResetCallback: (data: AstroObject) => void;
}

const resetFilters = (filters: ImageFilter[]): ImageFilter[] =>
  filters.map((filter) => {
    const { defaultValue, min, max } = filter;
    const value = defaultValue || 1;

    return {
      ...filter,
      active: false,
      color: "",
      brightness: getBrightnessValue(min, max, value),
      value,
    };
  });

const Reset: FunctionComponent<PropsWithChildren<ResetProps>> = ({
  isDisabled,
  selectedData,
  onResetCallback,
  children,
}) => {
  const { filters } = selectedData;

  return (
    <Button
      style={{ "--button-text-align": "left" }}
      disabled={isDisabled}
      icon="RotateLeftWithCenter"
      onClick={() =>
        onResetCallback &&
        onResetCallback({
          ...selectedData,
          filters: resetFilters(filters),
        })
      }
      isBlock
    >
      {children}
    </Button>
  );
};

Reset.displayName = "Widgets.ColorTool.Reset";

export default Reset;
