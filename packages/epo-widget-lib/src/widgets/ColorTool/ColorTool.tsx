import { FormEvent, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import {
  getCategoryName,
  getDataFiltersByName,
  isResetButtonActive,
  resetFilters,
} from "./utilities";
import * as Styled from "./styles";
import { Select, Option, ListboxOption } from "@rubin-epo/epo-react-lib";
import FilterControls from "./FilterControls";
import ImageComposite from "./ImageComposite";

export interface ImageFilter {
  label: string;
  defaultColor?: string;
  color?: string;
  active: boolean;
  image: string;
  isDisabled: boolean;
  value: number;
  defaultValue?: number;
  min: number;
  max: number;
  brightness?: number;
}

export interface AstroObject {
  name: string;
  caption?: string;
  filters: ImageFilter[];
}

export interface AstroCategory {
  type: string;
  objects: AstroObject[];
}

interface ColorToolProps {
  selectionCallback: (selectedData: AstroObject) => void;
  data: AstroCategory[];
  selectedData: AstroObject;
  objectOptions?: Option[];
  colorOptions?: ListboxOption[];
  isDisabled?: boolean;
  isDisplayOnly?: boolean;
  hideImage?: boolean;
  hideSubtitle?: boolean;
}

const ColorTool: FunctionComponent<ColorToolProps> = ({
  data,
  objectOptions = [],
  selectedData,
  colorOptions = [],
  selectionCallback,
  isDisabled = false,
  isDisplayOnly = false,
  hideImage = false,
  hideSubtitle = false,
}) => {
  const handleFilterChange = (updatedFilter: ImageFilter) => {
    const { label } = updatedFilter;
    const { filters } = selectedData;
    const updatedFilters = filters.map((f) =>
      f.label === label ? updatedFilter : f
    );

    return (
      selectionCallback &&
      selectionCallback({
        ...selectedData,
        filters: updatedFilters,
      })
    );
  };

  const handleCategorySelection = (event: FormEvent<HTMLSelectElement>) => {
    const { value } = event.target as HTMLSelectElement;

    return (
      selectionCallback &&
      selectionCallback({
        name: value,
        filters: getDataFiltersByName(data, value),
      })
    );
  };

  const handleReset = () =>
    selectionCallback &&
    selectionCallback({
      ...selectedData,
      filters: resetFilters(selectedData.filters),
    });

  const hasMultipleDatasets = data.length > 1;
  const { t } = useTranslation();
  const selectPlaceholder = t("colorTool.actions.select_an_object");
  const { filters, name: selectedObjectName, caption } = selectedData;
  const selectedCategoryName = getCategoryName(data, selectedObjectName);

  return (
    <Styled.WidgetContainer>
      <Styled.WidgetLayout
        style={{
          "--controls-row": isDisplayOnly ? "'image image'" : undefined,
        }}
      >
        {selectedObjectName && (isDisplayOnly || hasMultipleDatasets) && (
          <Styled.Subtitle>
            {hasMultipleDatasets && (
              <>
                <dt>{t("colorTool.labels.object_type")}</dt>
                <dd>{selectedCategoryName}</dd>
              </>
            )}
            {!hideSubtitle && (
              <>
                <dt>
                  {t("colorTool.labels.object", {
                    context: hasMultipleDatasets ? "selected" : false,
                  })}
                </dt>
                <dd>{selectedObjectName}</dd>
              </>
            )}
            {}
          </Styled.Subtitle>
        )}
        {!isDisplayOnly && (
          <Styled.ControlsContainer>
            {hasMultipleDatasets && (
              <Styled.SelectionContainer>
                <Select
                  id="astroObjectSelector"
                  placeholder={selectPlaceholder}
                  options={objectOptions}
                  onChange={handleCategorySelection}
                  value={selectedObjectName}
                  disabled={isDisabled}
                />
              </Styled.SelectionContainer>
            )}
            {filters && (
              <>
                <Styled.ToolsHeader id="filterLabel">
                  {t("colorTool.labels.filter")}
                </Styled.ToolsHeader>
                <Styled.ToolsHeader id="colorLabel">
                  {t("colorTool.labels.color")}
                </Styled.ToolsHeader>
                <Styled.ToolsHeader id="intensityLabel">
                  {t("colorTool.labels.color_intensity")}
                </Styled.ToolsHeader>
              </>
            )}
            {filters &&
              filters.map((imageFilter) => {
                const { label, isDisabled: isFilterDisabled } = imageFilter;

                return (
                  <FilterControls
                    key={`filter-${label}`}
                    filter={imageFilter}
                    isDisabled={isDisabled || isFilterDisabled}
                    colorOptions={colorOptions}
                    onChangeFilterCallback={handleFilterChange}
                    buttonLabelledById="filterLabel"
                    selectLabelledById="colorLabel"
                    sliderLabelledById="intensityLabel"
                  />
                );
              })}
          </Styled.ControlsContainer>
        )}
        {!hideImage && <ImageComposite {...{ filters }} />}
        {selectedObjectName && !isDisplayOnly && (
          <Styled.ResetButton
            disabled={isDisabled || !isResetButtonActive(selectedData)}
            onClick={handleReset}
            icon="RotateLeftWithCenter"
          >
            {t("colorTool.actions.reset")}
          </Styled.ResetButton>
        )}
        {caption && <Styled.Caption>{caption}</Styled.Caption>}
      </Styled.WidgetLayout>
    </Styled.WidgetContainer>
  );
};

ColorTool.displayName = "Widgets.ColorTool";

export default ColorTool;
