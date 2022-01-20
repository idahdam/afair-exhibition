import React from "react";
import "./draft7.css";
import { Hover } from "../hoverfunc.js";
import pinIcon from "../../../assets/images/mainPage/pinIcon.svg";
import info from "../../../assets/images/mainPage/iconInfo.svg";
import arrow from "../../../assets/images/mainPage/arrowDark.svg";
import img7a from "../../../assets/images/mainPage/draft7_a.png";
import img7b from "../../../assets/images/mainPage/draft7_bb.png";
import img7c from "../../../assets/images/mainPage/draft7_c.png";
import img7d from "../../../assets/images/mainPage/draft7_d.png";
import { Link, useHistory } from "react-router-dom";
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
                    <div className="topBarLeftTextWrapperMain">AFAIR 2022</div>
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

          <Link to="/everyone_as_well/others_around">
            <img src={img7b} alt="7b" className="pos7b" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, -20%)" }}
            >
              <div className="infoTitle">Others Around</div>
              <div className="infoContent">
                The evolution of human methods to connect each other
              </div>
            </div>
          </Link>
          <Link to="/everyone_as_well/to_fulfill">
            <img src={img7d} alt="7d" className="pos7d" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">To Fulfill</div>
              <div className="infoContent">
                Adaptation by humans to fulfill their needs
              </div>
            </div>
          </Link>
          <Link to="/everyone_as_well/amoung_our_peers">
            <img src={img7a} alt="7a" className="pos7a" />
            <div
              className="infotext"
              style={{ transform: "translate(10%, 10%)" }}
            >
              <div className="infoTitle">Among Our Peers</div>
              <div className="infoContent">
                The alteration of human interaction contributes in social
                communities
              </div>
            </div>
          </Link>
          <Link to="/everyone_as_well/better_version_of_us">
            <img src={img7c} alt="7c" className="pos7c" />

            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">Better Version of Us</div>
              <div className="infoContent">
                Attempt to figure out surroundings that keep changing in order
                to adapt in it
              </div>
            </div>
          </Link>
          <div className="footer">
            <div className="footerLeft">
              <img src={info} alt="info" className="infoStyle" />
              <div class="infotext2">
                <p>Everyone As Well</p>
                <p>
                  Changes happening not within the individuality, but rather
                  outside involving the collective.
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
