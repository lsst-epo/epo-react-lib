import { FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./styles";

interface ProgressBarProps {
  min?: number;
  max?: number;
  value: number;
  displayValue?: string;
  labelledById?: string;
  describedById?: string;
  className?: string;
}

const ProgressBar: FunctionComponent<PropsWithChildren<ProgressBarProps>> = ({
  min = 0,
  max = 100,
  value,
  displayValue,
  labelledById,
  describedById,
  children,
  className,
}) => {
  const safeValue = Math.min(Math.max(value, min), max);
  const isIndeterminate = isNaN(safeValue);

  return (
    <Styled.ProgressBarContainer className={className}>
      <Styled.ProgressBar
        role="progressbar"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={isIndeterminate ? undefined : safeValue}
        aria-labelledby={labelledById}
        aria-describedby={describedById}
        aria-valuetext={displayValue}
        $value={isIndeterminate ? undefined : safeValue}
      >
        {!isIndeterminate && (
          <Styled.Marker $active $hoverable $value={safeValue}>
            {displayValue || `${safeValue}%`}
          </Styled.Marker>
        )}
        {children}
      </Styled.ProgressBar>
    </Styled.ProgressBarContainer>
  );
};

ProgressBar.displayName = "Atomic.ProgressBar";

export default ProgressBar;
