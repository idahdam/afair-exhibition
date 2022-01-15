import React from "react";
import "./draft7.css";
import { Hover } from "../hoverfunc.js"
import a7 from "../../../assets/images/mainPage/7a.svg";
import b7 from "../../../assets/images/mainPage/7b.svg";
import c7 from "../../../assets/images/mainPage/7c.svg";
import d7 from "../../../assets/images/mainPage/7d.svg";
import info from "../../../assets/images/mainPage/iconInfo.svg";
import arrow from "../../../assets/images/mainPage/arrowDark.svg";
const draft7 = () => {
  Hover();
  return (
    <>
      <div className="draft7Container">
        <div className="draft7BackImage">
          <img src={b7} alt="7b" className="pos7b" />
          <span class="infotext">Among Our Peers</span>

          <img src={d7} alt="7d" className="pos7d" />
          <span class="infotext">To Fulfill</span>
          <img src={a7} alt="7a" className="pos7a" />
          <span class="infotext">Others Around</span>
          <img src={c7} alt="7c" className="pos7c" />
          <span class="infotext">Better Version of Us</span>
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
            <div className="footerRight" style={{color:"white"}}>
              <span className="iconFloat">To The Exit</span>
              <img src={arrow} alt="arrow" className="icoStyle" style={{filter: "brightness(0) invert(1)"}} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default draft7;


