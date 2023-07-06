import { FunctionComponent } from "react";
import { ScreenreaderText } from "@/styles/utils";
import * as Styled from "./styles";

interface ColorSwatchProps {
  className?: string;
  content?: string;
  color: string;
  size?: "small" | "normal" | "large";
}

const ColorSwatch: FunctionComponent<ColorSwatchProps> = ({
  className,
  content,
  color,
  size = "normal",
}) => (
  <span className={className}>
    <Styled.ColorSwatch {...{ size, color }} data-testid="color-swatch" />
    <ScreenreaderText>{content || color}</ScreenreaderText>
  </span>
);

ColorSwatch.displayName = "Atomic.ColorSwatch";

export default ColorSwatch;
