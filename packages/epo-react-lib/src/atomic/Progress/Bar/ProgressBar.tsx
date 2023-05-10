import { FunctionComponent, PropsWithChildren } from "react";
import { BaseProgressProps } from "@/types/progress";
import * as Styled from "./styles";
import Marker from "../Marker";

interface ProgressBarProps extends BaseProgressProps {
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
          <Marker
            {...{ ...defaultMarker, ...markerConfig }}
            $value={renderValue}
          >
            {markerFormatter ? markerFormatter(safeValue) : safeValue}
          </Marker>
        )}
      </Styled.ProgressBar>
    </Styled.ProgressBarContainer>
  );
};

export default ProgressBar;
