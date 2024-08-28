import React from 'react';
import NavbarHeader from './molecules/NavbarHeader';
import "../Style.css";
import "../mediaQuery.css";

function Header() {
  return (
    <>
      <div className='row justify-content-between header m-0'>
        <div className='col-md-4 col-sm-12'>
          <img src='logoWhite.png' alt='Flarial Infotech Pvt. Ltd.' className='logo-styles'/>
        </div>
        <div className='col-md-6 col-sm-12 d-flex justify-content-end mediaquery'>
          <NavbarHeader />
        </div>
      </div>
    </>
  )
}

export default Header