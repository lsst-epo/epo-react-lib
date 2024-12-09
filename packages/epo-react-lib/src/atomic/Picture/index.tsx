import { FunctionComponent } from "react";
import Image, { ImageShape } from "../Image";
import { srcType } from "@/types/image";
import { stringifySrcSet } from "../Image/utils";

type AlternateSource = {
  type?: string;
  width?: number;
  height?: number;
  mediaCondition?: string;
  srcSet: string | Array<srcType>;
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
      {sources.map(({ srcSet, mediaCondition, ...props }, i) => {
        return (
          <source
            key={i}
            srcSet={
              Array.isArray(srcSet) ? stringifySrcSet([...srcSet]) : srcSet
            }
            media={mediaCondition}
            {...{ ...props }}
          />
        );
      })}
      <Image {...{ image }} />
    </picture>
  );
};

Picture.displayName = "Atomic.Picture";

export default Picture;
