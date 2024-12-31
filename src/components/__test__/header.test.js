import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
test("should load the header component ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const button = screen.getByText("Login");
  expect(button).toBeInTheDocument();
});

test("should cahnge the login to  Logout ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByText("Login");
  fireEvent.click(loginButton);
  const logoutButton = screen.getByText("Logout");
  expect(logoutButton).toBeInTheDocument();
});
