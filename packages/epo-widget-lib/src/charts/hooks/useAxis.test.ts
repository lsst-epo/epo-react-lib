import useAxis from "./useAxis";

const min = 0;
const max = 100;
const step = 5;
const range = [0, 50];

const props = { min, max, step, range };

describe("useAxis", () => {
  it("should return a domain with two array values", () => {
    const [domain] = useAxis(props);

    expect(domain.length).toBe(2);
  });
  it("should return an array of ticks, spaced by the step value", () => {
    const [domain, ticks] = useAxis(props);

    expect(ticks[1] - ticks[0]).toBe(step);
  });
  it("should return a scaling function", () => {
    const [domain, ticks, scale] = useAxis(props);

    expect(typeof scale).toBe("function");
    expect(scale(min)).toBe(range[0]);
    expect(scale(max)).toBe(range[1]);
  });
});
