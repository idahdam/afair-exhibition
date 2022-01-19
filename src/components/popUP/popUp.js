import React from "react";
import "./popUp.css";
import popUpImg1 from "../../assets/images/popUp/popUpImage1.svg";
import popUpImg2 from "../../assets/images/popUp/popUpImage2.svg";
import popUpImg3 from "../../assets/images/popUp/popUpImage3.svg";
import ReactMarkdown from "react-markdown";

const popUp = (props) => {
  console.log(props);
  return (
    <>
      <div className="popUpBg">
        <div className="popUpContainerWrapper">
          <div className="popUpContainer">
            <div className="popUpWrapper">
              <div className="popUpContainerMid">
                <div className="popUpLeft">
                  <img
                    src={props.props.attributes.art.data.attributes.url}
                    alt="Mainphoto"
                    className="mainImgStyle"
                  />
                </div>
                <div className="popUpRight">
                  <div className="popUpTextContainer">
                    <div className="popUpTextTitle">
                      <span className="popUpTextTitleH">
                        {props.props.attributes.title}
                      </span>
                      <br />
                      {props.props.attributes.author}
                    </div>
                    <div className="popUpTextContent">
                      <ReactMarkdown
                        children={props.props.attributes.content}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default popUp;
