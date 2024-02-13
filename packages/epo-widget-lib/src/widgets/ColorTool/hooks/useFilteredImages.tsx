import { useEffect, useLayoutEffect, useState } from "react";
import isEqual from "lodash/isEqual";
import { ImageShape } from "@rubin-epo/epo-react-lib/Image";
import usePrevious from "@/hooks/usePrevious";
import { ImageFilter } from "../ColorTool";
import { getFilters, updateColor } from "../lib/canvas";

interface useFilteredImagesProps {
  images: Array<ImageShape>;
  filters: Array<ImageFilter>;
  loadedCallback: () => void;
}

const useFilteredImages = ({
  images,
  filters,
  loadedCallback,
}: useFilteredImagesProps) => {
  const previousImages = usePrevious(images);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [imgElements, setImages] = useState<Array<HTMLImageElement>>();

  const loaded =
    imagesLoaded === images.length ||
    imgElements?.every(({ complete }) => !!complete);

  useLayoutEffect(() => {
    if (!isEqual(previousImages, images)) {
      setImages(
        images.map(({ url, width, height }) => {
          const img = new Image(width, height);
          img.onload = () => {
            setImagesLoaded((value) => value + 1);
          };
          img.src = url;

          return img;
        })
      );
    }
  }, [images]);

  useEffect(() => {
    if (loaded) {
      loadedCallback();
    }
  }, [loaded]);

  const canvases = imgElements?.map((img, i) => {
    if (!filters[i].active) return undefined;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (ctx) {
      const { width, height } = img;
      const { color = "transparent", brightness } = filters[i];

      ctx.canvas.width = width;
      ctx.canvas.height = height;
      ctx.clearRect(0, 0, width, height);

      ctx.filter = getFilters({ brightness, contrast: 1.3 });

      ctx.drawImage(img, 0, 0, width, height);

      updateColor(ctx, color, width, height);
    }

    return canvas;
  });

  return canvases;
};

export default useFilteredImages;
