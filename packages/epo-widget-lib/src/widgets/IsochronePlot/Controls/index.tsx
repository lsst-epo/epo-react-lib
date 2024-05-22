import { FunctionComponent } from "react";
import HorizontalSlider from "@rubin-epo/epo-react-lib/HorizontalSlider";
import { IsochroneValue } from "..";
import ControlLabel from "@/atomic/ControlLabel";
import { useTranslation } from "react-i18next";

interface Config {
  min: number;
  max: number;
  step: number;
  marks?: boolean;
}

type Props = {
  value: Required<IsochroneValue>;
  configs: Record<keyof IsochroneValue, Config>;
  onChangeCallback?: (value: IsochroneValue) => void;
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
        return (
          <ControlLabel
            key={key}
            label={t(`isochrone_plot.controls.${key}.label`)}
            input={(id) => (
              <HorizontalSlider
                labelledbyId={id}
                value={value[key as keyof IsochroneValue]}
                ariaValuetext={
                  t(`isochrone_plot.controls.${key}.textValue`, {
                    value: value[key as keyof IsochroneValue],
                  }) || undefined
                }
                onChangeCallback={(value) => handleChange(key, value)}
                {...{ ...sharedProps, ...configs[key as keyof IsochroneValue] }}
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
