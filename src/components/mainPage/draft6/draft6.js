import React from "react";
import "./draft6.css";
import img5 from "../../../assets/images/mainPage/image5.svg";
import img6 from "../../../assets/images/mainPage/image6.svg";
import img7 from "../../../assets/images/mainPage/image7.svg";
import img8 from "../../../assets/images/mainPage/image8.svg";
const draft4 = () => {
  return (
    <>
      <div className="draft4Container">
        <div className="draft4BackImage">
          <img src={img5} alt="img5" className="pos5" />
          <span class="infotext">Understanding us</span>
          <img src={img6} alt="img6" className="pos6" />
          <span class="infotext">Bodily Presence</span>
          <img src={img7} alt="img7" className="pos7" />
          <span class="infotext">Everyone as well</span>
          <img src={img8} alt="img8" className="pos8" />
          <span class="infotext">In where we exist</span>
        </div>
      </div>
    </>
  );
};

export default draft4;

window.onmousemove = function (e) {
  if (
    e.target.classList.contains("pos5") ||
    e.target.classList.contains("pos6") ||
    e.target.classList.contains("pos7") ||
    e.target.classList.contains("pos8")
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
