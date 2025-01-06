import React from "react";
import AppLayout from "../App";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Provider } from "react-redux";
import appStore from "../utils/store/appStore";
function Root() {
  return (
    <Provider store={appStore}>
      <main className="relative">
        <AppLayout />
        {/* <Header /> */}
      </main>
      <Outlet />
    </Provider>
  );
}

export default Root;
