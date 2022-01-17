import React from "react";
import "./draft5.css";
import { Hover } from "../hoverfunc.js";
import { useHistory } from "react-router-dom";
import pinIcon from "../../../assets/images/mainPage/pinIcon.svg";
import info from "../../../assets/images/mainPage/iconInfo.svg";
import arrow from "../../../assets/images/mainPage/arrowDark.svg";
const Draft5 = () => {
  const history = useHistory();
  Hover();
  return (
    <>
      <div className="draft5Container">
        <div className="draft5BackImage">
          <img src={pinIcon} alt="5a" className="pos5a" />
          <span class="infotext">this section 5a</span>
          <img src={pinIcon} alt="5b" className="pos5b" />
          <span class="infotext">this section 5b</span>
          <img src={pinIcon} alt="5c" className="pos5c" />
          <span class="infotext">this section 5c</span>
          <img src={pinIcon} alt="5d" className="pos5d" />
          <span class="infotext">this section 5d</span>
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

export default Draft5;
