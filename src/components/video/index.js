import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import "./index.css";
import { useHistory } from "react-router-dom";

const Video = () => {
  const history = useHistory();
  useEffect(() => {
    if (sessionStorage.getItem("guest-list") !== "true") {
      history.push("/register");
    }
  }, []);
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=LUvT6sHzMLw"
        className="react-player"
        playing
        width="100%"
        height="100%"
        controls={false}
        onEnded={() => {
          history.push("/question");
        }}
        onReady={() => {}}
      />
    </div>
  );
};

export default Video;
