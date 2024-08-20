import React from 'react';
import "../Style.css"

function Footer() {
  return (
    <>
      <div className='container-fluid footerContainer'>
        <div className='row footerRow'>
          <div className='col-6 footerItemGrp'>
          <div className="row footerTitle">our servicEs</div>
            <div className='row footerItem cursorPointer'>Resume Writting</div>
            <div className='row footerItem cursorPointer'>IT Requirements</div>
            <div className='row footerItem cursorPointer'>Non-IT Requirements</div>
          </div>
          <div className='col-6 footerItemGrp'>
            <div className="footerTitle">Keep In Touch</div>
            <div className='details'>
              <span>Address: </span>0014 Shorkha, Sector-115, GAUTAM BUDDHA NAGAR, Noida<br/>201304 , UTTAR PRADESH
            </div>
            <div className='details'><span>Email: </span>flarialinfotech@gmail.com</div>
            <div className='details'><span>Contact: </span>+91 9718275759</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer