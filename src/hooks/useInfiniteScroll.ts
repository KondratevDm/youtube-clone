import { useState, useEffect } from 'react';


export const useInfiniteScroll = (query: string, pageToken: string | null) => {

    const [nextPageToken, setNextPageToken] = useState(null)

    const scrollHandler = () => {
        const scrollHeight = document.documentElement.scrollHeight
        const scrollTop = document.documentElement.scrollTop
        const innerHeight = window.innerHeight
        const condition = scrollHeight - (scrollTop + innerHeight)

        if (condition < 1000) {
            setNextPageToken(pageToken)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [pageToken]) // eslint-disable-line react-hooks/exhaustive-deps


    useEffect(() => {
        window.scrollTo(0, 0)
        setNextPageToken(null)
    }, [query]); 

    return { nextPageToken };
};

