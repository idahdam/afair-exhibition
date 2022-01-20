import React from "react";
import "./draft6.css";
import { Hover } from "../hoverfunc.js";
import pinIcon from "../../../assets/images/mainPage/pinIcon.svg";
import info from "../../../assets/images/mainPage/iconInfo.svg";
import arrow from "../../../assets/images/mainPage/arrowDark.svg";
import { Link, useHistory } from "react-router-dom";
import topLogo from "../../../assets/images/iconLogo_black.svg";
const Draft6 = () => {
  const history = useHistory();
  Hover();
  return (
    <>
      <div className="draft6Container">
        <div className="draft6BackImage">
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
          <Link to="/bodily_presence/our_body">
            <img src={pinIcon} alt="6a" className="pos6a" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">Our Body</div>
              <div className="infoContent">
                How body condition could change our wellbeing
              </div>
            </div>
          </Link>
          <Link to="/bodily_presence/in_action">
            <img src={pinIcon} alt="6b" className="pos6b" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">In Action</div>
              <div className="infoContent">
                Interconnection between our body potential and the dynamics of
                the activities carried out.
              </div>
            </div>
          </Link>
          <div className="footer">
            <div className="footerLeft">
              <img src={info} alt="info" className="infoStyle" />
              <div class="infotext2">
                <p>Bodily Presence</p>
                <p>
                  Activities involving the human bodies are constantly altering.
                  Space response has to adapt to its ever-changing needs.
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
