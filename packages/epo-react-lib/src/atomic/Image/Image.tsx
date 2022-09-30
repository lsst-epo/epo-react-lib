import { FunctionComponent } from "react";
import * as Styled from "./styles";

export interface ImageProps {
  image: {
    altText?: string;
    width?: number;
    height?: number;
    url: string;
    url2x?: string;
    url3x?: string;
    thumb?: string;
    thumb2x?: string;
  };
  className?: string;
  title?: string;
  [key: string]: any;
}

const Image: FunctionComponent<ImageProps> = ({ image, title, ...props }) => {
  const { url, url2x, url3x, width, height, altText } = image;

  const urls = [url, url2x, url3x]
    .filter((url) => url !== undefined)
    .map((url, i) => `${url} ${i + 1}x`)
    .join(", ");

  return (
    <Styled.Image
      alt={altText || title}
      height={height}
      src={url}
      srcSet={urls}
      width={width}
      {...props}
    />
  );
};

Image.displayName = "Atomic.Image";

export default Image;
