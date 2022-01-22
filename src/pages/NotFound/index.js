import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();
  useEffect(() => {
    if (sessionStorage.getItem("guest-list") !== "true") {
      history.push("/register");
    }
  }, []);
  return (
    <div style={{ fontSize: "25px" }}>
      <h2 style={{ textAlign: "center" }}>404 Not Found</h2>
      <Link to="/into_the_wayout_future">
        <p style={{ textAlign: "center", textDecoration: "none" }}>
          Go back to exhibition.
        </p>
      </Link>
    </div>
  );
};

export default NotFound;
