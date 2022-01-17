import React from "react";
import "./draft6.css";
import { Hover } from "../hoverfunc.js";
import pinIcon from "../../../assets/images/mainPage/pinIcon.svg";
import info from "../../../assets/images/mainPage/iconInfo.svg";
import arrow from "../../../assets/images/mainPage/arrowDark.svg";
import { useHistory } from "react-router-dom";
const Draft6 = () => {
  const history = useHistory();
  Hover();
  return (
    <>
      <div className="draft6Container">
        <div className="draft6BackImage">
          <img src={pinIcon} alt="6a" className="pos6a" />
          <span class="infotext">Our body</span>
          <img src={pinIcon} alt="6b" className="pos6b" />
          <span class="infotext">In Action</span>
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

export default Draft6;
