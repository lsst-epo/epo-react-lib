export type srcType = {
  size: number | string;
  src: string;
};

export type srcSize = {
  size: number | string;
  mediaCondition?: string;
};
export interface ImageShape {
  altText?: string;
  width: number;
  height: number;
  url: string;
  srcSet?: Array<srcType>;
  sizes?: Array<srcSize>;
  priority?: boolean;
  /** @deprecated */
  url2x?: string;
  /** @deprecated */
  url3x?: string;
  /** @deprecated */
  thumb?: string;
  /** @deprecated */
  thumb2x?: string;
}
