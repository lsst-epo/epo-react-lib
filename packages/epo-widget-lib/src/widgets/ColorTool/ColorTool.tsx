import { FormEvent, FunctionComponent, useState, useEffect } from "react";
import useResizeObserver from "use-resize-observer";
import { useTranslation } from "react-i18next";
import {
  getCategoryName,
  getDataFiltersByName,
  isResetButtonActive,
  prepareData,
  resetFilters,
} from "./utilities";
import * as Styled from "./styles";
import { Option } from "@rubin-epo/epo-react-lib/dist/types/select";
import { ListboxOption } from "@rubin-epo/epo-react-lib/dist/types/select-listbox";
import { Select } from "@rubin-epo/epo-react-lib";
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
  title?: string;
  objectOptions?: Option[];
  colorOptions?: ListboxOption[];
  isDisabled?: boolean;
  hideControls?: boolean;
  hideImage?: boolean;
  hideSubtitle?: boolean;
}

const ColorTool: FunctionComponent<ColorToolProps> = ({
  title,
  data,
  objectOptions = [],
  selectedData: preSelectedData,
  colorOptions = [],
  selectionCallback,
  isDisabled = false,
  hideControls = false,
  hideImage = false,
  hideSubtitle = false,
}) => {
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();
  const [selectedData, setSelectedData] = useState<AstroObject>(
    prepareData(preSelectedData)
  );

  useEffect(() => {
    selectionCallback && selectionCallback(selectedData);
  }, [selectedData]);

  const handleFilterChange = (updatedFilter: ImageFilter) => {
    const { label } = updatedFilter;
    const { filters } = selectedData;
    const updatedFilters = filters.map((f) =>
      f.label === label ? updatedFilter : f
    );

    return setSelectedData({
      ...selectedData,
      filters: updatedFilters,
    });
  };

  const handleCategorySelection = (event: FormEvent<HTMLSelectElement>) => {
    const { value } = event.target as HTMLSelectElement;

    return setSelectedData({
      name: value,
      filters: getDataFiltersByName(data, value),
    });
  };

  const handleReset = () =>
    setSelectedData({
      ...selectedData,
      filters: resetFilters(selectedData.filters),
    });

  const hasMultipleDatasets = data.length > 1;
  const { t } = useTranslation();
  const selectPlaceholder = t("colorTool.actions.select_an_object");
  const { filters, name: selectedObjectName, caption } = selectedData;
  const selectedCategoryName = getCategoryName(data, selectedObjectName);

  return (
    <Styled.WidgetContainer
      ref={ref}
      isCondensed={width < 1000}
      hideControls={hideControls}
    >
      {title && <Styled.Title>{title}</Styled.Title>}
      {selectedObjectName && (hideControls || hasMultipleDatasets) && (
        <>
          {hasMultipleDatasets && (
            <Styled.Subtitle>
              <dt>{t("colorTool.labels.object_type")}</dt>
              <dd>{selectedCategoryName}</dd>
              {!hideSubtitle && (
                <>
                  <dt>{t("colorTool.labels.selected_object")}</dt>
                  <dd>{selectedObjectName}</dd>
                </>
              )}
            </Styled.Subtitle>
          )}
          {!hasMultipleDatasets && !hideSubtitle && (
            <Styled.Subtitle>
              <dt>{t("colorTool.labels.object")}</dt>
              <dd>{selectedObjectName}</dd>
            </Styled.Subtitle>
          )}
        </>
      )}
      {!hideControls && (
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
      {selectedObjectName && !hideControls && (
        <Styled.ResetButton
          disabled={isDisabled || !isResetButtonActive(selectedData)}
          onClick={handleReset}
          icon="Reset"
        >
          {t("colorTool.actions.reset")}
        </Styled.ResetButton>
      )}
      {caption && <Styled.Caption>{caption}</Styled.Caption>}
    </Styled.WidgetContainer>
  );
};

ColorTool.displayName = "Widgets.ColorTool";

export default ColorTool;
