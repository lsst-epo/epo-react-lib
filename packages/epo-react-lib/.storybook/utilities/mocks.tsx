import { ReactNode } from "react";
import { Figure } from "../../src";

const imageProps = {
  image: {
    altText: "A placeholder image",
    url: "https://via.placeholder.com/150",
    url2x: "https://via.placeholder.com/300",
    url3x: "https://via.placeholder.com/450",
    width: 150,
    height: 150,
  },
};

export const mockSlidePropsFirst = {
  children: "Slide 1",
  caption:
    "Cosmic ipsum hyperbolic orbit culmination gravitation Messier object perihelion asterism transit totality Mercury revolve libration nadir precession weightlessness ephemeris meteor shower meteoroid interstellar free fall zenith meridian red dwarf bolometer ionosphere superior planets conjunction solar wind dwarf planet occultation cosmic rays big bang theory escape velocity helium double star vacuum sky synodic black hole wavelength ice giant plane of the ecliptic visual magnitude scintillation Van Allen belt spectroscope Oort cloud space station Mir",
  withBackground: true,
  key: "a1",
};
export const mockSlidePropsSecond = {
  children: "Slide 2",
  caption:
    "Penumbra radiation Kirkwood gaps vernal equinox gegenschein scintillation radiant space exploration eclipse solar wind gravitational constant helium declination planetoid dust Roche limit inferior planets corona Milky Way inner planets Lunar mare astronomical unit Van Allen belt precession Bailey's beads shooting star Mars docking half moon neutron star supernova waning equinox cosmic rays dwarf planet perihelion quarter moon terrestrial Kepler's laws observatory zenith orbit day limb Mir conjunction nadir event horizon",
  key: "b1",
};

const Children: ReactNode = [
  <Figure {...mockSlidePropsFirst} />,
  <Figure {...mockSlidePropsSecond} />,
];

export default Children;
