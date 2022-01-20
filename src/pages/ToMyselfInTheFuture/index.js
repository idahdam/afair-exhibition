import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { futureMessageService } from "../../services/futrureMessageService";
import "./index.css";

const ToMyselfInTheFuture = () => {
  const history = useHistory();
  const [message, setMessage] = useState("");

  const SubmitMessageAndRedirect = async () => {
    // await futureMessageService
    //   .postFutureMessage({
    //     message: message,
    //     email: sessionStorage.getItem("email"),
    //   })
    //   .then((res) => {
    //     if (res.status === 200) {
    //     } else {
    //       alert("Failed to send message.");
    //     }
    //   });
    history.push("/goodbye");
  };
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
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  {message !== "" ? (
                    <p
                      className="submit-wishes"
                      onClick={() => {
                        SubmitMessageAndRedirect();
                      }}
                    >
                      Submit
                    </p>
                  ) : (
                    <p
                      className="submit-wishes"
                      onClick={() => {
                        alert("Input your message.");
                      }}
                    >
                      Submit
                    </p>
                  )}
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
