// export { OrbitalSimProvider, OrbitalSimContext, useOrbitalSimContext } from "./OrbitalSimContext";

import { createContext, useContext, ReactNode, useState, useEffect, useMemo } from "react";
import type {OrbitalSimContextValues, OrbitalSimProviderProps, Orbits, Observation } from './OrbitalSimContext.types.ts'

export const OrbitalSimContext = createContext<OrbitalSimContextValues | null>(null);

export default OrbitalSimContext;

/**
 *   This custom hooks returns a reference to the `OrbitalSimContext` which will 
 *   expose orbital and observation data, and a callback that can be passed to 
 *   update the selected observation - if applicable - in the web client. The
 *   data for this context provider must be passed to `<OrbitalSimProvider>` as
 *   the `orbitData` prop.
 * 
 * @returns a reference to the context provider
 */
export function useOrbitalSimContext() {
    const context = useContext(OrbitalSimContext);
    if (!context) {
        throw new Error(
        `OrbitalSim components cannot be rendered outside the OrbitalSimContext.Provider component.`
        );
    }
  return context;
}

/**
 *   The context provider that must wrap the implementation of the `<OrbitalSim>`,
 *   and this is all that is necessary to populate the `OrbitalSim` with data. The
 *   context provider expects a prop called `orbitData` consisting of the object
 *   that represents the monolithic orbits of visualized in the `OrbitalSim`. The
 *   context provider will parse out the `observations` and expose a callback function
 *   named `updateActiveObservation()` which can be passed to the `observation` 
 *   components.
 * 
 * @param children - a React.Node if necessary, but it shouldn't be
 * @param orbitData - the monolithic object containing orbit, observation and detailed
 *                    information data
 * 
 * @returns 
 */
export function OrbitalSimProvider({ children, orbitData, showDetailsTable=false, allowOrbitRotation=false, showTimeControls=false }: OrbitalSimProviderProps) {
    const [ orbits, setOrbits] = useState<Orbits>({
        neos: null,
        activeNeo: null,
        observations: [],
        paused: false,
        pov: null,
        defaultZoom: null,
        potentialOrbits: false,
        noDetails: false,
        detailsRows: null,
        refObjs: null,
        noControls: false
    })
    const [ observations, setObservations ] = useState<Observation[]>(() => 
        orbits.observations ?? []
    );

    useEffect(() => {
        setOrbits(orbitData);
        setObservations(orbitData.observations);
    }, [orbitData]);

    const updateActiveObservation = (activeId: string) => {
        if(observations && observations.length > 0) {
            let newObs = observations.map(e => (e.id == activeId) ? {...e, isActive: true} : {...e, isActive: false});
            setObservations(newObs);
        }
    }

    const values: OrbitalSimContextValues = useMemo(() => ({
        orbits,
        showDetailsTable,
        allowOrbitRotation,
        showTimeControls,   
        setOrbits,
        observations,
        setObservations,
        updateActiveObservation,
  }),[
    orbits,
    showDetailsTable,
    allowOrbitRotation,
    showTimeControls, 
    setOrbits,
    observations,
    setObservations,
    updateActiveObservation,
  ]);

    return <OrbitalSimContext.Provider value={values}>{children}</OrbitalSimContext.Provider>
}