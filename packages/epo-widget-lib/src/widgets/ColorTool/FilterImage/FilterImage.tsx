import "context-filter-polyfill";
import { FunctionComponent, HTMLAttributes, useRef } from "react";
import useImage from "@/hooks/useImage";
import { isStyleSupported } from "../utilities";
import * as Styled from "../styles";

export interface FilterImageProps extends HTMLAttributes<HTMLCanvasElement> {
  className?: string;
  height?: number;
  width?: number;
  url: string;
  color?: string;
  brightness?: number;
  active: boolean;
  filters?: {
    [key: string]: number | undefined;
  };
  onLoadCallback?: () => void;
}

const FilterImage: FunctionComponent<FilterImageProps> = ({
  width = 600,
  height = 600,
  className,
  url,
  color = "transparent",
  filters = {
    brightness: 1,
  },
  active,
  onLoadCallback,
}) => {
  const [image, status] = useImage({
    url,
    crossOrigin: "anonymous",
    onLoadCallback,
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctx = canvasRef.current?.getContext("2d");

  const updateColor = (
    ctx: CanvasRenderingContext2D,
    color: string,
    canvasWidth: number,
    canvasHeight: number
  ) => {
    const safeColor = isStyleSupported("color", color) ? color : "transparent";

    ctx.fillStyle = safeColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  const getFilters = (filters: {
    [key: string]: number | undefined;
  }): string => {
    return Object.keys(filters).reduce((prev, key, i) => {
      return (prev += `${i > 0 ? " " : ""}${key}(${filters[key]})`);
    }, "");
  };

  if (ctx && image && status === "loaded") {
    const { width: canvasWidth, height: canvasHeight } = ctx.canvas;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.globalCompositeOperation = "multiply";
    ctx.filter = getFilters(filters);
    ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);

    updateColor(ctx, color, canvasWidth, canvasHeight);
  }

  return (
    <Styled.Image
      ref={canvasRef}
      role="img"
      style={{
        "--image-visibility": active ? "visible" : "hidden",
        "--image-opacity": active ? 1 : 0,
      }}
      {...{ className, width, height }}
    />
  );
};

FilterImage.displayName = "Widgets.ColorTool.FilterImage";

export default FilterImage;
