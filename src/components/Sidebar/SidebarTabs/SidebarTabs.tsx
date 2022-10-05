import React, { FC } from 'react';

import { SidebarItem } from '../SidebarItem'
import { SidebarTabType, SidebarStylesType } from '@/types'

interface SidebarTabsProps {
    isSidebarOpen: boolean,
    showHiddenTabsHandle: () => void,
    isHiddenTabsShow: boolean,
    tabs: SidebarTabType[],
    selectedCategory: string,
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>,
}

export const SidebarTabs: FC<SidebarTabsProps> = ({ isSidebarOpen, showHiddenTabsHandle, isHiddenTabsShow, tabs, selectedCategory, setSelectedCategory }) => {
    return (
        <>
            {
                tabs.map(({ id, text, image, path }: SidebarTabType) => (
                    <SidebarItem
                        key={id}
                        id={id}
                        text={text}
                        isSidebarOpen={isSidebarOpen}
                        image={image}
                        path={path}
                        styles={styles}
                        showHiddenTabsHandle={showHiddenTabsHandle}
                        isHiddenTabsShow={isHiddenTabsShow}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                ))
            }
        </>
    );
}

const styles = (opened: boolean, isTabSelected?: boolean): SidebarStylesType => {
    return {
        ListItem: {
            '&:hover': {
                backgroundColor: '#303030',
            },
            backgroundColor: isTabSelected ? '#303030' : 'fff'
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
