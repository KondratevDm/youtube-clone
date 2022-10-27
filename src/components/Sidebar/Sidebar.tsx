import React, { useState, FC } from 'react';
import Collapse from '@mui/material/Collapse';
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import { SidebarTabs } from './SidebarTabs'
import { Drawer, sidebarTabsArr, sidebarHiddenTabsArr } from '@utils';

import './Sidebar.scss';


interface SidebarProps {
  isSidebarOpen: boolean,
  selectedCategory: string,
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>,
}

export const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, selectedCategory, setSelectedCategory }) => {

  const [isHiddenTabsShow, setIsHiddenTabsShow] = useState(false)

  const showHiddenTabsHandle = () => {
    setIsHiddenTabsShow(!isHiddenTabsShow)
  }

  return (
    <div className={`sidebar ${isSidebarOpen ? 'sidebar__open' : ''}`}>
      <Drawer variant="permanent" open={isSidebarOpen} >
        <List sx={{ paddingTop: '0' }}>
          <SidebarTabs
            isSidebarOpen={isSidebarOpen}
            showHiddenTabsHandle={showHiddenTabsHandle}
            isHiddenTabsShow={isHiddenTabsShow}
            tabs={sidebarTabsArr}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Collapse in={isHiddenTabsShow} timeout="auto" unmountOnExit orientation='vertical'>
            <SidebarTabs
              isSidebarOpen={isSidebarOpen}
              showHiddenTabsHandle={showHiddenTabsHandle}
              isHiddenTabsShow={isHiddenTabsShow}
              tabs={sidebarHiddenTabsArr}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </Collapse>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}