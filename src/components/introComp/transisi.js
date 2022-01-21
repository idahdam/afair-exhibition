import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./welcome.css";

const Transisi = () => {
  const history = useHistory();
  useEffect(() => {
    let interval = null;
    if (sessionStorage.getItem("guest-list") !== "true") {
      history.push("/register");
    }
    interval = setInterval(() => {
      history.push("/into_the_wayout_future");
    }, 5000);
    // }
    return () => (interval ? clearInterval(interval) : null);
  }, []);
  return (
    <>
      <div className="background2" style={{fontFamily:"SFProDisplay Regular"}}>
        <div className="bgContainer2">
          <div className="bgContainerText2" style={{ maxWidth: "80%" }}>
            <p className="titleTrans" >
              
                "Everything changes. Life changes. Things change. Architecture
                changes.</p> 
                <p className="titleTrans" >Interior changes. Architecture as a knowledge
                discipline and as a practice is constantly challenged to
                maintain its relevance to the dynamic of life. Ever since the
                pandemic in 2020, our life will never be the same. At
                Universitas Indonesia, we believe that the changes should be the
                trigger for shifting the direction of our architectural
                education and practice. It becomes an opportunity to rethink the
                ways of architecture and interior architecture design should be
                done.
                </p> <p className="titleTrans" >Design learning should move to the arena where the acts of
                designing are not limited to the conventional approaches of
                programming, developing spatial ideas, and representing. Various
                new concerns have emerged: New definition of spatial experience,
                new forms of relationship; new media, tools, and platforms, new
                limits and boundaries. Therefore, current design practice needs
                to incorporate more competences: predicting the unpredicted,
                working from afar, dealing with the virtual and intangible;
                reading the emerging data landscape; and manoeuvring within the
                complexity of everything that keeps changing.” 
                </p>
                <p className="titleTrans" >
                <span
                style={{
                  fontSize: "30px",
                  lineHeight: "36px",
                  fontWeight: "300",
                }}
              >
                Prof. Yandi Andri</span><br/>
                <span
                style={{
                  fontSize: "20px",
                  lineHeight: "36px",
                  fontWeight: "300",
                }}
              >
                Yatmo, PhD AFAIR UI 2022 Exhibition Curator
              </span>
              </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transisi;
