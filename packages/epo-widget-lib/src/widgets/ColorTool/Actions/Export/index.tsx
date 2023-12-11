import { FunctionComponent, PropsWithChildren, useCallback } from "react";
import Button from "@rubin-epo/epo-react-lib/Button";
import { fromCanvas } from "@/lib/reimg";

interface ExportProps {
  canvas: HTMLCanvasElement | null;
  filename: string;
  isDisabled: boolean;
}

const Export: FunctionComponent<PropsWithChildren<ExportProps>> = ({
  canvas,
  filename,
  isDisabled,
  children,
}) => {
  const handleExport = useCallback(() => {
    if (canvas) {
      fromCanvas(canvas).downloadPng(filename);
    }
  }, [canvas]);

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
