import { forwardRef, PropsWithChildren, useCallback, useState } from "react";
import CircularLoader from "@rubin-epo/epo-react-lib/CircularLoader";
import { ImageFilter } from "../ColorTool";
import FilterImage from "../FilterImage";
import * as Styled from "./styles";
import { isFilterActive } from "../utilities";

interface ImageCompositeProps {
  filters: ImageFilter[];
  width: number;
  height: number;
  selectedObjectName: string;
}

const ImageComposite = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ImageCompositeProps>
>(({ filters, width, height, selectedObjectName, children }, ref) => {
  const [prevObject, setPrevObject] = useState(selectedObjectName);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const isAnyActive = isFilterActive(filters);
  const enabledFilters = filters.filter((f) => !f.isDisabled).length;
  const isLoading = imagesLoaded !== enabledFilters;

  if (selectedObjectName !== prevObject) {
    setPrevObject(selectedObjectName);
    setImagesLoaded(0);
  }

  const onLoadCallback = useCallback(
    () => setImagesLoaded((count) => count + 1),
    [imagesLoaded, filters]
  );

  return (
    <Styled.ImageContainer ref={ref}>
      {!imagesLoaded && isAnyActive && <CircularLoader isVisible={isLoading} />}
      <Styled.LoadingContainer
        style={{ "--loading-opacity": isLoading ? 0 : 1 }}
      >
        {filters &&
          filters.map((filter) => {
            const { label, image, color, brightness, active } = filter;

            return (
              <FilterImage
                key={`filter-${label}`}
                {...{
                  url: image,
                  color,
                  active,
                  width,
                  height,
                  filters: {
                    brightness,
                    contrast: 1.3,
                  },
                  onLoadCallback,
                }}
              />
            );
          })}
      </Styled.LoadingContainer>
      {children}
    </Styled.ImageContainer>
  );
});

ImageComposite.displayName = "Widgets.ColorTool.ImageComposite";

export default ImageComposite;
