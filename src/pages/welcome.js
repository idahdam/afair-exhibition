import React from 'react'
import iconLogo from ".././assets/images/iconLogo.svg";
import "./intro.css";

const welcome = () => {
        return (
          <>
            <div className="background2">
              <div className="bgContainer2">
                <div className="bgContainerText2">
                  <div>
                    <img src={iconLogo} className="logoImages2" alt="icon Logo" />
                  </div>
                  <p className="title">
                    <span style={{ fontSize: "30px" }}>AFAIR 2022</span>
                    <br />
                    INTO THE WAYOUT FUTURE
                    <br />
                    <span style={{ fontSize: "20px" }}>VIRTUAL EXHIBITION</span>
                  </p>
                  <h2 className="title" style={{ fontSize: "20px" }}>
                    Loading
                  </h2>
                </div>
              </div>
            </div>
          </>
        );
}

export default welcome
