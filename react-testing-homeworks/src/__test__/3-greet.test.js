import { render, screen } from "@testing-library/react";
import Greet from "../components/3-Greet/Greet";
describe("greet component", () => {
  it("should renders the correct text when no name prop is passed.", () => {
    render(<Greet />);
    expect(screen.getByRole("text").textContent).toBe("hello ");
  });
  it("should renders the correct text when the name prop is passed.", () => {
    render(<Greet name={"ali"} />);
    expect(screen.getByRole("text").textContent).toBe("hello ali");
  });
});
