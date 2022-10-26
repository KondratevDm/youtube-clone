import { useState, useEffect } from 'react';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import axios from 'axios';

// interface AxiosParams {
//     method: string,
//     url: string,
//     params: {
//         relatedToVideoId?: string,
//         part?: string,
//         type?: string,
//         maxResults?: string,
//         q?: string,
//         regionCode?: string,
//         order?: string,
//         videoId?: string,
//         id?: string,
//         channelId?: string,
//         playlistId?: string
//     },
//     headers: {
//         'X-RapidAPI-Key': string,
//         'X-RapidAPI-Host': string
//     }
// }

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.RAPID_API_HOST
    }
};

export const useFetchSuggestedVideos = (query: string) => {
    const [prevQuery, setPrevQuery] = useState(null);
    const [items, setItems] = useState([]);
    const [pageToken, setPageToken] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { nextPageToken } = useInfiniteScroll(query, pageToken);

    const handleCloseError = () => {
        setError(null)
    }

    const fetchData = async (query: string, nextPageToken: string | null) => {
        try {
            if (prevQuery !== query) {
                setItems([])
            }
            setIsLoading(true)
            const { data } = await axios.get(`${process.env.BASE_API_URL}/search?part=snippet,id&q=${query}${nextPageToken && (prevQuery === query) ? `&pageToken=${nextPageToken}` : ''}`, options);
            if (prevQuery === query) {
                setItems([...items, ...data.items])
            } else {
                setItems(data.items)
            }
            setPageToken(data.nextPageToken);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
            setPrevQuery(query)
        }
    };

    useEffect(() => {
        fetchData(query, nextPageToken);
    }, [query, nextPageToken]); // eslint-disable-line react-hooks/exhaustive-deps

    return { pageToken, items, error, isLoading, handleCloseError };
};

