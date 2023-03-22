import { FormEvent, FunctionComponent, useState } from "react";
import { Select } from "@rubin-epo/epo-react-lib";
import {
  filters,
  spectrums,
  lowerWavelength,
  upperWavelength,
  spectrumRange,
  spectrumBounds,
  Filter,
} from "./data";
import * as Styled from "./styles";
import { between } from "@/lib/utils";

const CameraFilter: FunctionComponent = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>(filters[1]);
  const minRange = filters[0].range[0];
  const maxRange = filters[filters.length - 1].range[1];
  const totalRange = maxRange - minRange;
  const { ultraviolet: uvBound, visible: visibleBound } = spectrumBounds;

  const noneOption = { value: "none", label: "None" };
  const options = [noneOption].concat(
    filters
      .filter(({ band }) => band !== "none")
      .map(({ band }) => ({ value: band, label: `${band} filter` }))
  );

  const handleFilterChange = (event: FormEvent<HTMLSelectElement>) => {
    const { value } = event.target as HTMLSelectElement;
    const selectedFilter = filters.find((f) => f.band === value);

    selectedFilter && setActiveFilter(selectedFilter);
  };

  const { band: activeBand, range } = activeFilter;

  return (
    <Styled.FilterContainer>
      <h1>Rubin Observatory LSST Camera Filter Ranges</h1>
      <Styled.FilterTable
        range={(totalRange / spectrumRange) * 100}
        offset={((minRange - lowerWavelength) / spectrumRange) * 100}
      >
        <colgroup>
          {filters.map(({ range }) => (
            <col
              key={range.join("")}
              style={{
                width: `${((range[1] - range[0]) / totalRange) * 100}%`,
              }}
            />
          ))}
        </colgroup>
        <Styled.FilterNames>
          <tr>
            {filters.map(({ band }) => (
              <Styled.FilterName
                key={`${band}-name`}
                band={band}
                scope="col"
                aria-hidden={band === "none"}
              >
                {band !== "none" && band}
              </Styled.FilterName>
            ))}
          </tr>
        </Styled.FilterNames>
        <Styled.FilterRanges>
          <tr>
            {filters.map(({ band, range }) => (
              <Styled.FilterRange
                key={`${band}-range`}
                aria-hidden={band === "none"}
              >
                {band !== "none" && (
                  <>
                    {range.join("-")}
                    <br />
                    <Styled.Wavelength>nm</Styled.Wavelength>
                  </>
                )}
              </Styled.FilterRange>
            ))}
          </tr>
        </Styled.FilterRanges>
      </Styled.FilterTable>
      <Styled.ElectromagneticSpectrum
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
        viewBox={`${lowerWavelength} 0 ${spectrumRange} 100`}
      >
        <defs>
          {spectrums.map(({ name, stops }) => (
            <linearGradient key={name} id={`${name}-gradient`}>
              {stops.map(({ offset, stopColor }) => (
                <stop
                  key={`${offset}-${stopColor}`}
                  {...{ offset, stopColor }}
                />
              ))}
            </linearGradient>
          ))}
          <mask id="spectrumMask">
            <rect width="100%" height="100%" fill="white" x={lowerWavelength} />
            {activeBand !== "none" && (
              <>
                <rect
                  x={lowerWavelength}
                  width={range[0] - lowerWavelength}
                  height="100%"
                  fill="black"
                />
                <rect
                  x={range[1]}
                  width={upperWavelength - range[1]}
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
              width={(upper || upperWavelength) - (lower || lowerWavelength)}
              height="100%"
              fill={`url(#${name}-gradient)`}
              x={lower || lowerWavelength}
              role="presentation"
            />
          ))}
        </g>
        <g>
          {spectrums.map(
            ({ name, upper }) =>
              typeof upper !== "undefined" && (
                <line
                  key={name}
                  strokeWidth={2}
                  strokeDasharray="8 8"
                  stroke={
                    activeBand === "none" || between(upper, range[0], range[1])
                      ? "#fff"
                      : "#000"
                  }
                  x1={upper}
                  x2={upper}
                  y1={0}
                  y2="100%"
                />
              )
          )}
        </g>
        <g
          role="list"
          aria-label="Captured electromagnetic spectrum"
          aria-live="polite"
        >
          <text
            x={(uvBound - lowerWavelength) / 2 + lowerWavelength}
            y="50%"
            dominant-baseline="middle"
            text-anchor="middle"
            role="listitem"
          >
            Ultraviolet
          </text>
          <text
            x={(visibleBound - uvBound) / 2 + uvBound}
            y="50%"
            dominant-baseline="middle"
            text-anchor="middle"
            role="listitem"
          >
            Visible Light
          </text>
          <text
            x={(upperWavelength - visibleBound) / 2 + visibleBound}
            y="50%"
            dominant-baseline="middle"
            text-anchor="middle"
            role="listitem"
          >
            Infrared
          </text>
        </g>
      </Styled.ElectromagneticSpectrum>
      <Styled.SelectContainer>
        <Select
          options={options}
          value={activeBand}
          onChange={handleFilterChange}
        />
      </Styled.SelectContainer>
    </Styled.FilterContainer>
  );
};

CameraFilter.displayName = "Widgets.CameraFilter";

export default CameraFilter;
