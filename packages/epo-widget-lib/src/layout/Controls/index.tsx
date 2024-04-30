import { FunctionComponent, ReactNode } from "react";
import AspectRatio from "@/layout/AspectRatio";
import * as Styled from "./styles";

interface WidgetControlsProps {
  widget: ReactNode;
  controls: ReactNode;
  actions?: ReactNode;
  caption?: ReactNode;
  className?: string;
}

const WidgetControls: FunctionComponent<WidgetControlsProps> = ({
  widget,
  controls,
  actions,
  caption,
  className,
}) => {
  return (
    <AspectRatio
      ratio="landscape"
      medScreenRatio="landscape"
      smallScreenRatio="portrait"
      {...{ className }}
    >
      <Styled.WidgetLayout>
        <Styled.InteractionRow>
          <Styled.Widget>{widget}</Styled.Widget>
          {caption && (
            <Styled.PortraitCaption>{caption}</Styled.PortraitCaption>
          )}
          {controls && <Styled.Controls>{controls}</Styled.Controls>}
        </Styled.InteractionRow>
        {actions && <Styled.Actions>{actions}</Styled.Actions>}
        {caption && (
          <Styled.LandscapeCaption>{caption}</Styled.LandscapeCaption>
        )}
      </Styled.WidgetLayout>
    </AspectRatio>
  );
};

WidgetControls.displayName = "Layouts.WidgetControls";

export default WidgetControls;
