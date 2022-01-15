import React from "react";
import background from "../../assets/images/image3.png";
import "./index.css";

const Question = () => {
  return (
    <div className="container">
      <img src={background} alt="Yes" className="image" />
      <div className="centered">
        <div>Have you noticed any changes in your life recently?</div>
        <br />
        <div class="row">
          <div class="column" onClick={() => {}}>
            Apparently, yes
          </div>
          <div class="column" onClick={() => {}}>
            No, not really
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
