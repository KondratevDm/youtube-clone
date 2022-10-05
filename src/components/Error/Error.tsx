import React, { FC } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface ErrorProps {
    message: string;
    handleCloseError: () => void;
}

export const Error: FC<ErrorProps> = ({ message, handleCloseError }) => {
    return (
        <Snackbar open={true} autoHideDuration={6000} onClose={handleCloseError}>
            <Alert onClose={handleCloseError} severity="error">
                {message}
            </Alert>
        </Snackbar>
    )
};