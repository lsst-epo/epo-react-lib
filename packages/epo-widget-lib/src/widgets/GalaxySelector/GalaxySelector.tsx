export interface AstroDataset {
  name: string;
  id: string;
  color: string;
  distance: number;
  dec: number;
  velocity: number;
  ra: number;
  redshift: number;
  objects: AstroObject[];
}

export type AstroType = "supernova" | "galaxy" | "galaxyFilter";

export interface AstroObject {
  object_id: string;
  id: AstroType;
  ra: number;
  dec: number;
  color: string;
  radius?: number;
}
