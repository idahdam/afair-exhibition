import React from "react";
import "./draft5.css";
import { Hover } from "../hoverfunc.js";
import { useHistory } from "react-router-dom";
import pinIcon from "../../../assets/images/mainPage/pinIcon.svg";
import info from "../../../assets/images/mainPage/iconInfo.svg";
import arrow from "../../../assets/images/mainPage/arrowDark.svg";
import topLogo from "../../../assets/images/iconLogo_black.svg";
import { Link } from "react-router-dom";
const Draft5 = () => {
  const history = useHistory();
  Hover();
  return (
    <>
      <div className="draft5Container">
        <div className="draft5BackImage">
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

          <Link to="/understanding_us/beyond_our_senses">
            <img src={pinIcon} alt="5a" className="pos5a" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">I Sense Therefore I Feel</div>
              <div className="infoContent">
                How human tries to understand their own emotions in the
                space.Memory involvement; Psychological memory and mind
                intervention by space
              </div>
            </div>
          </Link>
          <Link to="/understanding_us/i_sense_therefore_i_feel">
            <img src={pinIcon} alt="5b" className="pos5b" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">Ecosystem Made By Our Own Hands</div>
              <div className="infoContent">
                How human senses become the center of information processing of
                the space around them and acknowledge the changes occurred
                around them.To feel; Human senses absorb the stimulus
                information of the space around them.
              </div>
            </div>
          </Link>
          <Link to="/understanding_us/what_i_really_want">
            <img src={pinIcon} alt="5c" className="pos5c" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">What I Really Wants</div>
              <div className="infoContent">
                How human desires created after they feel the changes their
                surrounding.
              </div>
            </div>
          </Link>
          <Link to="/understanding_us/in_order_to">
            <img src={pinIcon} alt="5d" className="pos5d" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">In Order To</div>
              <div className="infoContent">
                How human respond their needs and wants in order to face the
                changes for their future.
              </div>
            </div>
          </Link>
          <div className="footer">
            <div className="footerLeft">
              <img src={info} alt="info" className="infoStyle" />
              <div class="infotext2">
                <p>Understanding Us</p>
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

export default Draft5;
