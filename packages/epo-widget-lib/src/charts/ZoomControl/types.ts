/**
 * A zoom transform, with the same meaning as d3's: a point `p` in the
 * unzoomed plot is drawn at `k * p + t`.
 */
export interface ZoomTransform {
  k: number;
  tx: number;
  ty: number;
}