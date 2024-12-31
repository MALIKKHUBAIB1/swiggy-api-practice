import { render, screen } from "@testing-library/react";
import Contact from "../contact";
import "@testing-library/jest-dom";
describe("contact us page test Case", () => {
  test("should load contact page component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertions
    expect(heading).toBeInTheDocument();
  });

  test("should load all  button into the  component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    //Assertions
    expect(button).toBeInTheDocument();
  });

  test("should load all input  into the  component", () => {
    render(<Contact />);
    const inputBox = screen.getAllByRole("textbox");
    // console.log(inputBox);
    //Assertions
    expect(inputBox.length).toBe(2);
  });
});
