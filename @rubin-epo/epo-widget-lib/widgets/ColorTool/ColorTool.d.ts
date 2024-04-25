import { FunctionComponent } from "react";
import { ListboxOption } from "@rubin-epo/epo-react-lib/SelectListbox";
export interface ImageFilter {
    label: string;
    defaultColor?: string;
    color?: string;
    active: boolean;
    image: string;
    isDisabled: boolean;
    value: number;
    defaultValue?: number;
    min: number;
    max: number;
    brightness?: number;
}
export interface AstroObject {
    name: string;
    filters: ImageFilter[];
}
export interface AstroCategory {
    type: string;
    objects: AstroObject[];
}
export type ColorToolAction = "reset" | "export" | "save";
interface ColorToolConfig {
    actions?: Array<ColorToolAction>;
    /** pixel width of the images in the tool */
    width?: number;
    /** pixel height of the images in the tool */
    height?: number;
    hideSubtitle?: boolean;
}
interface ColorToolProps {
    selectionCallback: (selectedData: AstroObject) => void;
    data: AstroCategory[];
    selectedData: AstroObject;
    objectOptions?: ListboxOption[];
    colorOptions?: ListboxOption[];
    isDisabled?: boolean;
    isDisplayOnly?: boolean;
    config?: ColorToolConfig;
    className?: string;
}
declare const ColorTool: FunctionComponent<ColorToolProps>;
export default ColorTool;
