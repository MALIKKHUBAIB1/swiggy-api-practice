import React from "react";
import Header from "./components/Header";
import "../index.css";
import useOnlineStatus from "./utils/useOnlineStatus";

// Header
// ---Logo
// ---Nav Item

// Body
//----search
//----ResturentContainer
//----ResturantCard

// Footer
// ----copyRight
// ----Link
// ----Address

const AppLayout = () => {
  const isOnline = useOnlineStatus();
  return (
    <div className="App pt-28">
      <Header />
    </div>
  );
};

export default AppLayout;
