import React from "react";
import arrow from "../../assets/images/mainPage/arrowDark.svg";
import "./popUp.css";
const popUp = () => {
  return (
    <>
      <div className="popUpBg">
        <div className="popUpContainer">
          <div className="popUpWrapper">
            <div className="popUpContainerSide">
              <img src={arrow} alt="arrow" className="icoStyle" />
            </div>
            <div className="popUpContainerMid">
              <div className="popUpLeft">asdasdasd</div>
              <div className="popUpRight">sadasdas</div>
            </div>
            <div className="popUpContainerSide">
              <img src={arrow} alt="arrow" className="icoStyle" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default popUp;
