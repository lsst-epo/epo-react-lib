import SelectListbox, {
  ListboxOption,
} from "@rubin-epo/epo-react-lib/SelectListbox";
import { FunctionComponent } from "react";
import { ImageFilter } from "..";
import { getBrightnessValue } from "../lib/utils";
import { useTranslation } from "react-i18next";
import * as Styled from "./styles";

interface FilterControlProps {
  filter: ImageFilter;
  colorOptions: ListboxOption[];
  isDisabled: boolean;
  onChangeFilterCallback: (filter: ImageFilter) => void;
  buttonLabelledById: string;
  selectLabelledById: string;
  sliderLabelledById: string;
}

const FilterControls: FunctionComponent<FilterControlProps> = ({
  filter,
  colorOptions,
  isDisabled,
  onChangeFilterCallback,
  buttonLabelledById,
  selectLabelledById,
  sliderLabelledById,
}) => {
  const { t } = useTranslation();
  const { label, color = "", value, active, min, max } = filter;

  const handleImage = () =>
    onChangeFilterCallback &&
    onChangeFilterCallback({ ...filter, active: !active });
  const handleColorChange = (color: string | null) =>
    color &&
    onChangeFilterCallback &&
    onChangeFilterCallback({ ...filter, color });
  const handleBrightness = (value: number) =>
    onChangeFilterCallback &&
    onChangeFilterCallback({
      ...filter,
      brightness: getBrightnessValue(min, max, value),
      value,
    });

  const selectPlaceholder = t("colorTool.actions.select_filter");

  return (
    <Styled.FilterContainer disabled={isDisabled}>
      <Styled.FilterLabel>
        <Styled.HiddenCheckbox
          checked={active}
          type="checkbox"
          onChange={handleImage}
          aria-describedby={buttonLabelledById}
        />
        <Styled.FilterToggle as="span">{label}</Styled.FilterToggle>
      </Styled.FilterLabel>
      <SelectListbox
        placeholder={selectPlaceholder}
        value={color}
        options={colorOptions}
        onChangeCallback={handleColorChange}
        width="100%"
        maxWidth="100%"
        labelledById={selectLabelledById}
        isDisabled={!active || isDisabled}
      />
      <Styled.Slider
        min={1}
        max={100}
        onChangeCallback={(value) =>
          typeof value === "number" && handleBrightness(value)
        }
        isDisabled={!active || isDisabled}
        labelledbyId={sliderLabelledById}
        {...{ value, label, color }}
      />
    </Styled.FilterContainer>
  );
};

FilterControls.displayName = "Widgets.ColorTool.FilterControls";

export default FilterControls;
