import { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import useInterval from "@/hooks/useInterval";
import defaults from "../defaults";
import * as Styled from "./styles";

const SIZE = 80;

const DIRECTIONS = [
  { key: "ArrowUp", rotation: -90 },
  { key: "ArrowRight", rotation: 0 },
  { key: "ArrowDown", rotation: 90 },
  { key: "ArrowLeft", rotation: 180 },
] as const;

interface NudgeProps {
  x: number;
  y: number;
  onNudge: (key: string) => void;
  onNudgeEnd: () => void;
}

/**
 * Arrow buttons for moving the selected point a little at a time. Holding one down repeats the
 * nudge, which the caller accelerates.
 */
const Nudge: FunctionComponent<NudgeProps> = ({
  x,
  y,
  onNudge,
  onNudgeEnd,
}) => {
  const { t } = useTranslation();
  const [heldKey, setHeldKey] = useState<string>();

  useInterval(
    () => heldKey && onNudge(heldKey),
    heldKey ? defaults.nudgeInterval : null,
  );

  const press = (key: string) => {
    setHeldKey(key);
    onNudge(key);
  };

  const release = () => {
    if (!heldKey) return;

    setHeldKey(undefined);
    onNudgeEnd();
  };

  return (
    <foreignObject
      x={x - SIZE / 2}
      y={y - SIZE / 2}
      width={SIZE}
      height={SIZE}
      overflow="visible"
    >
      <Styled.Grid>
        {DIRECTIONS.map(({ key, rotation }) => (
          <Styled.Arrow
            key={key}
            type="button"
            data-direction={key}
            aria-label={t(`chart.nudge.${key}`)}
            onPointerDown={() => press(key)}
            onPointerUp={release}
            onPointerLeave={release}
            onPointerCancel={release}
          >
            <Styled.ArrowIcon
              viewBox="0 0 10 10"
              style={{ transform: `rotate(${rotation}deg)` }}
              aria-hidden
            >
              <path d="M 2 0 L 7 5 L 2 10" />
            </Styled.ArrowIcon>
          </Styled.Arrow>
        ))}
      </Styled.Grid>
    </foreignObject>
  );
};

Nudge.displayName = "Charts.Nudge";

export default Nudge;
