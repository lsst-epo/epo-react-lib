import { FunctionComponent } from "react";
import { SkymapObject } from "../Skymap";
interface LiveLabelProps {
    id: string;
    supernovaCount: number;
    objects: Array<SkymapObject>;
    min: number;
    max: number;
}
declare const LiveLabel: FunctionComponent<LiveLabelProps>;
export default LiveLabel;
