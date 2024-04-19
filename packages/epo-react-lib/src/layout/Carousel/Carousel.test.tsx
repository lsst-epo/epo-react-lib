import { render, screen, act, fireEvent } from "@testing-library/react";
import Carousel from ".";
import Figure from "@/atomic/Figure";

const mockSlidePropsFirst = {
  children: "Slide 1",
  caption:
    "Cosmic ipsum hyperbolic orbit culmination gravitation Messier object perihelion asterism transit totality Mercury revolve libration nadir precession weightlessness ephemeris meteor shower meteoroid interstellar free fall zenith meridian red dwarf bolometer ionosphere superior planets conjunction solar wind dwarf planet occultation cosmic rays big bang theory escape velocity helium double star vacuum sky synodic black hole wavelength ice giant plane of the ecliptic visual magnitude scintillation Van Allen belt spectroscope Oort cloud space station Mir",
  withBackground: true,
};
const mockSlidePropsSecond = {
  children: "Slide 2",
  caption:
    "Penumbra radiation Kirkwood gaps vernal equinox gegenschein scintillation radiant space exploration eclipse solar wind gravitational constant helium declination planetoid dust Roche limit inferior planets corona Milky Way inner planets Lunar mare astronomical unit Van Allen belt precession Bailey's beads shooting star Mars docking half moon neutron star supernova waning equinox cosmic rays dwarf planet perihelion quarter moon terrestrial Kepler's laws observatory zenith orbit day limb Mir conjunction nadir event horizon",
};

const children = [
  <Figure key="first" {...mockSlidePropsFirst} />,
  <Figure key="second" {...mockSlidePropsSecond} />,
];

describe("Carousel layout", () => {
  it("renders child slides, starting with first slide", async () => {
    await act(() => {
      render(<Carousel>{children}</Carousel>);
    });

    const slides = screen.getAllByRole("figure");
    const status = screen.getByRole("region");

    expect(slides.length).toBe(children.length);
    expect(status.textContent).toContain("current: 1");
  });
  it("changes slides after clicking next", async () => {
    await act(() => {
      render(<Carousel>{children}</Carousel>);
    });

    const status = screen.getByRole("region");
    const next = screen.getByTestId("carousel-next");

    fireEvent.click(next);

    expect(status.textContent).toContain("current: 2");
  });
});
