import { FunctionComponent, ImgHTMLAttributes } from "react";
import { ImageShape, srcType } from "@/types/image";
import * as Styled from "./styles";
import { stringifySizes, stringifySrcSet } from "./utils";

export { type ImageShape };

export interface ImageProps {
  image: ImageShape;
  className?: string;
  title?: string;
}

const Image: FunctionComponent<ImageProps> = ({ image, title, className }) => {
  const {
    url,
    src,
    srcSet = [],
    sizes = [],
    url2x,
    url3x,
    width,
    height,
    altText,
    priority = false,
  } = image;

  const lazyProps: Partial<ImgHTMLAttributes<HTMLImageElement>> = {
    decoding: "async",
    loading: "lazy",
  };
  const lcpProps: Partial<ImgHTMLAttributes<HTMLImageElement>> = {
    decoding: "async",
    loading: "eager",
  };

  const legacySrcSet: Array<srcType> = [url2x, url3x]
    .filter((url): url is string => url !== undefined)
    .map((src, i) => {
      return { src, size: `${i + 1}x` };
    });

  const priorityProps = priority ? lcpProps : lazyProps;

  const fullSrcSet = [...srcSet, ...legacySrcSet];

  if (typeof width === "number") {
    fullSrcSet.push({ src: src || url, size: width });
  }

  return (
    <Styled.Image
      alt={altText || title}
      srcSet={
        Array.isArray(srcSet)
          ? stringifySrcSet([...srcSet, ...legacySrcSet])
          : srcSet
      }
      sizes={Array.isArray(sizes) ? stringifySizes(sizes) : sizes}
      src={src || url}
      {...{ width, height, className, ...priorityProps }}
    />
  );
};

Image.displayName = "Atomic.Image";

export default Image;
