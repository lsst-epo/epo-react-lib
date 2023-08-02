import { FunctionComponent, useCallback, useEffect, useState } from "react";
import CircularLoader from "@rubin-epo/epo-react-lib/CircularLoader";
import * as Styled from "./styles";
import BlinkerImage from "../Image/Image";
import { BlinkerProps } from "../Blinker";

export interface ImagesProps
  extends Pick<BlinkerProps, "images" | "activeIndex"> {
  loadedCallback?: () => void;
  className?: string;
}

const Images: FunctionComponent<ImagesProps> = ({
  images = [],
  activeIndex,
  className,
  loadedCallback,
}) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const isLoading = imagesLoaded !== images.length;

  const loadCallback = useCallback(
    () => setImagesLoaded((count) => count + 1),
    []
  );

  useEffect(() => {
    if (!isLoading) {
      loadedCallback && loadedCallback();
    }
  }, [isLoading]);

  return (
    <Styled.BlinkContainer data-testid="blinker-images" className={className}>
      {!imagesLoaded && <CircularLoader isVisible={isLoading} />}
      <Styled.LoadingContainer
        style={{ "--loading-opacity": isLoading ? 0 : 1 }}
      >
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
