import { FormEvent, FunctionComponent, useState } from "react";
import { Select } from "@rubin-epo/epo-react-lib";
import { filters, spectrums, Filter, rangeConfig } from "./data";
import { useTranslation } from "react-i18next";
import * as Styled from "./styles";
import { between, intersection } from "@/lib/utils";

const CameraFilter: FunctionComponent = () => {
  const [isCondensed, setIsCondensed] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Filter | null>(null);
  const { t } = useTranslation();

  const {
    [isCondensed ? "condensed" : "default"]: { min, max, range: spectrumRange },
  } = rangeConfig;

  const filterMin = filters[0].range[0];
  const filterMax = filters[filters.length - 1].range[1];
  const filterRange = filterMax - filterMin;

  const filtersOnly = filters.filter(
    ({ band }) => band !== undefined
  ) as Required<Filter>[];

  const noneOption = { value: "none", label: "None" };
  const options = [noneOption].concat(
    filtersOnly.map(({ band }) => ({ value: band, label: `${band} filter` }))
  );

  const handleFilterChange = (event: FormEvent<HTMLSelectElement>) => {
    const { value } = event.target as HTMLSelectElement;
    const selectedFilter = filters.find((f) => f.band === value);

    setActiveFilter(selectedFilter || null);
  };

  const { band: activeBand, range: [activeMin, activeMax] = [0, 0] } =
    activeFilter || { band: undefined, range: undefined };

  return (
    <Styled.FilterContainer>
      <h1>Rubin Observatory LSST Camera Filter Ranges</h1>
      <Styled.FilterTable
        range={(filterRange / spectrumRange) * 100}
        offset={((filterMin - min) / spectrumRange) * 100}
      >
        <colgroup>
          {filters.map(({ range }) => (
            <col
              key={range.join("")}
              style={{
                width: `${((range[1] - range[0]) / filterRange) * 100}%`,
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
                aria-hidden={!band}
              >
                {band}
              </Styled.FilterName>
            ))}
          </tr>
        </Styled.FilterNames>
        <Styled.FilterRanges>
          <tr>
            {filters.map(({ band, range }) => (
              <Styled.FilterRange key={range.join()} aria-hidden={!band}>
                {band && (
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
        viewBox={`${min} 0 ${spectrumRange} 100`}
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
            <rect width="100%" height="100%" fill="white" x={min} />
            {activeBand && (
              <>
                <rect
                  x={min}
                  width={activeMin - min}
                  height="100%"
                  fill="black"
                />
                <rect
                  x={activeMax}
                  width={max - activeMax}
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
              height="100%"
              fill={`url(#${name}-gradient)`}
              x={lower || min}
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
                    activeBand || between(upper, activeMin, activeMax)
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
          aria-label={t("camera_filter.labels.captured_range", {
            filter: activeBand,
          })}
          aria-live="polite"
        >
          {spectrums.map(({ name, upper, lower }) => {
            const safeUpper = upper || max;
            const safeLower = lower || min;
            return (
              <text
                key={name}
                x={(safeUpper - safeLower) / 2 + safeLower}
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                role="listitem"
                aria-hidden={
                  activeBand &&
                  intersection(
                    [safeLower, safeUpper],
                    [activeMin, activeMax]
                  ) === null
                }
              >
                {t(`camera_filter.labels.${name}`)}
              </text>
            );
          })}
        </g>
      </Styled.ElectromagneticSpectrum>
      <Styled.SelectContainer>
        <Select
          options={options}
          value={activeBand}
          defaultValue={noneOption.value}
          onChange={handleFilterChange}
        />
      </Styled.SelectContainer>
    </Styled.FilterContainer>
  );
};

CameraFilter.displayName = "Widgets.CameraFilter";

export default CameraFilter;
