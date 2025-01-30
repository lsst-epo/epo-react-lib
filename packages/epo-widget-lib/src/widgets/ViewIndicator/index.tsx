import { FC, Fragment } from "react";
import {
  geoPath,
  geoGraticule,
  type GeoPermissibleObjects,
  geoOrthographic,
} from "d3-geo";
import * as Styled from "./styles";
import { getLinearScale } from "@/lib/utils";

const yaw = 10;
const pitch = 10;
const rotation: [number, number] = [yaw, pitch];
const width = 100;
const height = 100;

const graticule = geoGraticule();
graticule.step([180, 180]);

const buildProjection = (props?: {
  backFaces?: boolean;
  applyRotation?: boolean;
}) => {
  const { backFaces = false, applyRotation = true } = props || {};
  const projection = geoOrthographic();

  projection.fitExtent(
    [
      [0, 0],
      [width, height],
    ],
    graticule.outline()
  );
  if (applyRotation) {
    projection.rotate(rotation);
  }
  if (backFaces) {
    projection.clipAngle(null);
  }

  const path = geoPath(projection);

  const pathGenerator = (object: GeoPermissibleObjects): string | undefined =>
    path(object) || undefined;

  return { projection, pathGenerator };
};

const Outline: FC = () => {
  const { pathGenerator } = buildProjection({ applyRotation: false });

  return <Styled.Outline d={pathGenerator(graticule.outline())} />;
};

const Meridian: FC<{ backFaces?: boolean }> = ({ backFaces }) => {
  const { pathGenerator } = buildProjection({ backFaces });

  return (
    <Styled.Meridian
      d={pathGenerator(graticule())}
      opacity={backFaces ? 0.8 : undefined}
    />
  );
};

interface ViewerProps {
  ra: number;
  dec: number;
  fov: [number, number];
}

const renderOrder = (ra: number, dec: number) => {
  const isBackFacing = ra > 90 - yaw && ra < 270 - yaw;
  const isAboveEquator = dec > 0 + pitch;
  const isWest = ra > 180 - yaw;
  const topPieces = ["top", "bottom"];
  const sidePieces = ["left", "right"];

  if (isAboveEquator) {
    topPieces.reverse();
  }
  if (isWest) {
    sidePieces.reverse();
  }

  const edges = ["plane", topPieces[0], ...sidePieces, topPieces[1]];

  if (isBackFacing) {
    edges.reverse();
  }

  return edges;
};

const Viewer: FC<ViewerProps> = ({ ra, dec, fov }) => {
  const { pathGenerator } = buildProjection({ backFaces: true });
  const [fovWidth, fovHeight] = fov;
  const halfFovWidth = Math.max(fovWidth, 0.1) / 2;
  const halfFovHeight = Math.max(fovHeight, 0.1) / 2;
  const top = dec + halfFovHeight;
  const bottom = dec - halfFovHeight;
  const left = ra + halfFovWidth;
  const right = ra - halfFovWidth;
  const topLeft = [left, top];
  const topRight = [right, top];
  const bottomLeft = [left, bottom];
  const bottomRight = [right, bottom];

  const centerX = width / 2;
  const centerY = height / 2;

  const addCenter = (path?: string) => {
    return `${path}L${centerX},${centerY}`;
  };

  const viewcone: Record<string, JSX.Element> = {
    plane: (
      <Styled.Plane
        d={pathGenerator({
          type: "Polygon",
          coordinates: [[topLeft, topRight, bottomRight, bottomLeft, topLeft]],
        })}
      />
    ),
    top: (
      <Styled.TopEdges
        d={addCenter(
          pathGenerator({
            type: "LineString",
            coordinates: [topLeft, topRight],
          })
        )}
      />
    ),
    bottom: (
      <Styled.TopEdges
        d={addCenter(
          pathGenerator({
            type: "LineString",
            coordinates: [bottomRight, bottomLeft],
          })
        )}
      />
    ),
    left: (
      <Styled.SideEdges
        d={addCenter(
          pathGenerator({
            type: "LineString",
            coordinates: [bottomLeft, topLeft],
          })
        )}
      />
    ),
    right: (
      <Styled.SideEdges
        d={addCenter(
          pathGenerator({
            type: "LineString",
            coordinates: [topRight, bottomRight],
          })
        )}
      />
    ),
  };

  const order = renderOrder(ra, dec);

  const colorScale = getLinearScale([0, 180], [0, 100], {
    clamp: true,
    fractionDigits: 0,
  });

  const primaryMix = colorScale(Math.abs(180 - ra));

  return (
    <Styled.ViewCone
      style={{
        "--percent-mix-primary": `${primaryMix}%`,
        "--percent-mix-secondary": `${100 - primaryMix}%`,
      }}
    >
      {order.map((piece) => {
        if (viewcone[piece]) {
          return <Fragment key={piece}>{viewcone[piece]}</Fragment>;
        }
      })}
    </Styled.ViewCone>
  );
};

interface ViewIndicatorProps extends Partial<ViewerProps> {
  size?: string;
  className?: string;
}

const ViewIndicator: FC<ViewIndicatorProps> = ({
  size = "var(--size-spacing-m)",
  className,
  ra,
  dec,
  fov,
}) => {
  const canRender =
    typeof ra !== "undefined" &&
    typeof dec !== "undefined" &&
    typeof fov !== "undefined";

  return (
    <Styled.Container
      style={{ "--size-container": size }}
      className={className}
    >
      <Styled.NorthDirection>N</Styled.NorthDirection>
      <Styled.SVG
        preserveAspectRatio="xMidYMid meet"
        viewBox={`0 0 ${width} ${height}`}
      >
        <Meridian backFaces />
        {canRender && <Viewer {...{ ra, dec, fov }} />}
        <Meridian />
        <Outline />
      </Styled.SVG>
    </Styled.Container>
  );
};

ViewIndicator.displayName = "Widget.ViewIndicator";

export default ViewIndicator;
