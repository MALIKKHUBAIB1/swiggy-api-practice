import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link, NavLink, useLocation } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [mode, setMode] = useState("Login");
  const items = useSelector((state) => state.cart.items, shallowEqual);
  const quantity = items.reduce((acc, it) => acc + it.quantity, 0);
  const locations = useLocation();

  function LoginHandler() {
    setMode((prevMode) => (prevMode === "Login" ? "Logout" : "Login"));
  }

  return (
    <header className="bg-slate-300 text-black flex justify-between fixed top-0 z-50 shadow-md w-full h-24">
      <img className="logo" src={LOGO_URL} alt="Company Logo" />
      <nav>
        <ul className="flex my-7 space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="nav-item">Home</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={locations.pathname === "/contact" ? "active" : ""}
          >
            <li className="nav-item">Contact</li>
          </NavLink>
          <NavLink
            to="/cart"
            className={locations.pathname === "/cart" ? "active" : ""}
          >
            <li className="nav-item font-bold ">Cart-({quantity})</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="nav-item">About Us</li>
          </NavLink>
          <li className="nav-item cursor-pointer" onClick={LoginHandler}>
            {mode}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
