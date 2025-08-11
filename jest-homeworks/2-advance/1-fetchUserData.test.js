const fetchUserData = require("./1-fetchUserData");

const mockUser = {
  id: 2,
  name: "Ervin Howell",
  username: "Antonette",
  email: "Shanna@melissa.tv",
  address: {
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
    geo: {
      lat: "-43.9509",
      lng: "-34.4618",
    },
  },
  phone: "010-692-6593 x09125",
  website: "anastasia.net",
  company: {
    name: "Deckow-Crist",
    catchPhrase: "Proactive didactic contingency",
    bs: "synergize scalable supply-chains",
  },
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockUser),
  })
);

describe("fetchUserData", () => {
  beforeEach(() => {
    fetch.mockClear();
  });
  it("should call right url", async () => {
    await fetchUserData(2);
    expect(fetch).toHaveBeenCalledWith(
      `https://jsonplaceholder.typicode.com/users/2`
    );
  });
  it("should return right response", async () => {
    const result = await fetchUserData(2);
    expect(result).toEqual(mockUser);
  });
});
