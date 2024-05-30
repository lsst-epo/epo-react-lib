import { FunctionComponent, ReactNode } from "react";
import AspectRatio, { Ratios } from "@/layout/AspectRatio";
import * as Styled from "./styles";

interface WidgetControlsProps {
  widget: ReactNode;
  controls: ReactNode;
  ratio?: Ratios;
  controlsId?: string;
  actions?: ReactNode;
  caption?: ReactNode;
  className?: string;
  isLoading?: boolean;
  isDisplayOnly?: boolean;
}

const WidgetControls: FunctionComponent<WidgetControlsProps> = ({
  widget,
  ratio = { landscape: 16 / 9, portrait: 9 / 16 },
  controls,
  actions,
  caption,
  controlsId,
  className,
  isLoading,
  isDisplayOnly,
}) => {
  if (isDisplayOnly)
    return (
      <AspectRatio ratio={1}>
        {widget}
        {isLoading && <Styled.StackedLoader />}
      </AspectRatio>
    );

  return (
    <AspectRatio {...{ className, ratio }}>
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
            <Styled.Controls id={controlsId}>{controls}</Styled.Controls>
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
