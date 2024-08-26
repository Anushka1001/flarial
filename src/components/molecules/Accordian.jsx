import React from "react";
import "./moleculeStyles.css";

function Accordian() {
  return (
    <div className="accordianContainer">
      <div className="accordion" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Why Flarial Infotech?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              At Flarial Infotech, we believe that the success of your business
              starts with the right team. We take the time to understand your
              specific needs and challenges, ensuring that our hiring solutions
              are perfectly tailored to find the talent that will drive your
              organization forward. Our personalized approach sets us apart,
              making us your trusted partner in achieving recruitment
              excellence.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Our Services
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              We offer a comprehensive range of hiring solutions designed to
              meet the unique demands of your business. Whether you're looking
              for contract-to-contract (C2C), contract-to-hire (C2H), or
              full-time candidates, we have the expertise to connect you with
              top-tier IT and non-IT professionals. Our services are flexible
              and adaptive, ensuring that you always have access to the right
              talent at the right time.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Our Commitment
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Our focus is on finding the perfect fit for your team, especially
              in mid- and senior-level positions where the right talent can make
              all the difference. Leveraging deep industry insights and an
              extensive network, we go beyond just filling positions—we aim to
              build lasting partnerships. We are committed to helping you find
              the candidates who will not only meet your needs today but also
              contribute to your long-term success.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
