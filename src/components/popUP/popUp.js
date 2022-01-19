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
                      {/* <img
                        src={popUpImg2}
                        alt="Mainphoto"
                        className="ContentImg"
                      />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla nec ultricies urna, quis tempus enim. Nullam
                      ullamcorper metus non orci condimentum, ac dapibus purus
                      commodo. Fusce fringilla orci auctor, feugiat tellus vel,
                      lacinia nunc. Fusce vel laoreet nulla. Quisque rhoncus
                      sodales risus vel laoreet. Pellentesque imperdiet metus at
                      est luctus, vitae cursus mauris elementum. Curabitur
                      lectus magna, rhoncus ac imperdiet et, consequat quis
                      libero. Nam dictum, dui id laoreet porta, est libero
                      pretium erat, non cursus augue felis vitae massa. Donec
                      vel commodo dolor, vel interdum diam. Sed mattis, mauris
                      vel iaculis rhoncus, velit magna suscipit odio, ultrices
                      fermentum turpis urna vitae metus. Mauris eleifend metus
                      ac purus congue dictum. Quisque vel sapien auctor,
                      fermentum sem ut, viverra velit.
                      <img
                        src={popUpImg3}
                        alt="Mainphoto"
                        className="ContentImg"
                      /> */}
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
