import React, { useEffect, useState } from "react";
import "./draft7.css";
import { Hover } from "../hoverfunc.js";
import info from "../../../assets/images/mainPage/iconInfo.svg";
import arrow from "../../../assets/images/mainPage/arrowDark.svg";
import img7a from "../../../assets/images/mainPage/draft7_a.png";
import img7b from "../../../assets/images/mainPage/draft7_bb.png";
import img7c from "../../../assets/images/mainPage/draft7_c.png";
import img7d from "../../../assets/images/mainPage/draft7_d.png";
import { Link, useHistory } from "react-router-dom";
import topLogo from "../../../assets/images/iconLogo_black.svg";
import Modal from "../modal/modal";
const Draft7 = () => {
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
      <div className="draft7Container">
        <div className="draft7BackImage">
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
            title="Redefine the Public"
            desc="Changes are happening not by the individual drive or within the individual terrain, but rather by and to the collective public, redefining the shared spaces."
            isOpen={isOpen}
            close={() => setOpen(false)}
          />
          <Link to="/everyone_as_well/others_around">
            <img src={img7b} alt="7b" className="pos7b" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, -20%)" }}
            >
              <div className="infoTitle">
                Integrating the Physical and the Digital
              </div>
              <div className="infoContent">
                Speculating alternative ways of interactions within the society.
                The current evolution of human methods of connecting with each
                other emphasizes the merge between the physical and the digital
                realm.
              </div>
            </div>
          </Link>
          <Link to="/everyone_as_well/to_fulfill">
            <img src={img7d} alt="7d" className="pos7d" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">Speculating the Industries</div>
              <div className="infoContent">
                Adaptation of workspaces and systems of the industry, creating
                new means of working and new flows of goods and services
              </div>
            </div>
          </Link>
          <Link to="/everyone_as_well/among_our_peers">
            <img src={img7a} alt="7a" className="pos7a" />
            <div
              className="infotext"
              style={{ transform: "translate(10%, 10%)" }}
            >
              <div className="infoTitle">
                Among the Culture and the Everyday
              </div>
              <div className="infoContent">
                The alteration of human interactions as a shared cultural and
                everyday life response and its contribution to the social and
                spatial structures of the communities
              </div>
            </div>
          </Link>
          <Link to="/everyone_as_well/better_version_of_us">
            <img src={img7c} alt="7c" className="pos7c" />

            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">Sharing Knowledge and Information</div>
              <div className="infoContent">
                Attempts to educate communities and figure out new and dynamic
                ways of sharing knowledge and distributing information, towards
                a more knowledgeable and skilled society
              </div>
            </div>
          </Link>
          <div className="footer">
            <div className="footerLeft">
              <img src={info} alt="info" className="infoStyle" />
              <div class="infotext2">
                <p>Redefine the Public</p>
                <p>
                  Changes are happening not by the individual drive or within
                  the individual terrain, but rather by and to the collective
                  public, redefining the shared spaces.
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
