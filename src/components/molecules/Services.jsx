import React from "react";
import "./moleculeStyles.css";
import "../../Style.css"
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  function navigateToRoute(val) {
    navigate(val);
  }

  const cards = [
    {
      icon: "bi bi-briefcase gradient-icon",
      heading: "IT & Non-IT Hiring",
      desc: "Connecting skilled IT and non-IT professionals with leading companies.",
      link: "/job-openings",
    },
    {
      icon: "bi bi-file-earmark-text gradient-icon",
      heading: "Resume Optimization",
      desc: "Crafting resumes that stand out and capture employers' attention.",
      link: "/resume-making",
    },
    {
      icon: "bi bi-book-half gradient-icon",
      heading: "Talent Sorting",
      desc: "Efficiently sorting and selecting the best candidates for your needs.",
      link: "/job-openings",
    },
    {
      icon: "bi bi-bullseye gradient-icon",
      heading: "Tailored Recruitment Solutions",
      desc: "Customizing hiring strategies to match your business goals.",
      link: "/job-openings",
    },
  ];
  return (
    <div className="container-fluid">
      <div className="headingServices">our services</div>
      <div className="row m-0 p-4">
        {cards.map((item, index) => (
          <div className="col-md-3 p-2" key={index}>
            <div
              className="card cardService text-center m-4 p-2"
              onClick={() => navigateToRoute(item.link)}
            >
              <div className="card-body">
                <div className="cardIconService">
                  <i className={item.icon}></i>
                </div>
                <h5 className="card-title cardHeadingService">{item.heading}</h5>
                <p className="card-text cardDescService">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
