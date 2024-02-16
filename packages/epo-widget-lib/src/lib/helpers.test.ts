import { mjdFromTimestamp, timestampFromMJD } from "./helpers";

describe("timestampFromMJD", () => {
  it("should return a Unix timestamp from MJD", () => {
    const unixEpoch = 0;
    const mjdEpoch = 40587;
    const unixMillennium = new Date(Date.UTC(2000, 0, 1, 0, 0, 0)).getTime();
    const mjdMillennium = 51544;
    const epochOutput = timestampFromMJD(mjdEpoch);
    const millenniumOutput = timestampFromMJD(mjdMillennium);

    expect(epochOutput).toEqual(unixEpoch);
    expect(millenniumOutput).toEqual(unixMillennium);
  });
});
describe("mjdFromTimestamp", () => {
  it("should return a Modified Julian Date from a Unix timestamp", () => {
    const unixEpoch = 0;
    const mjdEpoch = 40587;
    const unixMillennium = new Date(Date.UTC(2000, 0, 1, 0, 0, 0)).getTime();
    const mjdMillennium = 51544;
    const epochOutput = mjdFromTimestamp(unixEpoch);
    const millenniumOutput = mjdFromTimestamp(unixMillennium, 0);

    expect(epochOutput).toEqual(mjdEpoch);
    expect(millenniumOutput).toEqual(mjdMillennium);
  });
});
