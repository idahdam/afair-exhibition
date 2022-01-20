import React from "react";
import "./index.css";
import logoBanyak from "../../assets/images/logoBanyak.png";
import logoBE from "../../assets/images/logoBE.png";
import logoHino from "../../assets/images/logoHino.png";
import logoMMAR from "../../assets/images/logoMMAR.png";
import { Link } from "react-router-dom";
const goodBye3 = () => {
  return (
    <>
      <div className="section2bg">
        <div className="section2wrapper">
          <div className="section2Left">
            <span className="section2LeftTitle" style={{ fontSize: "40px" }}>
              Thank You <br /> To Our <br /> Supporters
            </span>
          </div>
          <div className="section2Right">
            {" "}
            <div className="SectionRighRow">
              <div className="SectionRightColumnLeft">
                <div className="contentContainer">
                  <div className="contentTitle">Media Partners </div>
                  <div className="contentImg">
                    <img src={logoBanyak} alt="logoBnayak" />
                  </div>
                </div>
              </div>
            </div>
            <div className="SectionRighRow">
              <div className="SectionRightColumnLeft" style={{ width: "100%" }}>
                <div className="contentContainer">
                  <div className="contentTitle">Sponsors</div>
                  <div className="contentImg">
                    <img
                      src={logoBE}
                      alt="logoBnayak"
                      className="logoGoodStyle"
                    />
                    <img
                      src={logoMMAR}
                      alt="logoBnayak"
                      className="logoGoodStyle"
                    />
                    <img
                      src={logoHino}
                      alt="logoBnayak"
                      className="logoGoodStyle"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="backButton">
            <Link to="/into_the_wayout_future">
              <p className="backButton">Back To Exhibition</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default goodBye3;
