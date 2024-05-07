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
  const [points, setPoints] = useState<string>();

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

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");

    if (context) {
      context.clearRect(0, 0, width, height);
      context.lineWidth = 1;
      context.strokeStyle = "green";

      data.forEach((point) => drawPoint(point, context));

      canvas.toBlob((blob) => {
        if (blob) {
          setPoints(URL.createObjectURL(blob));
          onLoadedCallback && onLoadedCallback();
        }
      });
    }

    return () => {
      if (points) {
        URL.revokeObjectURL(points);
      }
    };
  }, []);

  return (
    <image
      href={points}
      aria-description={label}
      x={0}
      y={0}
      {...{ width, height }}
    />
  );
};

CanvasPoints.displayName = "Charts.Canvas.Points";

export default CanvasPoints;
