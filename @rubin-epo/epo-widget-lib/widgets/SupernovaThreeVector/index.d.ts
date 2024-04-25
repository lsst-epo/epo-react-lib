import { FunctionComponent } from "react";
import { ImageShape } from "@rubin-epo/epo-react-lib/Image";
import { HistogramData } from '../../types/charts';
import { SkymapObject } from "./Skymap";
interface SupernovaThreeVectorProps {
    histogramData: HistogramData;
    binnedImages: Array<ImageShape>;
    step: number;
    userData: Array<SkymapObject>;
}
declare const SupernovaThreeVector: FunctionComponent<SupernovaThreeVectorProps>;
export default SupernovaThreeVector;
