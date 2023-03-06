import { getLinearScale } from "./utilities";

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
