import { FunctionComponent, PropsWithChildren } from "react";
interface ExportProps {
    canvas: HTMLCanvasElement | null;
    filename: string;
    isDisabled: boolean;
}
declare const Export: FunctionComponent<PropsWithChildren<ExportProps>>;
export default Export;
