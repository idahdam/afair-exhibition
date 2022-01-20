import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";
import "./index.css";

const ApparentlyYes = () => {
  const [flip, set] = useState(false);
  const history = useHistory();

  const words = [
    "MAYBE THERE ARE THINGS THAT YOU",
    "OVERLOOK ESPECIALLY SINCE THE",
    "PANDEMIC EMERGED. THOSE",
    "ACTIVITIES THAT REQUIRE PHYSICAL",
    "INTERACTIONS ARE NOW LIMITED BY",
    "REGULATIONS TO PREVENT THE",
    "TRANSMISSION FURTHER. NEEDS",
    "THAT CAN BE FULFILLED BY GOING TO",
    "A CERTAIN PLACE, CAN NOW BE",
    "ACCESSED THROUGH THE TIP OF",
    "YOUR FINGERS. EVEN, THE TASTE OF",
    "YOUR FAVORITE MEAL CAN NOW",
    "BE DELIVERED TO YOUR HOUSE.",
  ];

  const { scroll } = useSpring({
    scroll: (words.length - 1) * 125,
    from: { scroll: 0 },
    reset: true,
    reverse: flip,
    delay: 1000,
    // config: config.molasses,
    config: { duration: 20000 },
    // onRest: () => set(!flip),
    onRest: () => {
      history.push("/transition");
    },
  });

  return (
    <animated.div
      style={{
        position: "relative",
        width: "95%",
        height: 968,
        overflow: "auto",
        fontSize: "6em",
        paddingLeft: "1em",
      }}
      //   className="animation"
      scrollTop={scroll}
    >
      {words.map((word, i) => (
        <div key={`${word}_${i}`} className="scrollingText">
          {word}
        </div>
      ))}
    </animated.div>
  );
};

export default ApparentlyYes;
