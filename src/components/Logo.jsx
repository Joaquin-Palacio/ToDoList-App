import React from 'react';
import freeCodeCampLogo from '../assets/logo.png';
import '../styles/Logo.css';

const Logo = () => {
  return (
    <div className='logo-container'>
      <img 
        src={freeCodeCampLogo}
        className='logo-freeCodeCamp'
        alt='' 
      />
    </div>
  )
}

export default Logo;