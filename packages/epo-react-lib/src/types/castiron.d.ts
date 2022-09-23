declare module "@castiron/style-mixins" {
  export const fluidScaleBase = (
    max: string,
    min: string,
    maxVw: string,
    minVw: string
  ) => string;
  export const respondBase = (
    content: string,
    pxSize: string,
    operator: string,
    aspect: string
  ) => string;
  export const stripUnit = (unit: string | number) => number;
}
