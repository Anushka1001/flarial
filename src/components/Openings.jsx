import React from "react";
import "../Style.css";
import Heading from "./atoms/Heading";
import { jobs } from "./jobs/jobsData";
import { useNavigate } from "react-router-dom";

function Openings() {
  const navigate = useNavigate();

  function navigateToRoute(val) {
    navigate(val);
  }

  return (
    <div className="container containerOpenings">
      <Heading head="job Openings" mirrorText="job openings" />
      {jobs.map((item) => (
        <div className="row jobCards" key={item.id}>
          <div className="row">
            <div className="col-md-6">
              <div className="row titleJob">{item.jobTitle}</div>
              <div className="row descJob">{item.jobDesc}</div>
            </div>
            <div className="col-md-2 locationJob">
              <i className="bi bi-geo-alt-fill"></i>
              {item.jobLocation}
            </div>
            <div className="col-md-2 payJob">&#8377;{item.payInitial}
              {item.payType === "fixed" ? '' : ` - ${item.payFinal}`} LPA
            </div>
            <div className="col-md-2">
              {item.typeOfJob === "full" ? (
                <div className="blockJob fullTime">Full time</div>
              ) : item.typeOfJob === "part" ? (
                <div className="blockJob parttime">Part time</div>
              ) : (
                <div className="blockJob internship">Internship</div>
              )}
            </div>
          </div>
          <div className="row d-flex justify-content-between mt-4">
            <div className="col-md-3 m-0 p-0">
              <div className="experienceText">Experience Required</div>
              <div className="experienceValue">{item.experience}</div>
            </div>
            <div className="col-md-5 m-0 p-0">
              <div className="experienceText">Skills</div>
              <div className="skillsValue d-flex gap-2">{item.skillsMain.map((item, index) => (
                <div key={index}>{item}</div>
              ))}</div>
            </div>
            <div className="col-md-2 linkJob" onClick={() => navigateToRoute(`/job-details/${item.id}`)}>
              Apply now
              <i className="bi bi-chevron-double-right"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Openings;
