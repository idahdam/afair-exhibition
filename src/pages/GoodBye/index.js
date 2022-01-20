import React, { useEffect } from "react";
import "./index.css";
import Good1 from "./goodBye1";
import Good2 from "./goodBye2";
import Good3 from "./goodBye3";
import { useHistory } from "react-router-dom";
const GoodBye = () => {
  const history = useHistory();
  useEffect(() => {
    if (sessionStorage.getItem("guest-list") !== "true") {
      history.push("/register");
    }
  }, []);
  return (
    <>
      <Good1 />
      <Good2 />
      <Good3 />
    </>
  );
};

export default GoodBye;
