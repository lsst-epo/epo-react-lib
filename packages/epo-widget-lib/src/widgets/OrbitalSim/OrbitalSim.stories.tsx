import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { OrbitalSim }  from ".";
import { OrbitalSimProvider } from "./Context";
import SelectionList from "@/atomic/SelectionList";
import { PrimaryData, PotentialOrbitsData, ObjectDetailsData, SwappableOrbitsData } from "@/mock-data/OrbitalSim"; 

const meta: Meta<typeof OrbitalSim> = {
  component: OrbitalSim,
  parameters: { r3f: true },
  args: {
    defaultZoom: 0.5,
  },
  argTypes: {
    defaultZoom: {
      control: { type: 'number', step: 0.01 },
    },
  },
};
export default meta;

// Template for all stories
const Template: StoryFn<typeof OrbitalSim> = (args:any ) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  function resetSelectedAnswer() {
    setSelectedAnswer(null);
  }

  return (
    <>
      {args.observations && <SelectionList sources={ selectedAnswer ? [{ type: "observation", id: selectedAnswer}] : [] } onRemoveCallback={ resetSelectedAnswer }/>}
      <OrbitalSimProvider 
        orbitData={args.orbits}
        defaultZoom={args.defaultZoom}
        selectedAnswer={selectedAnswer}
        updateSelectedAnswer={setSelectedAnswer}
        showDetailsTable={args.showDetailsTable}
        allowOrbitRotation={args.allowOrbitRotation}
        showTimeControls={args.showTimeControls}
        swappableOrbits={args.swappableOrbits}
        selectedNeoIndex={args.selectedNeoIndex}
      >
        <OrbitalSim/>
      </OrbitalSimProvider>
    </>
  )
};

export const SwappableOrbits = Template.bind({});
SwappableOrbits.args = SwappableOrbitsData;

export const Primary = Template.bind({});
Primary.args = PrimaryData;

export const PotentialOrbits = Template.bind({});
PotentialOrbits.args = PotentialOrbitsData;

export const OrbitalDetails = Template.bind({});
OrbitalDetails.args = {...ObjectDetailsData, selectedNeoIndex: 0};
OrbitalDetails.argTypes = {
  selectedNeoIndex: {
    control: 'select',
    options: ObjectDetailsData.orbits.neos.map((_, i) => i),
  },
}