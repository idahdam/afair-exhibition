import React from "react";
import "./draft4.css";
import { Hover } from "../hoverfunc.js";
import { useHistory } from "react-router-dom";
import pinIcon from "../../../assets/images/mainPage/pinIcon.svg";
import info from "../../../assets/images/mainPage/iconInfo.svg";
import arrow from "../../../assets/images/mainPage/arrowDark.svg";
import img5 from "../../../assets/images/mainPage/draft4_5.png";
import img4 from "../../../assets/images/mainPage/draft4_4.png";
import img6 from "../../../assets/images/mainPage/draft4_6.png";
import img8 from "../../../assets/images/mainPage/draft4_8.png";
import topLogo from "../../../assets/images/iconLogo_black.svg";
import { Link } from "react-router-dom";
const Draft4 = () => {
  const history = useHistory();
  Hover();
  return (
    <>
      <div className="draft4Container">
        <div className="draft4BackImage">
          <div className="topBar4Main">
            <div className="topBar4WrapperMain">
              <div className="topBar4LeftMain">
                <div className="topBarLef4tWrapperMain">
                  <img src={topLogo} alt="arrow" className="iconArrowRight" />
                </div>
                <div className="topBar4LeftWrapperMain">
                  <div className="topBar4LeftWrapper2" Main>
                    <div className="topBar4LeftTextWrapperMain">AFAIR 2022</div>
                  </div>
                </div>
              </div>
              <div className="topBar4RightMain">
                <div className="topBar4LeftWrapper2Main">
                  <div className="topBar4RightTextWrapperMain">index</div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/in_where_we_exist">
            <img src={img4} alt="imgIcon" className="pos4" />
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
            <img src={img5} alt="imgIcon" className="pos5" />
            <div className="infotext">
              <div className="infoTitle">Bodily Presence</div>
              <div className="infoContent">
                Activities involving the human bodies are constantly altering.
                Space response has to adapt to its ever-changing needs
              </div>
            </div>
          </Link>
          <Link to="/everyone_as_well">
            <img src={img6} alt="imgIcon" className="pos6" />
            <div className="infotext">
              <div className="infoTitle">Everyone As Well</div>
              <div className="infoContent">
                Changes happening not within the individuality, but rather
                outside involving the collective
              </div>
            </div>
          </Link>

          <Link to="/understanding_us">
            <img src={img8} alt="imgIcon" className="pos8" />
            <div className="infotext">
              <div className="infoTitle">Understanding Us</div>
              <div className="infoContent">
                Unseen changes that is only felt by ourselves. They often relate
                to each and every individual's emotions
              </div>
            </div>
          </Link>

          <div className="footer4">
            <div className="footerLeft4">
              <img src={info} alt="info" className="infoStyle4" />
              <div class="infotext24">
                <p>Into The Wayout Future</p>
                <p>
                  Unseen changes that is only felt by ourselves. They often
                  relate to each and every individual's emotions
                </p>
              </div>
            </div>
            <div
              className="footerRight4 exitButton"
              onClick={() => {
                history.push("/exit");
              }}
            >
              <span className="iconFloat4">To The Exit</span>
              <img src={arrow} alt="arrow" className="icoStyle4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Draft4;
