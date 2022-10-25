import React from 'react';
import { useNavigate } from 'react-router-dom';

export const useNavigateToPath = () => {

    const navigate = useNavigate();

    const navigateToPath = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => (path: string) => {
        event.preventDefault()
        event.stopPropagation()
        navigate(path)
    }

    return { navigateToPath };
};

