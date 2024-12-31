import { render, screen } from "@testing-library/react";
import ResturanCard from "../ResturentCard";
import MOCK_DATA from "../mocks/resturentCardMock.json";
import "@testing-library/jest-dom";
test("should ", () => {
  render(<ResturanCard data={MOCK_DATA} />);
  const cartText = screen.getByText("Burger King");
  expect(cartText).toBeInTheDocument();
});
