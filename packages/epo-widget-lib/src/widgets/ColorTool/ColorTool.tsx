import { FunctionComponent, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { getDataFiltersByName } from "./lib/utils";
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
  value: number;
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
  actions?: Array<ColorToolAction>;
  /** pixel width of the images in the tool */
  width?: number;
  /** pixel height of the images in the tool */
  height?: number;
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
  className?: string;
}

const ColorTool: FunctionComponent<ColorToolProps> = ({
  data,
  objectOptions = [],
  selectedData,
  colorOptions = [],
  selectionCallback,
  isDisabled = false,
  isDisplayOnly = false,
  className,
  config = {
    actions: ["reset"],
    width: 600,
    height: 600,
    hideSubtitle: false,
  },
}) => {
  const defaultConfig = {
    actions: ["reset"],
    width: 600,
    height: 600,
    hideSubtitle: false,
  };

  const imageRef = useRef<HTMLCanvasElement>(null);
  const { t } = useTranslation();

  const { filters, name: selectedObjectName } = selectedData;
  const { actions, width, height, hideSubtitle } = {
    ...defaultConfig,
    ...config,
  };

  if (isDisplayOnly) {
    return (
      <ImageComposite
        ref={imageRef}
        {...{ filters, width, height, selectedObjectName, className }}
      />
    );
  }

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

  const handleObjectSelection = (value: string | null) => {
    if (!value) return;

    return (
      selectionCallback &&
      selectionCallback({
        name: value,
        filters: getDataFiltersByName(data, value),
      })
    );
  };

  const hasMultipleDatasets = data.length > 1;
  const selectPlaceholder = t("colorTool.actions.select_an_object");

  return (
    <Styled.WidgetContainer className={className}>
      <Styled.WidgetLayout
        style={{
          "--image-width": typeof width === "number" ? `${width}px` : width,
          "--image-height": typeof height === "number" ? `${height}px` : height,
        }}
      >
        {selectedObjectName && hasMultipleDatasets && (
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
            filters.map((filter) => {
              const { label, isDisabled: isFilterDisabled } = filter;

              return (
                <FilterControls
                  {...{ filter, colorOptions }}
                  key={`filter-${label}`}
                  isDisabled={isDisabled || isFilterDisabled}
                  onChangeFilterCallback={handleFilterChange}
                  buttonLabelledById="filterLabel"
                  selectLabelledById="colorLabel"
                  sliderLabelledById="intensityLabel"
                />
              );
            })}
        </Styled.ControlsContainer>
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
        <Actions
          actions={actions as ColorToolAction[]}
          canvas={imageRef.current}
          {...{
            selectedData,
            isDisabled,
            selectionCallback,
          }}
        />
      </Styled.WidgetLayout>
    </Styled.WidgetContainer>
  );
};

ColorTool.displayName = "Widgets.ColorTool";

export default ColorTool;
