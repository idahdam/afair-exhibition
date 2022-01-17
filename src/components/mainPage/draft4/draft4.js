import React from "react";
import "./draft4.css";
import { Hover } from "../hoverfunc.js";
import pinIcon from "../../../assets/images/mainPage/pinIcon.svg";
import info from "../../../assets/images/mainPage/iconInfo.svg";
import arrow from "../../../assets/images/mainPage/arrowDark.svg";
const draft4 = () => {
  Hover();
  return (
    <>
      <div className="draft4Container">
        <div className="draft4BackImage">
          <div className="content">
            {" "}
            <img src={pinIcon} alt="img5" className="pos4" />
            <span class="infotext">this is 4a</span>
            <img src={pinIcon} alt="img5" className="pos5" />
            <span class="infotext">this is 5s</span>
            <img src={pinIcon} alt="img5" className="pos6" />
            <span class="infotext">this is 6</span>
            <img src={pinIcon} alt="img5" className="pos7" />
            <span class="infotext">this is 7</span>
            <img src={pinIcon} alt="img5" className="pos8" />
            <span class="infotext">this is 8</span>{" "}
          </div>
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
            <div className="footerRight">
              <span className="iconFloat">To The Exit</span>
              <img src={arrow} alt="arrow" className="icoStyle" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default draft4;
