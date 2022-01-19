import React from "react";
import "./draft7.css";
import { Hover } from "../hoverfunc.js";
import pinIcon from "../../../assets/images/mainPage/pinIcon.svg";
import info from "../../../assets/images/mainPage/iconInfo.svg";
import arrow from "../../../assets/images/mainPage/arrowDark.svg";
import { useHistory } from "react-router-dom";
import topLogo from "../../../assets/images/iconLogo_black.svg";
const Draft7 = () => {
  const history = useHistory();
  Hover();
  return (
    <>
      <div className="draft7Container">
        <div className="draft7BackImage">
          <div className="topBarMain">
            <div className="topBarWrapperMain">
              <div className="topBarLeftMain">
                <div className="topBarLeftWrapperMain">
                  <img src={topLogo} alt="arrow" className="iconArrowRight" />
                </div>
                <div className="topBarLeftWrapperMain">
                  <div className="topBarLeftWrapper2" Main>
                    <div className="topBarLeftTextWrapperMain">AFFAIR 2022</div>
                  </div>
                </div>
              </div>
              <div className="topBarRightMain">
                <div className="topBarLeftWrapper2Main">
                  <div className="topBarRightTextWrapperMain">index</div>
                </div>
              </div>
            </div>
          </div>

          <img src={pinIcon} alt="7b" className="pos7b" />
          <span class="infotext">Among Our Peers</span>
          <img src={pinIcon} alt="7d" className="pos7d" />
          <span class="infotext">To Fulfill</span>
          <img src={pinIcon} alt="7a" className="pos7a" />
          <span class="infotext">Others Around</span>
          <img src={pinIcon} alt="7c" className="pos7c" />
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

export default Draft7;
