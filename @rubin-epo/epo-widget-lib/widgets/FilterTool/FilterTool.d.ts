import { FunctionComponent } from "react";
interface FilterToolProps {
    selectionCallback?: (color: FilterColor) => void;
    selectedColor?: FilterColor | "none";
    isDisabled?: boolean;
    id?: string;
    labelledById?: string;
}
type FilterColor = "violet" | "blue" | "green" | "yellow" | "orange" | "red";
declare const FilterTool: FunctionComponent<FilterToolProps>;
export default FilterTool;
