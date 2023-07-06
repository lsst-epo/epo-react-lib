import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import FormButtons from ".";
import Button from "@/atomic/Button";

const meta: ComponentMeta<typeof FormButtons> = {
  component: FormButtons,
  argTypes: {
    children: {
      description: "React components to populate form buttons",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
  },
};
export default meta;

export const Primary: ComponentStoryObj<typeof FormButtons> = {
  args: {
    children: [
      <Button styleAs="tertiary">Reset</Button>,
      <Button>Submit</Button>,
    ],
  },
};
