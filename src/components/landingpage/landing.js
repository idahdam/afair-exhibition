import React from "react";
import "./landing.css";
import iconLogo from "../.././assets/images/iconLogo.svg";
import iconInsta from "../.././assets/images/iconInsta.svg";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10 + 100}px,${y / 100 - 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 300 - 0}px,${y / 10+10}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 1000 + 0}px,${y / 10+10}px,0)`;

const Landing = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <>
      <div
        className="background"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div
          class="card42"
          style={{ transform: props.xy.interpolate(trans1) }}
        />
        <animated.div
          class="card43"
          style={{ transform: props.xy.interpolate(trans2) }}
        />
        <animated.div
          class="card44"
          style={{ transform: props.xy.interpolate(trans3) }}
        />
        <div className="bgContainer">
          <div className="bgContainerText">
            <div>
              <img src={iconLogo} alt="icon Logo" />
            </div>
            <h2 className="subtitle" style={{ color: "#E24748" }}>
              COMING SOON
            </h2>
            <h1 className="title">
              <span style={{ fontWeight: 300 }}>AFAIR 2022</span>
              <br />
              VIRTUAL EXHIBITION
            </h1>
            <h2 className="subtitle" style={{ color: "#FE7235" }}>
              21.01.2022
            </h2>
            <div className="textFooter">
              <img
                src={iconInsta}
                className="footerImages"
                alt="instagram logo"
              />
              <span className="footerText">afairui</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
