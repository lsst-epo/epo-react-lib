import { FunctionComponent, useRef } from "react";
import * as Styled from "../styles";
import { Filter } from "../data";

interface FilterRangesProps {
  filters: Array<Required<Filter>>;
  min: number;
  spectrumRange: number;
}

const CondensedFilterRanges: FunctionComponent<FilterRangesProps> = ({
  filters,
  min,
  spectrumRange,
}) => {
  const ref = useRef<HTMLUListElement>(null);
  const labels = ref.current ? Array.from(ref.current.children) : null;

  return (
    <>
      <Styled.CondensedRangeRow ref={ref} data-testid="condensed-filters">
        {filters.map(({ range, band }) => (
          <Styled.CondensedRange key={band} aria-labelledby={`${band}-name`}>
            {range.join("–")}
            <br />
            nm
          </Styled.CondensedRange>
        ))}
      </Styled.CondensedRangeRow>
      {labels && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
          viewBox={`${min} 0 ${spectrumRange} 50`}
          role="presentation"
          aria-hidden="true"
        >
          <g role="presentation">
            {filters.map(({ range, band }, i) => {
              const label = labels[i] as HTMLLIElement;
              const { offsetLeft, offsetWidth, offsetParent } = label;
              const { offsetWidth: parentWidth } =
                offsetParent as HTMLUListElement;
              const scale = spectrumRange / parentWidth;

              const midpoint = (range[0] + range[1]) / 2;
              const labelPosition = (offsetLeft + offsetWidth / 2) * scale;
              return (
                <g key={band}>
                  <line
                    strokeWidth={1}
                    stroke="#b2b2b2"
                    x1={midpoint}
                    x2={midpoint}
                    y1="100%"
                    y2="75%"
                    role="presentation"
                  />
                  <line
                    strokeWidth={1}
                    stroke="#b2b2b2"
                    x1={midpoint}
                    x2={labelPosition + min}
                    y1="75%"
                    y2="0%"
                    role="presentation"
                  />
                </g>
              );
            })}
          </g>
        </svg>
      )}
    </>
  );
};

CondensedFilterRanges.displayName =
  "Widgets.CameraFilter.CondensedFilterRanges";

export default CondensedFilterRanges;
