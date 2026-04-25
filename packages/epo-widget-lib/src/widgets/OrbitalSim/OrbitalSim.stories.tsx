import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { OrbitalSim }  from ".";
import { OrbitalSimProvider } from "./Context";
import SelectionList from "@/atomic/SelectionList";
import { PrimaryData, PotentialOrbitsData, ObjectDetailsData, SwappableOrbitsData } from "@/mock-data/OrbitalSim"; 

const meta: Meta<typeof OrbitalSim> = {
  component: OrbitalSim,
  parameters: { r3f: true },
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
        selectedAnswer={selectedAnswer}
        updateSelectedAnswer={setSelectedAnswer}
        showDetailsTable={args.showDetailsTable}
        allowOrbitRotation={args.allowOrbitRotation}
        showTimeControls={args.showTimeControls}
        swappableOrbits={args.swappableOrbits}
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
OrbitalDetails.args = ObjectDetailsData;