import { ImageShape } from "@rubin-epo/epo-react-lib";
import { FunctionComponent } from "react";
import * as Styled from "./styles";

interface ImageProps {
  image: ImageShape;
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
      onLoad={() => loadCallback && loadCallback()}
      style={{ "--image-visibility": active ? "visible" : "hidden" }}
    />
  );
};

BlinkerImage.displayName = "Atomic.Blinker.Image";

export default BlinkerImage;
