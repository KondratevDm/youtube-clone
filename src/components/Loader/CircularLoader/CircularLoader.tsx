import React from 'react';
import { CircularProgress } from '@mui/material';

import './CircularLoader.scss';

export const CircularLoader = () => {
    return (
        <div className="circularLoader">
            <CircularProgress color="info" />
        </div>
    );
}