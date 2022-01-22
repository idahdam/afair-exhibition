import React, { useEffect, useState } from "react";
import "./index.css";
import { artService } from "../../services/artService";
import { makeStyles } from "@material-ui/core/styles";
// import PopUp from "../popUP/popUp";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import PopUp from "../../components/popUP/popUp";
import { useHistory, useParams, Link } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";

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

const AllItemsWithSort = () => {
  const history = useHistory();
  const { params } = useParams();
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = useState({});
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("black");
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
    console.log(params);
    const fetchData = async () => {
      const response = await artService.getArtsSorted(params);
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
  if (data.length === 0)
    return (
      <MoonLoader color={color} loading={loading} css={override} size={50} />
    );
  return (
    <div className="container">
      <div className="indexWrapper">
        <div className="indexBarContainerQuit">
          <div className="page-title-divQuit">
            <Link to="/into_the_wayout_future">
              <span className="back-title" style={{ fontSize: "17px" }}>
                Back to Main Menu
              </span>
            </Link>
          </div>
        </div>
        <div className="indexBarContainer">
          <div className="page-title-div">
            <div className="page-title">Projects Index</div>
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
                <option value="altering_the_self">Altering The Self</option>
                <option value="bodily_presence_in_space_to_space">
                  Bodily Presence
                </option>
                <option value="redefine_the_public">Redefine The Public</option>
                <option value="environment_reconstruct">
                  Environment Reconstruct
                </option>
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
                    <img
                      src={item.attributes.art.data.attributes.url}
                      alt="image for art"
                      className="item_image"
                      onClick={() => handleOpen(item)}
                    />
                    <p className="item_title">{item.attributes.title}</p>
                    <p className="item_author">{item.attributes.author}</p>
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

export default AllItemsWithSort;
