import { FunctionComponent, ReactNode } from "react";
import AspectRatio from "../AspectRatio";
import * as Styled from "./styles";

interface WidgetControlsProps {
  widget: ReactNode;
  controls: ReactNode;
  actions?: ReactNode;
  caption?: ReactNode;
}

const WidgetControls: FunctionComponent<WidgetControlsProps> = ({
  widget,
  controls,
  actions,
  caption,
}) => {
  return (
    <AspectRatio
      ratio="landscape"
      medScreenRatio="landscape"
      smallScreenRatio="portrait"
    >
      <Styled.WidgetLayout>
        <Styled.WidgetSlot ratio="square">{widget}</Styled.WidgetSlot>
        <Styled.ControlsSlot>{controls}</Styled.ControlsSlot>
        <Styled.ActionsSlot>{actions}</Styled.ActionsSlot>
        <Styled.CaptionSlot>{caption}</Styled.CaptionSlot>
      </Styled.WidgetLayout>
    </AspectRatio>
  );
};

WidgetControls.displayName = "Layouts.WidgetControls";

export default WidgetControls;
