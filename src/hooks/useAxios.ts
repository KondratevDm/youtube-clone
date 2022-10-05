import { useState, useEffect } from 'react';
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

export const useAxios = (selectedCategory: string) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleCloseError = () => {
        setError(null)
    }

    const fetchData = async (selectedCategory: string) => {
        try {
            setLoading(true)
            setResponse(null)
            const { data } = await axios.get(`${process.env.BASE_API_URL}/search?part=snippet&q=${selectedCategory}`, options);
            setResponse(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(selectedCategory);
    }, [selectedCategory]);

    return { response, error, loading, handleCloseError };
};

