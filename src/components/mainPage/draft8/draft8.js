import React from "react";
import "./draft8.css";
import { Hover } from "../hoverfunc.js";
import pinIcon from "../../../assets/images/mainPage/pinIcon.svg";
import info from "../../../assets/images/mainPage/iconInfo.svg";
import arrow from "../../../assets/images/mainPage/arrowDark.svg";
import { useHistory } from "react-router-dom";
const Draft8 = () => {
  const history = useHistory();
  Hover();
  return (
    <>
      <div className="draft8Container">
        <div className="draft8BackImage">
          {" "}
          <img src={pinIcon} alt="8a" className="pos8a" />
          <span class="infotext">Others Around</span>
          <img src={pinIcon} alt="8b" className="pos8b" />
          <span class="infotext">Among Our Peers</span>{" "}
          <img src={pinIcon} alt="8c" className="pos8c" />
          <span class="infotext">Better Version of Us</span>
          <img src={pinIcon} alt="8d" className="pos8d" />
          <span class="infotext">To Fulfill</span>
          <div className="footer">
            <div className="footerLeft">
              <img src={info} alt="info" className="infoStyle" />
              <div class="infotext2">
                <p>Judul</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  nec ultricies urna, quis tempus enim. Nullam ullamcorper metus
                  non orci condimentum, ac dapibus purus commodo. Fusce
                  fringilla orci auctor, feugiat tellus vel, lacinia nunc.
                </p>
              </div>
            </div>
            <div
              className="footerRight exitButton"
              onClick={() => {
                history.push("/exit");
              }}
            >
              <span className="iconFloat">To The Exit</span>
              <img src={arrow} alt="arrow" className="icoStyle" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Draft8;
