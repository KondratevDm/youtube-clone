import React, { FC } from 'react';

import { NavbarItem } from '../NavbarItem'
import { NavbarTabType, NavbarStylesType } from '@/types'

interface NavbarTabsProps {
    isNavbarOpen: boolean,
    showHiddenTabsHandle: () => void,
    isHiddenTabsShow: boolean,
    tabs: NavbarTabType[]
}

export const NavbarTabs: FC<NavbarTabsProps> = ({ isNavbarOpen, showHiddenTabsHandle, isHiddenTabsShow, tabs }) => {
    return (
        <>
            {
                tabs.map(({ id, text, image, path }: NavbarTabType) => (
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
                ))
            }
        </>
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
