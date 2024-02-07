import { FunctionComponent } from "react";
export interface OffscreenFilterProps {
    height?: number;
    width?: number;
    url: string;
    color?: string;
    filters?: {
        [key: string]: number | undefined;
    };
    onLoadCallback?: () => void;
    onChangeCallback?: (canvas: HTMLCanvasElement) => void;
    debug?: boolean;
}
declare const OffscreenFilter: FunctionComponent<OffscreenFilterProps>;
export default OffscreenFilter;
