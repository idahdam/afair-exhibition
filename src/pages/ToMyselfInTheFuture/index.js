import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { futureMessageService } from "../../services/futrureMessageService";
import "./index.css";

const ToMyselfInTheFuture = () => {
  const history = useHistory();
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (sessionStorage.getItem("guest-list") !== "true") {
      history.push("/register");
    }
  }, []);
  const SubmitMessageAndRedirect = async () => {
    await futureMessageService
      .postFutureMessage({
        message: message,
        email: sessionStorage.getItem("email"),
      })
      .then((res) => {
        if (res.status === 200) {
          history.push("/goodbye");
        } else {
          alert("Failed to send message.");
        }
      });

    // history.push("/goodbye");
  };
  return (
    <>
      <div className="background2">
        <div className="bgContainer2">
          <div className="bgContainerText5" style={{ maxWidth: "100%" }}>
            <div>
              <div className="row-letter">
                <div className="column-letter left-letter">
                  <p className="left-side-text">A Final</p>
                  <p className="left-side-text">Note</p>
                </div>
                <div className="column-letter right-letter">
                  <p>
                    To everyone visiting, our life has been constantly changing,
                    and change will always persist. Please leave a message of
                    your thoughts regarding such change and the exhibition.
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
