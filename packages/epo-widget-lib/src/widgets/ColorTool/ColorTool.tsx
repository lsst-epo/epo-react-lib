import { FunctionComponent, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { getDataFiltersByName } from "./utilities";
import * as Styled from "./styles";
import SelectListbox, {
  ListboxOption,
} from "@rubin-epo/epo-react-lib/SelectListbox";
import FilterControls from "./FilterControls";
import ImageComposite from "./ImageComposite";
import Actions from "./Actions";

export interface ImageFilter {
  label: string;
  defaultColor?: string;
  color?: string;
  active: boolean;
  image: string;
  isDisabled: boolean;
  value?: number;
  defaultValue?: number;
  min: number;
  max: number;
  brightness?: number;
}

export interface AstroObject {
  name: string;
  filters: ImageFilter[];
}

export interface AstroCategory {
  type: string;
  objects: AstroObject[];
}

export type ColorToolAction = "reset" | "export" | "save";

interface ColorToolConfig {
  actions: Array<ColorToolAction>;
  /** pixel width of the images in the tool */
  width: number;
  /** pixel height of the images in the tool */
  height: number;
  hideSubtitle?: boolean;
}

interface ColorToolProps {
  selectionCallback: (selectedData: AstroObject) => void;
  data: AstroCategory[];
  selectedData: AstroObject;
  objectOptions?: ListboxOption[];
  colorOptions?: ListboxOption[];
  isDisabled?: boolean;
  isDisplayOnly?: boolean;
  config?: ColorToolConfig;
}

const ColorTool: FunctionComponent<ColorToolProps> = ({
  data,
  objectOptions = [],
  selectedData,
  colorOptions = [],
  selectionCallback,
  isDisabled = false,
  isDisplayOnly = false,
  config = {
    actions: ["reset"],
    width: 600,
    height: 600,
    hideSubtitle: false,
  },
}) => {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleFilterChange = useCallback(
    (updatedFilter: ImageFilter) => {
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
    },
    [selectedData, selectionCallback]
  );

  const handleObjectSelection = useCallback(
    (value: string | null) => {
      if (value === null) return;

      return (
        selectionCallback &&
        selectionCallback({
          name: value,
          filters: getDataFiltersByName(data, value),
        })
      );
    },
    [selectionCallback, data]
  );

  const hasMultipleDatasets = data.length > 1;
  const { actions, width, height, hideSubtitle } = config;
  const { t } = useTranslation();
  const selectPlaceholder = t("colorTool.actions.select_an_object");
  const { filters, name: selectedObjectName } = selectedData;

  return (
    <Styled.WidgetContainer>
      <Styled.WidgetLayout
        style={{
          "--controls-row": isDisplayOnly ? "'image image'" : undefined,
          "--image-width": typeof width === "number" ? `${width}px` : width,
          "--image-height": typeof height === "number" ? `${height}px` : height,
        }}
      >
        {selectedObjectName && (isDisplayOnly || hasMultipleDatasets) && (
          <Styled.Title>
            {!hideSubtitle && (
              <>
                <dt>{t("colorTool.labels.object")}</dt>
                <dd>{selectedObjectName}</dd>
              </>
            )}
            {}
          </Styled.Title>
        )}
        {!isDisplayOnly && (
          <Styled.ControlsContainer>
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
        <ImageComposite
          ref={imageRef}
          {...{ filters, width, height, selectedObjectName }}
        >
          {hasMultipleDatasets && (
            <Styled.SelectionContainer>
              <SelectListbox
                id="astroObjectSelector"
                placeholder={selectPlaceholder}
                options={objectOptions}
                onChangeCallback={handleObjectSelection}
                value={selectedObjectName}
                isDisabled={isDisabled}
                width="100%"
                maxWidth="100%"
              />
            </Styled.SelectionContainer>
          )}
        </ImageComposite>
        {!isDisplayOnly && (
          <Actions
            images={imageRef.current?.getElementsByTagName("canvas")}
            {...{
              actions,
              selectedData,
              width,
              height,
              isDisabled,
              selectionCallback,
            }}
          />
        )}
      </Styled.WidgetLayout>
    </Styled.WidgetContainer>
  );
};

ColorTool.displayName = "Widgets.ColorTool";

export default ColorTool;
