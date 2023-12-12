import { forwardRef } from "react";
import { mergeCanvases } from "../utilities";
import * as Styled from "./styles";

interface CompositeRendererProps {
  layers: Array<HTMLCanvasElement>;
  renderLayers: Array<boolean>;
  width: number;
  height: number;
}

const CompositeRenderer = forwardRef<HTMLCanvasElement, CompositeRendererProps>(
  ({ layers = [], renderLayers = [], width, height }, ref) => {
    const ctx = ref?.current?.getContext("2d");
    const activeLayers = layers.filter((f, i) => f && renderLayers[i]);

    if (ctx) {
      ctx.clearRect(0, 0, width, height);
      mergeCanvases(ctx, activeLayers, width, height);
    }

    return layers.length > 0 ? (
      <Styled.Image ref={ref} role="img" {...{ width, height }} />
    ) : null;
  }
);

CompositeRenderer.displayName = "Widgets.ColorTool.CompositeRenderer";

export default CompositeRenderer;
