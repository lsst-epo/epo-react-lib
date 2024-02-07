import { FunctionComponent } from "react";
import { AstroObject, ColorToolAction } from "../ColorTool";
interface ActionsProps {
    actions: Array<ColorToolAction>;
    isDisabled: boolean;
    selectedData: AstroObject;
    canvas: HTMLCanvasElement | null;
    selectionCallback: (data: AstroObject) => void;
}
declare const Actions: FunctionComponent<ActionsProps>;
export default Actions;
