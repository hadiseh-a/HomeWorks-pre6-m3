import { render, screen } from "@testing-library/react";
import ListOfLi from "../components/2-ListOfLi/ListOfLi";

describe("list of li", () => {
  it("should have right length of array", () => {
    render(<ListOfLi usernames={["ali", "reza"]} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });
});
