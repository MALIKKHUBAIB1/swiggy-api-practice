import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import About from "./src/components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./src/components/Error";
import Root from "./src/components/Root";
import Body from "./src/components/Body";
import DetailPage from "./src/components/ItemDetailPage";
import Cart from "./src/components/cart.js";
import UserClass from "./src/components/classcomponent.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Contact = lazy(() => import("./src/components/contact.js"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <DetailPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/class",
        element: (
          <UserClass name={"akshay saini"} location={"dehradun and manali"} />
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<p>"loading"</p>}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
