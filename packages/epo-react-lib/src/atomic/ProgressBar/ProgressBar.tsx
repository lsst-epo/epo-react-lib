import { FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./styles";

interface ProgressBarProps {
  min?: number;
  max?: number;
  value?: number;
  displayValue?: string;
  labelledById?: string;
  describedById?: string;
  className?: string;
  isActive?: boolean;
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
  isActive = true,
}) => {
  const isIndeterminate = value === undefined || isNaN(value);
  const safeValue = Math.min(Math.max(value || 0, min), max);
  const renderValue = ((safeValue - min) / (max - min)) * 100;

  return (
    <Styled.ProgressBarContainer className={className}>
      <Styled.ProgressBar
        role="progressbar"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={isIndeterminate ? undefined : safeValue}
        aria-valuetext={displayValue}
        aria-labelledby={labelledById}
        aria-describedby={describedById}
        $value={isIndeterminate ? undefined : renderValue}
      >
        {children}
        {!isIndeterminate && (
          <Styled.Marker
            $active
            $hoverable={isActive}
            $filled={!isActive}
            $value={renderValue}
          >
            {displayValue || `${safeValue}%`}
          </Styled.Marker>
        )}
      </Styled.ProgressBar>
    </Styled.ProgressBarContainer>
  );
};

export default ProgressBar;
