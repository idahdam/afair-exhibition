import React from "react";
import "./draft4.css";
import { Hover } from "../hoverfunc.js";
import { useHistory } from "react-router-dom";
import pinIcon from "../../../assets/images/mainPage/pinIcon.svg";
import info from "../../../assets/images/mainPage/iconInfo.svg";
import arrow from "../../../assets/images/mainPage/arrowDark.svg";
import topLogo from "../../../assets/images/iconLogo_black.svg";
import { Link } from "react-router-dom";
const Draft4 = () => {
  const history = useHistory();
  Hover();
  return (
    <>
      <div className="draft4Container">
        <div className="draft4BackImage">
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

          <Link to="/in_where_we_exist">
            <img src={pinIcon} alt="img5" className="pos4" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">In Where We Exist</div>
              <div className="infoContent">
                How the relations between the environment and ourselves are
                dynamic, affecting each other endlessly
              </div>
            </div>
          </Link>
          <Link Link to="/bodily_presence">
            <img src={pinIcon} alt="img5" className="pos5" />
            <div className="infotext">
              <div className="infoTitle">Bodily Presence</div>
              <div className="infoContent">
                Activities involving the human bodies are constantly altering.
                Space response has to adapt to its ever-changing needs
              </div>
            </div>
          </Link>
          <Link to="/everyone_as_well">
            <img src={pinIcon} alt="img5" className="pos6" />
            <div className="infotext">
              <div className="infoTitle">Everyone As Well</div>
              <div className="infoContent">
                Changes happening not within the individuality, but rather
                outside involving the collective
              </div>
            </div>
          </Link>
          
          <Link to="/understanding_us">
            <img src={pinIcon} alt="img5" className="pos8" />
            <div className="infotext">
              <div className="infoTitle">Understanding Us</div>
              <div className="infoContent">
                Unseen changes that is only felt by ourselves. They often relate
                to each and every individual's emotions
              </div>
            </div>
          </Link>

          <div className="footer">
            <div className="footerLeft">
              <img src={info} alt="info" className="infoStyle" />
              <div class="infotext2">
                <p>Into The Wayout Future</p>
                <p>
                  Unseen changes that is only felt by ourselves. They often
                  relate to each and every individual's emotions
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

export default Draft4;
