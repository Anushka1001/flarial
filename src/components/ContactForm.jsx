import React from 'react'
import FormForContact from './molecules/FormForContact'
import "../Style.css"

function ContactForm() {

  const mainText1 = "To make requests for further information,";
  const mainText2 = "via our social channels.";
  const spanText = " Contact Us ";
  const subText = "We just need a couple of hours! No more than 2 working days since receiving your issue ticket.";
  return (
    <div className='container-fluid'>
      <div className='row imageContact imageContactURL'>
        <p className='p-0 m-0'>Contact US</p>
      </div>
      <div className='row'>
        <div className='col-md-5 m-4'>
          <div className='mainText2 my-5'>{mainText1}<span className='colorBlue'>{spanText}</span>{mainText2}</div>
          <div className='subText2 mx-5 px-2'>{subText}</div>
        </div>
        <div className='col-md-6 m-4 p-5'>
          <FormForContact />
        </div>
      </div>
    </div>
  )
}

export default ContactForm