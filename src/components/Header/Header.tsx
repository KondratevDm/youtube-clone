import React, { FC } from 'react';
import { Link } from "react-router-dom";

import { SearchBar } from '@components'
import HamburgerLogo from '@assets/images/hamburger.svg'
import YouTubeLogo from '@assets/images/Youtube-Logo.svg'

import './Header.scss';

interface HeaderProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>,
  isSidebarOpen: boolean
}

export const Header: FC<HeaderProps> = ({ setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <div className="header">
      <div className="header__logo-block">
        <img src={HamburgerLogo} alt="Hamburger" className="header__logo-block__hamburger" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <Link to="/">
          <img src={YouTubeLogo} alt="YouTube Logo" className="header__logo-block__logo" />
        </Link>
      </div>
      <SearchBar />
    </div>
  )
}


