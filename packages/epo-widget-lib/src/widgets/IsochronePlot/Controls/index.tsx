import { FunctionComponent } from "react";
import HorizontalSlider from "@rubin-epo/epo-react-lib/HorizontalSlider";
import { IsochroneValue } from "..";
import ControlLabel from "@/atomic/ControlLabel";

type Props = {
  value: Required<IsochroneValue>;
  ageValues: Array<string>;
  onChangeCallback: (value: IsochroneValue) => void;
  isDisabled?: boolean;
};

const Controls: FunctionComponent<Props> = ({
  value,
  onChangeCallback,
  ageValues,
  isDisabled = false,
}) => {
  const { age, distance } = value;

  const handleChange = (
    name: string,
    newValue: number | string | readonly number[]
  ) => {
    onChangeCallback && onChangeCallback({ ...value, [name]: newValue });
  };

  const sharedProps = {
    isDisabled,
    color: "var(--turquoise85, #12726D)",
  };

  return (
    <>
      <ControlLabel
        label="Age"
        input={(id) => (
          <HorizontalSlider
            label="Age"
            labelledbyId={id}
            min={0}
            max={ageValues.length - 1}
            value={age ? ageValues.indexOf(age) : 0}
            onChangeCallback={(value) =>
              handleChange("age", ageValues[value as number])
            }
            {...sharedProps}
          />
        )}
        labelBy
      />
      <ControlLabel
        label="Distance"
        input={(id) => (
          <HorizontalSlider
            label="Distance"
            labelledbyId={id}
            onChangeCallback={(value) => handleChange("distance", value)}
            {...sharedProps}
          />
        )}
        labelBy
      />
    </>
  );
};

Controls.displayName = "Widgets.IsochronePlot.Controls";

export default Controls;
