import {
  estimateMagnitudeWithOffset,
  gaussianBump,
  exponentialRise,
} from "./helpers";

const gaussianWidth = -2;
const yOffset = -5;

describe("gaussianBump", () => {
  it("should apply a Gaussian bump", () => {
    const mag = gaussianBump(0, gaussianWidth);

    expect(mag).toBe(-0.8788261256269516);
  });
});
describe("exponentialRise", () => {
  it("should apply an exponential rise to a magnitude", () => {
    const mag = gaussianBump(0, gaussianWidth);
    const peak = exponentialRise(0, mag);

    expect(peak).toBe(-1.0749187397807176);
  });
});
describe("estimateMagnitudeWithOffset", () => {
  it("should return an estimated magnitude", () => {
    const peak = estimateMagnitudeWithOffset(0, gaussianWidth, yOffset);
    const mag15 = estimateMagnitudeWithOffset(15, gaussianWidth, yOffset);
    const dm15 = Number((peak - mag15).toFixed(2));

    expect(peak).toBeLessThan(mag15);
    expect(dm15).toBe(-0.79);
  });
});
