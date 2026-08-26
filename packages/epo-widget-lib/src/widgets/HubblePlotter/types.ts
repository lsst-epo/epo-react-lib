import { Domain } from "@/types/charts";
import { EditablePoint } from "@/charts/PointEditing";

export interface Galaxy extends EditablePoint {
  name?: string;
}

export interface HubblePlotOptions {
  domain?: [Domain, Domain];
  preSelected?: boolean;
  createUserHubblePlot?: string;
  userTrendline?: string;
}

/** What the user is allowed to do in the current mode */
export interface Capabilities {
  isSelectable: boolean;
  isEditable: boolean;
  isZoomable: boolean;
}

export type HubblePlotMode = "select" | "plot" | "display";

export type SelectionCallback = (selection: Array<Galaxy> | null) => void;
export type UserHubblePlotCallback = (
  questionId: string,
  data: Array<Galaxy>
) => void;

export interface HubblePlotterProps {
  /** The galaxies the user works through, one at a time */
  data?: Array<Galaxy>;
  options?: HubblePlotOptions;
  /** Positions the user has already plotted */
  value?: Array<Galaxy>;
  title?: string;
  isLoading?: boolean;
  width?: number;
  height?: number;
  xValueAccessor?: string;
  yValueAccessor?: string;
  className?: string;
  selectionCallback?: SelectionCallback;
  userHubblePlotCallback?: UserHubblePlotCallback;
}
