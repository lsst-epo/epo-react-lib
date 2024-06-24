import { FunctionComponent } from "react";
import Image, { ImageShape } from "../Image";
import { srcType } from "@/types/image";
import { stringifySrcSet } from "../Image/utils";

type AlternateSource = {
  type?: string;
  width: number;
  height?: number;
  mediaCondition?: string;
  srcSet: Array<srcType>;
  src: string;
};

export type PictureProps = {
  image: ImageShape;
  sources: Array<AlternateSource>;
  className?: string;
};

const Picture: FunctionComponent<PictureProps> = ({
  className,
  image,
  sources = [],
}) => {
  return (
    <picture {...{ className }}>
      {sources.map(({ src, srcSet, mediaCondition, width, ...props }, i) => {
        return (
          <source
            key={i}
            srcSet={stringifySrcSet([...srcSet, { src, size: width }])}
            media={mediaCondition}
            {...{ width, ...props }}
          />
        );
      })}
      <Image {...{ image }} />
    </picture>
  );
};

Picture.displayName = "Atomic.Picture";

export default Picture;
