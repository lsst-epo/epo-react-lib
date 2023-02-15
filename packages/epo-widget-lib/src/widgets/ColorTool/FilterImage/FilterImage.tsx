import { FunctionComponent, useRef, useEffect } from "react";

interface FilterImageProps {
  className?: string;
  height?: number;
  width?: number;
  image: string;
  color?: string;
  brightness?: number;
}

const FilterImage: FunctionComponent<FilterImageProps> = ({
  width = 600,
  height = 600,
  className,
  image,
  color = "transparent",
  brightness = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const background = new Image();

  const updateColor = (
    ctx: CanvasRenderingContext2D,
    color: string,
    canvasWidth: number,
    canvasHeight: number
  ) => {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  const updateCanvas = (image: string, color: string) => {
    const ctx = canvasRef.current?.getContext("2d");

    if (ctx) {
      const { width: canvasWidth, height: canvasHeight } = ctx.canvas;
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.globalCompositeOperation = "multiply";

      background.onload = () => {
        ctx?.drawImage(background, 0, 0, canvasWidth, canvasHeight);
        updateColor(ctx, color, canvasWidth, canvasHeight);
      };

      background.src = image;
    }
  };

  useEffect(() => {
    updateCanvas(image, color);
  }, [color, image]);

  return (
    <canvas
      ref={canvasRef}
      style={{ filter: `brightness(${brightness}) contrast(1.3)` }}
      role="img"
      {...{ className, width, height }}
    />
  );
};

FilterImage.displayName = "Widgets.ColorTool.FilterImage";

export default FilterImage;
