const filterElement = require("./2-filterElement");

describe("filterElement", () => {
  it("should return an empty array for []", () => {
    expect(filterElement([], "grapes")).toEqual([]);
  });

  it("should retrun 'apple' in ['apple']", () => {
    expect(filterElement(["apple"], "apple")).toEqual(["apple"]);
  });
});
