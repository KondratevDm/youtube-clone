import React from 'react';
import { styled } from "@mui/material/styles";
import { Tab } from '@mui/material';

interface StyledTabProps {
    label: string;
}

export const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "#fff",
    opacity: '0.3',
    "&.Mui-selected": {
        color: "#fff",
        opacity: '1',
    },
    "&.Mui-focusVisible": {
        backgroundColor: "rgba(100, 95, 228, 0.32)"
    }
}));