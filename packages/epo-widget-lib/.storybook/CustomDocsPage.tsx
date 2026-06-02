// .storybook/CustomDocsPage.tsx
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks";
import {
  Dependencies,
  Dependents
} from "storybook-addon-dependencies/blocks";

export const CustomDocsPage = () => {

  return (
    <>
      <Title />
      <Subtitle />
      <Description />

      <Dependencies />
      <Dependents />

      <Primary />
      <Controls />
      <Stories />
    </>
  );
}
