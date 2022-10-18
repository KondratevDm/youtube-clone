import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from '@/hooks/useAxios'
import { VideoItemType } from '@/types'
import { Cards, Error, Loader } from '@components'
import './SearchVideos.scss'

export const SearchVideos = () => {
    const { query } = useParams();
    const { error, isLoading, handleCloseError, items } = useAxios(query);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="searchVideos">
            <div className="searchVideos__content">
                {items && (
                    items.map((item: VideoItemType, index) => {
                        return (
                            <Cards
                                key={`${index}${item.id.kind === "youtube#channel" ? item.id.channelId : item.id.videoId}`} // videos can have the same id :c
                                id={item.id.kind === "youtube#channel" ? "ChannelCard" : "VideoCardSearch"}
                                item={item}
                            />
                        )
                    })
                )}

                {isLoading && (
                    <Loader type="search" />
                )}

                {!!error && (
                    <Error
                        message={error.message}
                        handleCloseError={handleCloseError}
                    />
                )}

            </div>
        </div>

    )
};