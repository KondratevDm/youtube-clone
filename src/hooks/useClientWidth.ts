import { useState, useEffect } from 'react';

export const useClientWidth = () => {

    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);


    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { windowWidth };
};

