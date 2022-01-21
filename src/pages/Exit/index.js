import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./welcome.css";

const Transisi = () => {
  const history = useHistory();
  useEffect(() => {
    let interval = null;
    if (sessionStorage.getItem("guest-list") !== "true") {
      history.push("/register");
    }
    interval = setInterval(() => {
      history.push("/a-final-note");
    }, 5000);
    return () => (interval ? clearInterval(interval) : null);
  }, []);
  return (
    <>
      <div className="background2">
        <div className="bgContainer2">
          <div className="bgContainerText2" style={{ maxWidth: "50%" }}>
            <p>
              <p
                style={{
                  fontSize: "21px",
                  fontWeight: "300",
                  lineHeight: "30px",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                The Ending: A Premise
              </p>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "300",
                  lineHeight: "30px",
                  textAlign: "left",
                }}
              >
                These exhibits portray the many predictions of changes and the
                solutions of our living spaces. Yet, the future remain uncertain
                and we are still unsure of what is going to happen. Constant
                adaptation to the practice of architecture must be done to
                enable adjustment towards the upcoming challenges to us, our
                livelihood, and the surrounding environment, both across time
                and space
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transisi;
