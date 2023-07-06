import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import SimpleTable from ".";
import { SimpleTableRow } from "./SimpleTable";

const MockTableContent: SimpleTableRow[] = [
  {
    rowColor: "none",
    rowTitle: "Default background",
    rowContent:
      "<p>Circumpolar black hole syzygy dwarf star wavelength totality meridian ice giant free fall nadir parsec waning day</p><a href='https://rubinobs.org/' target='_blank'>Rubin Observatory</a>",
  },
  {
    rowColor: "blue",
    rowTitle: "Blue background",
    rowContent:
      "<p>eclipse muttnik exoplanet moon plane of the ecliptic conjunction Pluto</p><a href='https://rubinobs.org/' target='_blank'>Rubin Observatory</a>",
  },
  {
    rowColor: "green",
    rowTitle: "Green background",
    rowContent:
      "<p>gravity gravitational lens retrograde cluster gibbous moon occultation</p><a href='https://rubinobs.org/' target='_blank'>Rubin Observatory</a>",
  },
  {
    rowColor: "orange",
    rowTitle: "Orange background",
    rowContent:
      "<p>celestial equator kiloparsec Messier object celestial binary star</p><a href='https://rubinobs.org/' target='_blank'>Rubin Observatory</a>",
  },
  {
    rowColor: "paleOrange",
    rowTitle: "Pale orange background",
    rowContent:
      "<p>hypernova translunar sky lens Kirkwood gaps meteor gravitation singularity new moon density culmination event horizon north star opposition Earthshine axial tilt solar</p><a href='https://rubinobs.org/' target='_blank'>Rubin Observatory</a>",
  },
  {
    rowColor: "none",
    rowTitle: "Default background",
    rowContent:
      "<ul><li>I am an unordered list</li><li>I am an unordered list</li><li>I am an unordered list</li></ul>",
  },
  {
    rowColor: "none",
    rowTitle: "Default background",
    rowContent:
      "<ol><li>I am an ordered list</li><li>I am an ordered list</li><li>I am an ordered list</li></ol>",
  },
];

const meta: ComponentMeta<typeof SimpleTable> = {
  component: SimpleTable,
  argTypes: {
    simpleTable: {},
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof SimpleTable> = {
  args: {
    simpleTable: MockTableContent,
  },
};
