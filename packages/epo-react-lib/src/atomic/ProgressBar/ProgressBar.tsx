import { FunctionComponent, PropsWithChildren } from "react";
import * as Styled from "./styles";

interface ProgressBarProps {
  min?: number;
  max?: number;
  value?: number;
  markerFormatter?: (value: number) => string;
  labelledById?: string;
  describedById?: string;
  className?: string;
  markerConfig?: {
    $active?: boolean;
    $background?: string;
    $hoverable?: boolean;
    $filled?: boolean;
  };
}

const ProgressBar: FunctionComponent<PropsWithChildren<ProgressBarProps>> = ({
  min = 0,
  max = 100,
  value,
  markerFormatter,
  labelledById,
  describedById,
  children,
  className,
  markerConfig,
}) => {
  const defaultMarker = {
    $active: true,
    $hoverable: true,
  };

  const isIndeterminate = value === undefined || isNaN(value);
  const safeValue = Math.min(Math.max(value || 0, min), max);
  /** allows min and max to be any value with the final rendered
   *  value converted to a percentage to use in width or left offset.
   */
  const renderValue = ((safeValue - min) / (max - min)) * 100;

  return (
    <Styled.ProgressBarContainer className={className}>
      <Styled.ProgressBar
        role="progressbar"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={isIndeterminate ? undefined : safeValue}
        aria-valuetext={markerFormatter && markerFormatter(safeValue)}
        aria-labelledby={labelledById}
        aria-describedby={describedById}
        $value={isIndeterminate ? undefined : renderValue}
      >
        {children}
        {!isIndeterminate && (
          <Styled.Marker
            {...{ ...defaultMarker, ...markerConfig }}
            $value={renderValue}
          >
            {markerFormatter ? markerFormatter(safeValue) : safeValue}
          </Styled.Marker>
        )}
      </Styled.ProgressBar>
    </Styled.ProgressBarContainer>
  );
};

export default ProgressBar;
