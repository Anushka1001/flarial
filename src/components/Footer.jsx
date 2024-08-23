import React from "react";
import "../Style.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const Tagline = "Your Trusted Ally in Recruitment Success!";

  function navigateToRoute(val) {
    navigate(val);
  }
  return (
    <>
      <div className="container-fluid containerFooter">
        <div className="row m-2 gap-5">
          <div className="col-4 columnInfo">
            <img
              src="logoWhite.png"
              alt="Flarial Infotech Pvt. Ltd."
              className="logo-styles2 mb-3"
            />
            <div className="row justify-content-between mb-2">
              <div
                className="col-2 iconItem cursorPointer"
                onClick={() => console.log("open linkedin")}
              >
                <i className="bi bi-linkedin h4"></i>
              </div>
              <div
                className="col-2 iconItem cursorPointer"
                onClick={() => console.log("open geomap")}
              >
                <i className="bi bi-geo-alt-fill h4"></i>
              </div>
            </div>
            <div className="taglineFooter">{Tagline}</div>
          </div>

          <div className="col-3 midFooter">
            <div className="headingFooter">our services</div>
            <div
              className="footerItem cursorPointer"
              onClick={() => console.log("open resume writting")}
            >
              Resume Writting
            </div>
            <div
              className="footerItem cursorPointer"
              onClick={() => navigateToRoute("/job-openings")}
            >
              IT Requirements
            </div>
            <div
              className="footerItem cursorPointer"
              onClick={() => navigateToRoute("/job-openings")}
            >
              Non-IT Requirements
            </div>
          </div>

          <div className="col-3 footerEnd">
            <div className="headingFooter">Keep In Touch</div>
            <div className="row gap-2 footerItem2">
              <div className="col-1 iconItem">
                <i className="bi bi-geo-alt-fill h5"></i>
              </div>
              <div className="col-10">
                0014 Shorkha, Sector-115, GAUTAM BUDDHA NAGAR, Noida 201304 ,
                UTTAR PRADESH
              </div>
            </div>
            <div className="row gap-2 footerItem2">
              <div className="col-1 iconItem">
                <i className="bi bi-envelope-at"></i>
              </div>
              <div className="col-10">flarialinfotech@gmail.com</div>
            </div>
            <div className="row gap-2 footerItem2">
              <div className="col-1 iconItem">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div className="col-10">+91 9718275759</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
