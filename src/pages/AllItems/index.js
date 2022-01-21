import React, { useEffect, useState } from "react";
import "./index.css";
import { artService } from "../../services/artService";
import { makeStyles } from "@material-ui/core/styles";
// import PopUp from "../popUP/popUp";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import PopUp from "../../components/popUP/popUp";
import { useHistory, Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

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

const AllItems = () => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = useState({});
  const [loading, setLoading] = useState(false);
  const handleOpen = (item) => {
    console.log(item);
    setOpen(true);
    setModalData(item);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await artService.getArt();
      console.log(response.data.data);
      setData(response.data.data);
    };

    if (sessionStorage.getItem("guest-list") === "true") {
      fetchData();
    } else {
      history.push("/register");
    }
  }, []);

  const handleSort = (params) => {
    history.push("/index/sort/" + params);
    history.go(0);
  };

  const handleFilters = (params) => {
    history.push("/index/filters/" + params);
    history.go(0);
  };

  return (
    <div className="container">
      <div className="indexWrapper">
        <div className="indexBarContainer">
          <div className="page-title-div">
            <div className="page-title">Projects Index </div>
            <Link to="/into_the_wayout_future">
              <span className="back-title">Back to Main Menu</span>
            </Link>
          </div>
          <div>
            <div className="dropdown-div">
              <select
                name="filters"
                className="Dropdownstyle"
                onChange={(e) => {
                  handleFilters(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Choose one to filter...
                </option>
                <option value="understanding_us">Understanding Us</option>
                <option value="bodily_presence">Bodily Presence</option>
                <option value="everyone_as_well">Everyone As Well</option>
                <option value="in_where_we_exist">In Where We Exist</option>
              </select>
            </div>
            <div className="dropdown-div">
              <select
                name="sorts"
                className="Dropdownstyle"
                onChange={(e) => {
                  handleSort(e.target.value);
                }}
              >
                <option value="author:asc" disabled selected>
                  Choose one to sort...
                </option>
                <option value="author:asc">Author A-Z</option>
                <option value="author:desc">Author Z-A</option>
                <option value="title:asc">Project Title A-Z</option>
                <option value="title:desc">Project Title Z-A</option>
              </select>
            </div>
          </div>
        </div>
        {data.length === 0 ? null : (
          <div className="indexBarContainer2">
            <div className="parent">
              {data.map((item) => {
                return (
                  <div className="child">
                    <LazyLoad>
                      <img
                        src={item.attributes.art.data.attributes.url}
                        alt="sss"
                        className="item_image"
                        onClick={() => handleOpen(item)}
                      />
                      <p className="item_title">{item.attributes.title}</p>
                      <p className="item_author">{item.attributes.author}</p>
                    </LazyLoad>
                  </div>
                );
              })}
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllItems;
