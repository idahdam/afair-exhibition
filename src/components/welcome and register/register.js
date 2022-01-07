import React from "react";
import iconArrow from "../../assets/images/iconArrow.svg";
import { NavLink as Link } from "react-router-dom";
const register = () => {
  return (
    <>
      <div className="background2">
        <div className="bgContainer2">
          <div className="bgWrapper2">
            <div className="textContainer2">
              <p className="subtitle2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                lacinia, urna nec rhoncus malesuada, enim augue luctus nulla,
                quis molestie velit leo sit amet tellus. Cras eu laoreet metus,
                sed porta nisi.
              </p>
            </div>
            <div className="subtext2" style={{ fontSize: "20px" }}>
              <span className="textBoxdeco2">I </span>{" "}
              <span className="textBoxdeco">Nama Orang</span>{" "}
              <span className="textBoxdeco">Namaorang@gmail.com</span>
              <span className="textBoxdeco2">
                AM READY TO EXPLORE INTO THE WAYOUT FUTURE.
              </span>
              <span className="iconRight2">
                <Link to="/welcome">
                  <img src={iconArrow} className="arrow" alt="icon Logo" />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
