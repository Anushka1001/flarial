import React from "react";
import Accordian from "./molecules/Accordian";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../Style.css";

function About() {
  const navigate = useNavigate();

  function navigateToRoute(val) {
    navigate(val);
  }

  const heading = "About Us";
  const description =
    "At Flarial Infotech, we connect top IT and non-IT talent with leading organizations through tailored hiring solutions. Specializing in mid and senior-level placements, we find the perfect fit for your unique business needs.";
  return (
    <>
      <div className="container">
        <div className="row containerAbout">
          <div className="col-md-4">
            <div className="heading">{heading}</div>
            <div className="description">{description}</div>
            <Button
              className="contactButtonAbout"
              onClick={() => navigateToRoute("/contact-us")}
            >
              Contact Us
            </Button>
          </div>
          <div className="col-md-6">
            <img
              src="about-vector.png"
              alt="about us"
              className="aboutImageContainer"
            />
          </div>
        </div>
        <div className="row accordianArea">
          <Accordian />
        </div>
      </div>
    </>
  );
}

export default About;
