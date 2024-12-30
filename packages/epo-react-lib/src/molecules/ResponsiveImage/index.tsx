import { FunctionComponent } from "react";
import { ImageProps } from "@/atomic/Image";
import Frame from "@/atomic/Frame";
import Image from "@/atomic/Image";

interface ResponsiveImageProps extends ImageProps {
  /** @deprecated use `aspectRatio` instead */
  ratio?: string;
  aspectRatio?: string;
  position?: string;
  zoom?: number;
}

const defaultRatio = "8:5";

const ResponsiveImage: FunctionComponent<ResponsiveImageProps> = ({
  ratio = defaultRatio,
  aspectRatio = defaultRatio,
  zoom,
  position,
  className,
  ...props
}) => {
  return (
    <Frame
      {...{ className, position, zoom }}
      aspectRatio={aspectRatio || ratio}
    >
      <Image {...props} />
    </Frame>
  );
};

ResponsiveImage.displayName = "Atomic.ResponsiveImage";

export default ResponsiveImage;
