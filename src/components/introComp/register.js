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
  const [testEmail, setTestEmail] = useState(false);

  const SubmitAndRedirect = async () => {
    await formService
      .postForm({
        name: nama,
        email: email,
      })
      .then((res) => {
        if (res.status === 200) {
          sessionStorage.setItem("email", res.data.data.attributes.email);
          sessionStorage.setItem("name", res.data.data.attributes.name);
          sessionStorage.setItem("guest-list", true);
          history.push("/video");
        } else {
          alert("Failed.");
        }
      });

    // sessionStorage.setItem("guest-list", true);
    // history.push("/video");
  };

  const handleEmail = (input) => {
    setEmail(input);
    const regexEmail = /.+@.+\.[A-Za-z]+$/.test(input);
    setTestEmail(regexEmail);
  };

  return (
    <>
      <div className="background2">
        <div className="bgContainer2">
          <div className="bgContainerText3">
            <div className="textContainer3">
              <p className="subtitle2">
                Everything changes, so does how we view things. The emergence of
                pandemic in 2020 triggered changes that were caused by our own
                doings. Our understanding towards space changes as well,
                resulting in the practice of architecture which does not only
                respond to the vivid presence anymore, but also to the unknown
                future. AFAIR 2022 attempt to reveal how these changes unfold in
                the Department of Architecture University of Indonesia, where
                its students question and speculate how these changes apply;
                from the smallest daily behavior to bigger changes in the realm
                of architecture and interior architecture design.
              </p>
            </div>
            <div className="subtext2" style={{ fontSize: "20px" }}>
              <span className="textBoxdeco2">I </span>{" "}
              <input
                className="textBoxdeco"
                type="text"
                placeholder="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <input
                className="textBoxdeco"
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => handleEmail(e.target.value)}
              />
              <span className="textBoxdeco2">
                AM READY TO EXPLORE INTO THE WAYOUT FUTURE.
              </span>
              <span className="iconRight3">
                {agree && nama !== "" && email !== "" && testEmail !== false ? (
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
                      alert(
                        "Please agree to the data collection agreeement or insert a valid email address."
                      )
                    }
                  />
                )}
              </span>
            </div>
            <br />
            <div className="subtext2" style={{ fontSize: "18px" }}>
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
