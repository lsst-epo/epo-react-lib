import { FunctionComponent, PropsWithChildren } from "react";
export interface TooltipProps {
    x?: number;
    y?: number;
    visible: boolean;
    offset?: number;
    origin?: string;
    className?: string;
}
declare const Tooltip: FunctionComponent<PropsWithChildren<TooltipProps>>;
export default Tooltip;
