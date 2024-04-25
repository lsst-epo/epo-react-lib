import { FunctionComponent } from "react";
interface MagnitudeSliderProps {
    yMin: number;
    yMax: number;
    magnitude: number;
    onMagnitudeChangeCallback: (value: number) => void;
    estimatedPeak: number;
    disabled?: boolean;
}
declare const MagnitudeSlider: FunctionComponent<MagnitudeSliderProps>;
export default MagnitudeSlider;
