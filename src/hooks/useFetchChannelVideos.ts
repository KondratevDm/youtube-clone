import { useState, useEffect } from 'react';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import axios from 'axios';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.RAPID_API_HOST
    }
};

export const useFetchChannelVideos = (channelId: string) => {
    const [prevQuery, setPrevQuery] = useState(null);
    const [items, setItems] = useState([]);
    const [pageToken, setPageToken] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { nextPageToken } = useInfiniteScroll(channelId, pageToken);

    const handleCloseError = () => {
        setError(null)
    }

    const fetchData = async (channelId: string, nextPageToken: string | null) => {
        try {
            if (prevQuery !== channelId) {
                setItems([])
            }
            setIsLoading(true)
            const { data } = await axios.get(`${process.env.BASE_API_URL}/search?part=snippet,id&order=date&channelId=${channelId}${nextPageToken && (prevQuery === channelId) ? `&pageToken=${nextPageToken}` : ''}`, options);
            if (prevQuery === channelId) {
                setItems([...items, ...data.items])
            } else {
                setItems(data.items)
            }
            setPageToken(data.nextPageToken);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
            setPrevQuery(channelId)
        }
    };

    useEffect(() => {
        fetchData(channelId, nextPageToken);
    }, [channelId, nextPageToken]); // eslint-disable-line react-hooks/exhaustive-deps

    return { pageToken, items, error, isLoading, handleCloseError };
};

