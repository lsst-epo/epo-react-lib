import { FunctionComponent, PropsWithChildren } from "react";
export interface ViewportProps {
    innerWidth: number;
    innerHeight: number;
    outerWidth: number;
    outerHeight: number;
    x: number;
    y: number;
}
declare const Viewport: FunctionComponent<PropsWithChildren<ViewportProps>>;
export default Viewport;
