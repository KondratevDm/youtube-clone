import { useState, useEffect } from 'react';
import axios from 'axios';

import { options } from './options'


export const useFetchChannelDetails = (channelId: string) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleCloseError = () => {
        setError(null)
    }

    const fetchData = async (channelId: string) => {
        try {
            setIsLoading(true)
            const { data } = await axios.get(`${process.env.BASE_API_URL}/channels?part=snippet,statistics&id=${channelId}`, options);
            setData(data.items[0])
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(channelId);
    }, [channelId]);

    return { data, error, isLoading, handleCloseError };
};

