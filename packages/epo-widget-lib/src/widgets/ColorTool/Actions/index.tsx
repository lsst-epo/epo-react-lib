import { FunctionComponent } from "react";
import { AstroObject, ColorToolAction } from "../ColorTool";
import Reset from "./Reset";
import Export from "./Export";
import * as Styled from "./styles";
import { useTranslation } from "react-i18next";
import { areActionsActive } from "../utilities";

interface ActionsProps {
  actions: Array<ColorToolAction>;
  isDisabled: boolean;
  selectedData: AstroObject;
  images: HTMLCollection | undefined;
  width: number;
  height: number;
  selectionCallback: (data: AstroObject) => void;
}

const Actions: FunctionComponent<ActionsProps> = ({
  actions,
  isDisabled,
  width,
  height,
  selectedData,
  selectionCallback,
  images,
}) => {
  const { t } = useTranslation();
  const { filters, name: filename } = selectedData;

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
                {...{ filters, width, height, images, filename }}
              >
                Export
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
