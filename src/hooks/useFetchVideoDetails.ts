import { useState, useEffect } from 'react';
import axios from 'axios';

import { VideoDetailsType } from '@/types';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.RAPID_API_HOST
    }
};

export const useFetchVideoDetails = (videoId: string) => {
    
    const [item, setItem] = useState<VideoDetailsType>(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    const handleCloseError = () => {
        setError(null)
    }

    const fetchData = async (videoId: string) => {
        try {
            setIsLoading(true)
            const { data } = await axios.get(`${process.env.BASE_API_URL}/videos?part=snippet&id=${videoId}`, options);
            setItem(data.items[0])
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(videoId);
    }, [videoId]);

    return { item, error, isLoading, handleCloseError };
};

