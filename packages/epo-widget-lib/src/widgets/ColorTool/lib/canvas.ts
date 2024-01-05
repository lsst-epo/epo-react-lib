import "context-filter-polyfill";
import { isStyleSupported } from "./utils";

const resetComposite = (ctx: CanvasRenderingContext2D) => {
  ctx.globalCompositeOperation = "source-over";
};

export const getFilters = (filters: {
  [key: string]: number | undefined;
}): string => {
  return Object.keys(filters).reduce((prev, key, i) => {
    if (filters[key] !== undefined) {
      return (prev += `${i > 0 ? " " : ""}${key}(${
        (filters[key] as number) * 100
      }%)`);
    }
    return "";
  }, "");
};

export const updateColor = (
  ctx: CanvasRenderingContext2D,
  color: string,
  width: number,
  height: number
) => {
  ctx.globalCompositeOperation = "multiply";
  const safeColor = isStyleSupported("color", color) ? color : "transparent";

  ctx.fillStyle = safeColor;
  ctx.fillRect(0, 0, width, height);

  resetComposite(ctx);
};

export const mergeCanvases = (
  ctx: CanvasRenderingContext2D,
  layers: Array<HTMLCanvasElement> = [],
  width: number,
  height: number
) => {
  ctx.globalCompositeOperation = "screen";

  layers.forEach((layer) => {
    ctx.drawImage(layer, 0, 0, width, height);
  });

  resetComposite(ctx);
};
