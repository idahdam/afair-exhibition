import React from "react";
import "./index.css";
import iconLogo from "../.././assets/images/iconLogo.svg";

const goodBye1 = () => {
    return (
        <div className="background2">
          <div className="bgContainer2">
            <div className="bgContainerText2" style={{ maxWidth: "50%" }}>
              <div style={{ marginBottom:"10%" }}>
                <img src={iconLogo} alt="icon Logo" className="logoStyle" />
              </div>
              <div>
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "300",
                    lineHeight: "27px",
                  }}
                >
                  Thank you for your visiting
                  <br /> AFAIR 2022 Virtual Exhibition. <br /> May our future awaits
                  brightly ahead.
                </span>
              </div>
            </div>
          </div>
        </div>
      );
};

export default goodBye1;
