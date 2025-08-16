import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../components/4-Login/Login";

describe("login", () => {
  it("should renders a button", () => {
    render(<Login />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should button displays 'login' as its initial text.The button text changes to 'logout' when clicked.", () => {
    render(<Login />);
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("login");
    fireEvent.click(button);
    expect(button.textContent).toBe("logout");
  });
});
