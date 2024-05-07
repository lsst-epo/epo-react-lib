import { FunctionComponent, ReactNode, useId } from "react";
import AspectRatio from "@/layout/AspectRatio";
import * as Styled from "./styles";

interface WidgetControlsProps {
  widget: ReactNode;
  controls: (id: string) => ReactNode;
  actions?: ReactNode;
  caption?: ReactNode;
  className?: string;
  isLoading?: boolean;
  isDisplayOnly?: boolean;
}

const WidgetControls: FunctionComponent<WidgetControlsProps> = ({
  widget,
  controls,
  actions,
  caption,
  className,
  isLoading,
  isDisplayOnly,
}) => {
  const controlsId = useId();

  if (isDisplayOnly)
    return (
      <AspectRatio ratio="square">
        {widget}
        {isLoading && <Styled.StackedLoader />}
      </AspectRatio>
    );

  return (
    <AspectRatio
      ratio="landscape"
      medScreenRatio="landscape"
      smallScreenRatio="portrait"
      {...{ className }}
    >
      <Styled.WidgetLayout>
        <Styled.InteractionRow>
          <Styled.Widget>
            {widget}
            {isLoading && <Styled.StackedLoader />}
          </Styled.Widget>
          {caption && (
            <Styled.PortraitCaption>{caption}</Styled.PortraitCaption>
          )}
          {controls && (
            <Styled.Controls id={controlsId}>
              {controls(controlsId)}
            </Styled.Controls>
          )}
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
