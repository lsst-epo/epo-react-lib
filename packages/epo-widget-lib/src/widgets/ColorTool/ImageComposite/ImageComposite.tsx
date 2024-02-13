import {
  forwardRef,
  MutableRefObject,
  PropsWithChildren,
  useState,
} from "react";
import { ImageFilter } from "../ColorTool";
import { isFilterActive } from "../lib/utils";
import useFilteredImages from "../hooks/useFilteredImages";
import { ImageShape } from "@rubin-epo/epo-react-lib/Image";
import { mergeCanvases } from "../lib/canvas";
import * as Styled from "./styles";

interface ImageCompositeProps {
  filters: ImageFilter[];
  images: Array<ImageShape>;
  width: number;
  height: number;
  selectedObjectName: string;
  isDisplayOnly?: boolean;
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
      isDisplayOnly,
      images,
    },
    ref
  ) => {
    const [prevObject, setPrevObject] = useState(selectedObjectName);
    const [loaded, setLoaded] = useState(false);
    const isAnyActive = isFilterActive(filters);

    if (selectedObjectName !== prevObject) {
      setPrevObject(selectedObjectName);
      setLoaded(false);
    }

    const imgElements = useFilteredImages({
      images,
      filters,
      loadedCallback: () => setLoaded(true),
    });

    const activeLayers = imgElements?.filter(
      (f, i): f is HTMLCanvasElement => !!f && !!filters[i].active
    );

    const ctx = (
      ref as MutableRefObject<HTMLCanvasElement>
    )?.current?.getContext("2d");

    if (ctx) {
      ctx.clearRect(0, 0, width, height);
      mergeCanvases(ctx, activeLayers, width, height);
    }

    return (
      <Styled.ImageContainer
        style={{
          aspectRatio: `${width} / ${height}`,
          maxWidth: isDisplayOnly ? `${width}px` : undefined,
          "--image-container-opacity": loaded && isAnyActive ? 1 : 0.1,
        }}
        {...{ className }}
      >
        {!loaded && isAnyActive && <Styled.Loader isVisible={!loaded} />}
        <Styled.Image
          style={{ "--loading-opacity": !loaded ? 0 : 1 }}
          ref={ref}
          role="img"
          hidden={!loaded}
          {...{ width, height }}
        />
        {children}
      </Styled.ImageContainer>
    );
  }
);

ImageComposite.displayName = "Widgets.ColorTool.ImageComposite";

export default ImageComposite;
