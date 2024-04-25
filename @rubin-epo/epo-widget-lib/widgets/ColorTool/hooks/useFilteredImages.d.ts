import { ImageShape } from "@rubin-epo/epo-react-lib/Image";
import { ImageFilter } from "../ColorTool";
interface useFilteredImagesProps {
    images: Array<ImageShape>;
    filters: Array<ImageFilter>;
}
declare const useFilteredImages: ({ images, filters, }: useFilteredImagesProps) => [Array<HTMLCanvasElement>, boolean];
export default useFilteredImages;
