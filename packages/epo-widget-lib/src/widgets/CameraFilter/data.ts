import { Band } from "@/types/astro";

export type Range<
  T,
  N extends number,
  R extends T[] = []
> = R["length"] extends N ? R : Range<T, N, [T, ...R]>;

export interface Filter {
  band?: Band;
  range: Range<number, 2>;
}

interface GradientStop {
  stopColor: string;
  offset: number;
  id?: string;
}

export interface VisibleColor {
  name: string;
  range: Range<number, 2>;
  color: string;
}

export interface Spectrum {
  name: string;
  upper?: number;
  lower?: number;
  stops: GradientStop[];
  colors?: VisibleColor[];
}

export const filters: Filter[] = [
  { band: "u", range: [338, 395] },
  { range: [396, 404] },
  { band: "g", range: [405, 552] },
  { band: "r", range: [553, 690] },
  { band: "i", range: [690, 817] },
  { band: "z", range: [818, 920] },
  { band: "y", range: [920, 1010] },
];

const ultraviolet: GradientStop[] = [
  { offset: 0, stopColor: "#e0e0e0" },
  { offset: 0.262, stopColor: "#dedde0" },
  { offset: 0.41, stopColor: "#dbd5e1" },
  { offset: 0.53, stopColor: "#d4c7e3" },
  { offset: 0.635, stopColor: "#cbb3e6" },
  { offset: 0.73, stopColor: "#bf9aeb" },
  { offset: 0.818, stopColor: "#b17af0" },
  { offset: 0.9, stopColor: "#a055f5" },
  { offset: 0.976, stopColor: "#8c2afc" },
  { offset: 1, stopColor: "#861cff" },
];
const visible: GradientStop[] = [
  { offset: 0.11, stopColor: "#861cff" },
  { offset: 0.25, stopColor: "blue" },
  { offset: 0.27, stopColor: "#001ee0" },
  { offset: 0.3, stopColor: "#006d91" },
  { offset: 0.33, stopColor: "#00ab53" },
  { offset: 0.36, stopColor: "#00d826" },
  { offset: 0.38, stopColor: "#00f40a" },
  { offset: 0.39, stopColor: "lime" },
  { offset: 0.41, stopColor: "#05fe00" },
  { offset: 0.43, stopColor: "#14fc01" },
  { offset: 0.45, stopColor: "#2df803" },
  { offset: 0.47, stopColor: "#50f406" },
  { offset: 0.49, stopColor: "#7cee0a" },
  { offset: 0.51, stopColor: "#b3e70e" },
  { offset: 0.54, stopColor: "#f2de14" },
  { offset: 0.54, stopColor: "#ffdd15" },
  { offset: 0.56, stopColor: "#fccb17" },
  { offset: 0.6, stopColor: "#f49f1e" },
  { offset: 0.62, stopColor: "#f18922" },
  { offset: 0.63, stopColor: "#f08220" },
  { offset: 0.66, stopColor: "#f0711c" },
  { offset: 0.69, stopColor: "#ef5415" },
  { offset: 0.72, stopColor: "#ed2d0b" },
  { offset: 0.75, stopColor: "#ec0000" },
  { offset: 0.79, stopColor: "#eb0303" },
  { offset: 0.82, stopColor: "#e90f0f" },
  { offset: 0.86, stopColor: "#e62323" },
  { offset: 0.89, stopColor: "#e23e3e" },
  { offset: 0.93, stopColor: "#dc6262" },
  { offset: 0.96, stopColor: "#d58e8e" },
  { offset: 0.99, stopColor: "#cdc0c0" },
  { offset: 1, stopColor: "#ccc" },
];
const infrared: GradientStop[] = [
  { offset: 0, stopColor: "#ccc" },
  { offset: 1, stopColor: "#f2f2f2" },
];

export const colors: VisibleColor[] = [
  { name: "violet", color: "#861CFF", range: [380, 450] },
  { name: "blue", color: "#0000FF", range: [450, 495] },
  { name: "green", color: "#00FF00", range: [495, 570] },
  { name: "yellow", color: "#FFDD15", range: [570, 590] },
  { name: "orange", color: "#F18922", range: [590, 620] },
  { name: "red", color: "#EC0000", range: [620, 750] },
];

export const spectrums: Spectrum[] = [
  { name: "ultraviolet", upper: 400, stops: ultraviolet },
  { name: "visible", upper: 750, lower: 400, stops: visible, colors },
  { name: "infrared", lower: 750, stops: infrared },
];

const defaultMin = 255;
const condensedMin = 322;
const defaultMax = 1084;

export const rangeConfig = {
  condensed: {
    min: condensedMin,
    max: defaultMax,
    range: defaultMax - condensedMin,
  },
  default: {
    min: defaultMin,
    max: defaultMax,
    range: defaultMax - defaultMin,
  },
};
