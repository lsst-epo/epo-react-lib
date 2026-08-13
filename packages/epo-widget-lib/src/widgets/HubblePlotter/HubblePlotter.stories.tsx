import { Meta, StoryFn, StoryObj } from "@storybook/react";
import BaseContainer from "@rubin-epo/epo-react-lib/Container";
import styled from "styled-components";
import HubblePlotter from "./HubblePlotter";
import galaxies from "./mock/galaxies.json";

const meta: Meta<typeof HubblePlotter> = {
  argTypes: {},
  component: HubblePlotter,
};
export default meta;

const Container = styled(BaseContainer)`
  container-type: inline-size;
`;

const Template: StoryFn<typeof HubblePlotter> = (args) => (
  <Container width="wide">
    <HubblePlotter {...args} />
  </Container>
);

export const Primary: StoryObj<typeof HubblePlotter> = Template.bind({});

Primary.args = {
  data: galaxies,
  options: {
    createUserHubblePlot: "252",
    domain: [
      [0, 700],
      [0, 50000],
    ],
  },
};
