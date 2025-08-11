const checkAge = require("./0-checkAge");

describe("checkAge", () => {
  it("should return undefind for age less tahn 18", () => {
    expect(checkAge(16)).toBeUndefined();
  });
  it("should be fine for age more than 18", () => {
    expect(checkAge(20)).not.toBeUndefined();
  });
});
