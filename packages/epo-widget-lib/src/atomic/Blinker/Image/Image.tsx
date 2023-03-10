import { Image } from "@rubin-epo/epo-react-lib/dist/types/image";
import { FunctionComponent } from "react";
import * as Styled from "./styles";

interface ImageProps {
  image: Image;
  active: boolean;
  loadCallback: () => void;
}

const BlinkerImage: FunctionComponent<ImageProps> = ({
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

BlinkerImage.displayName = "Atomic.Blinker.Image";

export default BlinkerImage;
