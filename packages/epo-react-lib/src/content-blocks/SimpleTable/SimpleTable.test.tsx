import { render, screen } from "@testing-library/react";
import SimpleTable from ".";
import { SimpleTableProps } from "./SimpleTable";

const props: SimpleTableProps = {
  simpleTable: [
    {
      rowColor: "none",
      rowTitle: "Default background",
      rowContent:
        "<p>Circumpolar black hole syzygy dwarf star wavelength totality meridian ice giant free fall nadir parsec waning day</p><a href='https://rubinobservatory.org/' target='_blank'>Rubin Observatory</a>",
    },
    {
      rowColor: "blue",
      rowTitle: "Blue background",
      rowContent:
        "<p>eclipse muttnik exoplanet moon plane of the ecliptic conjunction Pluto</p><a href='https://rubinobservatory.org/' target='_blank'>Rubin Observatory</a>",
    },
    {
      rowColor: "green",
      rowTitle: "Green background",
      rowContent:
        "<p>gravity gravitational lens retrograde cluster gibbous moon occultation</p><a href='https://rubinobservatory.org/' target='_blank'>Rubin Observatory</a>",
    },
    {
      rowColor: "orange",
      rowTitle: "Orange background",
      rowContent:
        "<p>celestial equator kiloparsec Messier object celestial binary star</p><a href='https://rubinobservatory.org/' target='_blank'>Rubin Observatory</a>",
    },
    {
      rowColor: "paleOrange",
      rowTitle: "Pale orange background",
      rowContent:
        "<p>hypernova translunar sky lens Kirkwood gaps meteor gravitation singularity new moon density culmination event horizon north star opposition Earthshine axial tilt solar</p><a href='https://rubinobservatory.org/' target='_blank'>Rubin Observatory</a>",
    },
  ],
};

describe("SimpleTable", () => {
  it("should create a description list", () => {
    render(<SimpleTable {...props} />);

    const table = screen.getByRole("list");

    expect(table).toBeInTheDocument();
  });
  it("should render a list item for each row", () => {
    render(<SimpleTable {...props} />);

    const rows = screen.getAllByRole("term");

    expect(rows.length).toBe(props.simpleTable.length);
  });
});
