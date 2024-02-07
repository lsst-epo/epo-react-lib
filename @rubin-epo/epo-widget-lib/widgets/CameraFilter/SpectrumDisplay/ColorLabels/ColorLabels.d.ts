import { FunctionComponent } from "react";
import { VisibleColor } from "../../data";
interface ColorLabelsProps {
    colors: VisibleColor[];
    activeRange: number[];
    isBandSelected: boolean;
    isCondensed: boolean;
}
declare const ColorLabels: FunctionComponent<ColorLabelsProps>;
export default ColorLabels;
