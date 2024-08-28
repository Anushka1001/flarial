import React from "react";
import "../Style.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const Tagline = "Your Trusted Ally in Recruitment Success!";
  const linkedin = 'https://www.linkedin.com/in/nirupama-km-708a46240';
  const gmap = "https://www.google.com/maps?q=0014+Shorkha,+Sector-115,+GAUTAM+BUDDHA+NAGAR,+Noida+201304+,+UTTAR+PRADESH"

  function navigateToRoute(val) {
    navigate(val);
  }
  return (
    <>
      <div className="container-fluid containerFooter">
        <div className="row m-2 gap-5">
          <div className="col-md-4 columnInfo">
            <img
              src="logoWhite.png"
              alt="Flarial Infotech Pvt. Ltd."
              className="logo-styles2 mb-3"
            />
            <div className="row justify-content-between mb-2">
              <div
                className="col-2 iconItem cursorPointer"
                onClick={() => window.open(linkedin, '_blank')}
              >
                <i className="bi bi-linkedin h4"></i>
              </div>
              <div
                className="col-2 iconItem cursorPointer"
                onClick={() => window.open(gmap, '_blank')}
              >
                <i className="bi bi-geo-alt-fill h4"></i>
              </div>
            </div>
            <div className="taglineFooter">{Tagline}</div>
          </div>

          <div className="col-md-3 midFooter">
            <div className="headingFooter">our services</div>
            <div
              className="footerItem cursorPointer"
              onClick={() => navigateToRoute("/job-openings")}
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
            <div
              className="footerItem cursorPointer"
              onClick={() => navigateToRoute("/job-openings")}
            >
              Cover Letter
            </div>
          </div>

          <div className="col-md-3 footerEnd">
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
