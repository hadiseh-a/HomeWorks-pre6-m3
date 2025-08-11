const isTruthyOrFalsy = require("./0-isTruthyOrFalsy");

describe("isTruthyOrFalsy", () => {
  test("should return true", () => {
    expect(isTruthyOrFalsy(true)).toBeTruthy();
    expect(isTruthyOrFalsy(10)).toBeTruthy();
    expect(isTruthyOrFalsy("hello")).toBeTruthy();
  });
  test("should return false", () => {
    expect(isTruthyOrFalsy(false)).toBeFalsy();
    expect(isTruthyOrFalsy("")).toBeFalsy();
    expect(isTruthyOrFalsy(undefined)).toBeFalsy();
    expect(isTruthyOrFalsy(null)).toBeFalsy();
    expect(isTruthyOrFalsy(0)).toBeFalsy();
  });
});
