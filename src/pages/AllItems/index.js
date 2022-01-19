import React from "react";
import "./index.css";
import { data } from "./data.js";

const AllItems = () => {
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
                  <img src={item.image} alt="sss" className="item_image" />
                  <p className="item_title">{item.title}</p>
                  <p className="item_author">{item.author}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItems;
