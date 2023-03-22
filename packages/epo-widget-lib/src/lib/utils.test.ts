import { between, getClampedArrayIndex } from "./utils";

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
