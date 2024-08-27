import React from 'react';
import "../../Style.css"
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  function navigateToRoute(val) {
    navigate(val);
  }
  const mainText = "Obtaining further information by contacting our experienced staff.";
  const subText = "We’re available for 24 hours a day! Contact to inquire a detailed analysis and assessment of your needs.";
  const reachText = "Reach out now!"

  return (
    <div className='container-fluid background'>
      <div className='row m-0 p-5 gap-5'>
        <div className='col-md-6'>
          <div className='mainText'>{mainText}</div>
          <div className='subText'>{subText}</div>
        </div>
        <div className='col-md-5 columnCall'>
          <i className="bi bi-telephone "></i>
          <div className='reachText'>{reachText}</div>
          <div className='contactNumbers'>+91 9718275759</div>
          <Button className='contactButton btn-grad' onClick={() => navigateToRoute("/contact-us")}>Contact Us</Button>
        </div>
      </div>
    </div>
  )
}

export default Contact