
export function Hover(){
window.onmousemove = function (e) {
  if (
    e.target.classList.contains("pos4") ||
    e.target.classList.contains("pos5") ||
    e.target.classList.contains("pos6") ||
    e.target.classList.contains("pos7") ||
    e.target.classList.contains("pos8") ||
    e.target.classList.contains("pos5a") ||
    e.target.classList.contains("pos5b") ||
    e.target.classList.contains("pos5c") ||
    e.target.classList.contains("pos5d") ||
    e.target.classList.contains("pos6b") ||
    e.target.classList.contains("pos6a") ||
    e.target.classList.contains("pos7a") ||
    e.target.classList.contains("pos7b") ||
    e.target.classList.contains("pos7c") ||
    e.target.classList.contains("pos7d") ||
    e.target.classList.contains("pos8a") ||
    e.target.classList.contains("pos8b") ||
    e.target.classList.contains("pos8c") ||
    e.target.classList.contains("pos8d")
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
}
};
