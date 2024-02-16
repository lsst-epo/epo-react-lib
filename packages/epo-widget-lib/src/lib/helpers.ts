import { precision } from "./utils";

export const timestampFromMJD = (mjd: number) => (mjd - 40587) * 86400000;
export const mjdFromTimestamp = (timestamp: number, pre = 5) =>
  precision(timestamp / 86400000 + 40587, pre);
