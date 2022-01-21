import React, { useEffect, useState } from "react";
import "./draft5.css";
import { Hover } from "../hoverfunc.js";
import { useHistory } from "react-router-dom";
import info from "../../../assets/images/mainPage/iconInfo.svg";
import arrow from "../../../assets/images/mainPage/arrowDark.svg";
import topLogo from "../../../assets/images/iconLogo_black.svg";
import beyond from "../../../assets/images/mainPage/eco.png";
import inorderto from "../../../assets/images/mainPage/inOrderTo.png";
import isense from "../../../assets/images/mainPage/isense.png";
import what from "../../../assets/images/mainPage/what.png";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";
const Draft5 = () => {
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
      <div className="draftContainer">
        <div className="draftBackImage">
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
            title="Altering the Self"
            desc="Capturing the unseen changes that are only felt by ourselves, often related to each and every individual's emotions"
            isOpen={isOpen}
            close={() => setOpen(false)}
          />
          <Link to="/altering_the_self/past_events_and_beyond">
            <img src={inorderto} alt="5d" className="pos5d" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="">Past Events, and Beyond</div>
              <br />
              <div className="">
                Space is shaped by conditions of humans' emotion and memory
                attributed by past events. Memory involvement, psychological
                intervention in regards to past events and identities alter the
                possible intervention of space
              </div>
            </div>
          </Link>
          <Link to="/altering_the_self/linking_the_system_gap">
            <img src={beyond} alt="5a" className="pos5a" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="">Linking the System Gap</div>
              <br />
              <div className="">
                Speculating the environmental and urban systems driven by self
                perception and individual way of life, annotating the gap and
                respond to the foreseeable future changes.
              </div>
            </div>
          </Link>
          <Link to="/altering_the_self/the_customized_individuality">
            <img src={isense} alt="5b" className="pos5b" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="">The Customized Individuality</div>
              <br />
              <div className="">
                Space can be altered and customized by human desires to have a
                creative platform of expression, creating various scenarios of
                programming that support the users' individuality
              </div>
            </div>
          </Link>
          <Link to="/altering_the_self/i_sense_therefore_i_experience">
            <img src={what} alt="5c" className="pos5c" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="">I Sense, Therefore I Experience</div>
              <br />
              <div className="">
                Human senses become the centre of information, absorbing the
                stimulus information of the space around them. The stimulus
                shape experiences towards the space around them, and acknowledge
                the changes occurred around and to the space.
              </div>
            </div>
          </Link>

          <div className="footer">
            <div className="footerLeft">
              <img src={info} alt="info" className="infoStyle" />
              <div class="infotext2">
                <p>Altering the Self</p>
                <p>
                  Capturing the unseen changes that are only felt by ourselves,
                  often related to each and every individual's emotions
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
