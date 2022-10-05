import React from 'react';


export interface VideoItemType {
    id: {
        kind: string,
        videoId: string,
    },
    kind: string,
    snippet: {
        channelId: string,
        channelTitle: string,
        description: string,
        liveBroadcastContent: string,
        publishTime: Date,
        publistAt: Date,
        thumbnails: {
            default: {
                height: number,
                url: string,
                width: number,
            },
            high: {
                height: number,
                url: string,
                width: number,
            },
            medium: {
                height: number,
                url: string,
                width: number,
            },
        }
        title: string,
    }
}

export interface ReactIconsFunction {
    (props: { color: string, size: number }): React.ReactElement
}

export interface SidebarTabType {
    id: number,
    text: string,
    image: Array<ReactIconsFunction>,
    path?: string
};

export interface SidebarProps extends SidebarTabType {
    isSidebarOpen: boolean,
    styles: (arg: boolean, isTabSelected?: boolean) => SidebarStylesType,
    showHiddenTabsHandle: () => void,
    isHiddenTabsShow: boolean,
    selectedCategory: string,
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>,
}

export interface IconProps {
    text: string,
    image: Array<ReactIconsFunction>,
    isShowMoreItem: boolean,
    isHiddenTabsShow: boolean
}

export interface SidebarStylesType {
    ListItem: {
        '&:hover': {
            backgroundColor: string,
        },
        backgroundColor: string
    },
    ListItemButton: {
        minHeight: number,
        justifyContent: string,

    },
    ListItemIcon: {
        minWidth: number,
        mr: string | number,
        justifyContent: string
    },
    ListItemText: {
        opacity: number,
    },
    Typography: {
        fontFamily: string,
        fontStyle: string,
        fontWeight: string,
        fontSize: string,
        lineHeight: string,
        color: string,
        textDecoration: string
    },
    Divider: {
        backgroundColor: string
    }
};