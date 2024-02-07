import { FunctionComponent } from "react";
import { Source } from '../../../types/astro';
export interface PointSelectorProps {
    width: number;
    height: number;
    id?: string;
    sources: Source[];
    selectedSource: string[];
    onSelectCallback: (id?: string) => void;
}
declare const PointSelector: FunctionComponent<PointSelectorProps>;
export default PointSelector;
