import React, { useState } from 'react';
import Logo from '../../assets/images/nikola-logo-black.png';

const Header = () => {

  return (
    <div className='header'>
      <div className='container'>
        <div className='header__logo'>
          <img src={Logo} alt="Nokola Digital Lab" />
        </div>
      </div>
    </div>
  );
}

export default Header;