import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import "./imageCar.css";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import test1img from "../../assets/images/test/1.png";
import test2img from "../../assets/images/test/2.png";
import test3img from "../../assets/images/test/3.png";
import test4img from "../../assets/images/test/4.png";
import test5img from "../../assets/images/test/5.png";
import test6img from "../../assets/images/test/6.png";
import test7img from "../../assets/images/test/7.png";
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
      console.log(response);
      setData(response.data.data);
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
  console.log(sliders);
  let slides = [
    {
      key: uuidv4(),
      content: (
        <div className="imgCarContainer">
          <img
            src={test1img}
            alt="1"
            className="imageContent"
            onClick={handleOpen}
          />
          {/* <Modal
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
                <PopUp />
              </div>
            </Fade>
          </Modal> */}
          <div className="imgCarText">
            <span className="imgCarTitle">Xiao ting</span>
            <br />
            <span className="imgCarSubTitle">Kep1er</span>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="imgCarContainer">
          <img src={test2img} alt="1" className="imageContent" />
          <div className="imgCarText">
            <span className="imgCarTitle">Xiao ting</span>
            <br />
            <span className="imgCarSubTitle">Kep1er</span>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="imgCarContainer">
          <img src={test3img} alt="1" className="imageContent" />
          <div className="imgCarText">
            <span className="imgCarTitle">Jinsoul</span>
            <br />
            <span className="imgCarSubTitle">Loona</span>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="imgCarContainer">
          <img src={test4img} alt="1" className="imageContent" />
          <div className="imgCarText">
            <span className="imgCarTitle">Ryujin</span>
            <br />
            <span className="imgCarSubTitle">Itzy</span>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="imgCarContainer">
          <img src={test5img} alt="1" className="imageContent" />
          <div className="imgCarText">
            <span className="imgCarTitle">Sana</span>
            <br />
            <span className="imgCarSubTitle">Twice</span>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="imgCarContainer">
          <img src={test6img} alt="1" className="imageContent" />
          <div className="imgCarText">
            <span className="imgCarTitle">Saerom</span>
            <br />
            <span className="imgCarSubTitle">Fromis_9</span>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="imgCarContainer">
          <img src={test7img} alt="1" className="imageContent" />
          <div className="imgCarText">
            <span className="imgCarTitle">Karina</span>
            <br />
            <span className="imgCarSubTitle">Aespa</span>
          </div>
        </div>
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

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
          <div className="carrouselMid">
            <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
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
                <p>Into The Wayout Future</p>
                <p>
                  Unseen changes that is only felt by ourselves. They often
                  relate to each and every individual's emotions
                </p>
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
