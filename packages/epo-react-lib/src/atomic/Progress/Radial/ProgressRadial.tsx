import { FunctionComponent } from "react";
import { BaseProgressProps } from "@/types/progress";
import * as Styled from "./styles";

export interface ProgressRadialProps extends BaseProgressProps {
  darkMode?: boolean;
  role?: "progressbar" | "meter";
}

const ProgressRadial: FunctionComponent<ProgressRadialProps> = ({
  min = 0,
  max = 100,
  value,
  labelledById,
  className,
  markerFormatter,
  darkMode = false,
  role = "meter",
}) => {
  const baseRadius = 50;
  const baseWidth = 14;
  const offsetRadius = baseRadius - baseWidth / 2;
  const circumference = Math.PI * (offsetRadius * 2);

  const isIndeterminate = value === undefined || isNaN(value);
  const safeValue = Math.min(Math.max(value || 0, min), max);
  /** allows min and max to be any value with the final rendered
   *  value converted to a percentage to use in width or left offset.
   */
  const renderValue = ((safeValue - min) / (max - min)) * circumference;

  return (
    <Styled.Container
      role={role}
      className={className}
      viewBox="0 0 100 100"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={isIndeterminate ? undefined : safeValue}
      aria-valuetext={markerFormatter && markerFormatter(safeValue)}
      aria-labelledby={labelledById}
    >
      <Styled.BackgroundCircle
        cx="50"
        cy="50"
        r={offsetRadius}
        strokeWidth={baseWidth}
      />
      <Styled.ProgressArc
        cx="50"
        cy="50"
        r={offsetRadius}
        strokeWidth={baseWidth / 2}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - renderValue}
      />
      <Styled.MarkerText x="50%" y="50%" $darkMode={darkMode}>
        {markerFormatter ? markerFormatter(safeValue) : safeValue}
      </Styled.MarkerText>
    </Styled.Container>
  );
};

ProgressRadial.displayName = "Atomic.ProgressRadial";

export default ProgressRadial;
