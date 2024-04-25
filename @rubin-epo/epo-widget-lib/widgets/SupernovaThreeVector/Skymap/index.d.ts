import { FunctionComponent } from "react";
import { ImageShape } from "@rubin-epo/epo-react-lib/Image";
export interface SkymapObject {
    id: string;
    lat: number;
    long: number;
    distance: number;
    magnitude: number;
}
export interface SkymapProps {
    objects?: Array<SkymapObject>;
    images: Array<ImageShape>;
    visibleImages: Array<boolean>;
    describedById?: string;
    className?: string;
}
declare const Skymap: FunctionComponent<SkymapProps>;
export default Skymap;
