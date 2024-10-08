export type Band = "u" | "g" | "r" | "i" | "z" | "y";
export type SourceType = "supernova" | "galaxy" | "galaxyFilter";

export interface Source {
  id: string;
  type: SourceType;
  x: number | string;
  y: number | string;
  color: string;
  radius?: number | string;
}

export interface BaseAlert {
  id: number;
  error: number;
  date: number;
  magnitude: number;
}

export interface Alert extends BaseAlert {
  image: {
    url: string;
    width?: number;
    height?: number;
  };
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
  alerts: Alert[];
}
