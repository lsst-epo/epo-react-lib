import { Canvas, loadImage, ExportFormat } from "skia-canvas";
import { ImageFilter } from "../ColorTool";
import { getFilters, updateColor, mergeCanvases } from "./canvas";

async function getFilteredCanvas(
  filters: Array<ImageFilter> = [],
  width: number = 600,
  height: number = 600
) {
  const activeFilters = filters.filter(({ active }) => active);

  const filteredImages = await Promise.all(
    activeFilters.map(
      async ({ image: url, color = "transparent", brightness = 1 }) => {
        const image = await loadImage(url);
        const canvas = new Canvas(width, height);
        const ctx = canvas.getContext("2d");

        ctx.clearRect(0, 0, width, height);

        ctx.filter = getFilters({ brightness, contrast: 1.3 });

        ctx.drawImage(image, 0, 0, width, height);

        updateColor(ctx as any, color, width, height);

        return canvas;
      }
    )
  );

  const canvas = new Canvas(width, height);
  const ctx = canvas.getContext("2d");

  mergeCanvases(ctx as any, filteredImages as any, width, height);

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

  return canvas.toDataURL(format, { matte: "#000000" });
};

export default getFilteredImageBase64;
