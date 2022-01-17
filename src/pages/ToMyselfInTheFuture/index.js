import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const ToMyselfInTheFuture = () => {
  const history = useHistory();
  return (
    <>
      <div className="background2">
        <div className="bgContainer2">
          <div className="bgContainerText2" style={{ maxWidth: "100%" }}>
            <div>
              <div className="row-letter">
                <div className="column-letter left-letter">
                  <p className="left-side-text">To Myself In The Future</p>
                </div>
                <div className="column-letter right-letter">
                  <p>
                    My life has been constantly changing, and always will be. To
                    me in the future,
                  </p>
                  <textarea
                    className="wishes"
                    placeholder="Fill your message here"
                  ></textarea>
                  <p
                    className="submit-wishes"
                    onClick={() => {
                      alert("wishes submitted! (testing)");
                      history.push("/goodbye");
                    }}
                  >
                    Submit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToMyselfInTheFuture;
