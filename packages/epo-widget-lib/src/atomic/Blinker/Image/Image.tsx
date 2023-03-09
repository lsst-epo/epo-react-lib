import { FunctionComponent } from "react";
import { BlinkerImage } from "../Blinker";
import * as Styled from "./styles";

interface ImageProps {
  image: BlinkerImage;
  active: boolean;
  loadCallback: () => void;
}

const Image: FunctionComponent<ImageProps> = ({
  image,
  active,
  loadCallback,
}) => {
  const { url, altText } = image;

  return (
    <Styled.BlinkerImage
      alt={altText}
      src={url}
      onLoad={loadCallback}
      active={active}
    />
  );
};

Image.displayName = "Atomic.Blinker.Image";

export default Image;
