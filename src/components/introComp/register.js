import React, { useState } from "react";
import iconArrow from "../../assets/images/iconArrow.svg";
import { NavLink as Link, useHistory } from "react-router-dom";
import "./welcome.css";
import { formService } from "../../services/formService";
const Register = () => {
  const history = useHistory();
  const [agree, setAgree] = useState(false);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");

  const SubmitAndRedirect = async () => {
    await formService
      .postForm({
        name: nama,
        email: email,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("email", res.data.data.attributes.email);
          localStorage.setItem("name", res.data.data.attributes.name);
          localStorage.setItem("guest-list", true);
          history.push("/video");
        } else {
          alert("Failed.");
        }
      });
  };

  return (
    <>
      <div className="background2">
        <div className="bgContainer2">
          <div className="bgWrapper2">
            <div className="textContainer2">
              <p className="subtitle2">
                Everything changes, so does how we view things. With the
                pandemics emerging back in 2020, it triggered us that the
                changes were caused by our own doings. Thus, our understanding
                towards space changes as well. In result, the practice of
                architecture does not only respond to the vivid present anymore,
                but also the unknown future. AFAIR 2022 attemptS to reveal how
                the architecture students of Universitas Indonesia dive into the
                smallest things such as daily behavior regarding a bigger
                changes through architecture design.
              </p>
            </div>
            <div className="subtext2" style={{ fontSize: "20px" }}>
              <span className="textBoxdeco2">I </span>{" "}
              {/* <span className="textBoxdeco">Nama Orang</span>{" "}
              <span className="textBoxdeco">Namaorang@gmail.com</span> */}
              <input
                className="textBoxdeco"
                type="text"
                placeholder="nama"
                onChange={(e) => setNama(e.target.value)}
              />
              <input
                className="textBoxdeco"
                type="text"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="textBoxdeco2">
                AM READY TO EXPLORE INTO THE WAYOUT FUTURE.
              </span>
              <span className="iconRight2">
                {agree && nama !== "" && email !== "" ? (
                  // <Link to="/video">
                  <img
                    src={iconArrow}
                    className="arrow"
                    alt="icon Logo"
                    onClick={() => SubmitAndRedirect()}
                  />
                ) : (
                  // </Link>
                  <img
                    src={iconArrow}
                    className="arrow"
                    alt="icon Logo"
                    onClick={() =>
                      alert("Please agree to the data collection agreeement.")
                    }
                  />
                )}
              </span>
            </div>
            <br />
            <div className="subtext2" style={{ fontSize: "12px" }}>
              AFAIR 2022 is collecting the data for audience overview purpose
              only.
              <br />
              Your identity will not be published on any kind of platform.
              <br />
              <br />
              <span>
                <input
                  type="checkbox"
                  onChange={() => {
                    setAgree(!agree);
                    console.log(!agree);
                  }}
                />
                <label> I agree</label>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
