import React, { useState, FC } from 'react';

import { NavbarItem } from './NavbarItem'
import { NavbarTabType, NavbarStylesType } from '@/types'
import { Drawer, navBarTabs, navBarHiddenTabs } from '@utils';

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
          {navBarTabs.map(({ id, text, image, path }: NavbarTabType) => (
            <NavbarItem
              key={id}
              id={id}
              text={text}
              isNavbarOpen={isNavbarOpen}
              image={image}
              path={path}
              styles={styles}
              showHiddenTabsHandle={showHiddenTabsHandle}
              isHiddenTabsShow={isHiddenTabsShow}
            />
          ))}
          <Collapse in={isHiddenTabsShow} timeout="auto" unmountOnExit orientation='vertical'>
            {navBarHiddenTabs.map(({ id, text, image, path }: NavbarTabType) => (
              <NavbarItem
                key={id}
                id={id}
                text={text}
                isNavbarOpen={isNavbarOpen}
                image={image}
                path={path}
                styles={styles}
                showHiddenTabsHandle={showHiddenTabsHandle}
                isHiddenTabsShow={isHiddenTabsShow}
              />
            ))}
          </Collapse>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}

const styles = (opened: boolean): NavbarStylesType => {
  return {
    ListItem: {
      '&:hover': {
        backgroundColor: '#303030',
      },
      "&:click": {
        backgroundColor: "green"
      }
    },
    ListItemButton: {
      minHeight: 48,
      justifyContent: opened ? "initial" : "center",

    },
    ListItemIcon: {
      minWidth: 0,
      mr: opened ? 4 : "auto",
      justifyContent: "center"
    },
    ListItemText: {
      opacity: opened ? 1 : 0,
    },
    Typography: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '16px',
      color: '#FFFFFF',
      textDecoration: 'none'
    },
    Divider: {
      backgroundColor: '#bbbbbb'
    }
  }
};
