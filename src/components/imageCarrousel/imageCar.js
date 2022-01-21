import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import "./imageCar.css";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import arrow from "../../assets/images/mainPage/arrowDark.svg";
import info from "../../assets/images/mainPage/iconInfo.svg";
import topLogo from "../../assets/images/iconLogo_black.svg";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import PopUp from "../popUP/popUp";
import { Link, useHistory, useParams } from "react-router-dom";
import { artService } from "../../services/artService";
import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";
import { datas } from "./data";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ImgCar(props) {
  const { params } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("black");
  let dataCarousel = datas.find(
    (datas) => datas.title.toLowerCase() === params.replaceAll("_", " ")
  );

  useEffect(() => {
    if (sessionStorage.getItem("guest-list") !== "true") {
      history.push("/register");
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 10,
    showNavigation: true,
    config: config.gentle,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await artService.getArtWithParams(params);
      setData(response.data.data);
      console.log(response.data.data);
    };

    fetchData();
  }, []);

  let sliders = data.map((item, index) => ({
    key: uuidv4(),
    content: (
      <div className="imgCarContainer">
        <img
          src={item.attributes.art.data.attributes.url}
          alt="1"
          className="imageContent"
        />
        <div className="imgCarText">
          <span className="imgCarTitle">{item.attributes.title}</span>
          <br />
          <span className="imgCarSubTitle">{item.attributes.author}</span>
        </div>
      </div>
    ),
    onClick: () => {
      setState({ goToSlide: index });
      setModalData(item);
      setOpen(true);
    },
  }));
  if (data.length === 0)
    return (
      <MoonLoader color={color} loading={loading} css={override} size={50} />
    );
  return (
    <div className="carrouselBackground">
      <div className="carrouselFullContainer">
        <div className="topBar">
          <div className="topBarWrapper">
            <div
              className="topBarLeft"
              onClick={() => history.push("/into_the_wayout_future")}
            >
              <div className="topBarLeftWrapper">
                <img src={topLogo} alt="arrow" className="iconArrowRight" />
              </div>
              <div className="topBarLeftWrapper">
                <div className="topBarLeftWrapper2">
                  <div className="topBarLeftTextWrapper">AFAIR 2022</div>
                </div>
              </div>
            </div>
            <div className="topBarRight">
              <div
                className="topBarLeftWrapper2"
                onClick={() => history.push("/index")}
              >
                <div className="topBarRightTextWrapper">Index</div>
              </div>
            </div>
          </div>
        </div>

        <div className="carrouselContainer">
          <div className="carrouselSide">
            {" "}
            <button
              onClick={() => {
                setState({ goToSlide: state.goToSlide - 1 });
              }}
              className="buttonImgCar"
            >
              <img src={arrow} alt="arrow" className="iconArrowLeft" />
            </button>
          </div>
          {sliders.length === 0 ? null : (
            <>
              <div className="carrouselMid">
                <div
                  style={{ width: "80%", height: "500px", margin: "0 auto" }}
                >
                  <Carousel
                    slides={sliders}
                    goToSlide={state.goToSlide}
                    offsetRadius={10}
                    animationConfig={state.config}
                  />
                </div>
              </div>
              <div className="carrouselSide">
                {" "}
                <button
                  onClick={() => {
                    setState({ goToSlide: state.goToSlide + 1 });
                  }}
                  className="buttonImgCar"
                >
                  <img src={arrow} alt="arrow" className="iconArrowRight" />
                </button>
              </div>{" "}
            </>
          )}
        </div>
        {Object.keys(modalData).length !== 0 ? (
          <>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.transparent}>
                  <PopUp props={modalData} />
                </div>
              </Fade>
            </Modal>
          </>
        ) : null}
        <div className="footerCar">
          <div className="footerCarWrapper">
            <div className="footerCarLeft">
              <img src={info} alt="info" className="infoCarStyle" />
              <div class="infoCarText">
                <p>{dataCarousel.title}</p>
                <p>{dataCarousel.body}</p>
              </div>
            </div>
            <div
              className="footerCarRight"
              onClick={() => {
                history.push("/exit");
              }}
            >
              <span className="iconFloat">To The Exit</span>
              <img src={arrow} alt="arrow" className="icoStyle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgCar;
