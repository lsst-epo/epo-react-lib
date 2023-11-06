import { FunctionComponent, PropsWithChildren, useCallback } from "react";
import Button from "@rubin-epo/epo-react-lib/Button";
import { fromCanvas } from "@/lib/reimg";
import { ImageFilter } from "../../ColorTool";

interface ExportProps {
  images?: HTMLCollection;
  filename: string;
  filters: ImageFilter[];
  width: number;
  height: number;
  isDisabled: boolean;
}

const Export: FunctionComponent<PropsWithChildren<ExportProps>> = ({
  images,
  filters,
  filename,
  width,
  height,
  children,
  isDisabled,
}) => {
  const handleExport = useCallback(() => {
    const composite = document.createElement("canvas");
    const ctx = composite.getContext("2d");

    if (images && ctx) {
      ctx.canvas.width = width;
      ctx.canvas.height = height;
      ctx.globalCompositeOperation = "screen";

      Array.from<HTMLCanvasElement>(images as any).forEach((child, i) => {
        if (filters[i].active) {
          ctx.drawImage(child, 0, 0, width, height);
        }
      });
    }

    fromCanvas(composite).downloadPng(filename);
  }, [images, filters]);

  return (
    <Button
      disabled={isDisabled}
      style={{ "--button-text-align": "left" }}
      icon="ArrowUpFromBracket"
      onClick={handleExport}
      isBlock
    >
      {children}
    </Button>
  );
};

Export.displayName = "Widgets.ColorTool.Reset";

export default Export;
