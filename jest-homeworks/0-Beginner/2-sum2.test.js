const sum = require("./2-sum2");

describe("sum", () => {
  it("should be positive for 3 for 1+2", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("should be negative for -2 for -1+3", () => {
    expect(sum(-1, 3)).toBe(2);
  });
  it("should throw an error for first parameter is not being number", () => {
    expect(() => sum("s", 2)).toThrow("Input must be numbers");
  });
  it("should throw an error for second parameter is not being number", () => {
    expect(() => sum(3, "o")).toThrow("Input must be numbers");
  });
});
