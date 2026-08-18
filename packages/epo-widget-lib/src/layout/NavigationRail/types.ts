import { ReactNode } from "react";
import { IconKey } from "@rubin-epo/epo-react-lib";

export interface NavigationRailItem {
  id: string;
  label: ReactNode;
  icon?: IconKey | ReactNode;
  header?: string;
}
