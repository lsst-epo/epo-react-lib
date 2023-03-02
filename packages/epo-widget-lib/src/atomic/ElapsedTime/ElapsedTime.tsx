import { FunctionComponent } from "react";
import { Trans } from "react-i18next";
import * as Styled from "./styles";

type TimeInterval = "year" | "day" | "hour" | "minute" | "second";

type TimeStepProps = {
  [key in TimeInterval]?: number;
};

const ElapsedTime: FunctionComponent<TimeStepProps> = ({
  year,
  day,
  hour,
  minute,
  second,
}) => {
  const steps = { year, day, hour, minute, second };
  const validSteps = Object.keys(steps)
    .filter((k) => steps[k as TimeInterval] !== undefined)
    .map((k) => ({
      interval: k,
      time: steps[k as TimeInterval],
    }));

  const dateTime = validSteps.reduce<string>((prev, curr) => {
    const { interval, time = 0 } = curr;

    return `${prev}${time}${interval.charAt(0).toUpperCase()}`;
  }, "PT");

  return (
    <Styled.ElapsedTimeContainer>
      <Styled.Header id="elapsedTimeHeader">
        <Trans>elapsed_time.title</Trans>
      </Styled.Header>
      <Styled.Time dateTime={dateTime} aria-labelledby="elapsedTimeHeader">
        {validSteps.map((s) => {
          const { interval, time = 0 } = s;
          const labelKey = `elapsed_time.step.${interval}`;
          return (
            <Styled.Interval key={interval}>
              <Styled.Number>{time}</Styled.Number>
              <Styled.Step>
                <Trans i18nKey={labelKey} count={time} />
              </Styled.Step>
            </Styled.Interval>
          );
        })}
      </Styled.Time>
    </Styled.ElapsedTimeContainer>
  );
};

ElapsedTime.displayName = "Atomic.ElapsedTime";

export default ElapsedTime;
