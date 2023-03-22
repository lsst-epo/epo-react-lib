import { Band } from "@/types/astro";

export type Range<T, N extends number, R extends T[] = []> =
  R["length"] extends N ? R : Range<T, N, [T, ...R]>;

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
  { offset: 0, stopColor: "#861cff" },
  { offset: 0.253, stopColor: "blue" },
  { offset: 0.266, stopColor: "#001ee0" },
  { offset: 0.302, stopColor: "#006d91" },
  { offset: 0.334, stopColor: "#00ab53" },
  { offset: 0.361, stopColor: "#00d826" },
  { offset: 0.382, stopColor: "#00f40a" },
  { offset: 0.394, stopColor: "lime" },
  { offset: 0.409, stopColor: "#05fe00" },
  { offset: 0.427, stopColor: "#14fc01" },
  { offset: 0.447, stopColor: "#2df803" },
  { offset: 0.468, stopColor: "#50f406" },
  { offset: 0.49, stopColor: "#7cee0a" },
  { offset: 0.513, stopColor: "#b3e70e" },
  { offset: 0.536, stopColor: "#f2de14" },
  { offset: 0.54, stopColor: "#ffdd15" },
  { offset: 0.559, stopColor: "#fccb17" },
  { offset: 0.598, stopColor: "#f49f1e" },
  { offset: 0.615, stopColor: "#f18922" },
  { offset: 0.634, stopColor: "#f08220" },
  { offset: 0.66, stopColor: "#f0711c" },
  { offset: 0.69, stopColor: "#ef5415" },
  { offset: 0.723, stopColor: "#ed2d0b" },
  { offset: 0.755, stopColor: "#ec0000" },
];
const infrared: GradientStop[] = [
  { offset: 0, stopColor: "#ec0000" },
  { offset: 0.387, stopColor: "#ea0e0e" },
  { offset: 0.526, stopColor: "#e53737" },
  { offset: 0.625, stopColor: "#e15d5d" },
  { offset: 0.705, stopColor: "#dd7d7d" },
  { offset: 0.774, stopColor: "#da9898" },
  { offset: 0.835, stopColor: "#d8aeae" },
  { offset: 0.89, stopColor: "#d6bfbf" },
  { offset: 0.941, stopColor: "#d4cbcb" },
  { offset: 0.986, stopColor: "#d4d2d2" },
  { offset: 1, stopColor: "#d4d4d4" },
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
