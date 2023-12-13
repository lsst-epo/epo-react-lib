import {
  Canvas,
  CanvasRenderingContext2D,
  loadImage,
  ExportFormat,
} from "skia-canvas";
import { ImageFilter } from "./ColorTool";
import { getFilters } from "./utilities";

const updateColor = (
  ctx: CanvasRenderingContext2D,
  color: string,
  canvasWidth: number,
  canvasHeight: number
) => {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
};

const mergeCanvases = (
  context: CanvasRenderingContext2D,
  layers: Array<Canvas> = [],
  width: number,
  height: number,
  globalCompositeOperation: GlobalCompositeOperation = "screen"
) => {
  context.globalCompositeOperation = globalCompositeOperation;

  layers.forEach((layer) => {
    context.drawCanvas(layer, 0, 0, width, height);
  });
};

async function getFilteredCanvas(
  filters: Array<ImageFilter> = [],
  width: number = 600,
  height: number = 600
) {
  const activeFilters = filters.filter(({ active }) => active);

  const filteredImages = await Promise.all(
    activeFilters.map(
      async ({ image: url, color = "transparent", brightness }) => {
        const canvas = new Canvas(width, height);
        const ctx = canvas.getContext("2d");

        const image = await loadImage(url);
        ctx.drawImage(image, 0, 0, width, height);

        ctx.globalCompositeOperation = "multiply";
        ctx.filter = getFilters({ brightness, contrast: 1.3 });

        updateColor(ctx, color, width, height);

        return canvas;
      }
    )
  );

  const canvas = new Canvas(width, height);
  const ctx = canvas.getContext("2d");

  mergeCanvases(ctx, filteredImages, width, height);

  return canvas;
}

/** server safe renderer */
const getFilteredImageBase64 = async (
  filters: Array<ImageFilter> = [],
  format: ExportFormat = "png",
  width: number = 600,
  height: number = 600
) => {
  const canvas = await getFilteredCanvas(filters, width, height);

  return canvas.toDataURL(format);
};

export default getFilteredImageBase64;
