import { ImageShape } from "@rubin-epo/epo-react-lib/Image";

export type Band = "u" | "g" | "r" | "i" | "z" | "y";
export type SourceType = "supernova" | "galaxy" | "galaxyFilter";

export interface Source {
  id: string;
  type: SourceType;
  x: number;
  y: number;
  color: string;
  radius?: number;
}

export interface Alert {
  id: number;
  error: number;
  date: number;
  magnitude: number;
  image: ImageShape;
}

export interface SourceDataset {
  name: string;
  id: string;
  color?: string;
  band?: Band;
  distance: number;
  dec: number;
  velocity: number;
  ra: number;
  redshift: number;
  sources: Source[];
  alerts?: Alert[];
}
