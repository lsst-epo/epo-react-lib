import { getFilters } from "./canvas";

const filterArgs = {
  brightness: 1.2,
  contrast: 1.3,
};

describe("getFilters", () => {
  it("should return a valid CSS filter string", () => {
    const filters = getFilters(filterArgs);

    expect(typeof filters === "string").toBe(true);
    expect(filters).toBe("brightness(120%) contrast(130%)");
  });
});
