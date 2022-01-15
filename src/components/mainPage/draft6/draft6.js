import React from "react";
import "./draft6.css";
import a6 from "../../../assets/images/mainPage/6a.svg";
import b6 from "../../../assets/images/mainPage/6b.svg";
import info from "../../../assets/images/mainPage/iconInfo.svg";
import arrow from "../../../assets/images/mainPage/arrowDark.svg";
const draft6 = () => {
  return (
    <>
      <div className="draft6Container">
        <div className="draft6BackImage">
          <img src={a6} alt="5a" className="pos6a" />
          <span class="infotext">Our body</span>
          <img src={b6} alt="5b" className="pos6b" />
          <span class="infotext">In Action</span>
          <div className="footer">
            <div className="footerLeft">
              <img src={info} alt="info" className="infoStyle" />
              <div class="infotext2">
                <p>Judul</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  nec ultricies urna, quis tempus enim. Nullam ullamcorper metus
                  non orci condimentum, ac dapibus purus commodo. Fusce
                  fringilla orci auctor, feugiat tellus vel, lacinia nunc.
                </p>
              </div>
            </div>
            <div className="footerRight">
              <span className="iconFloat">To The Exit</span>
              <img src={arrow} alt="arrow" className="icoStyle" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default draft6;

window.onmousemove = function (e) {
  if (
    e.target.classList.contains("pos6a") ||
    e.target.classList.contains("pos6b")
  ) {
    //	Content of dot which is hovered
    var $target = e.target.nextElementSibling;

    //	Only work with hovered target
    //	Add visible class hovered elem to distinguish
    if (!$target.classList.contains("visible")) {
      $target.classList.add("visible");
    } else {
      //	Get viewport offset of tooltip element
      var offset = $target.parentElement.getBoundingClientRect();
      //	Tooltip distance from mouse(px)
      var tipDist = 15;
      //	Calc and set new tooltip location
      $target.style.top = e.clientY - offset.top + tipDist + "px";
      $target.style.left = e.clientX - offset.left + tipDist + "px";
    }
  } else {
    //	Remove visible class
    var content = document.getElementsByClassName("content");
    for (var i = 0; i < content.length; i++) {
      content[i].classList.remove("visible");
    }
  }
};
