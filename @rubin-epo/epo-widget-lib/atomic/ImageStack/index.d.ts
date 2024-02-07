import { CSSProperties, FunctionComponent } from "react";
import { ImageShape } from "@rubin-epo/epo-react-lib/Image";
export interface ImageStackProps {
    images: Array<ImageShape>;
    visible?: number | Array<boolean>;
    describedById?: string;
    loadCallback?: () => void;
    mixBlendMode?: CSSProperties["mixBlendMode"];
    className?: string;
    width?: number;
    height?: number;
    showBackdrop?: boolean;
    showLoader?: boolean;
}
declare const ImageStack: FunctionComponent<ImageStackProps>;
export default ImageStack;
