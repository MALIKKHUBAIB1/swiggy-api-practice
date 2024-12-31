import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div
      className="error"
      style={{ textAlign: "center", border: "2px solid black", margin: "20px" }}
    >
      <h1>Opps Something went Wrong</h1>
      <p>
        {error.status}: {error.statusText || error.message}
      </p>
    </div>
  );
}

export default ErrorPage;
