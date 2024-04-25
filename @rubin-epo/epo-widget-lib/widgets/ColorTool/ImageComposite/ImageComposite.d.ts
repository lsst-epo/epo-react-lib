/// <reference types="react" />
import { ImageFilter } from "../ColorTool";
import { ImageShape } from "@rubin-epo/epo-react-lib/Image";
interface ImageCompositeProps {
    filters: ImageFilter[];
    images: Array<ImageShape>;
    width: number;
    height: number;
    selectedObjectName: string;
    isDisplayOnly?: boolean;
    className?: string;
}
declare const ImageComposite: import("react").ForwardRefExoticComponent<ImageCompositeProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLCanvasElement>>;
export default ImageComposite;
