import { FunctionComponent } from "react";
type FilterColor = "violet" | "blue" | "green" | "yellow" | "orange" | "red";
interface FilterToolProps {
    selectionCallback?: (color: FilterColor) => void;
    selectedColor?: FilterColor | "none";
    isDisabled?: boolean;
    id?: string;
    labelledById?: string;
}
declare const FilterTool: FunctionComponent<FilterToolProps>;
export default FilterTool;
