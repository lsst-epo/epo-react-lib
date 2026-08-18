import { Meta, StoryObj } from "@storybook/react";
import RelationalPositionSim from ".";
import scrambles from "./mock/scrambles.json";

const meta: Meta<typeof RelationalPositionSim> = {
  argTypes: {},
  component: RelationalPositionSim,
  decorators: [
    (Story) => (
      <div style={{ blockSize: "600px" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

/**
 * Each scramble positions the same six galaxies around a different origin, so
 * the active galaxy is the one whose id matches the scramble.
 */
const scrambleArgs = ({ id, data }: (typeof scrambles)[number]) => ({
  data,
  activeGalaxy: data.find((galaxy) => galaxy.id === id),
});

const [milkyWay, , galaxyTwo] = scrambles;

export const Primary: StoryObj<typeof RelationalPositionSim> = {
  args: scrambleArgs(milkyWay),
};

/**
 * With a galaxy other than the Milky Way as the origin, the Milky Way itself
 * is rendered as a labeled node.
 */
export const ScrambledOrigin: StoryObj<typeof RelationalPositionSim> = {
  args: scrambleArgs(galaxyTwo),
};
