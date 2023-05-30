import { FunctionComponent } from "react";
import Image, { ImageProps } from "../Image";
import * as Styled from "./styles";

interface ResponsiveImageProps extends ImageProps {
  ratio: string;
}

const ResponsiveImage: FunctionComponent<ResponsiveImageProps> = ({
  image,
  ratio = "8:5",
  className,
  title,
  ...props
}) => {
  const aspectRatio = ratio.split(":").map(Number);

  return (
    <Styled.ResponsiveImageContainer
      $aspectRatio={aspectRatio}
      className={className}
    >
      <Image image={image} title={title} {...props} />
    </Styled.ResponsiveImageContainer>
  );
};

ResponsiveImage.displayName = "Atomic.ResponsiveImage";

export default ResponsiveImage;
