import { ReactNode } from "react";

export interface OrbitalSimProviderProps {
    children: ReactNode,
    orbitData: Orbits
}

export type OrbitalSimContextValues = {
  orbits: Orbits;
  setOrbits: React.Dispatch<React.SetStateAction<Orbits>>;
  observations: Observation[];
  setObservations: React.Dispatch<React.SetStateAction<Observation[]>>;
  updateActiveObservation: (activeId: string) => void;
};

export type Observation = {
    id: string,
    label: string,
    interactable: boolean,
    isActive: boolean,
    position: number,
    isAnswer?: boolean
}

export type Neo = {
    a: number,
    e: number,
    i:number,
    Peri: number,
    Node: number
}

export type DetailsRow = {
    rowTitle: string,
    rowContent: string | TrustedHTML
}

export type Orbits = {
    neos: Neo[] | null,
    activeNeo: Neo | null,
    observations: Observation[],
    paused: boolean,
    pov: string | null,
    defaultZoom: number | null,
    potentialOrbits: boolean,
    noDetails: boolean,
    detailsRows: DetailsRow[] | null,
    refObjs: string[] | null,
    noControls: boolean
}