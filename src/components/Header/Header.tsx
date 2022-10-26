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
      <img src={HamburgerLogo} alt="Hamburger" className="header__hamburger" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Link to="/">
        <img src={YouTubeLogo} alt="YouTube Logo" className="header__logo" />
      </Link>
      <SearchBar />
    </div>
  )
}


