import {
  forwardRef,
  PropsWithChildren,
  useCallback,
  useRef,
  useState,
} from "react";
import CircularLoader from "@rubin-epo/epo-react-lib/CircularLoader";
import { ImageFilter } from "../ColorTool";
import OffscreenFilter from "../OffscreenFilter";
import * as Styled from "./styles";
import { isFilterActive } from "../utilities";
import CompositeRenderer from "../CompositeRender";

interface ImageCompositeProps {
  filters: ImageFilter[];
  width: number;
  height: number;
  selectedObjectName: string;
  className?: string;
}

const ImageComposite = forwardRef<
  HTMLCanvasElement,
  PropsWithChildren<ImageCompositeProps>
>(
  (
    {
      filters,
      width = 600,
      height = 600,
      selectedObjectName,
      className,
      children,
    },
    ref
  ) => {
    const layers = useRef<Array<HTMLCanvasElement>>([]);
    const [prevObject, setPrevObject] = useState(selectedObjectName);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const isAnyActive = isFilterActive(filters);
    const enabledFilters = filters.filter((f) => !f.isDisabled).length;
    const isLoading = imagesLoaded < enabledFilters;

    if (selectedObjectName !== prevObject) {
      setPrevObject(selectedObjectName);
      setImagesLoaded(0);
    }

    const onLoadCallback = useCallback(
      () => setImagesLoaded((count) => count + 1),
      [imagesLoaded, filters]
    );

    const handleFilterChange = (index: number, canvas: HTMLCanvasElement) => {
      layers.current[index] = canvas;
    };

    return (
      <Styled.ImageContainer
        className={className}
        style={{
          "--image-container-opacity": imagesLoaded && isAnyActive ? 1 : 0.1,
        }}
      >
        {!imagesLoaded && isAnyActive && (
          <CircularLoader isVisible={isLoading} />
        )}
        <Styled.LoadingContainer
          style={{ "--loading-opacity": isLoading ? 0 : 1 }}
        >
          {filters &&
            filters.map((filter, i) => {
              const { label, image, color, brightness } = filter;

              return (
                <OffscreenFilter
                  key={label}
                  onChangeCallback={(canvas) => handleFilterChange(i, canvas)}
                  {...{
                    url: image,
                    color,
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
          <CompositeRenderer
            layers={layers.current}
            renderLayers={filters.map(({ active }) => active)}
            {...{ width, height, ref }}
          />
        </Styled.LoadingContainer>
        {children}
      </Styled.ImageContainer>
    );
  }
);

ImageComposite.displayName = "Widgets.ColorTool.ImageComposite";

export default ImageComposite;
