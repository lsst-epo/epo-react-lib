import defaults from "@/charts/defaults";
import { PlotPoint, ScaleFunction } from "@/types/charts";
import { FunctionComponent, useEffect, useState } from "react";

type Props = {
  data: Array<PlotPoint>;
  width: number;
  height: number;
  xScale: ScaleFunction;
  yScale: ScaleFunction;
  onLoadedCallback?: () => void;
  label?: string;
};

const CanvasPoints: FunctionComponent<Props> = ({
  data,
  width,
  height,
  xScale,
  yScale,
  onLoadedCallback,
  label,
}) => {
  const [pointCount, setPointCount] = useState<number>();
  const [renderedPoints, setRenderedPoints] = useState<string>();

  useEffect(() => {
    return () => {
      if (renderedPoints) {
        URL.revokeObjectURL(renderedPoints);
      }
    };
  }, []);

  if (data.length === 0) return null;

  const drawPoint = (point: PlotPoint, context: CanvasRenderingContext2D) => {
    const { stroke, fill, radius, x, y } = {
      ...defaults.canvasPoint,
      ...point,
    };

    const cx = xScale(x);
    const cy = yScale(y);

    context.beginPath();
    context.arc(cx, cy, radius || 6, 0, 2 * Math.PI);
    context.closePath();

    context.fillStyle = fill;
    context.strokeStyle = stroke;
    context.fill();
    context.stroke();
  };

  if (pointCount !== data.length) {
    if (renderedPoints) {
      URL.revokeObjectURL(renderedPoints);
    }

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");

    if (context) {
      context.clearRect(0, 0, width, height);
      context.lineWidth = 1;

      data.forEach((point) => drawPoint(point, context));

      canvas.toBlob((blob) => {
        if (blob) {
          setRenderedPoints(URL.createObjectURL(blob));
          setPointCount(data.length);
          onLoadedCallback && onLoadedCallback();
        }
      });
    }
  }

  return (
    <image
      href={renderedPoints}
      aria-description={label}
      x={0}
      y={0}
      {...{ width, height }}
    />
  );
};

CanvasPoints.displayName = "Charts.Canvas.Points";

export default CanvasPoints;
