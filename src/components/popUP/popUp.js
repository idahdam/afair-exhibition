import React from "react";
import arrow from "../../assets/images/mainPage/arrowDark.svg";
import "./popUp.css";
import popUpImg1 from "../../assets/images/popUp/popUpImage1.svg";
import popUpImg2 from "../../assets/images/popUp/popUpImage2.svg";
import popUpImg3 from "../../assets/images/popUp/popUpImage3.svg";

const popUp = () => {
  return (
    <>
      <div className="popUpBg">
        <div className="popUpContainerWrapper">
          <div className="popUpContainer">
            <div className="popUpWrapper">
              <div className="popUpContainerSide">
                <img src={arrow} alt="arrow" className="icoStyle" />
              </div>
              <div className="popUpContainerMid">
                <div className="popUpLeft"> 
                <img src={popUpImg1} alt="Mainphoto" className="mainImgStyle" /></div>
                <div className="popUpRight">sadasdas</div>
              </div>
              <div className="popUpContainerSide">
                <img src={arrow} alt="arrow" className="icoStyle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default popUp;
