import React from "react";
import "./draft8.css";
import { Hover } from "../hoverfunc.js";
import pinIcon from "../../../assets/images/mainPage/pinIcon.svg";
import info from "../../../assets/images/mainPage/iconInfo.svg";
import arrow from "../../../assets/images/mainPage/arrowDark.svg";
import img8a from "../../../assets/images/mainPage/8A.png";
import img8b from "../../../assets/images/mainPage/8BB.png";
import img8c from "../../../assets/images/mainPage/8C.png";
import img8d from "../../../assets/images/mainPage/8D.png";
import { Link, useHistory } from "react-router-dom";
import topLogo from "../../../assets/images/iconLogo_black.svg";
const Draft8 = () => {
  const history = useHistory();
  Hover();
  return (
    <>
      <div className="draft8Container">
        <div className="draft8BackImage">
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
          <Link to="/in_where_we_exist/ecosystem_made_by_our_own_hands">
            <img src={img8a} alt="8a" className="pos8a" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">Ecosystem Made By Our Own Hands</div>
              <div className="infoContent">
                environmental cohesiveness between natural and built elements by
                its components
              </div>
            </div>
          </Link>
          <Link to="/in_where_we_exist/mobilize_elsewhere">
            <img src={img8b} alt="8b" className="pos8b" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">Mobilize Elsewhere</div>
              <div className="infoContent">
                The enhancement of one{"’"}s displacement from a place to
                another
              </div>
            </div>
          </Link>
          <Link to="/in_where_we_exist/keeping_it_running">
            <img src={img8c} alt="8c" className="pos8c" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">Keeping It Running</div>
              <div className="infoContent">
                Methods of resource efficiency in a changing context
              </div>
            </div>
          </Link>
          <Link to="/in_where_we_exist/waste_no_more">
            <img src={img8d} alt="8d" className="pos8d" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">Waste No More</div>
              <div className="infoContent">
                Waste is more than residue and will not always be useless
              </div>
            </div>
          </Link>
          <div className="footer">
            <div className="footerLeft">
              <img src={info} alt="info" className="infoStyle" />
              <div class="infotext2">
                <p>In Where We Exist</p>
                <p>
                  How the relations between the environment and ourselves are
                  dynamic, affecting each other endlessly.
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
