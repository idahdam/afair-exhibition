import React from "react";
import "./draft5.css";
import a5 from "../../../assets/images/mainPage/5a.svg";
import b5 from "../../../assets/images/mainPage/5b.svg";
import c5 from "../../../assets/images/mainPage/5c.svg";
import d5 from "../../../assets/images/mainPage/5d.svg";
const draft5 = () => {
  return (
    <>
      <div className="draft5Container">
        <div className="draft5BackImage">
          <img src={a5} alt="5a" className="pos5a" />
          <span class="infotext">I sense therefore I feel</span>
          <img src={b5} alt="5b" className="pos5b" />
          <span class="infotext">Beyond Our Sense</span>
          <img src={c5} alt="5c" className="pos5c" />
          <span class="infotext">What I really want</span>
          <img src={d5} alt="5d" className="pos5d" />
          <span class="infotext">In order to...</span>
        </div>
      </div>
    </>
  );
};

export default draft5;

window.onmousemove = function (e) {
  if (
    e.target.classList.contains("pos5a") ||
    e.target.classList.contains("pos5b") ||
    e.target.classList.contains("pos5c") ||
    e.target.classList.contains("pos5d")
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
