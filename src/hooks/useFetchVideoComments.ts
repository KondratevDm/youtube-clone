import { useState, useEffect } from 'react';
import axios from 'axios';

import { VideoCommentsType } from '@/types';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.RAPID_API_HOST
    }
};

export const useFetchVideoComments = (videoId: string) => {

    const [comments, setComments] = useState<VideoCommentsType[]>(null)
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    const handleCloseError = () => {
        setError(null)
    }

    const fetchData = async (videoId: string) => {
        try {
            setIsLoading(true)
            const { data } = await axios.get(`${process.env.BASE_API_URL}/commentThreads?part=snippet&videoId=${videoId}`, options);
            setComments(data.items)
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(videoId);
    }, [videoId]);

    return { comments, error, isLoading, handleCloseError };
};

