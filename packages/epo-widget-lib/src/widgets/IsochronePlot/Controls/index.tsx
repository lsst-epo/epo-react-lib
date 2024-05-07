import { FunctionComponent } from "react";
import HorizontalSlider from "@rubin-epo/epo-react-lib/HorizontalSlider";
import { IsochroneValue } from "..";
import ControlLabel from "@/atomic/ControlLabel";
import { useTranslation } from "react-i18next";

interface Config {
  min: number;
  max: number;
  step: number;
}

type Props = {
  value: Required<IsochroneValue>;
  configs: Record<keyof IsochroneValue, Config>;
  onChangeCallback: (value: IsochroneValue) => void;
  isDisabled?: boolean;
};

const Controls: FunctionComponent<Props> = ({
  value,
  onChangeCallback,
  configs,
  isDisabled = false,
}) => {
  const { t } = useTranslation();
  const handleChange = (name: string, newValue: number | readonly number[]) => {
    onChangeCallback && onChangeCallback({ ...value, [name]: newValue });
  };

  const sharedProps = {
    isDisabled,
    color: "var(--turquoise85, #12726D)",
  };

  return (
    <>
      {Object.keys(configs).map((key) => {
        const { min, max, step } = configs[key as keyof IsochroneValue];

        return (
          <ControlLabel
            key={key}
            label={t(`isochrone_plot.controls.${key}`)}
            input={(id) => (
              <HorizontalSlider
                label={key}
                labelledbyId={id}
                value={value[key as keyof IsochroneValue]}
                onChangeCallback={(value) => handleChange(key, value)}
                {...{ ...sharedProps, ...{ min, max, step } }}
              />
            )}
            labelBy
          />
        );
      })}
    </>
  );
};

Controls.displayName = "Widgets.IsochronePlot.Controls";

export default Controls;