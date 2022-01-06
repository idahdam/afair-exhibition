import React from "react";
import "./landing.css";
import iconImg1 from "../.././assets/images/iconMascot1.svg";
import iconImg2 from "../.././assets/images/iconMascot2.svg";
import iconImg3 from "../.././assets/images/iconMascot3.svg";
import iconLogo from "../.././assets/images/iconLogo.svg";
import iconInsta from "../.././assets/images/iconInsta.svg";

const landing = () => {
  return (
    <>
      <div className="background">
        <div className="bgContainer">
          <div className="bgContainerText">
            <div>
              <img src={iconLogo} alt="icon Logo" />
            </div>
            <h2 className="subtitle" style={{ color: "#E24748" }}>
              COMING SOON
            </h2>
            <h1 className="title">
              <span style={{ fontWeight: 300 }}>AFAIR 2022</span>
              <br />
              VIRTUAL EXHIBITION
            </h1>
            <h2 className="subtitle" style={{ color: "#FE7235" }}>
              21.01.2022
            </h2>
            <div className="textFooter">
              <img
                src={iconInsta}
                className="footerImages"
                alt="instagram logo"
              />
              <span className="footerText">afairui</span>
            </div>
          </div>
          <img src={iconImg1} alt="icon1" className="topleftIcon" />
          <img src={iconImg3} alt="icon3" className="bottomleftIcon" />
          <img src={iconImg2} alt="icon2" className="bottomrightIcon" />
        </div>
      </div>
    </>
  );
};

export default landing;
