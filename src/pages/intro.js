import React from "react";
import { Fullpage, Slide, HorizontalSlider } from "fullpage-react";
import iconArrow from ".././assets/images/iconArrow.svg";
import iconLogo from ".././assets/images/iconLogo.svg";
import "./intro.css";
const { changeFullpageSlide, changeHorizontalSlide } = Fullpage;

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
    const { active } = this.state;

    const currentActive = active.Fullpage;
    // const prevSlide = changeFullpageSlide.bind(null, currentActive - 1);
    const nextSlide = changeFullpageSlide.bind(null, currentActive + 1);
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
        <span onClick={prevHorizontalSlide}>{/* <button>PREV</button> */}</span>
        <span
          style={{ position: "absolute", right: "0px" }}
          onClick={nextHorizontalSlide}
        >
          {/* <button>Next</button> */}
        </span>
      </div>
    );

    const Welcome = () => {
      return (
        <>
          <div className="background2">
            <div className="bgContainer2">
              <div className="bgContainerText2">
                <div>
                  <img src={iconLogo} className="logoImages2" alt="icon Logo" />
                </div>
                <p className="title">
                  <span style={{ fontSize: "30px" }}>AFAIR 2022</span>
                  <br />
                  INTO THE WAYOUT FUTURE
                  <br />
                  <span style={{ fontSize: "20px" }}>VIRTUAL EXHIBITION</span>
                </p>
                <h2 className="title" style={{ fontSize: "20px" }}>
                  Loading
                </h2>
                <div className="topNavStyle">
                  <span onClick={nextSlide}>
                    <img src={iconArrow} className="arrow2" alt="icon arrpw" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };

    const StatementPage = () => {
      return (
        <>
          <div className="background2">
            <div className="bgContainer2">
              <div className="bgWrapper2">
                <div className="textContainer2">
                  <p className="subtitle2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc lacinia, urna nec rhoncus malesuada, enim augue luctus
                    nulla, quis molestie velit leo sit amet tellus. Cras eu
                    laoreet metus, sed porta nisi.
                  </p>
                </div>
                <div className="subtext2" style={{ fontSize: "20px" }}>
                  <span className="textBoxdeco2">I </span>{" "}
                  <span className="textBoxdeco">Nama Orang</span>{" "}
                  <span className="textBoxdeco">Namaorang@gmail.com</span>
                  <span className="textBoxdeco2">
                    AM READY TO EXPLORE INTO THE WAYOUT FUTURE.
                  </span>
                  <span onClick={nextHorizontalSlide} className="iconRight2">
                    <img src={iconArrow} className="arrow" alt="icon Logo" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };

    const horizontalSlides = [
      <Slide>
        <StatementPage />
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

    const verticalSlides = [
      <Slide>
        <Welcome />
      </Slide>,
      horizontalSlider,
    ];
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
