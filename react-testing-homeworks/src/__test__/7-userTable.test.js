import { fireEvent, render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import data from "../components/7-UserTable/mockUsers.json";
import UserTable from "../components/7-UserTable/UserTable";

fetchMock.enableMocks();

describe("user table", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it("should correctly fetches and renders a table of users.", async () => {
    fetch.mockResponseOnce(JSON.stringify(data));
    render(<UserTable />);
    const usersRows = await screen.findAllByTestId("user-row");
    expect(usersRows).toHaveLength(10);

    data.forEach((user) => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
    });
  });
});
