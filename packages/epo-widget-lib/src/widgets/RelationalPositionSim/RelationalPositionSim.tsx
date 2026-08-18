import { FunctionComponent, useMemo } from "react";
import "echarts-gl";
import partition from "lodash/partition";
import * as Styled from "./styles";

export interface Galaxy {
  id: string;
  x: number;
  y: number;
  z: number;
  /** Localized display name shown next to the node. Unlabeled nodes are drawn as plain points. */
  label?: string;
  color?: string;
}

/** `[x, y, z, label, color]`, the shape the scatter3D series formatters read from. */
type NodeTuple = [number, number, number, string, string];

type Vector3 = [number, number, number];

const nodeSize = 10;
const originSize = nodeSize * 2;

/**
 * In the emphasis (hover) state ECharts inherits the label color from the item
 * unless it is set explicitly, so this has to be applied to both states of
 * every node series to keep label text black.
 */
const labelStyle = {
  fontFamily: "'Source Sans Pro', system-ui",
  color: "#000000",
};

const defaultNode = {
  type: "scatter3D",
  animation: false,
  itemStyle: {
    color: ({ data }: { data: NodeTuple }) => data[4],
  },
  label: {
    show: true,
    distance: 3,
    formatter: ({ data }: { data: NodeTuple }) => data[3],
    fontSize: 16,
    ...labelStyle,
  },
  emphasis: {
    label: labelStyle,
    fontSize: 14,
  },
};

const defaultLine = {
  type: "line3D",
  animation: false,
  lineStyle: {
    color: "#000000",
    opacity: 0.3,
    width: 1.5,
  },
};

const getAxisInfo = (axisName: string) => ({
  name: axisName,
  type: "value",
});

const dataObjsToArray = (data: Array<Galaxy>): Array<NodeTuple> =>
  data.map(({ x, y, z, label = "", color = "" }) => [x, y, z, label, color]);

const createLineData = (node: Galaxy, origin: Galaxy): [Vector3, Vector3] => [
  [origin.x, origin.y, origin.z],
  [node.x, node.y, node.z],
];

const getConnectingLines = (nodes: Array<Galaxy>, activeGalaxy: Galaxy) =>
  nodes.map((node) => ({
    ...defaultLine,
    name: "Distance Between Galaxies",
    data: createLineData(node, activeGalaxy),
  }));

const getOrigin = (activeGalaxy: Galaxy) => ({
  ...defaultNode,
  name: "Origin Galaxy",
  data: dataObjsToArray([activeGalaxy]),
  symbolSize: originSize,
});

const getLabeledNodes = (labeledNodes: Array<Galaxy>) => ({
  ...defaultNode,
  name: "Labeled Galaxies",
  data: dataObjsToArray(labeledNodes),
  symbolSize: nodeSize,
});

const getOption = (data: Array<Galaxy>, origin: Galaxy) => {
  const dataWithoutOrigin = data.filter(({ id }) => id !== origin.id);
  const [labeledNodes, unlabeledNodes] = partition(
    dataWithoutOrigin,
    ({ label }) => label,
  );

  return {
    grid3D: {
      show: false,
      bottom: "20%",
      viewControl: {
        projection: "perspective",
        distance: 220,
      },
    },
    xAxis3D: getAxisInfo("x"),
    yAxis3D: getAxisInfo("y"),
    zAxis3D: getAxisInfo("z"),
    dataset: {
      source: unlabeledNodes,
      dimensions: ["x", "y", "z"],
    },
    series: [
      {
        type: "scatter3D",
        animation: false,
        symbolSize: nodeSize,
        itemStyle: {
          color: ({ data }: { data: Galaxy }) => data.color,
        },
        emphasis: {
          label: {
            ...labelStyle,
            fontSize: 14,
          },
        },
      },
      getLabeledNodes(labeledNodes),
      getOrigin(origin),
      ...getConnectingLines(dataWithoutOrigin, origin),
    ],
  };
};

interface RelationalPositionSimProps {
  data?: Array<Galaxy>;
  activeGalaxy?: Galaxy;
}

const RelationalPositionSim: FunctionComponent<RelationalPositionSimProps> = ({
  data,
  activeGalaxy,
}) => {
  const option = useMemo(
    () => (data && activeGalaxy ? getOption(data, activeGalaxy) : undefined),
    [data, activeGalaxy],
  );

  if (!option) return null;

  return (
    <Styled.Chart style={{ width: "100%", height: "80%" }} {...{ option }} />
  );
};

export default RelationalPositionSim;
