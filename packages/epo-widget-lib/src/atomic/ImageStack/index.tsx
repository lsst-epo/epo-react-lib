import { CSSProperties, FunctionComponent, useState } from "react";
import { ImageShape } from "@rubin-epo/epo-react-lib/Image";
import after from "lodash/after";
import * as Styled from "./styles";

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
}

const ImageStack: FunctionComponent<ImageStackProps> = ({
  images,
  visible,
  describedById,
  mixBlendMode,
  loadCallback,
  className,
  width,
  height,
  showBackdrop = true,
}) => {
  const [loading, setLoading] = useState(true);

  const onComplete = after(images.length, () => {
    setLoading(false);
    loadCallback && loadCallback();
  });

  if (!images || images.length === 0) return null;

  return (
    <Styled.StackContainer
      role="img"
      aria-describedby={describedById}
      className={className}
      style={{
        "--image-stack-background": showBackdrop && "var(--neutral95, #1f2121)",
        aspectRatio: `${width || images[0].width} / ${
          height || images[0].height
        }`,
      }}
    >
      {loading && <Styled.StackLoader isVisible />}
      {images.map(({ url, width, height }, i) => {
        const isVisible = Array.isArray(visible) ? visible[i] : visible === i;

        return (
          <Styled.StackedImage
            key={i}
            role="presentation"
            src={url}
            {...{ width, height }}
            onLoad={onComplete}
            onError={onComplete}
            style={{ mixBlendMode }}
            hidden={!isVisible}
          />
        );
      })}
    </Styled.StackContainer>
  );
};

ImageStack.displayName = "Atomic.ImageStack";

export default ImageStack;
