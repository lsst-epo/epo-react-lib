import { FunctionComponent } from "react";
import { ScreenreaderText } from "@/styles/utils";
import * as Styled from "./styles";

interface ColorSwatchProps {
  classes?: string;
  content?: string;
  color: string;
  large?: boolean;
}

const ColorSwatch: FunctionComponent<ColorSwatchProps> = ({
  classes,
  content,
  color,
  large = false,
}) => (
  <span className={classes}>
    <Styled.ColorSwatch {...{ large, color }} data-testid="color-swatch" />
    <ScreenreaderText>{content || color}</ScreenreaderText>
  </span>
);

ColorSwatch.displayName = "Atomic.ColorSwatch";

export default ColorSwatch;
