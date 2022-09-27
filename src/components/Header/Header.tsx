import React from 'react';
import HamburgerLogo from '@assets/images/hamburger.svg'
import YouTubeLogo from '@assets/images/Youtube-Logo.svg'
import { SearchBar } from '@components'
import './Header.scss';

export const Header = () => {
  return (
    <div className="header">
      <img src={HamburgerLogo} alt="Hamburger" className="header__hamburger" />
      <img src={YouTubeLogo} alt="YouTube Logo" className="header__logo" />
      
      <SearchBar />
    </div>
  )
}


