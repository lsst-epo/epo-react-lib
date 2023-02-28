import { FunctionComponent } from "react";
import { ImageFilter } from "../ColorTool";
import * as Styled from "../styles";

interface ImageCompositeProps {
  filters: ImageFilter[];
}

const ImageComposite: FunctionComponent<ImageCompositeProps> = ({
  filters,
}) => {
  const isFilterActive = (filters: ImageFilter[]) =>
    filters.some((f) => f.active);

  return (
    <Styled.ImageContainer>
      <Styled.BackgroundImage
        alt=""
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
        filtersActive={isFilterActive(filters)}
      />
      {filters &&
        filters.map((filter) => {
          const { label, image, color, brightness, active } = filter;

          return (
            <Styled.FilteredImage
              key={`filter-${label}`}
              {...{
                image,
                color,
                brightness,
                active,
              }}
            />
          );
        })}
    </Styled.ImageContainer>
  );
};

ImageComposite.displayName = "Widgets.ColorTool.ImageComposite";

export default ImageComposite;
