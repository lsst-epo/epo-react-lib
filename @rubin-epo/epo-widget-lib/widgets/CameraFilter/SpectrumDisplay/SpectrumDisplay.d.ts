import { FunctionComponent } from "react";
import { Filter } from "../data";
interface SpectrumDisplayProps {
    min: number;
    max: number;
    range: number;
    isCondensed: boolean;
    activeFilter?: Filter;
}
declare const SpectrumDisplay: FunctionComponent<SpectrumDisplayProps>;
export default SpectrumDisplay;
