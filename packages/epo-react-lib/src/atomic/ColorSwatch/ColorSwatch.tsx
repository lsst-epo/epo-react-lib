import { FunctionComponent } from "react";
import { ScreenreaderText } from "@/styles/utils";
import * as Styled from "./styles";

interface ColorSwatchProps {
  classes?: string;
  content?: string;
  color: string;
  size?: "small" | "normal" | "large";
}

const ColorSwatch: FunctionComponent<ColorSwatchProps> = ({
  classes,
  content,
  color,
  size = "normal",
}) => (
  <span className={classes}>
    <Styled.ColorSwatch {...{ size, color }} data-testid="color-swatch" />
    <ScreenreaderText>{content || color}</ScreenreaderText>
  </span>
);

ColorSwatch.displayName = "Atomic.ColorSwatch";

export default ColorSwatch;
