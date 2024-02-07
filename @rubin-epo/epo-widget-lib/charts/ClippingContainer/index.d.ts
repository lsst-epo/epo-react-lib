import { FunctionComponent, PropsWithChildren } from "react";
export interface ClippingContainerProps {
    x: number;
    y: number;
    width: number;
    height: number;
    className?: string;
}
declare const ClippingContainer: FunctionComponent<PropsWithChildren<ClippingContainerProps>>;
export default ClippingContainer;
