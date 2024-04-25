import { FunctionComponent } from "react";
import { Filter } from "../data";
interface FilterRangesProps {
    filters: Array<Required<Filter>>;
    min: number;
    spectrumRange: number;
}
declare const CondensedFilterRanges: FunctionComponent<FilterRangesProps>;
export default CondensedFilterRanges;
