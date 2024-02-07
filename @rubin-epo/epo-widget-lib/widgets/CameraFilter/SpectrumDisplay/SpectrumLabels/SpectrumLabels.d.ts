import { FunctionComponent } from "react";
import { Band } from '../../../../types/astro';
import { Spectrum } from "../../data";
interface SpectrumLabelsProps {
    spectrums: Spectrum[];
    activeBand?: Band;
    min: number;
    max: number;
    activeMin?: number;
    activeMax?: number;
    isCondensed: boolean;
}
declare const SpectrumLabels: FunctionComponent<SpectrumLabelsProps>;
export default SpectrumLabels;
