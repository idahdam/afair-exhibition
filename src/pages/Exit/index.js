import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./welcome.css";

const Transisi = () => {
  const history = useHistory();
  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      history.push("/to-myself-in-the-future");
    }, 5000);
    // }
    return () => (interval ? clearInterval(interval) : null);
  }, []);
  return (
    <>
      <div className="background2">
        <div className="bgContainer2">
          <div className="bgContainerText2" style={{ maxWidth: "50%" }}>
            <p className="title">
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: "300",
                  lineHeight: "29px",
                }}
              >
                It seems that each of us has felt something has changed in our
                life somehow. Those changes lead to something beyond what we can
                see.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transisi;
