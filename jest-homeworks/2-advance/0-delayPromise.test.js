const getUserWithDelay = require("./0-delayPromise");

describe("getUserWithDelay", () => {
  it("should return user with id 2 after 1000 milliseconds", async () => {
    const user = await getUserWithDelay(2);
    expect(user).toEqual({ id: 2, name: "User 2" });
  });
  it("should return user with id 3 after 1000 milliseconds", () => {
    return getUserWithDelay(3).then((user) => {
      expect(user).toEqual({ id: 3, name: "User 3" });
    });
  });
  it("should return user with id 6 after 1000 milliseconds", (done) => {
    getUserWithDelay(6).then((user) => {
      expect(user).toEqual({ id: 6, name: "User 6" });
      done();
    });
  });

  it("should return user with id 6 after 1000 milliseconds", async () => {
    const start = Date.now();
    await getUserWithDelay(6);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(1000);
  });
});
