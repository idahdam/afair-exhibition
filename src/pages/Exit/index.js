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
      history.push("/to-myself-in-the-future");
    }, 5000);
    return () => (interval ? clearInterval(interval) : null);
  }, []);
  return (
    <>
      <div className="background2">
        <div className="bgContainer2">
          <div className="bgContainerText2" style={{ maxWidth: "50%" }}>
            <p>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: "300",
                  lineHeight: "30px",
                }}
              >
                As those changes and the solutions are merely predictions, we
                are still unsure on what is going to happen. The practice of
                architecture should constantly adapt to these challenges related
                to the space we all experience. As we exist not only within the
                space but time as well.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transisi;
