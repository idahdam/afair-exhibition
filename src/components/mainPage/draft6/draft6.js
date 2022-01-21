import React, { useEffect, useState } from "react";
import "./draft6.css";
import { Hover } from "../hoverfunc.js";
import info from "../../../assets/images/mainPage/iconInfo.svg";
import arrow from "../../../assets/images/mainPage/arrowDark.svg";
import { Link, useHistory } from "react-router-dom";
import imgAtas from "../../../assets/images/mainPage/bodyAtas.png";
import imgBawah from "../../../assets/images/mainPage/bodyBawah.png";
import topLogo from "../../../assets/images/iconLogo_black.svg";
import Modal from "../modal/modal";
const Draft6 = () => {
  const [isOpen, setOpen] = useState(true);
  const history = useHistory();
  useEffect(() => {
    if (sessionStorage.getItem("guest-list") !== "true") {
      history.push("/register");
    }
  }, []);
  Hover();
  return (
    <>
      <div className="draft6Container">
        <div className="draft6BackImage">
          <div className="topBarMain">
            <div className="topBarWrapperMain">
              <Link to="/into_the_wayout_future">
                <div className="topBarLeftMain">
                  <div className="topBarLeftWrapperMain">
                    <img src={topLogo} alt="arrow" className="iconArrowRight" />
                  </div>
                  <div className="topBarLeftWrapperMain">
                    <div className="topBarLeftWrapper2" Main>
                      <div className="topBarLeftTextWrapperMain">
                        AFAIR 2022
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/index">
                <div className="topBarRightMain">
                  <div className="topBarLeftWrapper2Main">
                    <div className="topBarRightTextWrapperMain">Index</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <Modal
            title="Bodily Presence: In Space, To Space"
            desc="The bodies of living beings present arrays of parameters that represent their dynamic conditions, providing oppportunities to inform spatial alteration. The bodies provides possibilities of spatial occupation and appropriation, and it is increasingly important to address how the bodies' ever-changing needs shape spatial scenarios in real time. "
            isOpen={isOpen}
            close={() => setOpen(false)}
          />
          <Link to="/bodily_presence/the_augmented_body">
            <img src={imgAtas} alt="6a" className="pos6a" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">The Augmented Body</div>
              <div className="infoContent">
                Ability to sense and create modification to the body drives
                possibilities of scenarios of spaces that responds to our
                physical and mental wellbeing; spanning from energy to
                temperature, or from sickness to grief
              </div>
            </div>
          </Link>
          <Link to="/bodily_presence/provoking_the_body">
            <img src={imgBawah} alt="6b" className="pos6b" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">Provoking the Body</div>
              <div className="infoContent">
                Design can enable, develop, enhance, and promote possibilities
                of bodily potential, as well as the dynamics of the activities
                being carried out.
              </div>
            </div>
          </Link>
          <div className="footer">
            <div className="footerLeft">
              <img src={info} alt="info" className="infoStyle" />
              <div class="infotext2">
                <p>Bodily Presence: In Space, To Space</p>
                <p>
                  The bodies of living beings present arrays of parameters that
                  represent their dynamic conditions, providing oppportunities
                  to inform spatial alteration. The bodies provides
                  possibilities of spatial occupation and appropriation, and it
                  is increasingly important to address how the bodies'
                  ever-changing needs shape spatial scenarios in real time.
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
