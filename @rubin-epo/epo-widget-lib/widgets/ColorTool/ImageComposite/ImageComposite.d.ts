/// <reference types="react" />
import { ImageFilter } from "../ColorTool";
interface ImageCompositeProps {
    filters: ImageFilter[];
    width: number;
    height: number;
    selectedObjectName: string;
    className?: string;
}
declare const ImageComposite: import("react").ForwardRefExoticComponent<ImageCompositeProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLCanvasElement>>;
export default ImageComposite;
