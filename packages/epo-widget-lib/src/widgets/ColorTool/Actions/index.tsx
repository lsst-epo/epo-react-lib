import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import * as Button from "@/atomic/Button";
import { AstroObject, ColorToolAction, ImageFilter } from "..";
import Export from "./Export";
import { areActionsActive, getBrightnessValue } from "../lib/utils";

interface ActionsProps {
  actions: Array<ColorToolAction>;
  isDisabled: boolean;
  selectedData: AstroObject;
  canvas: HTMLCanvasElement | null;
  selectionCallback: (data: AstroObject) => void;
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

const Actions: FunctionComponent<ActionsProps> = ({
  actions,
  isDisabled,
  selectedData,
  selectionCallback,
  canvas,
}) => {
  const { t } = useTranslation();
  const { name: filename, filters } = selectedData;

  const actionsDisabled = isDisabled || !areActionsActive(selectedData);

  return (
    <>
      {actions.map((action) => {
        switch (action) {
          case "reset":
            return (
              <Button.Reset
                key={action}
                isDisabled={actionsDisabled}
                onResetCallback={() =>
                  selectionCallback &&
                  selectionCallback({
                    ...selectedData,
                    filters: resetFilters(filters),
                  })
                }
              />
            );
          case "export":
            return (
              <Export
                key={action}
                isDisabled={actionsDisabled}
                {...{ canvas, filename }}
              >
                {t("colorTool.actions.export")}
              </Export>
            );

          case "save":
            return null;

          default:
            return null;
        }
      })}
    </>
  );
};

Actions.displayName = "Widgets.ColorTool.Actions";

export default Actions;
