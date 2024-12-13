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
  /** may be required in future versions */
  width?: number;
  /** may be required in future versions */
  height?: number;
  url: string;
  src?: string;
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
