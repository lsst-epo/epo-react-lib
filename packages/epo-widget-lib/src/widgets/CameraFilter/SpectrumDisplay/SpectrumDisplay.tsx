import { between } from "@/lib/utils";
import { FunctionComponent } from "react";
import { Filter, spectrums } from "../data";
import SpectrumLabels from "./SpectrumLabels";

interface SpectrumDisplayProps {
  min: number;
  max: number;
  range: number;
  isCondensed: boolean;
  activeFilter?: Filter;
}

const SpectrumDisplay: FunctionComponent<SpectrumDisplayProps> = ({
  min,
  max,
  range,
  isCondensed,
  activeFilter,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      viewBox={`${min} 0 ${range} 260`}
      data-testid="spectrum-display"
    >
      <defs>
        {spectrums.map(({ name, stops }) => (
          <linearGradient key={name} id={`${name}-gradient`}>
            {stops.map(({ offset, stopColor, id }) => (
              <stop
                key={`${offset}-${stopColor}`}
                {...{ offset, stopColor, id }}
              />
            ))}
          </linearGradient>
        ))}
        <mask id="spectrumMask">
          <rect width="100%" height="100" fill="white" x={min} />
          {activeFilter && (
            <>
              <rect
                x={min}
                width={activeFilter.range[0] - min}
                height="100%"
                fill="black"
              />
              <rect
                x={activeFilter.range[1]}
                width={max - activeFilter.range[1]}
                height="100%"
                fill="black"
              />
            </>
          )}
        </mask>
      </defs>
      <g mask="url(#spectrumMask)" role="presentation">
        {spectrums.map(({ name, upper, lower }) => (
          <rect
            key={name}
            width={(upper || max) - (lower || min)}
            height="50%"
            fill={`url(#${name}-gradient)`}
            x={lower || min}
            role="presentation"
          />
        ))}
      </g>
      <g>
        {spectrums.map(
          ({ name, upper }) =>
            upper && (
              <line
                key={name}
                strokeWidth={2}
                strokeDasharray="8 8"
                stroke={
                  activeFilter &&
                  !between(upper, activeFilter.range[0], activeFilter.range[1])
                    ? "#000"
                    : "#fff"
                }
                x1={upper}
                x2={upper}
                y1={0}
                y2="50%"
              />
            )
        )}
      </g>
      <SpectrumLabels
        {...{
          spectrums,
          activeBand: activeFilter?.band,
          min,
          max,
          activeMin: activeFilter?.range[0],
          activeMax: activeFilter?.range[1],
          isCondensed,
        }}
      />
    </svg>
  );
};

SpectrumDisplay.displayName = "Widgets.CameraFilter.SpectrumDisplay";

export default SpectrumDisplay;
