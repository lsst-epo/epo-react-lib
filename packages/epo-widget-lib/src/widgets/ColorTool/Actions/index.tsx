import { FunctionComponent } from "react";
import { AstroObject, ColorToolAction } from "../ColorTool";
import Reset from "./Reset";
import Export from "./Export";
import * as Styled from "./styles";
import { useTranslation } from "react-i18next";
import { areActionsActive } from "../lib/utils";

interface ActionsProps {
  actions: Array<ColorToolAction>;
  isDisabled: boolean;
  selectedData: AstroObject;
  canvas: HTMLCanvasElement | null;
  selectionCallback: (data: AstroObject) => void;
}

const Actions: FunctionComponent<ActionsProps> = ({
  actions,
  isDisabled,
  selectedData,
  selectionCallback,
  canvas,
}) => {
  const { t } = useTranslation();
  const { name: filename } = selectedData;

  const actionsDisabled = isDisabled || !areActionsActive(selectedData);

  return (
    <Styled.Actions>
      {actions.map((action, i) => {
        switch (action) {
          case "reset":
            return (
              <Reset
                key={i}
                isDisabled={actionsDisabled}
                {...{ selectedData }}
                onResetCallback={(data) =>
                  selectionCallback && selectionCallback(data)
                }
              >
                {t("colorTool.actions.reset")}
              </Reset>
            );
          case "export":
            return (
              <Export
                key={i}
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
    </Styled.Actions>
  );
};

Actions.displayName = "Widgets.ColorTool.Actions";

export default Actions;
