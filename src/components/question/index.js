import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import background from "../../assets/images/image3.png";
import "./index.css";

const Question = () => {
  const history = useHistory();
  useEffect(() => {
    if (sessionStorage.getItem("guest-list") !== "true") {
      history.push("/register");
    }
  }, []);
  return (
    <div className="background">
      {/* <img src={background} alt="Yes" className="image" /> */}
      <div className="centered">
        <div>Have you noticed any changes in your life recently?</div>
        <br />
        <div class="row">
          <div
            class="column"
            onClick={() => {
              history.push("/apparently-yes");
            }}
          >
            Apparently, yes
          </div>
          <div
            class="column"
            onClick={() => {
              history.push("/transition");
            }}
          >
            No, not really
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
