import React, { FC } from 'react';
import {
    Link,
} from "react-router-dom";

import { NavbarTabType, NavbarStylesType } from '@/types'

import { Icon } from './Icon'
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

interface NavbarProps extends NavbarTabType {
    isNavbarOpen: boolean,
    styles: (arg: boolean) => NavbarStylesType,
    showHiddenTabsHandle: () => void,
    isHiddenTabsShow: boolean,
}

export const NavbarItem: FC<NavbarProps> = ({ id, isNavbarOpen, text, image, styles, path, showHiddenTabsHandle, isHiddenTabsShow }) => {

    const isShowMoreItem = text === 'Show more'

    return (
        <ListItem key={id} disablePadding sx={styles(isNavbarOpen).ListItem}>
            <ListItemButton component={Link} to={path} onClick={() => isShowMoreItem ? showHiddenTabsHandle() : null} sx={styles(isNavbarOpen).ListItemButton}>
                <ListItemIcon sx={styles(isNavbarOpen).ListItemIcon}>
                    <Icon
                        image={image}
                        text={text}
                        isShowMoreItem={isShowMoreItem}
                        isHiddenTabsShow={isHiddenTabsShow}
                    />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography sx={styles(isNavbarOpen).Typography}>{text}</Typography>
                    }
                    sx={styles(isNavbarOpen).ListItemText} />
            </ListItemButton>
        </ListItem >
    )
}