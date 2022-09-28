import React, { FC } from 'react';
import HamburgerLogo from '@assets/images/hamburger.svg'
import YouTubeLogo from '@assets/images/Youtube-Logo.svg'
import { SearchBar } from '@components'
import {
  Link,
} from "react-router-dom";

import './Header.scss';

interface HeaderProps {
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>,
  isNavbarOpen: boolean
}

export const Header: FC<HeaderProps> = ({ setIsNavbarOpen, isNavbarOpen }) => {
  return (
    <div className="header">
      <img src={HamburgerLogo} alt="Hamburger" className="header__hamburger" onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
      <Link to="/">
        <img src={YouTubeLogo} alt="YouTube Logo" className="header__logo" />
      </Link>

      <SearchBar />
    </div>
  )
}


