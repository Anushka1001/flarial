import React from "react";
import "../Style.css";
import { useParams } from "react-router-dom";
import { jobs } from "./jobs/jobsData";
import FormForContact from "./molecules/FormForContact";

function JobDetails() {
  const { id } = useParams();
  const jobId = parseInt(id, 10);
  const job = jobs.find((job) => job.id === jobId);

  const contact = `If you're interested for ${job.jobTitle} role, please contact us in given form.\n We will get back to you in 1-2 business days.`;

  return (
    <>
      <div className="container containerOpenings">
        <div className="row">
          <div className="col-md-8">
            <div className="containerBlock">
              <div className="row">
                <div className="col-md-10"></div>
                <div className="col-md-2 openedonDate">
                  <i className="bi bi-clock"></i>
                  {job.openingDate}
                </div>
              </div>
              <div className="row my-4 d-flex justify-content-between">
                <div className="col-md-8 titleJob">{job.jobTitle}</div>
                <div className="col-md-3 my-2 d-flex justify-content-end">
                  {job.typeOfJob === "full" ? (
                    <div className="blockJob fullTime">Full time</div>
                  ) : job.typeOfJob === "part" ? (
                    <div className="blockJob parttime">Part time</div>
                  ) : (
                    <div className="blockJob internship">Internship</div>
                  )}
                </div>
              </div>
              <div className="d-flex gap-2 expDetails">
                Minimum experience Required :{" "}
                <span className="experienceValue">{job.experience}</span>
              </div>
              <div className="descDetails descDetailsShort">{job.jobDesc}</div>
              <div className="descDetails">{job.longDesc}</div>
              <div className="otherDetails mt-5 d-flex gap-2">
                skill required:
                {job.skillsTotal.map((item, index) => (
                  <div key={index} className="itemSkills">
                    {item}
                    {","}
                  </div>
                ))}
              </div>
              <div className="otherDetails d-flex gap-2">
                expected salary:
                <span className="itemSkills">
                  &#8377;{job.payInitial}
                  {job.payType === "fixed" ? "" : ` - ${job.payFinal}`} LPA
                </span>
              </div>
              <div className="otherDetails d-flex gap-2">
                location:
                <span className="itemSkills">{job.jobLocation}</span>
              </div>
              <div className="my-5">
                <div className="contactDesc">{contact}</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="containerBlock">
                <FormForContact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetails;
