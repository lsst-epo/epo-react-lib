import { ListboxOption } from "@rubin-epo/epo-react-lib/SelectListbox";
import { FunctionComponent } from "react";
import { ImageFilter } from "../ColorTool";
interface FilterControlProps {
    filter: ImageFilter;
    colorOptions: ListboxOption[];
    isDisabled: boolean;
    onChangeFilterCallback: (filter: ImageFilter) => void;
    buttonLabelledById: string;
    selectLabelledById: string;
    sliderLabelledById: string;
}
declare const FilterControls: FunctionComponent<FilterControlProps>;
export default FilterControls;
