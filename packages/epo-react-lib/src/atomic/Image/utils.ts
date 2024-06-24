import { srcSize, srcType } from "@/types/image";

export const stringifySrcSet = (srcs: Array<srcType>): string => {
  return srcs
    .map(({ src, size }) => {
      if (typeof size === "number") {
        return `${src} ${size}w`;
      } else {
        return `${src} ${size}`;
      }
    })
    .join(", ");
};
export const stringifySizes = (sizes: Array<srcSize>): string => {
  const addPxIfNumber = (size: string | number) => {
    if (typeof size === "number") {
      return `${size}px`;
    }

    return size;
  };

  return sizes
    .sort((a, b) => {
      const aHasMedia = Object.hasOwn(a, "mediaCondition");
      const bHasMedia = Object.hasOwn(b, "mediaCondition");

      if (aHasMedia && !bHasMedia) return -1;

      return 0;
    })
    .map(({ size, mediaCondition }) => {
      if (mediaCondition) {
        return `${mediaCondition} ${addPxIfNumber(size)}`;
      } else {
        return addPxIfNumber(size);
      }
    })
    .join(", ");
};
