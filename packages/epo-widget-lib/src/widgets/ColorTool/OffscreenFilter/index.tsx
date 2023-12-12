import "context-filter-polyfill";
import { FunctionComponent } from "react";
import useImage from "@/hooks/useImage";
import { getFilters, updateColor } from "../utilities";

export interface OffscreenFilterProps {
  height?: number;
  width?: number;
  url: string;
  color?: string;
  filters?: {
    [key: string]: number | undefined;
  };
  onLoadCallback?: () => void;
  onChangeCallback?: (canvas: HTMLCanvasElement) => void;
  debug?: boolean;
}

const OffscreenFilter: FunctionComponent<OffscreenFilterProps> = ({
  width = 600,
  height = 600,
  url,
  color = "transparent",
  filters = {
    brightness: 1,
  },
  onLoadCallback,
  onChangeCallback,
  debug = false,
}) => {
  const [image, status] = useImage({
    url,
    crossOrigin: "anonymous",
    onLoadCallback,
  });
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (ctx && image && status === "loaded") {
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.clearRect(0, 0, width, height);

    ctx.globalCompositeOperation = "multiply";
    ctx.filter = getFilters(filters);
    ctx.drawImage(image, 0, 0, width, height);

    updateColor(ctx, color, width, height);
    onChangeCallback && onChangeCallback(canvas);
  }

  return debug ? <img src={canvas.toDataURL()} /> : null;
};

OffscreenFilter.displayName = "Widgets.ColorTool.OffscreenFilter";

export default OffscreenFilter;
