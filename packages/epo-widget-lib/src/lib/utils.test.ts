import {
  between,
  intersection,
  getClampedArrayIndex,
  getLinearScale,
  mergeWithDefaults,
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
describe("mergeWithDefaults", () => {
  const defaults: Record<string, number> = {
    min: 10,
    max: 20,
  };

  it("should overwrite the defaults if value is available", () => {
    const value: Record<string, number> = { min: 100, max: 0 };
    const result = mergeWithDefaults(value, defaults);

    Object.keys(result).forEach((key) => {
      expect(result[key]).toEqual(value[key]);
    });
  });
  it("should use defaults if value is null", () => {
    const value: Record<string, number | null> = { min: null, max: null };
    const result = mergeWithDefaults(value, defaults);

    Object.keys(result).forEach((key) => {
      expect(result[key]).toEqual(defaults[key]);
    });
  });
  it("should use defaults if value is undefined", () => {
    const value: Record<string, number | undefined> = { max: undefined };
    const result = mergeWithDefaults(value, defaults);

    Object.keys(result).forEach((key) => {
      expect(result[key]).toEqual(defaults[key]);
    });
  });
});
