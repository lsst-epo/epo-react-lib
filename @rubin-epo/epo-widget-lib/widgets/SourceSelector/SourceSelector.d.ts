import { FunctionComponent } from "react";
import { Alert, Source } from '../../types/astro';
interface BlinkConfig {
    autoplay?: boolean;
    loop?: boolean;
    duration?: number;
}
interface SourceSelectorProps {
    width?: number;
    height?: number;
    sources: Source[];
    alerts: Alert[];
    selectedSource?: string[];
    activeAlertIndex?: number;
    alertChangeCallback?: (index: number) => void;
    selectionCallback?: (data: string[]) => void;
    blinkConfig?: BlinkConfig;
    isDisplayOnly?: boolean;
    className?: string;
}
declare const SourceSelector: FunctionComponent<SourceSelectorProps>;
export default SourceSelector;
