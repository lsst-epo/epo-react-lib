import useAxis from "./useAxis";

const min = 0;
const max = 100;
const step = 10;
const ticks = 6;
const range = [0, 200];

describe("useAxis", () => {
  it("should return a domain half a step larger than the input", () => {
    const [domain] = useAxis({ min, max, step, range });

    expect(domain[0]).toEqual(min - step / 2);
    expect(domain[1]).toEqual(max + step / 2);
  });
  it("should return an array of spaced by the step, if specified", () => {
    const [, ticks] = useAxis({ min, max, step, range });

    expect(ticks[1] - ticks[0]).toEqual(step);
  });
  it("should return an evenly spaced array of ticks, if step is not specified", () => {
    const [, tickArray] = useAxis({ min, max, ticks, range });

    expect(tickArray[1] - tickArray[0]).toEqual(tickArray[2] - tickArray[1]);
  });
  it("should return a scaling function", () => {
    const [, , scale] = useAxis({ min, max, step, range });
    expect(scale(50)).toEqual(100);
  });
});
