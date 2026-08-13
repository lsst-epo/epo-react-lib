import { ChartMargin, Domain } from "@/types/charts";

const margins: ChartMargin = { top: 10, right: 10, bottom: 20, left: 60 };

const defaults = {
  width: 600,
  height: 600,
  margins,
  xDomain: [0, 300] as Domain,
  yDomain: [0, 18000] as Domain,
  xValueAccessor: "distance",
  yValueAccessor: "velocity",
  minZoom: 1,
  maxZoom: 5,
  /** How much a point grows when it is hovered or selected */
  activePointScale: 2,
  /** How far one nudge moves a galaxy, as a fraction of an axis step */
  nudgeStep: 0.05,
  /**
   * How many ticks each axis aims for. The legacy plot let d3 pick its own default of ten; eight
   * keeps the same feel with a little more room for the five-figure velocity labels.
   */
  axisTicks: 8,
};

export default defaults;
