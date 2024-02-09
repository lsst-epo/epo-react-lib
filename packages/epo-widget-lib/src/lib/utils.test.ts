import {
  between,
  intersection,
  getClampedArrayIndex,
  getLinearScale,
  mjdFromTimestamp,
  timestampFromMJD,
} from "./utils";

const domain = [0, 10];
const range = [100, 200];

describe("getLinearScale", () => {
  it("should return a method", () => {
    const scale = getLinearScale(domain, range);

    expect(typeof scale).toBe("function");
  });
  it("should scale values in domain to new range", () => {
    const scale = getLinearScale(domain, range);
    const minOutput = scale(domain[0]);
    const maxOutput = scale(domain[1]);
    const output = scale(5);

    expect(minOutput).toBe(range[0]);
    expect(maxOutput).toBe(range[1]);
    expect(output).toBe(150);
  });
});

const finalIndex = 4;
describe("getClampedArrayIndex", () => {
  it("should return 0 when greater than the final index", () => {
    const output = getClampedArrayIndex(5, finalIndex);

    expect(output).toBe(0);
  });
  it("should return the final index when less than 0", () => {
    const output = getClampedArrayIndex(-1, finalIndex);

    expect(output).toBe(finalIndex);
  });
  it("should return the index if within range", () => {
    const output = getClampedArrayIndex(1, finalIndex);

    expect(output).toBe(1);
  });
});
describe("between", () => {
  it("should return true when a value is between two other values", () => {
    const output = between(5, 1, 10);

    expect(output).toBeTruthy();
  });
  it("should return false when a value is outside two other values", () => {
    const output = between(-4, 1, 10);

    expect(output).toBeFalsy();
  });
});
describe("intersection", () => {
  it("should return the intersection of two overlapping arrays", () => {
    const output = intersection([1, 5], [3, 10]);

    expect(output && output[0]).toBe(3);
    expect(output && output[1]).toBe(5);
  });
  it("should return null if there is no overlap", () => {
    const output = intersection([1, 5], [9, 10]);

    expect(output).toBeNull();
  });
});
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
