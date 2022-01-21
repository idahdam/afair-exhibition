import React, { useEffect, useState } from "react";
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
import Modal from "../modal/modal";
const Draft4 = () => {
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
      <div className="draft4Container">
        <div className="draft4BackImage">
          <div className="topBar4Main">
            <div className="topBar4WrapperMain">
              <Link to="/into_the_wayout_future">
                <div className="topBar4LeftMain">
                  <div className="topBarLef4tWrapperMain">
                    <img src={topLogo} alt="arrow" className="iconArrowRight" />
                  </div>
                  <div className="topBar4LeftWrapperMain">
                    <div className="topBar4LeftWrapper2" Main>
                      <div className="topBar4LeftTextWrapperMain">
                        AFAIR 2022
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/index">
                <div className="topBar4RightMain">
                  <div className="topBar4LeftWrapper2Main">
                    <div className="topBar4RightTextWrapperMain">Index</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <Modal
            title="Into The Wayout Future"
            desc="The future is full of possibilities. From your everyday behavior to a global scale phenomena, everything around us is changing. How we answers those questions, architecturally, shall change as well."
            isOpen={isOpen}
            close={() => setOpen(false)}
          />
          <Link to="/environment_reconstruct">
            <img src={img4} alt="imgIcon" className="pos4" />
            <div
              className="infotext"
              // style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">Environment: Reconstruct</div>
              <div className="infoContent">
                Redefining the natural and the built environment, creating new
                materials, systems, and spatial relations within the
                civilization
              </div>
            </div>
          </Link>
          <Link Link to="/bodily_presence">
            <img src={img5} alt="imgIcon" className="pos5" />
            <div className="infotext">
              <div className="infoTitle">
                Bodily Presence: In Space, To Space
              </div>
              <div className="infoContent">
                The bodies of living beings present arrays of parameters that
                represent their dynamic conditions, providing oppportunities to
                inform spatial alteration. The bodies provides possibilities of
                spatial occupation and appropriation, and it is increasingly
                important to address how the bodies' ever-changing needs shape
                spatial scenarios in real time.
              </div>
            </div>
          </Link>
          <Link to="/redefine_the_public">
            <img src={img6} alt="imgIcon" className="pos6" />
            <div className="infotext">
              <div className="infoTitle">Redefine the Public</div>
              <div className="infoContent">
                Changes are happening not by the individual drive or within the
                individual terrain, but rather by and to the collective public,
                redefining the shared spaces.
              </div>
            </div>
          </Link>

          <Link to="/altering_the_self">
            <img src={img8} alt="imgIcon" className="pos8" />
            <div className="infotext">
              <div className="infoTitle">Altering the Self</div>
              <div className="infoContent">
                Capturing the unseen changes that are only felt by ourselves,
                often related to each and every individual's emotions
              </div>
            </div>
          </Link>

          <div className="footer4">
            <div className="footerLeft4">
              <img src={info} alt="info" className="infoStyle4" />
              <div class="infotext24">
                <p>Into The Wayout Future</p>
                <p>
                  The future is full of possibilities. From your everyday
                  behavior to a global scale phenomena, everything around us is
                  changing. How we answers those questions, architecturally,
                  shall change as well.
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
