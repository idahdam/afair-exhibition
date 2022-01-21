import React, { useEffect, useState } from "react";
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
import Modal from "../modal/modal";
const Draft8 = () => {
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
      <div className="draft8Container">
        <div className="draft8BackImage">
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
            title="Environment: Reconstruct"
            desc="Redefining the natural and the built environment, creating new materials, systems, and spatial relations within the civilization "
            isOpen={isOpen}
            close={() => setOpen(false)}
          />
          <Link to="/environment_reconstruct/ecosystem_made_by_our_own_hands">
            <img src={img8a} alt="8a" className="pos8a" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">Ecosystem Made By Our Own Hands</div>
              <div className="infoContent">
                Weaving an environmental cohesiveness between natural and built
                elements by its components, utilizing leftover materials and
                leftover spaces, developing the ecosystem
              </div>
            </div>
          </Link>
          <Link to="/environment_reconstruct/speed_and_transition">
            <img src={img8b} alt="8b" className="pos8b" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">Speed and Transition</div>
              <div className="infoContent">
                Enhancing and regulating urban mobilization, creating new
                channels of movements as well as transitional spaces to support
                the balance of urban livelihood
              </div>
            </div>
          </Link>
          <Link to="/environment_reconstruct/keeping_it_running_performative_systems">
            <img src={img8c} alt="8c" className="pos8c" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">
                Keeping It RunningL Performative Systems
              </div>
              <div className="infoContent">
                Highlighting methods of resource efficiency in a changing
                context, operating the built environment using creative and
                clean energy sources
              </div>
            </div>
          </Link>
          <Link to="/environment_reconstruct/waste_no_more">
            <img src={img8d} alt="8d" className="pos8d" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">Waste No More</div>
              <div className="infoContent">
                Wasted spaces, wasted goods, wasted substances should be seen as
                more than residue and must be transformed to regain further use
              </div>
            </div>
          </Link>
          <div className="footer">
            <div className="footerLeft">
              <img src={info} alt="info" className="infoStyle" />
              <div class="infotext2">
                <p>Environment: Reconstruct</p>
                <p>
                  Redefining the natural and the built environment, creating new
                  materials, systems, and spatial relations within the
                  civilization
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
