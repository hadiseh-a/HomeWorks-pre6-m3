import { fireEvent, render, screen } from "@testing-library/react";
import LiveInput from "../components/5-LiveInput/LiveInput";

describe("live input", () => {
  it("should renders an input element with the placeholder 'Enter a text'", () => {
    render(<LiveInput />);
    expect(screen.getByPlaceholderText("Enter a text")).toBeInTheDocument();
  });
  it("should renders an h2 element.", () => {
    render(<LiveInput />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });
  it("should When a user types into the input element, the h2 element displays the entered text.", () => {
    render(<LiveInput />);
    const input = screen.getByPlaceholderText("Enter a text");

    fireEvent.change(input, { target: { value: "hi" } });

    expect(screen.getByRole("heading", { level: 2 }).textContent).toBe("hi");
  });
});
