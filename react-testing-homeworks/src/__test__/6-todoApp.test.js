import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("to do app", () => {
  it("should When the form is submitted once with a todo item, a single `<li>` element with the todo text is rendered.When the form is submitted multiple times with different todo items, all the todo items are rendered as `<li>` elements in the list.", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("write a todo");
    const form = screen.getByTestId("todo-form");
    fireEvent.change(input, { target: { value: "hi" } });
    fireEvent.submit(form);
    const li = screen.getByText("hi");
    expect(li).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "hello" } });
    fireEvent.submit(form);
    fireEvent.change(input, { target: { value: "by" } });
    fireEvent.submit(form);
    fireEvent.change(input, { target: { value: "wow" } });
    fireEvent.submit(form);

    expect(screen.getAllByRole("listitem")).toHaveLength(4);
  });
});
