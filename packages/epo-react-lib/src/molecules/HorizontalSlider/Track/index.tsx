import { FunctionComponent, HTMLProps, RefCallback } from "react";
import * as Styled from "./styles";

interface Props<T = HTMLDivElement> extends HTMLProps<T> {
  state: { index: number; value: number | readonly number[] };
  ref: RefCallback<T>;
}

const Track: FunctionComponent<Props> = ({ style, state, ...props }) => {
  const { index, value } = state;

  const hasDoubleHandles = typeof value === "object" && value.length > 1;
  const hasColor =
    (hasDoubleHandles && index === 1) || (!hasDoubleHandles && index === 0);

  return (
    <Styled.Track
      data-testid={`slider-track-${index}`}
      style={{
        ...style,
        "--opacity-background-track": hasColor ? 1 : 0,
      }}
      {...props}
    />
  );
};

Track.displayName = "Form.HorizontalSlider.Track";

export default Track;
