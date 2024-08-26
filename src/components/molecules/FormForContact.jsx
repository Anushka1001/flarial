import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./moleculeStyles.css";

function FormForContact() {
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data", formData)

    emailjs
      .send(
        "service_iyfwm27",
        "template_nh2cqtf",
        formData,
        {
          publicKey: 'PXCtfJmdJ6YOIdKSe',
        }
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
        },
        (error) => {
          console.error("Failed to send email. Error:", error.text);
        }
      );

    setFormData({
      from_name: "",
      to_name: "",
      message: "",
    })
  };

  return (
    <div className="formContainer">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="from_name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="from_name"
            value={formData.from_name}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="to_name" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="to_name"
            value={formData.to_name}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            rows={3}
            className="form-control"
            id="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary bt-contact">
            Send Message!
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormForContact;
