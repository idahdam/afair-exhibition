import React from "react";
import "./draft4.css";
import { Hover } from "../hoverfunc.js";
import { useHistory } from "react-router-dom";
import pinIcon from "../../../assets/images/mainPage/pinIcon.svg";
import info from "../../../assets/images/mainPage/iconInfo.svg";
import arrow from "../../../assets/images/mainPage/arrowDark.svg";
import { NavLink as Link } from "react-router-dom";
const Draft4 = () => {
  const history = useHistory();
  Hover();
  return (
    <>
      <div className="draft4Container">
        <div className="draft4BackImage">
          <img src={pinIcon} alt="img5" className="pos4" />
          <div
            className="infotext"
            style={{ transform: "translate(-110%, 10%)" }}
          >
            <div className="infoTitle">Compact Living</div>
            <div className="infoContent">How we live in the future</div>
          </div>
          <Link to="/draft5">
            <img src={pinIcon} alt="img5" className="pos5" />
            <div className="infotext">
              <div className="infoTitle">Understanding Us</div>
              <div className="infoContent">
                Unseen changes that is only felt by ourselves. They often relate
                to each and every individual's emotions
              </div>
            </div>
          </Link>
          <Link to="/draft6">
            <img src={pinIcon} alt="img5" className="pos6" />
            <div className="infotext">
              <div className="infoTitle">Bodily Presence</div>
              <div className="infoContent">
                Activities involving the human bodies are constantly altering.
                Space response has to adapt to its ever-changing needs
              </div>
            </div>
          </Link>
          <Link to="/draft7">
            <img src={pinIcon} alt="img5" className="pos7" />
            <div
              className="infotext"
              style={{ transform: "translate(-110%, 10%)" }}
            >
              <div className="infoTitle">Everyone As Well</div>
              <div className="infoContent">
                Changes happening not within the individuality, but rather
                outside involving the collective
              </div>
            </div>
          </Link>
          <Link to="/draft8">
            <img src={pinIcon} alt="img5" className="pos8" />
            <div className="infotext">
              <div className="infoTitle">In Where We Exist</div>
              <div className="infoContent">
                How the relations between the environment and ourselves are
                dynamic, affecting each other endlessly
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
