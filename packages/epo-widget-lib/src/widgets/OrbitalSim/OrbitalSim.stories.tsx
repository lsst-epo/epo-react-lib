import { Meta, StoryFn } from "@storybook/react";
import OrbitalSim from ".";

const meta: Meta<typeof OrbitalSim> = {
  component: OrbitalSim,
};
export default meta;

// Template for all stories
const Template: StoryFn<typeof OrbitalSim> = (args) => {
  return <OrbitalSim {...args} />;
};

// Default story
export const Primary = Template.bind({});
// Taken from Has Ast pg /close-to-earth-1/
Primary.args = {
  neos: [
    {
      NEO_flag: 1,
      One_km_NEO_flag: 1,
      H: 17.7,
      G: 0.15,
      Num_obs: 430,
      rms: 1.15,
      U: "0",
      Arc_years: "1932-2018",
      Perturbers: "M-v",
      Perturbers_2: "3Eh",
      Number: "(1221)",
      Name: "Amor",
      Principal_desig: "1932 EA1",
      Epoch: 2458600.5,
      M: 250.28017,
      Peri: 26.67495,
      Node: 171.33714,
      i: 11.87658,
      e: 0.4353207,
      n: 0.37063846,
      a: 1.9194158,
      Ref: "MPO458839",
      Num_opps: 20,
      Computer: "MPCW",
      Hex_flags: "1804",
      Last_obs: "2018-10-15",
      Tp: 2458896.52931,
      Orbital_period: 2.6592159,
      Perihelion_dist: 1.0838544,
      Aphelion_dist: 2.7549772,
      Semilatus_rectum: 0.7778393,
      Synodic_period: 1.6026943,
      Orbit_type: "Amor",
    },
  ],
  activeNeo: {
    NEO_flag: 1,
    One_km_NEO_flag: 1,
    H: 17.7,
    G: 0.15,
    Num_obs: 430,
    rms: 1.15,
    U: "0",
    Arc_years: "1932-2018",
    Perturbers: "M-v",
    Perturbers_2: "3Eh",
    Number: "(1221)",
    Name: "Amor",
    Principal_desig: "1932 EA1",
    Epoch: 2458600.5,
    M: 250.28017,
    Peri: 26.67495,
    Node: 171.33714,
    i: 11.87658,
    e: 0.4353207,
    n: 0.37063846,
    a: 1.9194158,
    Ref: "MPO458839",
    Num_opps: 20,
    Computer: "MPCW",
    Hex_flags: "1804",
    Last_obs: "2018-10-15",
    Tp: 2458896.52931,
    Orbital_period: 2.6592159,
    Perihelion_dist: 1.0838544,
    Aphelion_dist: 2.7549772,
    Semilatus_rectum: 0.7778393,
    Synodic_period: 1.6026943,
    Orbit_type: "Amor",
  },
  activeObs: undefined,
  selectionCallback: () => {},
  paused: true,
  pov: "top",
  defaultZoom: null,
  potentialOrbits: null,
  observations: null,
  noDetails: true,
  detailsSet: null,
  refObjs: ["earth"],
  noLabels: null,
};

// Other Stories