import React, { FC } from 'react';
import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import { SidebarProps } from '@/types'
import { Icon } from './Icon'


export const SidebarItem: FC<SidebarProps> = ({ id, isSidebarOpen, text, image, styles, showHiddenTabsHandle, path, isHiddenTabsShow, selectedCategory, setSelectedCategory }) => {

    const isShowMoreItem = text === 'Chill'
    const isTabSelected = text === selectedCategory

    return (
        <ListItem key={id} disablePadding sx={styles(isSidebarOpen, isTabSelected).ListItem}>
            <ListItemButton component={Link} to={path} onClick={() => isShowMoreItem ? showHiddenTabsHandle() : setSelectedCategory(text)} sx={styles(isSidebarOpen).ListItemButton}>
                <ListItemIcon sx={styles(isSidebarOpen).ListItemIcon}>
                    <Icon
                        image={image}
                        text={text}
                        isShowMoreItem={isShowMoreItem}
                        isHiddenTabsShow={isHiddenTabsShow}
                    />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography sx={styles(isSidebarOpen).Typography}>{text}</Typography>
                    }
                    sx={styles(isSidebarOpen).ListItemText} />
            </ListItemButton>
        </ListItem >
    )
}