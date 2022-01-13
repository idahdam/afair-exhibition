import React from "react";
import iconLogo from "../../assets/images/iconLogo.svg";
import iconDuduk from "../../assets/images/iconDuduk.svg";
import iconPeluk from "../../assets/images/iconPeluk.svg";
import "./welcome.css";

const welcome = () => {
  return (
    <>
      <div className="background2">
        <div className="bgContainer2">
          <div className="bgContainerText2">
            <div>
              <img src={iconLogo} alt="icon Logo" />
            </div>
            <div className="middleText">
              <p className="title">
                <img src={iconDuduk} className="dudukImg" alt="icon Logo" />
                <img src={iconPeluk} className="pelukImg" alt="icon Logo" />
                <span style={{ fontSize: "30px" }}>AFAIR 2022</span>
                <br />
                INTO THE WAYOUT FUTURE
                <br />
                <span style={{ fontSize: "20px" }}>VIRTUAL EXHIBITION</span>
              </p>
            </div>
            <h2 className="title" style={{ fontSize: "20px" }}>
              Loading
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default welcome;
