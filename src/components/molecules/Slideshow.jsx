import React from "react";
import "./Slideshow.css";

function Slideshow() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="8000">
            <img
              src="slide2.png"
              className="d-block w-100"
              style={{ height: "42.5em",}}
              alt="..."
            />
            <div className="carousel-caption">
              <h5 className="carousel-heading">Empowering Your Recruitment Journey</h5>
              <p>
                Connecting top-tier IT and non-IT talent with leading
                organizations for unparalleled success.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="8000">
            <img
              src="slide1.png"
              className="d-block w-100"
              style={{ height: "42.5em" }}
              alt="..."
            />
            <div className="carousel-caption">
              <h5 className="carousel-heading">Tailored Hiring Solutions</h5>
              <p>
                Whether C2C, C2H, or full-time, we match the right candidates to
                your unique needs.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="8000">
            <img
              src="slide3.png"
              className="d-block w-100"
              style={{ height: "42.5em" }}
              alt="..."
            />
            <div className="carousel-caption">
              <h5 className="carousel-heading">Your Strategic Talent Partner</h5>
              <p>
                Leveraging deep industry insights to build the team that drives
                your business forward.
              </p>
            </div>
          </div>
        </div>
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </>
  );
}

export default Slideshow;
