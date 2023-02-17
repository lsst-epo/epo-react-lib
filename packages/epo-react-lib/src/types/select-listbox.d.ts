import { ReactElement } from "react";

export interface Option {
  value: string;
  label: string;
  icon?: ReactElement;
}

export type onChangeCallback = (value: string | null) => void;
