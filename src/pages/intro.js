import React from "react";
import { Fullpage, Slide, HorizontalSlider } from "fullpage-react";
// import ScrollText from "../components/autoScrollPage/scroll"
import Transisi from "../components/introComp/transisi";
import Draft4 from "../components/mainPage/draft4/draft4";
import Draft5 from "../components/mainPage/draft5/draft5";
import Draft6 from "../components/mainPage/draft6/draft6";
import Draft7 from "../components/mainPage/draft7/draft7";
// import iconArrow from ".././assets/images/iconArrow.svg";
// import iconLogo from ".././assets/images/iconLogo.svg";
// import "./intro.css";
const { changeHorizontalSlide } = Fullpage;

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 0 is default
  scrollSensitivity: 2,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 0 is default
  touchSensitivity: 2,
  scrollSpeed: 500,
  resetSlides: true,
  hideScrollBars: true,
  enableArrowKeys: true,

  // optional, set the initial vertical slide
  activeSlide: 0,
};

const horizontalNavStyle = {
  position: "absolute",
  width: "100%",
  top: "50%",
  zIndex: 10,
};

const horizontalSliderProps = {
  name: "horizontalSlider1",
  infinite: true,
};

class FullpageReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: {
        Fullpage: 0,
        horizontalSlider1: 0,
      },
    };

    this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
    this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
  }

  onSlideChangeStart(name, props, state, newState) {
    if (!this.horizontalNav) {
      this.horizontalNav = document.getElementById("horizontal-nav");
    }

    if (name === "horizontalSlider1") {
      scrollNavStart(this.horizontalNav);
    }
  }

  onSlideChangeEnd(name, props, state, newState) {
    if (name === "horizontalSlider1") {
      scrollNavEnd(this.horizontalNav);
    }

    const oldActive = this.state.active;
    const sliderState = {
      [name]: newState.activeSlide,
    };

    const updatedState = Object.assign(oldActive, sliderState);
    this.setState(updatedState);
  }

  componentDidMount() {}

  render() {
    // const { active } = this.state;

    // const currentActive = active.Fullpage;
    // const prevSlide = changeFullpageSlide.bind(null, currentActive - 1);
    // const nextSlide = changeFullpageSlide.bind(null, currentActive + 1);
    // const goToTop = changeFullpageSlide.bind(null, 0);

    const horizontalSliderName = horizontalSliderProps.name;
    const horizontalActive = this.state.active[horizontalSliderName];

    const prevHorizontalSlide = changeHorizontalSlide.bind(
      null,
      horizontalSliderName,
      horizontalActive - 1
    );
    const nextHorizontalSlide = changeHorizontalSlide.bind(
      null,
      horizontalSliderName,
      horizontalActive + 1
    );

    const horizontalNav = (
      <div id="horizontal-nav" style={horizontalNavStyle}>
        <span onClick={prevHorizontalSlide}>
          <button>PREV</button>
        </span>
        <span
          style={{ position: "absolute", right: "0px" }}
          onClick={nextHorizontalSlide}
        >
          <button>Next</button>
        </span>
      </div>
    );

    const horizontalSlides = [
      <Slide>
        <Draft7 />
      </Slide>,
      <Slide>
        <Draft6 />
      </Slide>,
      <Slide>
        <Draft5 />
      </Slide>,
      <Slide>
        <Draft4 />
      </Slide>,
      <Slide>
        <Transisi />
      </Slide>,

      <Slide style={{ backgroundColor: "yellow" }}>
        <p>Horizontal 2</p>
      </Slide>,
      <Slide style={{ backgroundColor: "green" }}>
        <p>Horizontal 3</p>
      </Slide>,
    ];
    horizontalSliderProps.slides = horizontalSlides;

    const horizontalSlider = (
      <HorizontalSlider id="horizontal-slider-1" {...horizontalSliderProps}>
        {horizontalNav}
      </HorizontalSlider>
    );

    const verticalSlides = [horizontalSlider];
    fullPageOptions.slides = verticalSlides;

    return (
      <Fullpage
        onSlideChangeStart={this.onSlideChangeStart}
        onSlideChangeEnd={this.onSlideChangeEnd}
        {...fullPageOptions}
      ></Fullpage>
    );
  }
}

function scrollNavStart(nav) {
  // make the nav fixed when we start scrolling horizontally
  nav.style.position = "fixed";
}

function scrollNavEnd(nav) {
  // make the nav absolute when scroll finishes
  nav.style.position = "absolute";
}

export default FullpageReact;
