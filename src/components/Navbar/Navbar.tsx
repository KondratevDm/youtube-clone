import React, { useState, FC } from 'react';

import { NavbarTabs } from './NavbarTabs'
import { Drawer, navBarTabsArr, navBarHiddenTabsArr } from '@utils';

import Collapse from '@mui/material/Collapse';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import './Navbar.scss';


interface NavbarProps {
  isNavbarOpen: boolean
}

export const Navbar: FC<NavbarProps> = ({ isNavbarOpen }) => {

  const [isHiddenTabsShow, setIsHiddenTabsShow] = useState(false)

  const showHiddenTabsHandle = () => {
    setIsHiddenTabsShow(!isHiddenTabsShow)
  }

  return (
    <Box>
      <Drawer variant="permanent" open={isNavbarOpen}>
        <List>
          <NavbarTabs
            isNavbarOpen={isNavbarOpen}
            showHiddenTabsHandle={showHiddenTabsHandle}
            isHiddenTabsShow={isHiddenTabsShow}
            tabs={navBarTabsArr}
          />
          <Collapse in={isHiddenTabsShow} timeout="auto" unmountOnExit orientation='vertical'>
            <NavbarTabs
              isNavbarOpen={isNavbarOpen}
              showHiddenTabsHandle={showHiddenTabsHandle}
              isHiddenTabsShow={isHiddenTabsShow}
              tabs={navBarHiddenTabsArr}
            />
          </Collapse>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}