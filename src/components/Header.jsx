import React from 'react';
import NavbarHeader from './molecules/NavbarHeader';
import "../Style.css";

function Header() {
  return (
    <>
      <div className='row justify-content-between header m-0'>
        <div className='col-4'>
          <img src='logoFull.png' alt='Flarial Infotech Pvt. Ltd.' className='logo-styles'/>
        </div>
        <div className='col-6 d-flex justify-content-end'>
          <NavbarHeader />
        </div>
      </div>
    </>
  )
}

export default Header