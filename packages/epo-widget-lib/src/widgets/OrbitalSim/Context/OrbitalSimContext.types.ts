import { ReactNode } from "react";

export interface OrbitalSimProviderProps {
    children: ReactNode,
    orbitData: Orbits,
    defaultZoom: number,
    showDetailsTable?: boolean,
    allowOrbitRotation?: boolean,
    showTimeControls?: boolean,
    selectedAnswer?: string | null,
    updateSelectedAnswer?: (newSelectedAnswer: string | null) => void,
    swappableOrbits?: boolean,
    selectedNeoIndex?: number,
    showDetailsOnSelect?: boolean;
}

export type OrbitalSimContextValues = {
  orbits: Orbits;
  defaultZoom: number;
  showDetailsTable?: boolean;
  allowOrbitRotation?: boolean;
  showTimeControls?: boolean;
  setOrbits: React.Dispatch<React.SetStateAction<Orbits>>;
  observations: Observation[];
  updateActiveObservation: (activeId: string) => void;
  selectedAnswer?: string | null;
  swappableOrbits: boolean;
  selectedNeoIndex?: number;
  setSelectedObjectRef: (ref?: string) => void;
  showDetailsOnSelect?: boolean;
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
    Node: number,
    Ref: string,
    Principal_desig: string,
    object_details?: DetailsRow[]
}

export type DetailsRow = {
    rowTitle: string,
    rowContent: string | number | TrustedHTML
}

export type Orbits = {
    neos: Neo[] | null,
    activeNeo: Neo | null,
    observations: Observation[],
    paused: boolean,
    pov: string | null,
    potentialOrbits: boolean,
    noDetails: boolean,
    refObjs: string[] | null,
    noControls: boolean,
    selectedNeoIndex?: number
}