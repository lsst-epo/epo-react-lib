import { FunctionComponent, useState } from "react";
import { geoAitoff } from "d3-geo-projection";
import { geoPath, geoGraticule, GeoPermissibleObjects } from "d3-geo";
import { range } from "d3-array";
import { ImageShape } from "@rubin-epo/epo-react-lib/Image";
import { Base } from "@/charts/index";
import { ChartMargin } from "@/charts/types";
import ImageStack from "@/atomic/ImageStack";
import * as Styled from "./styles";

export interface SkymapObject {
  id: string;
  lat: number;
  long: number;
  distance: number;
  magnitude: number;
}

export interface SkymapProps {
  objects?: Array<SkymapObject>;
  images: Array<ImageShape>;
  visibleImages: Array<boolean>;
  describedById?: string;
  className?: string;
}

const Skymap: FunctionComponent<SkymapProps> = ({
  className,
  objects = [],
  images = [],
  visibleImages = [],
  describedById,
}) => {
  const [loaded, setLoaded] = useState(false);
  const chartWidth = 600;
  const chartHeight = 300;

  const margins: ChartMargin = {
    top: 20,
    right: 0,
    bottom: 20,
    left: 20,
  };

  const width = chartWidth + margins.right + margins.left;
  const height = chartHeight + margins.top + margins.bottom;

  const latStep = 15;
  const longStep = 30;
  const latMin = -90;
  const latMax = 90;
  const longMin = -180;
  const longMax = 180;
  const outlineStroke = 2;

  const projection = geoAitoff();
  const graticule = geoGraticule();
  graticule.step([longStep, latStep]);
  graticule.extent([
    [longMin, latMin],
    [longMax, latMax],
  ]);

  projection.fitExtent(
    [
      [margins.left, margins.top],
      [margins.left + chartWidth - outlineStroke, margins.top + chartHeight],
    ],
    graticule.outline()
  );

  const latLabels = range(latMin + latStep, latMax, latStep);
  const longLabels = range(longMin + longStep, longMax, longStep);

  const path = geoPath(projection);

  const pathGenerator = (object: GeoPermissibleObjects): string | undefined =>
    path(object) || undefined;

  return (
    <Base {...{ width, height, className }}>
      <mask id="imageMask">
        <path d={pathGenerator(graticule.outline())} fill="white" />
      </mask>
      <Styled.Background d={pathGenerator(graticule.outline())} />
      <Styled.Graticule d={pathGenerator(graticule())} />
      <Styled.ImageStackerWrapper
        style={{ "--image-stack-opacity": loaded && 1 }}
        x={margins.left}
        y={margins.top}
        width={chartWidth - outlineStroke}
        height={chartHeight}
        mask="url(#imageMask)"
      >
        <ImageStack
          {...{ images, describedById }}
          visible={visibleImages}
          mixBlendMode="multiply"
          loadCallback={() => setLoaded(true)}
          showBackdrop={false}
          showLoader={false}
        />
      </Styled.ImageStackerWrapper>
      <g>
        {objects.map(({ id, lat, long }) => {
          return (
            <circle
              key={id}
              transform={`translate(${projection([long, lat])})`}
              r={5}
            />
          );
        })}
      </g>
      <g aria-hidden="true">
        {latLabels.map((y) =>
          y === 0 ? null : (
            <Styled.LatLabel
              key={y}
              style={{
                dominantBaseline:
                  y > 0 ? "text-after-edge" : "text-before-edge",
              }}
              transform={`translate(${projection([longMin, y])})`}
            >
              {y}&deg;
            </Styled.LatLabel>
          )
        )}
      </g>
      <g aria-hidden="true">
        {longLabels.map((x) => (
          <Styled.LongLabel
            key={x}
            transform={`translate(${projection([x, 0])})`}
          >
            {x}&deg;
          </Styled.LongLabel>
        ))}
      </g>
      <Styled.Outline
        strokeWidth={outlineStroke}
        d={pathGenerator(graticule.outline())}
      />
    </Base>
  );
};

Skymap.displayName = "Widgets.SupernovaThreeVector.Skymap";

export default Skymap;
