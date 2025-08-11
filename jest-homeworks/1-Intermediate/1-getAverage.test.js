const getAverage = require("./1-getAverage");

describe("getAverage", () => {
  it("should return average greater than 5 for 6,7,6", () => {
    expect(getAverage(6, 7, 6)).toBeGreaterThan(5);
  });
  it("should return average less than 5 for 2,3,4", () => {
    expect(getAverage(2, 3, 4)).toBeLessThan(5);
  });
  it("should be 5 for 4,5,6", () => {
    expect(getAverage(4, 5, 6)).toEqual(5);
  });
});
