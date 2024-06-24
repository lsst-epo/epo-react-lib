import { ImageShape, srcType } from "@/types/image";
import { FunctionComponent, ImgHTMLAttributes } from "react";
import * as Styled from "./styles";
import { stringifySizes, stringifySrcSet } from "./utils";

export type { ImageShape };

export interface ImageProps {
  image: ImageShape;
  className?: string;
  title?: string;
}

const Image: FunctionComponent<ImageProps> = ({ image, title, className }) => {
  const {
    url: src,
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
    decoding: "sync",
    loading: "eager",
  };

  const legacySrcSet: Array<srcType> = [url2x, url3x]
    .filter((url): url is string => url !== undefined)
    .map((src, i) => {
      return { src, size: `${i + 1}x` };
    });

  const priorityProps = priority ? lcpProps : lazyProps;

  return (
    <Styled.Image
      alt={altText || title}
      srcSet={stringifySrcSet([
        ...srcSet,
        ...legacySrcSet,
        { src, size: width },
      ])}
      sizes={stringifySizes(sizes)}
      {...{ src, width, height, className, ...priorityProps }}
    />
  );
};

Image.displayName = "Atomic.Image";

export default Image;
