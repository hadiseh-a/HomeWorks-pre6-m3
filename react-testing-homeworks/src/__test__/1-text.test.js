import Text from "../components/1-Text/Text";
import { screen, render } from "@testing-library/react";

describe("text component", () => {
  it("should renders `Welcome To APS`", () => {
    render(<Text />);
    expect(screen.getByText(/Welcome To APS/i)).toBeInTheDocument();
  });
  it("should get the properties", () => {
    render(<Text headingText={"hi"} />);
    expect(screen.getByRole("heading").textContent).toEqual("hi");
  });
});
