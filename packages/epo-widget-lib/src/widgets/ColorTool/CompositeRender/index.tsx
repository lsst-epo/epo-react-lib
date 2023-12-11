import { forwardRef } from "react";

interface CompositeRendererProps {
  layers: Array<HTMLCanvasElement>;
  renderLayers: Array<boolean>;
  globalCompositeOperation?: GlobalCompositeOperation;
  width: number;
  height: number;
}

const CompositeRenderer = forwardRef<HTMLCanvasElement, CompositeRendererProps>(
  (
    {
      layers = [],
      renderLayers = [],
      globalCompositeOperation = "source-over",
      width,
      height,
    },
    ref
  ) => {
    const ctx = ref?.current?.getContext("2d");

    if (ctx) {
      ctx.canvas.width = width;
      ctx.canvas.height = height;
      ctx.globalCompositeOperation = globalCompositeOperation;

      layers.forEach((layer, i) => {
        if (renderLayers[i]) {
          ctx.drawImage(layer, 0, 0, width, height);
        }
      });
    }

    return layers.length > 0 ? (
      <canvas ref={ref} role="img" {...{ width, height }} />
    ) : null;
  }
);

CompositeRenderer.displayName = "Widgets.ColorTool.CompositeRenderer";

export default CompositeRenderer;
