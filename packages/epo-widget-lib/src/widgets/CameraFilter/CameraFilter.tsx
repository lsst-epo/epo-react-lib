import { FunctionComponent, useState } from "react";
import SelectListbox from "@rubin-epo/epo-react-lib/SelectListbox";
import { tokens } from "@rubin-epo/epo-react-lib/styles";
import { useTranslation } from "react-i18next";
import useResizeObserver from "use-resize-observer";
import { filters, Filter, rangeConfig } from "./data";
import * as Styled from "./styles";
import CondensedFilterRanges from "./CondensedFilterRanges";
import SpectrumDisplay from "./SpectrumDisplay";

const CameraFilter: FunctionComponent = () => {
  const { t } = useTranslation();
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();
  const [activeFilterBand, setActiveFilterBand] = useState<string | null>(null);
  const { BREAK_TABLET } = tokens;
  const isCondensed = width < parseInt(BREAK_TABLET);

  const {
    [isCondensed ? "condensed" : "default"]: { min, max, range: spectrumRange },
  } = rangeConfig;

  const filterMin = filters[0].range[0];
  const filterMax = filters[filters.length - 1].range[1];
  const filterRange = filterMax - filterMin;

  const filtersOnly = filters.filter(({ band }) => band) as Required<Filter>[];

  const noneOption = {
    value: "none",
    label: t("camera_filter.labels.option", { context: "none" }),
  };
  const options = [noneOption].concat(
    filtersOnly.map(({ band }) => ({
      value: band,
      label: t("camera_filter.labels.option", { band }),
    }))
  );

  const activeFilter = filters.find(({ band }) => band === activeFilterBand);

  return (
    <Styled.FilterWrapper ratio="landscape" smallScreenRatio="square">
      <Styled.FilterContainer ref={ref}>
        <Styled.FilterTitle>{t("camera_filter.title")}</Styled.FilterTitle>
        {isCondensed && (
          <CondensedFilterRanges
            filters={filtersOnly}
            {...{ min, spectrumRange }}
          />
        )}
        <Styled.FilterTable
          style={{
            "--filter-table-margin-inline-start": `${(
              ((filterMin - min) / spectrumRange) *
              100
            ).toFixed(2)}%`,
            "--filter-table-width": `${(
              (filterRange / spectrumRange) *
              100
            ).toFixed(2)}%`,
          }}
          data-testid="expanded-filters"
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
              {filters.map(({ band }, i) => (
                <Styled.FilterName
                  id={`${band}-name`}
                  style={{
                    "--filter-name-border": band ? "solid #b2b2b2" : "none",
                  }}
                  key={i}
                  scope="col"
                  aria-hidden={!band}
                >
                  {band}
                </Styled.FilterName>
              ))}
            </tr>
          </Styled.FilterNames>
          {!isCondensed && (
            <Styled.FilterRanges>
              <tr>
                {filters.map(({ band, range }) => (
                  <Styled.FilterRange key={range.join()} aria-hidden={!band}>
                    {band && (
                      <>
                        {range.join("–")}
                        <br />
                        <Styled.Wavelength>nm</Styled.Wavelength>
                      </>
                    )}
                  </Styled.FilterRange>
                ))}
              </tr>
            </Styled.FilterRanges>
          )}
        </Styled.FilterTable>
        <SpectrumDisplay
          {...{ min, max, range: spectrumRange, isCondensed, activeFilter }}
        />
        <Styled.SelectContainer>
          <Styled.SelectLabel id="filterSelectLabel">
            {t("camera_filter.labels.select")}
          </Styled.SelectLabel>
          <SelectListbox
            options={options}
            value={activeFilterBand}
            onChangeCallback={(value: string | null) =>
              setActiveFilterBand(value)
            }
            width="100%"
            maxWidth="100%"
            labelledById="filterSelectLabel"
          />
        </Styled.SelectContainer>
      </Styled.FilterContainer>
    </Styled.FilterWrapper>
  );
};

CameraFilter.displayName = "Widgets.CameraFilter";

export default CameraFilter;
