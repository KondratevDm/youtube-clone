export interface NavbarTabType {
    id: number,
    text: string,
    image: string[],
    path?: string
};

export interface NavbarStylesType {
    ListItem: {
        '&:hover': {
            backgroundColor: string,
        },
        "&:click": {
            backgroundColor: string
        }
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