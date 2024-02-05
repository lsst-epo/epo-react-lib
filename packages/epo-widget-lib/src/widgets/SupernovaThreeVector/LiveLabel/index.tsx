import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import round from "lodash/round";
import { SkymapObject } from "../Skymap";
import * as Styled from "./styles";

interface LiveLabelProps {
  id: string;
  supernovaCount: number;
  objects: Array<SkymapObject>;
  min: number;
  max: number;
}

const LiveLabel: FunctionComponent<LiveLabelProps> = ({
  id,
  supernovaCount,
  objects,
  min,
  max,
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const listFormatter = new Intl.ListFormat(language, {
    style: "long",
    type: "conjunction",
  });

  const { format: degreeFormatter } = new Intl.NumberFormat(language, {
    maximumFractionDigits: 0,
  });

  const coordinates = objects.map(
    ({ lat, long }) =>
      `${degreeFormatter(round(lat, -1))}° ${degreeFormatter(round(long, -1))}°`
  );

  return (
    <Styled.OffscreenLabel aria-live="polite" id={id}>
      {t("supernova_three_vector.skymap.description", {
        supernovaCount,
        userObjectCount: objects.length,
        coords: listFormatter.format(coordinates),
        min,
        max,
      })}
    </Styled.OffscreenLabel>
  );
};

LiveLabel.displayName = "Widgets.SupernovaThreVector.LiveLabel";

export default LiveLabel;
