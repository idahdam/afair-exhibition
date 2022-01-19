import React, { useEffect, useState } from "react";
import "./index.css";
import { artService } from "../../services/artService";
import { makeStyles } from "@material-ui/core/styles";
// import PopUp from "../popUP/popUp";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import PopUp from "../../components/popUP/popUp";

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
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = useState({});
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
    fetchData();
  }, []);
  // if (data.length === 0) return null;
  return (
    <div className="container">
      <div className="indexWrapper">
        <div className="indexBarContainer">
          <div className="page-title-div">
            <div className="page-title">Projects Index</div>
          </div>
          <div>
            <div className="dropdown-div">
              <select name="cars" className="Dropdownstyle">
                <option value="volvo">Understanding Us</option>
                <option value="saab">Bodily Presence</option>
                <option value="mercedes">Everyone As Well</option>
                <option value="audi">In Where We Exist</option>
              </select>
            </div>
            <div className="dropdown-div">
              <select name="cars" className="Dropdownstyle">
                <option value="volvo">Author A-Z</option>
                <option value="saab">Author Z-A</option>
                <option value="mercedes">Project Title A-Z</option>
                <option value="audi">Project Title Z-A</option>
              </select>
            </div>
          </div>
        </div>
        <div className="indexBarContainer2">
          <div className="parent">
            {data.map((item) => {
              return (
                <div className="child">
                  <img
                    src={item.attributes.art.data.attributes.url}
                    alt="sss"
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
      </div>
    </div>
  );
};

export default AllItems;
