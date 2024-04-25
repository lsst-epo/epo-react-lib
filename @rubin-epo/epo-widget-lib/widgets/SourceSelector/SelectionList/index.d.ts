import { FunctionComponent } from "react";
import { SourceType } from '../../../types/astro';
interface SelectionListProps {
    className?: string;
    onRemoveCallback: (id: string) => void;
    sources: Array<{
        type: SourceType;
        id: string;
    }>;
}
declare const SelectionList: FunctionComponent<SelectionListProps>;
export default SelectionList;
