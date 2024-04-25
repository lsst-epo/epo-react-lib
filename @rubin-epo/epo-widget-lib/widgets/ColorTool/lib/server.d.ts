import { ExportFormat } from "skia-canvas";
import { ImageFilter } from "../ColorTool";
/** server safe renderer */
declare const getFilteredImageBase64: (filters?: Array<ImageFilter>, format?: ExportFormat, width?: number, height?: number) => Promise<string>;
export default getFilteredImageBase64;
