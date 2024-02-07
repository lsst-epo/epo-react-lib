type ImageStatus = "loading" | "loaded" | "failed";
interface useImageProps {
    url: string;
    crossOrigin?: "anonymous" | "use-credentials";
    referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
    onLoadCallback?: () => void;
    onErrorCallback?: () => void;
}
declare function useImage({ url, crossOrigin, referrerpolicy, onLoadCallback, onErrorCallback, }: useImageProps): [undefined | HTMLImageElement, ImageStatus];
export default useImage;
