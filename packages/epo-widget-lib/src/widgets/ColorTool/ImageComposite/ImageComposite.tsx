import { forwardRef, PropsWithChildren } from "react";
import { ImageFilter } from "../ColorTool";
import FilterImage from "../FilterImage";
import * as Styled from "../styles";

interface ImageCompositeProps {
  filters: ImageFilter[];
  width: number;
  height: number;
}

const ImageComposite = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ImageCompositeProps>
>(({ filters, width, height, children }, ref) => {
  return (
    <Styled.ImageContainer ref={ref}>
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
              }}
            />
          );
        })}
      {children}
    </Styled.ImageContainer>
  );
});

ImageComposite.displayName = "Widgets.ColorTool.ImageComposite";

export default ImageComposite;
