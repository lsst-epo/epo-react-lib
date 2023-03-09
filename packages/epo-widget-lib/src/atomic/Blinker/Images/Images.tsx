import { FunctionComponent, useEffect, useState } from "react";
import { CircularLoader } from "@rubin-epo/epo-react-lib";
import * as Styled from "./styles";
import BlinkerImage from "../Image/Image";
import { BlinkerProps } from "../Blinker";

interface ImagesProps extends Pick<BlinkerProps, "images" | "activeIndex"> {
  className?: string;
}

const Images: FunctionComponent<ImagesProps> = ({
  images = [],
  activeIndex,
  className,
}) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const loadCallback = () => {
    setImagesLoaded((count) => count + 1);
  };

  useEffect(() => {
    setIsLoading(imagesLoaded !== images.length);
  }, [imagesLoaded]);

  return (
    <Styled.BlinkContainer data-testid="blinker-images" className={className}>
      <CircularLoader isVisible={true} />
      <Styled.LoadingContainer isLoading={isLoading}>
        {images.map((image, i) => {
          const { url } = image;
          const active = activeIndex === i;

          return (
            <BlinkerImage
              key={url}
              image={image}
              active={active}
              loadCallback={loadCallback}
            />
          );
        })}
      </Styled.LoadingContainer>
    </Styled.BlinkContainer>
  );
};

Images.displayName = "Atomic.Blinker.Images";

export default Images;
