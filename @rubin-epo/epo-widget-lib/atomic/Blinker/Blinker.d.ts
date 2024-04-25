import { FunctionComponent, PropsWithChildren } from "react";
import { ImageShape } from "@rubin-epo/epo-react-lib/Image";
export interface BlinkerProps {
    images: ImageShape[];
    activeIndex: number;
    autoplay?: boolean;
    loop?: boolean;
    interval?: number;
    blinkCallback?: (activeIndex: number) => void;
    loadedCallback?: () => void;
    className?: string;
    showControls?: boolean;
}
declare const Blinker: FunctionComponent<PropsWithChildren<BlinkerProps>>;
export default Blinker;
