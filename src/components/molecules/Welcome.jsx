import React from "react";
import Heading from "../atoms/Heading";
import "./Slideshow.css";

function Welcome() {
  const head = "WELCOME";
  const mirrorText = "flarial infotech india";
  const company = "Flarial Infotech"
  const heading1 =
    "In a world where talent is key to business success,";
  const heading2 =
    "is your premier recruitment partner.";
  const about =
    "We connect top IT and non-IT talent with leading organizations through tailored hiring solutions. Whether you need C2C, C2H, or full-time candidates, our services meet your unique needs. Specializing in mid- and senior-level placements, we leverage industry expertise and a vast network to find the perfect fit for your business. Let us help you build the team that drives success.";
  return (
    <>
      <Heading head={head} mirrorText={mirrorText}/>
      <div className="container-fluid p-5 my-3">
        <div className="row gap-4">
          <div className="col-md-7">
            <div className="headingWelcome">
              {heading1}
              <br/><span className="company">{company}{" "}</span><br/>
              {heading2}
            </div>
            <br />
            <div className="aboutWelcome">{about}</div>
          </div>
          <div className="col-md-4">
            <img src="box1.gif" alt="our mission" className="WelcomeImage" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
