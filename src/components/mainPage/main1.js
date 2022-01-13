import React from "react";
import "./mainPage.css";
import img5 from "../../assets/images/mainPage/image5.svg";
import img6 from "../../assets/images/mainPage/image6.svg";
import img7 from "../../assets/images/mainPage/image7.svg";
import img8 from "../../assets/images/mainPage/image8.svg";
const main1 = () => {
  return (
    <>
 <div className="mainPageContainer">
     <div className="mainPageBackImage">
         <img src={img5} alt="img5" className="pos5"/>
         <span class="pos5text">Tooltip text</span>
         <img src={img6} alt="img6" className="pos6"/>
         <img src={img7} alt="img7" className="pos7"/>
         <img src={img8} alt="img8" className="pos8"/>
     </div>
 </div>
    </>
  );
};

export default main1;
