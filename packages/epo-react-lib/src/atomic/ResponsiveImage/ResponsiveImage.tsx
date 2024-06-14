import { FunctionComponent } from "react";
import { ImageProps } from "../Image";
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
  const aspectRatio = ratio.includes(":") ? ratio.replace(":", "/") : ratio;

  return (
    <Styled.ResponsiveImageContainer
      style={{ "--aspect-ratio": aspectRatio }}
      className={className}
    >
      <Styled.Image image={image} title={title} {...props} />
    </Styled.ResponsiveImageContainer>
  );
};

ResponsiveImage.displayName = "Atomic.ResponsiveImage";

export default ResponsiveImage;
